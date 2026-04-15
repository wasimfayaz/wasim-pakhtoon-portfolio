import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import ClientPortal from './ClientPortal.tsx';
import './index.css';

const isPortal = window.location.pathname.startsWith('/portal');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isPortal ? <ClientPortal /> : <App />}
  </StrictMode>,
);


