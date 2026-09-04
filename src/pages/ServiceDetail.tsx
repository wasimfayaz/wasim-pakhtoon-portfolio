import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Seo } from '../seo/Seo';
import { graph, serviceSchema, breadcrumbSchema, faqSchema } from '../seo/schema';
import { getService, type Service } from '../data/services';
import { Breadcrumbs, useReveal, Eyebrow, FaqList, CheckItem } from '../components/ui';
import { CtaBand } from '../components/ui';

export function ServiceDetail({ slug }: { slug: string }) {
  useReveal();
  const service = getService(slug) as Service;

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.short, path: `/services/${service.slug}` },
  ];

  const jsonLd = graph(
    serviceSchema({ name: service.short, description: service.seoDescription, path: `/services/${service.slug}` }),
    breadcrumbSchema(crumbs),
    faqSchema(service.faqs)
  );

  return (
    <>
      <Seo title={service.seoTitle} description={service.seoDescription} path={`/services/${service.slug}`} jsonLd={jsonLd} />
      <Breadcrumbs items={crumbs} />

      {/* Hero */}
      <section className="py-12 sm:py-16">
        <div className="container-max section-x max-w-3xl">
          <div className="reveal">
            <Eyebrow>Service</Eyebrow>
            <h1 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight text-balance leading-[1.08]">
              {service.h1}
            </h1>
            <p className="mt-5 text-lg text-ink-soft text-balance">{service.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-semibold px-6 py-3.5 hover:bg-emerald-deep transition-colors">
                Get a quote <ArrowRight size={16} />
              </Link>
              <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-line text-ink text-sm font-semibold px-6 py-3.5 hover:border-emerald hover:text-emerald transition-colors">
                See examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's included + good for */}
      <section className="pb-8">
        <div className="container-max section-x grid lg:grid-cols-2 gap-8">
          <div className="reveal rounded-2xl border border-line bg-background p-7">
            <h2 className="font-display font-semibold text-xl text-ink">What&apos;s included</h2>
            <ul className="mt-5 space-y-3">
              {service.includes.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <Check size={16} className="text-emerald shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-2xl border border-line bg-surface p-7">
            <h2 className="font-display font-semibold text-xl text-ink">A good fit for</h2>
            <ul className="mt-5 space-y-3">
              {service.goodFor.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <Check size={16} className="text-emerald shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12">
        <div className="container-max section-x">
          <h2 className="reveal font-display font-bold text-2xl sm:text-3xl text-ink tracking-tight">How it works</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((p, i) => (
              <div key={p.title} className="reveal rounded-2xl border border-line bg-background p-6">
                <span className="font-display font-bold text-3xl text-emerald/25">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-display font-semibold text-lg text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{p.text}</p>
              </div>
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
              About this service
            </h2>
          </div>
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      {/* Related services */}
      <section className="py-12">
        <div className="container-max section-x reveal">
          <h2 className="font-display font-semibold text-lg text-ink">Related services</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {service.related.map((slug) => {
              const r = getService(slug);
              if (!r) return null;
              return (
                <Link
                  key={slug}
                  to={`/services/${slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-background px-4 py-2 text-sm font-medium text-ink-soft hover:border-emerald hover:text-emerald transition-colors"
                >
                  {r.short} <ArrowRight size={14} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand waMessage={`Hi Wasim, I'm interested in ${service.short.toLowerCase()} for my business.`} />
    </>
  );
}
