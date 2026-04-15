import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ClientPortal from './ClientPortal.tsx';
import './index.css';

// Reactive hash router — listens for hashchange so no refresh needed.
function HashRouter() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const goHome = () => { window.location.hash = ''; };

  return hash === '#portal'
    ? <ClientPortal onClose={goHome} />
    : <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter />
  </StrictMode>,
);


