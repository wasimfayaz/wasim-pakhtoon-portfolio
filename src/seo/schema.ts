/* ------------------------------------------------------------------ */
/*  JSON-LD structured data builders                                   */
/*  Every builder returns an object that accurately represents the     */
/*  page. No fake reviews, ratings, addresses, or business claims.     */
/* ------------------------------------------------------------------ */
import { SITE, absUrl } from '../data/site';

const PERSON_ID = `${SITE.domain}/#wasim`;
const BUSINESS_ID = `${SITE.domain}/#business`;
const WEBSITE_ID = `${SITE.domain}/#website`;

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE.name,
    url: `${SITE.domain}/`,
    jobTitle: SITE.role,
    description:
      'Web developer and designer based in Srinagar, Kashmir, building fast, SEO-friendly websites for businesses in Kashmir and remote clients worldwide.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    email: SITE.email,
    knowsAbout: [
      'Web Development',
      'Web Design',
      'Responsive Design',
      'Ecommerce Development',
      'Local SEO',
      'React',
      'Website Performance',
    ],
    sameAs: SITE.sameAs,
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE.domain}/`,
    name: `${SITE.name} — ${SITE.role}`,
    inLanguage: 'en',
    publisher: { '@id': PERSON_ID },
  };
}

/** ProfessionalService — factually a one-person web studio serving Kashmir + remote */
export function professionalServiceSchema() {
  return {
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: `${SITE.name} — Web Development & Design`,
    url: `${SITE.domain}/`,
    image: SITE.ogImage,
    logo: `${SITE.domain}/icon-512.png`,
    description:
      'Professional web development and web design in Srinagar and across Kashmir. Custom business websites, ecommerce, redesigns, and SEO-friendly builds.',
    founder: { '@id': PERSON_ID },
    email: SITE.email,
    telephone: `+${SITE.whatsappNumber}`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: [
      { '@type': 'City', name: 'Srinagar' },
      { '@type': 'AdministrativeArea', name: 'Kashmir Valley' },
      { '@type': 'AdministrativeArea', name: 'Jammu & Kashmir' },
      { '@type': 'Country', name: 'India' },
    ],
    knowsLanguage: ['en', 'ur', 'hi'],
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: absUrl(opts.path),
    serviceType: opts.name,
    provider: { '@id': BUSINESS_ID },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Kashmir' },
      { '@type': 'City', name: 'Srinagar' },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function blogPostingSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    url: absUrl(opts.path),
    mainEntityOfPage: absUrl(opts.path),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    inLanguage: 'en',
  };
}

/** Wrap one or more schema objects into a single @graph document */
export function graph(...nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
