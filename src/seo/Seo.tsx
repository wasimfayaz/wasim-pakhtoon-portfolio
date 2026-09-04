import { Head } from 'vite-react-ssg';
import { SITE, absUrl } from '../data/site';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  /** JSON-LD object (already wrapped with graph()) */
  jsonLd?: object;
  /** Set true only for pages that must not be indexed */
  noindex?: boolean;
};

/**
 * Renders all per-page SEO tags into <head> at build time (prerendered),
 * so titles, descriptions, canonicals, OG/Twitter and JSON-LD are present
 * in the static HTML — readable by Google and social scrapers without JS.
 */
export function Seo({
  title,
  description,
  path,
  image = SITE.ogImage,
  type = 'website',
  jsonLd,
  noindex = false,
}: SeoProps) {
  const canonical = absUrl(path);
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Head>
  );
}
