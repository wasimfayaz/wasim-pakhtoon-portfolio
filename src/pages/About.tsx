import { Link } from 'react-router-dom';
import { MapPin, Check, ArrowRight } from 'lucide-react';
import { Seo } from '../seo/Seo';
import { graph, personSchema, breadcrumbSchema } from '../seo/schema';
import { Breadcrumbs, useReveal, Eyebrow, CheckItem } from '../components/ui';
import { CtaBand } from '../components/ui';

const STACK = ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Vercel'];

export default function About() {
  useReveal();
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];
  const jsonLd = graph(personSchema(), breadcrumbSchema(crumbs));

  return (
    <>
      <Seo
        title="About Wasim Pakhtoon | Web Developer in Srinagar, Kashmir"
        description="Wasim Pakhtoon is a web developer and designer based in Srinagar, Kashmir. Learn about the experience, tools and honest, direct way of working behind every project."
        path="/about"
        type="profile"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={crumbs} />

      <section className="py-12 sm:py-16">
        <div className="container-max section-x grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          <div className="reveal">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-3xl bg-emerald-soft -z-10" />
              <div className="rounded-3xl border border-line bg-background p-8 text-center">
                <div className="mx-auto grid place-items-center h-24 w-24 rounded-2xl bg-emerald text-white font-display font-bold text-4xl">
                  W
                </div>
                <h2 className="mt-5 font-display font-bold text-xl text-ink">Wasim Pakhtoon</h2>
                <p className="text-sm text-emerald font-medium">Web Developer &amp; Designer</p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
                  <MapPin size={14} /> Srinagar, Kashmir
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {STACK.map((t) => (
                    <span key={t} className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink-soft">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <Eyebrow>About me</Eyebrow>
            <h1 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
              A Kashmir-based web developer who cares about your growth
            </h1>
            <p className="mt-5 text-ink-soft">
              I&apos;m Wasim, a web developer and designer based in Srinagar, Kashmir. I build
              premium, fast, easy-to-use websites for businesses across the Valley — hotels,
              homestays, travel agencies, shops and services — and for remote clients elsewhere in
              India and abroad.
            </p>
            <p className="mt-3 text-ink-soft">
              My approach is simple: give you a website that looks world-class, is genuinely easy for
              your customers to use, and actually brings you more enquiries and bookings. I hand-code
              projects with modern tools rather than bolting together heavy templates — this very
              website is built the same way — so what you get is fast, secure and easy to maintain.
            </p>
            <p className="mt-3 text-ink-soft">
              You deal with me directly from first message to launch. No handoffs, no call centre,
              no jargon — just clean work and honest communication.
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              {[
                'Direct, one-to-one service',
                'Clear pricing & timelines',
                'Local — I understand Kashmir business',
                'Support after launch',
                'Mobile-first, fast builds',
                'SEO built in from day one',
              ].map((t) => (
                <CheckItem key={t}>{t}</CheckItem>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/work" className="inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-semibold px-6 py-3.5 hover:bg-emerald-deep transition-colors">
                See my work <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-line text-ink text-sm font-semibold px-6 py-3.5 hover:border-emerald hover:text-emerald transition-colors">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
