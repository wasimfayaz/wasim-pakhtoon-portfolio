import { Link } from 'react-router-dom';
import {
  ArrowRight, Check, Star, Quote, Zap, Globe, Gauge, ShieldCheck, MapPin,
} from 'lucide-react';
import { Seo } from '../seo/Seo';
import {
  graph, personSchema, websiteSchema, professionalServiceSchema, faqSchema,
} from '../seo/schema';
import { SITE, waLink } from '../data/site';
import { SERVICES } from '../data/services';
import { LIVE_PROJECTS } from '../data/projects';
import { useReveal, Eyebrow, SectionHead, FaqList, CheckItem } from '../components/ui';
import { QuickForm } from '../components/QuickForm';
import { SiteCard } from '../components/SiteCard';

const HOME_FAQS = [
  {
    q: 'Do you build websites for businesses in Srinagar and Kashmir?',
    a: 'Yes. I am a web developer based in Srinagar and work with businesses across the Kashmir Valley — hotels, travel agencies, shops and services — as well as remote clients elsewhere.',
  },
  {
    q: 'How much does a website cost?',
    a: 'It depends on your pages and features, but I keep pricing clear and fair. Message me on WhatsApp with what you need and I will give you an honest, itemised quote with no obligation.',
  },
  {
    q: 'How long does a website take to build?',
    a: 'Most business and hotel websites are ready in about 2–3 weeks, depending on your content and how quickly we exchange feedback.',
  },
  {
    q: 'Do you work with clients outside Kashmir?',
    a: 'Yes. The whole process works over WhatsApp and calls, so I work with clients across India and internationally, not only in Kashmir.',
  },
  {
    q: 'What do you build websites with?',
    a: 'I hand-code most projects with modern tools like React, Vite and Tailwind, which keeps them fast, secure and easy to maintain — this very website is built the same way.',
  },
];

const WHY = [
  { icon: Zap, title: 'Fast & modern', desc: 'Hand-coded with modern tools so your site is quick and smooth, not bloated.' },
  { icon: Globe, title: 'Found on Google', desc: 'SEO and local relevance built in for Kashmir and Srinagar searches.' },
  { icon: Gauge, title: 'Easy to manage', desc: 'Simple to update — or I handle changes for you anytime.' },
  { icon: ShieldCheck, title: 'Reliable & honest', desc: 'Clear pricing, clear timelines, and no confusing tech talk.' },
];

const STEPS = [
  { n: '01', title: 'Talk', desc: 'We chat on WhatsApp about your business, goals, and ideas.' },
  { n: '02', title: 'Design', desc: 'I design a clean, premium layout and share it for your feedback.' },
  { n: '03', title: 'Build', desc: 'I build the full site — fast, mobile-friendly, and SEO-ready.' },
  { n: '04', title: 'Launch', desc: 'We go live, connect your domain, and I show you how it works.' },
];

const TESTIMONIALS = [
  { quote: 'Wasim built our website beautifully. It loads fast and we now get booking enquiries directly on WhatsApp.', name: 'Owner', role: 'Kashmir stay' },
  { quote: 'Very professional and easy to talk to. He understood exactly what our business needed.', name: 'Manager', role: 'Local business' },
  { quote: 'Great designer. The new site looks modern and our customers find it much easier to reach us.', name: 'Founder', role: 'Kashmir business' },
];

const STATS = [
  { n: '30+', l: 'Websites delivered' },
  { n: '100%', l: 'Mobile-friendly' },
  { n: '2–3 wks', l: 'Typical delivery' },
  { n: 'Srinagar', l: 'Based & focused' },
];

