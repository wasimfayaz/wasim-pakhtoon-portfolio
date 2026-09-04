import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export const NAV_LINKS = [
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="container-max section-x flex items-center justify-between h-[72px]" aria-label="Primary">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Wasim Pakhtoon — home">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-emerald text-white font-display font-bold text-lg leading-none">
            W
          </span>
          <span className="font-display font-semibold text-[17px] tracking-tight text-ink">
            Wasim Pakhtoon
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-emerald' : 'text-ink-soft hover:text-emerald'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-semibold px-5 py-2.5 hover:bg-emerald-deep transition-colors"
          >
            Get a quote <ArrowRight size={16} />
          </Link>
        </div>

        <button
          className="md:hidden grid place-items-center h-10 w-10 rounded-lg text-ink hover:bg-surface"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-b border-line">
          <div className="section-x py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink border-b border-line/70 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-emerald text-white text-sm font-semibold px-5 py-3"
            >
              Get a quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
