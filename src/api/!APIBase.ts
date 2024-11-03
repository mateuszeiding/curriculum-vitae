export default class APIBase {
    static async get<T>(url: string): Promise<T> {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json());
    }
}
