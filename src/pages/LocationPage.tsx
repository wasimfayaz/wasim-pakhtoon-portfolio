import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin } from 'lucide-react';
import { Seo } from '../seo/Seo';
import { graph, professionalServiceSchema, breadcrumbSchema, faqSchema } from '../seo/schema';
import { getLocation, type LocationPage as LocData } from '../data/locations';
import { SERVICES } from '../data/services';
import { Breadcrumbs, useReveal, Eyebrow, FaqList } from '../components/ui';
import { CtaBand } from '../components/ui';

export function LocationPage({ slug }: { slug: string }) {
  useReveal();
  const loc = getLocation(slug) as LocData;

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: loc.breadcrumb, path: `/${loc.slug}` },
  ];

  const jsonLd = graph(
    professionalServiceSchema(),
    breadcrumbSchema(crumbs),
    faqSchema(loc.faqs)
  );

  return (
    <>
      <Seo title={loc.seoTitle} description={loc.seoDescription} path={`/${loc.slug}`} jsonLd={jsonLd} />
      <Breadcrumbs items={crumbs} />

      {/* Hero */}
      <section className="py-12 sm:py-16">
        <div className="container-max section-x max-w-3xl">
          <div className="reveal">
            <Eyebrow>
              <span className="inline-flex items-center gap-1.5"><MapPin size={12} /> Local service area</span>
            </Eyebrow>
            <h1 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight text-balance leading-[1.08]">
              {loc.h1}
            </h1>
            {loc.intro.map((p, i) => (
              <p key={i} className="mt-5 text-lg text-ink-soft text-balance">{p}</p>
            ))}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-semibold px-6 py-3.5 hover:bg-emerald-deep transition-colors">
                Get a quote <ArrowRight size={16} />
              </Link>
              <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-line text-ink text-sm font-semibold px-6 py-3.5 hover:border-emerald hover:text-emerald transition-colors">
                See my work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local context blocks */}
      <section className="pb-8">
        <div className="container-max section-x grid md:grid-cols-3 gap-5">
          {loc.blocks.map((b) => (
            <div key={b.title} className="reveal rounded-2xl border border-line bg-background p-6">
              <h2 className="font-display font-semibold text-lg text-ink">{b.title}</h2>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services offered here */}
      <section className="py-12">
        <div className="container-max section-x">
          <h2 className="reveal font-display font-bold text-2xl sm:text-3xl text-ink tracking-tight">
            Services I offer here
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="reveal lift group rounded-2xl border border-line bg-background p-6 hover:border-emerald/40"
              >
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-emerald-soft text-emerald">
                  <s.icon size={20} />
                </div>
                <h3 className="mt-4 font-display font-semibold text-ink">{s.short}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-surface border-y border-line">
        <div className="container-max section-x grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div className="reveal">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display font-bold text-2xl sm:text-3xl text-ink tracking-tight">
              Local FAQs
            </h2>
          </div>
          <FaqList faqs={loc.faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
