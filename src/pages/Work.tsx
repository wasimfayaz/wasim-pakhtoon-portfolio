import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Seo } from '../seo/Seo';
import { graph, breadcrumbSchema, professionalServiceSchema } from '../seo/schema';
import { waLink } from '../data/site';
import { LIVE_PROJECTS, TEMPLATES } from '../data/projects';
import { Breadcrumbs, useReveal, SectionHead, Eyebrow } from '../components/ui';
import { SiteCard } from '../components/SiteCard';

export default function Work() {
  useReveal();
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
  ];
  const jsonLd = graph(professionalServiceSchema(), breadcrumbSchema(crumbs));

  return (
    <>
      <Seo
        title="Web Development Portfolio | Websites Built in Kashmir — Wasim Pakhtoon"
        description="A portfolio of live websites and ready-made templates built by Wasim Pakhtoon — travel, hospitality, solar and agency sites for Kashmir businesses and beyond."
        path="/work"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={crumbs} />

      <section className="py-12 sm:py-16">
        <div className="container-max section-x">
          <SectionHead
            eyebrow="Portfolio"
            title="Websites I've designed and built"
            intro="A mix of live client websites and premium templates ready to launch a new business."
            as="h1"
          />
        </div>
      </section>

      {/* Live projects */}
      <section className="pb-16">
        <div className="container-max section-x">
          <div className="reveal flex items-end justify-between gap-6">
            <Eyebrow>Live projects</Eyebrow>
            <a
              href={waLink('Hi Wasim, can you share more of your work?')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:gap-3 transition-all"
            >
              Ask for more samples <ArrowRight size={16} />
            </a>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LIVE_PROJECTS.map((s) => (
              <SiteCard key={s.title} s={s} cta="Visit live site" />
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-16 bg-surface border-y border-line">
        <div className="container-max section-x">
          <SectionHead
            eyebrow="Ready-made templates"
            title="Premium templates, ready to launch your business"
            intro="Already built and waiting to be set up. Each template is sold and branded for one business only — never resold or reused for anyone else — so your website stays unique to you."
          />
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

      {/* Internal links to services */}
      <section className="py-16">
        <div className="container-max section-x reveal">
          <p className="text-ink-soft">
            Want something like these for your own business? Explore{' '}
            <Link to="/services/web-development" className="text-emerald font-medium hover:underline">
              custom web development
            </Link>
            ,{' '}
            <Link to="/services/web-design" className="text-emerald font-medium hover:underline">
              website design
            </Link>{' '}
            and{' '}
            <Link to="/services/ecommerce-development" className="text-emerald font-medium hover:underline">
              ecommerce development
            </Link>
            , or see how I work with businesses in{' '}
            <Link to="/web-development-srinagar" className="text-emerald font-medium hover:underline">
              Srinagar
            </Link>{' '}
            and across{' '}
            <Link to="/web-development-kashmir" className="text-emerald font-medium hover:underline">
              the Kashmir Valley
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
