import { delay, http, HttpResponse } from 'msw';
import { getCertificates } from './data/getCertificates.mock';

const delayResponse = () =>
    delay(Math.floor(Math.random() * (1500 - 500 + 1)) + 500);

export const handlers = [
    http.get('/api/skills', () => {
        return HttpResponse.json();
    }),
    http.get('/api/resume/list/certificate', async () => {
        await delayResponse();
        return HttpResponse.json(getCertificates, {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 200,
        });
    }),
];
