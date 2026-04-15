import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import ClientPortal from './ClientPortal.tsx';
import ClientPortalShayan from './ClientPortalShayan.tsx';
import './index.css';

const path = window.location.pathname;
const isPortalShayan = path.startsWith('/portal/shayan');
const isPortal = path.startsWith('/portal') && !isPortalShayan;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isPortalShayan ? <ClientPortalShayan /> : (isPortal ? <ClientPortal /> : <App />)}
  </StrictMode>,
);

