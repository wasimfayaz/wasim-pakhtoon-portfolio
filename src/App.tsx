import { useEffect, useState, type ReactNode, type FormEvent } from 'react';
import {
  Menu, X, ArrowRight, Check, Mail, MapPin, Phone, Star,
  Hotel, Plane, Search, Palette, Rocket, ShieldCheck, Zap, Globe,
  Smartphone, Gauge, ChevronDown, Quote,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Contact details                                                    */
/* ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = '919596390069';          // +91 95963 90069
const WHATSAPP_DISPLAY = '+91 95963 90069';
const EMAIL = 'contact@wasimpakhtoon.com';

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ------------------------------------------------------------------ */
/*  Reveal-on-scroll hook                                              */
/* ------------------------------------------------------------------ */
function useReveal() {
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

/* ------------------------------------------------------------------ */
/*  Small UI helpers                                                   */
/* ------------------------------------------------------------------ */
function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-ultra uppercase text-emerald">
      <span className="h-px w-6 bg-emerald/60" />
      {children}
    </span>
  );
}

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
];

/* ================================================================== */
/*  Navbar                                                             */
/* ================================================================== */
function Navbar() {
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
      <nav className="container-max section-x flex items-center justify-between h-[72px]">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-emerald text-white font-display font-bold text-lg leading-none">
            W
          </span>
          <span className="font-display font-semibold text-[17px] tracking-tight text-ink">
            Wasim Pakhtoon
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft hover:text-emerald transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-semibold px-5 py-2.5 hover:bg-emerald-deep transition-colors"
          >
            Get a quote <ArrowRight size={16} />
          </a>
        </div>

        <button
          className="md:hidden grid place-items-center h-10 w-10 rounded-lg text-ink hover:bg-surface"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-line">
          <div className="section-x py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink border-b border-line/70 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-emerald text-white text-sm font-semibold px-5 py-3"
            >
              Get a quote <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ================================================================== */
/*  Hero + short query form                                            */
/* ================================================================== */
function QuickForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('Hotel website');
  const [detail, setDetail] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg =
      `Hi Wasim, I'd like a website.\n` +
      `• Name: ${name || '—'}\n` +
      `• Project: ${type}\n` +
      (detail ? `• Details: ${detail}\n` : '') +
      `\nCan we talk?`;
    window.open(waLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <form
      onSubmit={submit}
      className={`rounded-2xl border border-line bg-background shadow-[0_20px_60px_-30px_rgba(4,120,87,0.35)] p-5 ${
        compact ? '' : 'sm:p-6'
      }`}
    >
      <p className="text-sm font-semibold text-ink mb-4">
        Tell me what you need — I reply on WhatsApp
      </p>
      <div className="grid gap-3">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-xl border border-line bg-surface/60 px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-emerald focus:bg-white transition"
        />
        <div className="relative">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full appearance-none rounded-xl border border-line bg-surface/60 px-4 py-3 text-sm text-ink focus:outline-none focus:border-emerald focus:bg-white transition"
          >
            <option>Hotel website</option>
            <option>Homestay / villa website</option>
            <option>Travel agency website</option>
            <option>Tour packages / booking site</option>
            <option>Redesign my old website</option>
            <option>Something else</option>
          </select>
          <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted" />
        </div>
        <input
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          placeholder="One line about your business (optional)"
          className="w-full rounded-xl border border-line bg-surface/60 px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-emerald focus:bg-white transition"
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald text-white text-sm font-semibold px-5 py-3.5 hover:bg-emerald-deep transition-colors"
      >
        Send on WhatsApp <ArrowRight size={16} />
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        Free advice • No pressure • Usually reply within a few hours
      </p>
    </form>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-[112px] pb-16 sm:pt-[130px] sm:pb-24 overflow-hidden">
      {/* soft background */}
      <div className="absolute inset-0 -z-10 dot-grid opacity-70" />
      <div className="absolute -z-10 top-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-emerald-soft blur-3xl opacity-70" />

      <div className="container-max section-x grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="reveal">
            <Eyebrow>Web Developer &amp; Designer · Kashmir</Eyebrow>
          </div>
          <h1 className="reveal mt-5 font-display font-bold text-ink text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight text-balance">
            Premium websites for Kashmir&apos;s{' '}
            <span className="text-emerald">hotels &amp; travel agencies</span>
          </h1>
          <p className="reveal mt-5 text-lg text-ink-soft max-w-xl text-balance">
            I design clean, fast, mobile-friendly websites that bring you more
            bookings and enquiries — built for hotels, homestays, and tour
            companies across Kashmir.
          </p>

          <div className="reveal mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft">
            {['Booking-ready', 'Google-friendly (SEO)', 'Loads fast on mobile'].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <Check size={16} className="text-emerald" /> {t}
              </span>
            ))}
          </div>

          <div className="reveal mt-8 flex flex-wrap items-center gap-3">
            <a
              href={waLink("Hi Wasim, I'd like a website for my business in Kashmir.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-semibold px-6 py-3.5 hover:bg-emerald-deep transition-colors"
            >
              Chat on WhatsApp <ArrowRight size={16} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-line text-ink text-sm font-semibold px-6 py-3.5 hover:border-emerald hover:text-emerald transition-colors"
            >
              See my work
            </a>
          </div>
        </div>

        <div className="reveal">
          <QuickForm />
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Stats strip                                                        */
/* ================================================================== */
const STATS = [
  { n: '30+', l: 'Websites delivered' },
  { n: '100%', l: 'Mobile-friendly' },
  { n: '2–3 wks', l: 'Typical delivery' },
  { n: 'Kashmir', l: 'Based & focused' },
];
function Stats() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-max section-x grid grid-cols-2 md:grid-cols-4 divide-x divide-line">
        {STATS.map((s) => (
          <div key={s.l} className="reveal py-8 px-4 text-center">
            <div className="font-display font-bold text-2xl sm:text-3xl text-ink">{s.n}</div>
            <div className="mt-1 text-xs sm:text-sm text-muted">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Services                                                           */
/* ================================================================== */
const SERVICES = [
  {
    icon: Hotel,
    title: 'Hotel & homestay websites',
    desc: 'Beautiful rooms, rates, and photo galleries that turn visitors into direct bookings — no middleman commissions.',
  },
  {
    icon: Plane,
    title: 'Travel agency websites',
    desc: 'Show your tour packages, itineraries, and Kashmir experiences with easy enquiry buttons on every page.',
  },
  {
    icon: Search,
    title: 'Local SEO for Kashmir',
    desc: 'Get found on Google when people search "hotels in Srinagar" or "Kashmir tour packages".',
  },
  {
    icon: Palette,
    title: 'Clean, premium design',
    desc: 'A modern, minimal look that makes your business feel trustworthy and high-end.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-first & fast',
    desc: 'Most guests browse on phones. Your site will look perfect and load quickly on every device.',
  },
  {
    icon: Rocket,
    title: 'Redesign & maintenance',
    desc: 'Have an old, slow site? I rebuild it and keep it updated so you never worry about it.',
  },
];
function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-max section-x">
        <div className="reveal max-w-2xl">
          <Eyebrow>What I do</Eyebrow>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
            Everything your Kashmir business needs online
          </h2>
          <p className="mt-4 text-ink-soft">
            One developer, start to finish. Simple to understand, and built to
            bring you real enquiries and bookings.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="reveal lift rounded-2xl border border-line bg-background p-6 hover:border-emerald/40 hover:shadow-[0_24px_60px_-40px_rgba(4,120,87,0.5)]"
            >
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-emerald-soft text-emerald">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Work / portfolio                                                   */
/* ================================================================== */
type Site = {
  title: string;
  tag: string;
  desc: string;
  url: string;
};

const LIVE_PROJECTS: Site[] = [
  {
    title: 'Shelter Trips',
    tag: 'Travel Agency',
    desc: 'A live booking website for Kashmir & Ladakh tour packages, luxury stays, and private cabs — built for real enquiries.',
    url: 'https://www.sheltertrips.com',
  },
  {
    title: 'The Power Planet',
    tag: 'Solar Energy',
    desc: 'A lead-generation website for a solar energy company in Kashmir, built to convert visitors into subsidy enquiries.',
    url: 'https://thepowerplanet.com',
  },
  {
    title: 'Cinmach Productions',
    tag: 'Creative Agency',
    desc: 'A premium portfolio site for a creative and marketing agency, showcasing cinematic campaigns and brand films.',
    url: 'https://cinmachproductions.com',
  },
];

const TEMPLATES: Site[] = [
  {
    title: 'SERAI — Travel Agency Template',
    tag: 'Ready for Travel Agencies',
    desc: 'A bespoke-feeling template for tour operators — packages, houseboats & hotels, and a simple trip-planning flow.',
    url: 'https://travel-agency-web1.vercel.app/',
  },
  {
    title: 'Houseboat Template',
    tag: 'Ready for Houseboats & Stays',
    desc: 'A luxury houseboat / stay template with rooms, dining, gallery, and a direct booking flow — ready to be branded.',
    url: 'https://houseboat-srinagar.vercel.app/',
  },
  {
    title: 'KAYA — Hotel Template',
    tag: 'Ready for Hotels & Resorts',
    desc: 'A boutique hotel template with rooms, reviews, gallery, and an enquiry flow — ready to be set up for your property.',
    url: 'https://hotel-web-1-mocha.vercel.app/',
  },
];

function SiteCard({ s, cta }: { s: Site; cta: string }) {
  return (
    <a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal lift group block rounded-2xl overflow-hidden border border-line bg-background hover:border-emerald/40 hover:shadow-[0_28px_70px_-45px_rgba(4,120,87,0.5)]"
    >
      {/* Browser-chrome preview frame */}
      <div className="relative aspect-[16/10] bg-surface overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-9 bg-surface-2 border-b border-line flex items-center gap-1.5 px-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-3 truncate text-[11px] text-muted font-medium">
            {s.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </span>
        </div>
        <div className="absolute inset-0 top-9 grid place-items-center bg-gradient-to-br from-emerald-soft to-surface p-6 text-center transition-transform duration-500 group-hover:scale-[1.03]">
          <span className="font-display font-bold text-2xl text-ink/80">{s.title}</span>
        </div>
        <span className="absolute top-[3.1rem] left-3 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold text-emerald border border-line">
          {s.tag}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display font-semibold text-lg text-ink">{s.title}</h3>
          <ArrowRight size={16} className="shrink-0 text-emerald opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </div>
        <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.desc}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald">
          {cta} <ArrowRight size={14} />
        </span>
      </div>
    </a>
  );
}

function Work() {
  return (
    <section id="work" className="py-20 sm:py-28 bg-surface border-y border-line">
      <div className="container-max section-x">
        {/* Live projects */}
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Live projects</Eyebrow>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
              Real websites, running for real businesses
            </h2>
          </div>
          <a
            href={waLink('Hi Wasim, can you share more of your work?')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:gap-3 transition-all"
          >
            Ask for more samples <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LIVE_PROJECTS.map((s) => (
            <SiteCard key={s.title} s={s} cta="Visit live site" />
          ))}
        </div>

        {/* Ready-made templates */}
        <div className="reveal mt-20 max-w-2xl">
          <Eyebrow>Ready-made templates</Eyebrow>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
            Premium templates, ready to launch your business
          </h2>
          <p className="mt-4 text-ink-soft">
            Already built and waiting to be set up. Each template is sold and
            branded for one business only — never resold or reused for
            anyone else — so your website stays unique to you.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEMPLATES.map((s) => (
            <SiteCard key={s.title} s={s} cta="Preview template" />
          ))}
        </div>

        <div className="reveal mt-8">
          <a
            href={waLink("Hi Wasim, I'd like to use one of your ready-made templates for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-semibold px-6 py-3.5 hover:bg-emerald-deep transition-colors"
          >
            Claim a template for my business <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Why me                                                             */
/* ================================================================== */
const WHY = [
  { icon: Zap, title: 'Fast & modern', desc: 'Built with the latest tools so your site is quick and smooth.' },
  { icon: Globe, title: 'Found on Google', desc: 'SEO done right for Kashmir searches, so new guests find you.' },
  { icon: Gauge, title: 'Easy to manage', desc: 'Simple to update — or I handle changes for you anytime.' },
  { icon: ShieldCheck, title: 'Reliable & honest', desc: 'Clear pricing, clear timelines, and no confusing tech talk.' },
];
function Why() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-max section-x grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
        <div className="reveal">
          <Eyebrow>Why work with me</Eyebrow>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
            Premium results, without the headache
          </h2>
          <p className="mt-4 text-ink-soft">
            You run a hotel or travel business — you shouldn&apos;t have to become
            a tech expert. I keep it simple: you tell me your goal, I handle the
            rest, and you get a website you&apos;re proud to share.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-semibold px-6 py-3.5 hover:bg-emerald-deep transition-colors"
          >
            Start your project <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {WHY.map((w) => (
            <div key={w.title} className="reveal rounded-2xl border border-line bg-background p-6">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-emerald-soft text-emerald">
                <w.icon size={20} />
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">{w.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Process                                                            */
/* ================================================================== */
const STEPS = [
  { n: '01', title: 'Talk', desc: 'We chat on WhatsApp about your business, goals, and ideas.' },
  { n: '02', title: 'Design', desc: 'I design a clean, premium layout and share it for your feedback.' },
  { n: '03', title: 'Build', desc: 'I build the full site — fast, mobile-friendly, and SEO-ready.' },
  { n: '04', title: 'Launch', desc: 'We go live, connect your domain, and I show you how it works.' },
];
function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-surface border-y border-line">
      <div className="container-max section-x">
        <div className="reveal max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
            Simple, from first message to launch
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s) => (
            <div key={s.n} className="reveal relative rounded-2xl border border-line bg-background p-6">
              <span className="font-display font-bold text-4xl text-emerald/25">{s.n}</span>
              <h3 className="mt-3 font-display font-semibold text-lg text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  About                                                              */
/* ================================================================== */
function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-max section-x grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center">
        <div className="reveal">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-3xl bg-emerald-soft -z-10" />
            <div className="rounded-3xl border border-line bg-background p-8 text-center">
              <div className="mx-auto grid place-items-center h-24 w-24 rounded-2xl bg-emerald text-white font-display font-bold text-4xl">
                W
              </div>
              <h3 className="mt-5 font-display font-bold text-xl text-ink">Wasim Pakhtoon</h3>
              <p className="text-sm text-emerald font-medium">Web Developer &amp; Designer</p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
                <MapPin size={14} /> Kashmir, India
              </p>
            </div>
          </div>
        </div>

        <div className="reveal">
          <Eyebrow>About me</Eyebrow>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
            A Kashmir-based developer who cares about your growth
          </h2>
          <p className="mt-4 text-ink-soft">
            I&apos;m Wasim, a web developer and designer based in Kashmir. I build
            premium, easy-to-use websites for hotels, homestays, and travel
            agencies — the businesses that make our valley special.
          </p>
          <p className="mt-3 text-ink-soft">
            My goal is simple: give you a website that looks world-class, is easy
            for your guests to use, and actually brings you more bookings and
            enquiries. No jargon, no stress — just clean work and honest
            communication.
          </p>
          <div className="mt-7 grid sm:grid-cols-2 gap-3">
            {[
              'Direct, one-to-one service',
              'Clear pricing & timelines',
              'Local — I understand Kashmir tourism',
              'Support after launch',
            ].map((t) => (
              <span key={t} className="inline-flex items-center gap-2 text-sm text-ink-soft">
                <Check size={16} className="text-emerald shrink-0" /> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Testimonials                                                       */
/* ================================================================== */
const TESTIMONIALS = [
  {
    quote:
      'Wasim built our villa website beautifully. It loads fast and we now get booking enquiries directly on WhatsApp. Highly recommended.',
    name: 'Owner',
    role: 'Heaven View Villa',
  },
  {
    quote:
      'Very professional and easy to talk to. He understood exactly what our hotel needed and delivered a premium, clean website.',
    name: 'Manager',
    role: 'Lee Heritage',
  },
  {
    quote:
      'Great designer. The new site looks modern and our customers find it much easier to reach us now.',
    name: 'Founder',
    role: 'Local business',
  },
];
function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-surface border-y border-line">
      <div className="container-max section-x">
        <div className="reveal max-w-2xl">
          <Eyebrow>Kind words</Eyebrow>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
            Trusted by Kashmir businesses
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="reveal rounded-2xl border border-line bg-background p-6 flex flex-col">
              <Quote size={26} className="text-emerald/40" />
              <div className="mt-3 flex gap-0.5 text-emerald">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={15} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-ink-soft leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-line">
                <div className="font-semibold text-sm text-ink">{t.name}</div>
                <div className="text-xs text-muted">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  FAQ                                                                */
/* ================================================================== */
const FAQS = [
  {
    q: 'How much does a website cost?',
    a: 'It depends on your needs, but I keep pricing clear and fair for Kashmir businesses. Message me on WhatsApp and I\'ll give you an honest quote — no obligation.',
  },
  {
    q: 'How long does it take?',
    a: 'Most hotel and travel websites are ready in about 2–3 weeks, depending on your content and feedback speed.',
  },
  {
    q: 'Can guests book directly on the website?',
    a: 'Yes. I can add booking enquiry forms, WhatsApp buttons, and connect booking tools so guests reach you directly.',
  },
  {
    q: 'Will my website show up on Google?',
    a: 'Yes. Every site I build is SEO-optimised for Kashmir searches so more people can find your hotel or travel business.',
  },
  {
    q: 'Do you help after the website is live?',
    a: 'Absolutely. I offer support and maintenance so your site stays fast, updated, and secure.',
  },
];
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
      <div
        className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm text-ink-soft leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container-max section-x grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
        <div className="reveal">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
            Frequently asked
          </h2>
          <p className="mt-4 text-ink-soft">
            Still unsure? Just message me — I&apos;m happy to help, even if you&apos;re
            only exploring ideas.
          </p>
        </div>
        <div className="grid gap-3 content-start">
          {FAQS.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Contact / final CTA                                                */
/* ================================================================== */
function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-surface border-t border-line">
      <div className="container-max section-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="reveal">
          <Eyebrow>Let&apos;s talk</Eyebrow>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
            Ready for a website that brings you bookings?
          </h2>
          <p className="mt-4 text-ink-soft max-w-lg">
            Send me a quick message with what you need. I&apos;ll reply on WhatsApp
            with honest advice and a clear quote — no pressure at all.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={waLink("Hi Wasim, I'd like to talk about a website for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-line bg-background p-4 hover:border-emerald/50 transition-colors"
            >
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-[color:var(--color-whatsapp)]/12 text-[color:var(--color-whatsapp)]">
                <Phone size={20} />
              </span>
              <span>
                <span className="block text-xs text-muted">WhatsApp</span>
                <span className="block font-semibold text-ink">{WHATSAPP_DISPLAY}</span>
              </span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 rounded-2xl border border-line bg-background p-4 hover:border-emerald/50 transition-colors"
            >
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-emerald-soft text-emerald">
                <Mail size={20} />
              </span>
              <span>
                <span className="block text-xs text-muted">Email</span>
                <span className="block font-semibold text-ink break-all">{EMAIL}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-background p-4">
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-emerald-soft text-emerald">
                <MapPin size={20} />
              </span>
              <span>
                <span className="block text-xs text-muted">Based in</span>
                <span className="block font-semibold text-ink">Kashmir, India</span>
              </span>
            </div>
          </div>
        </div>

        <div className="reveal">
          <QuickForm compact />
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Footer                                                             */
/* ================================================================== */
function Footer() {
  return (
    <footer className="bg-background border-t border-line">
      <div className="container-max section-x py-12 grid md:grid-cols-[1.4fr_1fr_1fr] gap-8">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-emerald text-white font-display font-bold text-lg">
              W
            </span>
            <span className="font-display font-semibold text-[17px] text-ink">Wasim Pakhtoon</span>
          </a>
          <p className="mt-4 text-sm text-ink-soft max-w-xs">
            Premium, minimal websites for hotels and travel agencies across
            Kashmir. Clean design, real results.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-ultra uppercase text-muted">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-ink-soft hover:text-emerald transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-ultra uppercase text-muted">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={waLink('Hi Wasim!')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft hover:text-emerald transition-colors"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="text-ink-soft hover:text-emerald transition-colors break-all">
                {EMAIL}
              </a>
            </li>
            <li className="text-ink-soft">Kashmir, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-max section-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <p>© {new Date().getFullYear()} Wasim Pakhtoon. All rights reserved.</p>
          <p>Web Developer &amp; Designer · Kashmir</p>
        </div>
      </div>
    </footer>
  );
}

/* ================================================================== */
/*  Sticky WhatsApp button                                             */
/* ================================================================== */
function WhatsAppFab() {
  return (
    <a
      href={waLink("Hi Wasim, I'm interested in a website for my business in Kashmir.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid place-items-center h-14 w-14 rounded-full bg-[color:var(--color-whatsapp)] text-white shadow-lg animate-wa hover:scale-105 transition-transform"
    >
      {/* WhatsApp glyph */}
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3.2 28.8l6.57-1.72a12.74 12.74 0 006.23 1.62h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05A12.7 12.7 0 0016.004 3.2zm0 23.04h-.01a10.6 10.6 0 01-5.4-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.4a10.6 10.6 0 01-1.62-5.65c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 013.11 7.52c0 5.87-4.77 10.63-10.63 10.63zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.39 5.38 4.76.75.32 1.34.51 1.8.66.76.24 1.44.21 1.98.13.6-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
      </svg>
    </a>
  );
}

/* ================================================================== */
/*  App                                                                */
/* ================================================================== */
export default function App() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-ink antialiased">
      {/* SEO: visible-to-crawlers heading */}
      <h1 className="sr-only">
        Wasim Pakhtoon — Web Developer &amp; Designer in Kashmir. Premium websites
        for hotels and travel agencies in Srinagar and across Kashmir.
      </h1>

      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Work />
        <Why />
        <Process />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
