import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/_!import.scss";
import Resume from "./Resume.tsx";

async function enableMocking() {
	const { worker } = await import("./server/server.ts");

	return worker.start({
		onUnhandledRequest: "bypass",
	});
}

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

enableMocking().then(() =>
	createRoot(root).render(
		<StrictMode>
			<Resume />
			<Analytics />
		</StrictMode>,
	),
);
