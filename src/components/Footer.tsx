import { Link } from 'react-router-dom';
import { SITE, waLink } from '../data/site';
import { SERVICES } from '../data/services';
import { LOCATIONS } from '../data/locations';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-line">
      <div className="container-max section-x py-12 grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-emerald text-white font-display font-bold text-lg">
              W
            </span>
            <span className="font-display font-semibold text-[17px] text-ink">Wasim Pakhtoon</span>
          </Link>
          <p className="mt-4 text-sm text-ink-soft max-w-xs">
            Web developer and designer in Srinagar, Kashmir. I build fast,
            SEO-friendly websites for businesses across the Kashmir Valley — and
            remote clients worldwide.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-ultra uppercase text-muted">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-ink-soft hover:text-emerald transition-colors">
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-ultra uppercase text-muted">Areas</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link to={`/${l.slug}`} className="text-ink-soft hover:text-emerald transition-colors">
                  {l.footerLabel}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/work" className="text-ink-soft hover:text-emerald transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-ink-soft hover:text-emerald transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-ultra uppercase text-muted">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={waLink('Hi Wasim!')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft hover:text-emerald transition-colors"
              >
                WhatsApp: {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="text-ink-soft hover:text-emerald transition-colors break-all">
                {SITE.email}
              </a>
            </li>
            <li className="text-ink-soft">Srinagar, Jammu &amp; Kashmir</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-max section-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <p>© {year} Wasim Pakhtoon. All rights reserved.</p>
          <p>Web Developer &amp; Designer · Srinagar, Kashmir</p>
        </div>
      </div>
    </footer>
  );
}
