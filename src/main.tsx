import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ClientPortal from './ClientPortal.tsx';
import './index.css';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'; // Add lenis css if needed, or rely on JS smooth scroll

// Reactive hash router — listens for hashchange so no refresh needed.
function HashRouter() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    return () => {
      lenis.destroy();
    };
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


