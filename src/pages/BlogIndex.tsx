import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import { Seo } from '../seo/Seo';
import { graph, websiteSchema, breadcrumbSchema } from '../seo/schema';
import { POSTS } from '../data/blog';
import { Breadcrumbs, useReveal, SectionHead } from '../components/ui';

export default function BlogIndex() {
  useReveal();
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
  ];
  const jsonLd = graph(websiteSchema(), breadcrumbSchema(crumbs));

  return (
    <>
      <Seo
        title="Web Design & Development Blog | Kashmir — Wasim Pakhtoon"
        description="Practical, honest guides on websites for Kashmir businesses — costs, choosing a developer, SEO and what makes a good business website."
        path="/blog"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={crumbs} />

      <section className="py-12 sm:py-16">
        <div className="container-max section-x">
          <SectionHead
            eyebrow="Blog"
            title="Honest guides for Kashmir businesses"
            intro="Clear, practical articles on websites, costs and getting found online — written from real project experience, not filler."
            as="h1"
          />

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {POSTS.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="reveal lift group rounded-2xl border border-line bg-background p-7 hover:border-emerald/40 hover:shadow-[0_24px_60px_-40px_rgba(4,120,87,0.5)]"
              >
                <div className="flex items-center gap-4 text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={13} />
                    {new Date(p.datePublished).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                  <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {p.readingTime}</span>
                </div>
                <h2 className="mt-3 font-display font-bold text-xl text-ink tracking-tight group-hover:text-emerald transition-colors">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald">
                  Read article <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