export default function Home() {
  useReveal();

  const jsonLd = graph(
    personSchema(),
    websiteSchema(),
    professionalServiceSchema(),
    faqSchema(HOME_FAQS)
  );

  return (
    <>
      <Seo
        title="Web Developer in Kashmir | Websites for Business — Wasim Pakhtoon"
        description="Wasim Pakhtoon is a web developer and designer in Srinagar, Kashmir. I build fast, SEO-friendly websites for hotels, travel agencies and businesses across the Kashmir Valley — and remote clients worldwide."
        path="/"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative pt-[112px] pb-16 sm:pt-[130px] sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 dot-grid opacity-70" />
        <div className="absolute -z-10 top-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-emerald-soft blur-3xl opacity-70" />

        <div className="container-max section-x grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="reveal">
              <Eyebrow>Web Developer &amp; Designer · Srinagar, Kashmir</Eyebrow>
            </div>
            <h1 className="reveal mt-5 font-display font-bold text-ink text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight text-balance">
              Web developer in Kashmir building{' '}
              <span className="text-emerald">fast, modern websites</span> that win customers
            </h1>
            <p className="reveal mt-5 text-lg text-ink-soft max-w-xl text-balance">
              I&apos;m Wasim Pakhtoon — I design and build premium, SEO-friendly websites for hotels,
              travel agencies and businesses across Srinagar and the Kashmir Valley, and for remote
              clients worldwide.
            </p>

            <div className="reveal mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft">
              {['Custom-coded & fast', 'Google-friendly (SEO)', 'Mobile-first'].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <Check size={16} className="text-emerald" /> {t}
                </span>
              ))}
            </div>

            <div className="reveal mt-8 flex flex-wrap items-center gap-3">
              <a
                href={waLink("Hi Wasim, I'd like a website for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-semibold px-6 py-3.5 hover:bg-emerald-deep transition-colors"
              >
                Chat on WhatsApp <ArrowRight size={16} />
              </a>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-full border border-line text-ink text-sm font-semibold px-6 py-3.5 hover:border-emerald hover:text-emerald transition-colors"
              >
                See my work
              </Link>
            </div>
          </div>

          <div className="reveal">
            <QuickForm />
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Services */}
      <section id="services" className="py-20 sm:py-28">
        <div className="container-max section-x">
          <SectionHead
            eyebrow="What I do"
            title="Web development & design services in Kashmir"
            intro="One developer, start to finish — from custom development and design to ecommerce, SEO and redesigns."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="reveal lift group rounded-2xl border border-line bg-background p-6 hover:border-emerald/40 hover:shadow-[0_24px_60px_-40px_rgba(4,120,87,0.5)]"
              >
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-emerald-soft text-emerald">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-ink">{s.short}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald">
                  Learn more <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
            {/* Local landing links */}
            <Link
              to="/web-development-srinagar"
              className="reveal lift group rounded-2xl border border-dashed border-emerald/40 bg-emerald-soft/40 p-6 hover:bg-emerald-soft"
            >
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-emerald text-white">
                <MapPin size={22} />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg text-ink">Serving Srinagar &amp; the Valley</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                Local web development for businesses in Srinagar and across Kashmir.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald">
                Web development in Srinagar <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Work preview */}
      <section className="py-20 sm:py-28 bg-surface border-y border-line">
        <div className="container-max section-x">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="Live projects"
              title="Real websites, running for real businesses"
            />
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:gap-3 transition-all"
            >
              View full portfolio <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LIVE_PROJECTS.map((s) => (
              <SiteCard key={s.title} s={s} cta="Visit live site" />
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 sm:py-28">
        <div className="container-max section-x grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div className="reveal">
            <Eyebrow>Why work with me</Eyebrow>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
              Premium results, without the headache
            </h2>
            <p className="mt-4 text-ink-soft">
              You run a business — you shouldn&apos;t have to become a tech expert. You tell me your
              goal, I handle the rest, and you get a website you&apos;re proud to share.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-semibold px-6 py-3.5 hover:bg-emerald-deep transition-colors"
            >
              More about how I work <ArrowRight size={16} />
            </Link>
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

      {/* Process */}
      <section className="py-20 sm:py-28 bg-surface border-y border-line">
        <div className="container-max section-x">
          <SectionHead eyebrow="How it works" title="Simple, from first message to launch" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s) => (
              <div key={s.n} className="reveal rounded-2xl border border-line bg-background p-6">
                <span className="font-display font-bold text-4xl text-emerald/25">{s.n}</span>
                <h3 className="mt-3 font-display font-semibold text-lg text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28">
        <div className="container-max section-x">
          <SectionHead eyebrow="Kind words" title="Trusted by Kashmir businesses" />
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

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-surface border-y border-line">
        <div className="container-max section-x grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <SectionHead
            eyebrow="Questions"
            title="Frequently asked"
            intro="Still unsure? Just message me — I'm happy to help, even if you're only exploring ideas."
          />
          <FaqList faqs={HOME_FAQS} />
        </div>
      </section>

      {/* Contact preview */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="container-max section-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="reveal">
            <Eyebrow>Let&apos;s talk</Eyebrow>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
              Ready for a website that brings you customers?
            </h2>
            <p className="mt-4 text-ink-soft max-w-lg">
              Send me a quick message with what you need. I&apos;ll reply on WhatsApp with honest
              advice and a clear quote — no pressure at all.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a href={waLink('Hi Wasim!')} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald">
                WhatsApp: {SITE.whatsappDisplay}
              </a>
              <span className="text-line">•</span>
              <a href={`mailto:${SITE.email}`} className="font-semibold text-emerald break-all">
                {SITE.email}
              </a>
            </div>
            <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={14} /> Based in Srinagar — serving Kashmir &amp; remote clients
            </p>
          </div>
          <div className="reveal">
            <QuickForm />
          </div>
        </div>
      </section>
    </>
  );
}
