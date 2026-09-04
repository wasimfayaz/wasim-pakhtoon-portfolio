import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import { Seo } from '../seo/Seo';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found (404) — Wasim Pakhtoon"
        description="The page you were looking for could not be found. Head back to the homepage or explore web development and design services in Kashmir."
        path="/404"
        noindex
      />
      <section className="min-h-[70vh] grid place-items-center py-24">
        <div className="container-max section-x text-center">
          <span className="font-display font-bold text-7xl sm:text-8xl text-emerald/20">404</span>
          <h1 className="mt-4 font-display font-bold text-2xl sm:text-3xl text-ink tracking-tight">
            This page took a wrong turn
          </h1>
          <p className="mt-3 text-ink-soft max-w-md mx-auto">
            The page you were looking for doesn&apos;t exist or may have moved. Let&apos;s get you
            back on track.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-semibold px-6 py-3.5 hover:bg-emerald-deep transition-colors">
              <Home size={16} /> Back to home
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-line text-ink text-sm font-semibold px-6 py-3.5 hover:border-emerald hover:text-emerald transition-colors">
              Explore services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
