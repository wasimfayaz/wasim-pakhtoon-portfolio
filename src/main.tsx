import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import ClientPortal from './ClientPortal.tsx';
import './index.css';

// Hash-based routing — works on any static host without server rewrites.
// #portal  → Client Portal
// (default) → Main portfolio
const isPortal = window.location.hash === '#portal';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isPortal ? <ClientPortal /> : <App />}
  </StrictMode>,
);


