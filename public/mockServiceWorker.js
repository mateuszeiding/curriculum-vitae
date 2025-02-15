/* tslint:disable */

/**
 * Mock Service Worker.
 * @see https://github.com/mswjs/msw
 * - Please do NOT modify this file.
 * - Please do NOT serve this file on production.
 */

/**
 * @typedef {Object} IndexFile
 * @property {string} file - index.js
 * @property {string} src - index.html
 * @property {string[]} css - css files arr
 * @property {string[]} assets - assets files arr
 * @property {string[]} dynamicImports - server
 */

const PACKAGE_VERSION = "2.6.0";
const INTEGRITY_CHECKSUM = "07a8241b182f8a246a7cd39894799a9e";
const IS_MOCKED_RESPONSE = Symbol("isMockedResponse");
const CACHE_NAME = "me-api-cache-v1";
const CACHE_LIFETIME = 60;
const activeClientIds = new Set();

self.addEventListener("install", (event) => {
	event.waitUntil(
		fetch("/manifest.json")
			.then((response) => response.json())
			.then((manifest) => {
				/** @type {IndexFile} */
				const indexFile = manifest["index.html"];
				const serverFile = manifest[indexFile.dynamicImports[0]];

				const files = [
					"/",
					...indexFile.assets,
					...indexFile.css,
					indexFile.src,
					indexFile.file,
					serverFile.file,
				];

				caches.open(CACHE_NAME).then((cache) => {
					return cache.addAll(files);
				});
			})
			.catch((error) => {
				console.error("Error fetching manifest:", error);
			}),
	);
	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener("message", async (event) => {
	const clientId = event.source.id;
	if (!clientId || !self.clients) {
		return;
	}

	const client = await self.clients.get(clientId);

	if (!client) {
		return;
	}

	const allClients = await self.clients.matchAll({
		type: "window",
	});

	switch (event.data) {
		case "CLEAR_CACHE": {
			caches.delete(CACHE_NAME).then((success) => {
				if (success) {
					console.log(`Cache ${CACHE_NAME} deleted successfully.`);
				} else {
					console.log(`Cache ${CACHE_NAME} not found.`);
				}
			});
			break;
		}
		case "KEEPALIVE_REQUEST": {
			sendToClient(client, {
				type: "KEEPALIVE_RESPONSE",
			});

			break;
		}

		case "INTEGRITY_CHECK_REQUEST": {
			sendToClient(client, {
				type: "INTEGRITY_CHECK_RESPONSE",
				payload: {
					packageVersion: PACKAGE_VERSION,
					checksum: INTEGRITY_CHECKSUM,
				},
			});
			break;
		}

		case "MOCK_ACTIVATE": {
			activeClientIds.add(clientId);

			sendToClient(client, {
				type: "MOCKING_ENABLED",
				payload: {
					client: {
						id: client.id,
						frameType: client.frameType,
					},
				},
			});
			break;
		}

		case "MOCK_DEACTIVATE": {
			activeClientIds.delete(clientId);
			break;
		}

		case "CLIENT_CLOSED": {
			activeClientIds.delete(clientId);

			const remainingClients = allClients.filter((client) => {
				return client.id !== clientId;
			});

			// Unregister itself when there are no more clients
			if (remainingClients.length === 0) {
				self.registration.unregister();
			}

			break;
		}
	}
});

self.addEventListener("fetch", (event) => {
	const { request } = event;

	if (!navigator.onLine) {
		return event.respondWith(
			caches
				.open(CACHE_NAME)
				.then((cache) => cache.match(request))
				.then((cachedResponse) => {
					return cachedResponse || fetch(request);
				}),
		);
	}

	// Opening the DevTools triggers the "only-if-cached" request
	// that cannot be handled by the worker. Bypass such requests.
	if (request.cache === "only-if-cached" && request.mode !== "same-origin") {
		return;
	}

	// Bypass all requests when there are no active clients.
	// Prevents the self-unregistered worked from handling requests
	// after it's been deleted (still remains active until the next reload).
	if (activeClientIds.size === 0) {
		return;
	}

	event.respondWith(handleAPICache(event));
});

async function handleAPICache(event) {
	const url = event.request.url;

	// Generate unique request ID.
	const requestId = crypto.randomUUID();

	if (url.includes("/api") || !navigator.onLine) {
		return caches
			.open(CACHE_NAME)
			.then((cache) => cache.match(event.request))
			.then((cachedResponse) => {
				if (cachedResponse) {
					if (!navigator.onLine) {
						return cachedResponse;
					}

					const cachedTime = new Date(
						cachedResponse.headers.get("cache-date"),
					).getTime();

					if ((Date.now() - cachedTime) / 1000 < CACHE_LIFETIME) {
						return cachedResponse;
					}
				}

				return handleRequest(event, requestId)
					.then((networkResponse) => {
						const contentType =
							networkResponse.headers.get("Content-Type") || "";

						if (
							networkResponse &&
							networkResponse.status === 200 &&
							contentType.includes("application/json")
						) {
							// Clone the response before using it
							const responseClone = networkResponse.clone();
							responseClone.headers.set("cache-date", new Date().toUTCString());

							// Cache the cloned response
							caches.open(CACHE_NAME).then((cache) => {
								cache.put(event.request, responseClone);
							});

							// Return the original network response
							return networkResponse;
						}

						return networkResponse;
					})
					.catch((error) => {
						console.log("Fetch failed, returning offline page", error);
						return caches.match("/offline.html");
					});
			});
	}

	return handleRequest(event, requestId);
}

async function handleRequest(event, requestId) {
	const client = await resolveMainClient(event);
	const response = await getResponse(event, client, requestId);

	// Send back the response clone for the "response:*" life-cycle events.
	// Ensure MSW is active and ready to handle the message, otherwise
	// this message will pend indefinitely.
	if (client && activeClientIds.has(client.id)) {
		(async () => {
			const responseClone = response.clone();

			sendToClient(
				client,
				{
					type: "RESPONSE",
					payload: {
						requestId,
						isMockedResponse: IS_MOCKED_RESPONSE in response,
						type: responseClone.type,
						status: responseClone.status,
						statusText: responseClone.statusText,
						body: responseClone.body,
						headers: Object.fromEntries(responseClone.headers.entries()),
					},
				},
				[responseClone.body],
			);
		})();
	}

	return response;
}

// Resolve the main client for the given event.
// Client that issues a request doesn't necessarily equal the client
// that registered the worker. It's with the latter the worker should
// communicate with during the response resolving phase.
async function resolveMainClient(event) {
	const client = await self.clients.get(event.clientId);

	if (activeClientIds.has(event.clientId)) {
		return client;
	}

	if (client?.frameType === "top-level") {
		return client;
	}

	const allClients = await self.clients.matchAll({
		type: "window",
	});

	return allClients
		.filter((client) => {
			// Get only those clients that are currently visible.
			return client.visibilityState === "visible";
		})
		.find((client) => {
			// Find the client ID that's recorded in the
			// set of clients that have registered the worker.
			return activeClientIds.has(client.id);
		});
}

async function getResponse(event, client, requestId) {
	const { request } = event;

	// Clone the request because it might've been already used
	// (i.e. its body has been read and sent to the client).
	const requestClone = request.clone();

	function passthrough() {
		const headers = Object.fromEntries(requestClone.headers.entries());

		// Remove internal MSW request header so the passthrough request
		// complies with any potential CORS preflight checks on the server.
		// Some servers forbid unknown request headers.
		// biome-ignore lint: MSW base config
		delete headers["x-msw-intention"];

		return fetch(requestClone, { headers });
	}

	// Bypass mocking when the client is not active.
	if (!client) {
		return passthrough();
	}

	// Bypass initial page load requests (i.e. static assets).
	// The absence of the immediate/parent client in the map of the active clients
	// means that MSW hasn't dispatched the "MOCK_ACTIVATE" event yet
	// and is not ready to handle requests.
	if (!activeClientIds.has(client.id)) {
		return passthrough();
	}

	// Notify the client that a request has been intercepted.
	const requestBuffer = await request.arrayBuffer();
	const clientMessage = await sendToClient(
		client,
		{
			type: "REQUEST",
			payload: {
				id: requestId,
				url: request.url,
				mode: request.mode,
				method: request.method,
				headers: Object.fromEntries(request.headers.entries()),
				cache: request.cache,
				credentials: request.credentials,
				destination: request.destination,
				integrity: request.integrity,
				redirect: request.redirect,
				referrer: request.referrer,
				referrerPolicy: request.referrerPolicy,
				body: requestBuffer,
				keepalive: request.keepalive,
			},
		},
		[requestBuffer],
	);

	switch (clientMessage.type) {
		case "MOCK_RESPONSE": {
			return respondWithMock(clientMessage.data);
		}

		case "PASSTHROUGH": {
			return passthrough();
		}
	}

	return passthrough();
}

function sendToClient(client, message, transferrables = []) {
	return new Promise((resolve, reject) => {
		const channel = new MessageChannel();

		channel.port1.onmessage = (event) => {
			if (event.data?.error) {
				return reject(event.data.error);
			}
			resolve(event.data);
		};

		client.postMessage(
			message,
			[channel.port2].concat(transferrables.filter(Boolean)),
		);
	});
}

async function respondWithMock(response) {
	// Setting response status code to 0 is a no-op.
	// However, when responding with a "Response.error()", the produced Response
	// instance will have status code set to 0. Since it's not possible to create
	// a Response instance with status code 0, handle that use-case separately.
	if (response.status === 0) {
		return Response.error();
	}

	const mockedResponse = new Response(response.body, response);

	Reflect.defineProperty(mockedResponse, IS_MOCKED_RESPONSE, {
		value: true,
		enumerable: true,
	});

	return mockedResponse;
}
