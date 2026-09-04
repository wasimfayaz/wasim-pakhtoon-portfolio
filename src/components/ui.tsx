import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, ArrowRight, Check } from 'lucide-react';
import { waLink } from '../data/site';

/* ------------------------------------------------------------------ */
/*  Reveal-on-scroll — progressive enhancement, content is always      */
/*  present in the DOM (visible to crawlers even without JS).          */
/* ------------------------------------------------------------------ */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-ultra uppercase text-emerald">
      <span className="h-px w-6 bg-emerald/60" />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Breadcrumbs — visible nav + matches BreadcrumbList schema          */
/* ------------------------------------------------------------------ */
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-max section-x pt-[96px] sm:pt-[104px]">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="text-ink-soft font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link to={item.path} className="hover:text-emerald transition-colors">
                    {item.name}
                  </Link>
                  <ChevronRight size={13} className="text-line" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ accordion — content is in the DOM regardless of open state     */
/* ------------------------------------------------------------------ */
export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="grid gap-3 content-start">
      {faqs.map((f) => (
        <FaqItem key={f.q} {...f} />
      ))}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="reveal border border-line rounded-2xl bg-background overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
        aria-expanded={open}
      >
        <span className="font-medium text-ink">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-emerald transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm text-ink-soft leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Reusable conversion band                                           */
/* ------------------------------------------------------------------ */
export function CtaBand({
  title = 'Ready to start your website?',
  text = "Send me a quick message on WhatsApp with what you need. I'll reply with honest advice and a clear quote — no pressure.",
  waMessage = "Hi Wasim, I'd like to talk about a website for my business.",
}: {
  title?: string;
  text?: string;
  waMessage?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-max section-x">
        <div className="reveal rounded-3xl border border-line bg-gradient-to-br from-emerald-soft to-surface p-8 sm:p-12 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink tracking-tight text-balance">
            {title}
          </h2>
          <p className="mt-4 text-ink-soft max-w-xl mx-auto">{text}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={waLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-semibold px-6 py-3.5 hover:bg-emerald-deep transition-colors"
            >
              Chat on WhatsApp <ArrowRight size={16} />
            </a>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-background text-ink text-sm font-semibold px-6 py-3.5 hover:border-emerald hover:text-emerald transition-colors"
            >
              See my work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Small building blocks reused across pages                          */
/* ------------------------------------------------------------------ */
export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-start gap-2 text-sm text-ink-soft">
      <Check size={16} className="text-emerald shrink-0 mt-0.5" /> {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  as: Heading = 'h2',
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  as?: 'h1' | 'h2';
}) {
  return (
    <div className="reveal max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
        {title}
      </Heading>
      {intro && <p className="mt-4 text-ink-soft">{intro}</p>}
    </div>
  );
}
