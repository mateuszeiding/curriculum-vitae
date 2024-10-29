import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/_!import.scss';
import Resume from './Resume.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Resume />
    </StrictMode>
);
