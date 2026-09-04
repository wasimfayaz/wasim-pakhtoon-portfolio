import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import { Seo } from '../seo/Seo';
import { graph, blogPostingSchema, breadcrumbSchema } from '../seo/schema';
import { getPost, POSTS, type BlogPost as Post } from '../data/blog';
import { Breadcrumbs, useReveal } from '../components/ui';
import { CtaBand } from '../components/ui';

export function BlogPost({ slug }: { slug: string }) {
  useReveal();
  const post = getPost(slug) as Post;

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const jsonLd = graph(
    blogPostingSchema({
      title: post.title,
      description: post.seoDescription,
      path: `/blog/${post.slug}`,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
    }),
    breadcrumbSchema(crumbs)
  );

  const others = POSTS.filter((p) => p.slug !== post.slug);

  return (
    <>
      <Seo title={post.seoTitle} description={post.seoDescription} path={`/blog/${post.slug}`} type="article" jsonLd={jsonLd} />
      <Breadcrumbs items={crumbs} />

      <article className="py-12 sm:py-16">
        <div className="container-max section-x max-w-3xl">
          <Link to="/blog" className="reveal inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-emerald transition-colors">
            <ArrowLeft size={15} /> All articles
          </Link>

          <header className="reveal mt-5">
            <div className="flex items-center gap-4 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={13} />
                {new Date(post.datePublished).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {post.readingTime}</span>
            </div>
            <h1 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance leading-[1.1]">
              {post.title}
            </h1>
          </header>

          <div className="reveal mt-2">{post.body()}</div>

          <div className="reveal mt-12 rounded-2xl border border-line bg-surface p-6 flex items-center gap-4">
            <div className="grid place-items-center h-12 w-12 shrink-0 rounded-xl bg-emerald text-white font-display font-bold text-xl">W</div>
            <div>
              <div className="font-semibold text-ink">Wasim Pakhtoon</div>
              <div className="text-sm text-muted">Web Developer &amp; Designer · Srinagar, Kashmir</div>
            </div>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="pb-12">
          <div className="container-max section-x max-w-3xl reveal">
            <h2 className="font-display font-semibold text-lg text-ink">Read next</h2>
            <div className="mt-4 grid gap-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="rounded-2xl border border-line bg-background p-5 hover:border-emerald/40 transition-colors"
                >
                  <span className="font-medium text-ink">{p.title}</span>
                  <p className="mt-1 text-sm text-ink-soft">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
