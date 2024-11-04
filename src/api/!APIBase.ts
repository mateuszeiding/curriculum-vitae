export default class APIBase {
    static async get<T>(url: string): Promise<T> {
        return fetch(url, {
            cache: 'no-cache',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(async (response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const data = await response.json();
            return JSON.parse(JSON.stringify(data), APIBase.dateParser) as T;
        });
    }

    static dateParser(_: string, value: string) {
        const isDate = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.exec(
            value
        );
        if (isDate) {
            return new Date(value);
        }
        return value;
    }
}
