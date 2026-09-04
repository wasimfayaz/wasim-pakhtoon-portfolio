import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Seo } from '../seo/Seo';
import { graph, professionalServiceSchema, breadcrumbSchema } from '../seo/schema';
import { SERVICES } from '../data/services';
import { Breadcrumbs, useReveal, SectionHead } from '../components/ui';
import { CtaBand } from '../components/ui';

export default function ServicesIndex() {
  useReveal();
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ];
  const jsonLd = graph(professionalServiceSchema(), breadcrumbSchema(crumbs));

  return (
    <>
      <Seo
        title="Web Development & Design Services in Kashmir — Wasim Pakhtoon"
        description="Web development, website design, ecommerce, SEO and website redesign services in Srinagar and across Kashmir. Custom-built, fast, and made to bring results."
        path="/services"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={crumbs} />

      <section className="py-12 sm:py-16">
        <div className="container-max section-x">
          <SectionHead
            eyebrow="Services"
            title="Everything your business needs online"
            intro="From custom development to design, ecommerce, SEO and redesigns — one developer handling it all, start to finish."
            as="h1"
          />

          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="reveal lift group rounded-2xl border border-line bg-background p-7 hover:border-emerald/40 hover:shadow-[0_24px_60px_-40px_rgba(4,120,87,0.5)]"
              >
                <div className="flex items-start gap-4">
                  <div className="grid place-items-center h-12 w-12 shrink-0 rounded-xl bg-emerald-soft text-emerald">
                    <s.icon size={22} />
                  </div>
                  <div>
                    <h2 className="font-display font-semibold text-lg text-ink">{s.short}</h2>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.blurb}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald">
                      Learn more <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
