import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/_!import.scss';
import Resume from './Resume.tsx';

async function enableMocking() {
    const { worker } = await import('./server/server.ts');

    return worker.start({
        onUnhandledRequest: 'bypass',
    });
}

enableMocking().then(() =>
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <Resume />
        </StrictMode>
    )
);
