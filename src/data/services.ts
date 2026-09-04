import type { LucideIcon } from 'lucide-react';
import { Code2, Palette, ShoppingCart, Search, RefreshCw } from 'lucide-react';

export type Service = {
  slug: string;
  /** short label used in nav/footer/cards */
  short: string;
  icon: LucideIcon;
  /** card blurb on the services index & home */
  blurb: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  /** concrete deliverables */
  includes: string[];
  /** "good fit for" audience bullets */
  goodFor: string[];
  /** how this specific service is delivered */
  process: { title: string; text: string }[];
  /** page-specific FAQs */
  faqs: { q: string; a: string }[];
  /** related service slugs for internal linking */
  related: string[];
};

export const SERVICES: Service[] = [
  {
    slug: 'web-development',
    short: 'Web Development',
    icon: Code2,
    blurb:
      'Custom-built, fast websites coded from scratch — not bloated page-builders — so your site loads quickly and ranks well.',
    seoTitle: 'Website Development in Kashmir | Custom-Coded Sites — Wasim Pakhtoon',
    seoDescription:
      'Custom website development in Srinagar and across Kashmir. Fast, hand-coded React websites built for speed, SEO, and real business results.',
    h1: 'Custom website development in Kashmir',
    intro:
      'I build websites by hand with modern code — React, Vite and Tailwind — rather than stitching together heavy templates. That means a site that loads fast on Kashmir mobile networks, is easy for Google to crawl, and does exactly what your business needs.',
    includes: [
      'Custom design and layout built around your business, not a generic template',
      'Hand-coded front-end (React + Vite) for speed and clean, crawlable HTML',
      'Mobile-first build tested on real phone screen sizes',
      'Contact and enquiry flows wired to WhatsApp and email',
      'Basic on-page SEO: titles, meta, headings, sitemap and schema',
      'Domain, hosting and deployment setup (Vercel) handled for you',
    ],
    goodFor: [
      'Hotels, homestays and houseboats that want direct bookings',
      'Travel agencies showing tour packages and itineraries',
      'Local businesses and shops that need to be found on Google',
      'Startups and founders who want a site that can grow',
    ],
    process: [
      { title: 'Plan', text: 'We agree the pages, content and goals over WhatsApp or a call.' },
      { title: 'Design', text: 'I design a clean layout and share it before writing any code.' },
      { title: 'Build', text: 'I hand-code the site, connect forms, and optimise it for speed and SEO.' },
      { title: 'Launch', text: 'We connect your domain, go live, and I show you how everything works.' },
    ],
    faqs: [
      {
        q: 'Do you code websites from scratch or use a builder like WordPress?',
        a: 'I hand-code most projects with React and modern tooling, which keeps them fast and easy to maintain. If a business genuinely needs a self-editable CMS, I set that up too — but I never ship a slow, plugin-heavy site just to save time.',
      },
      {
        q: 'Will my website work well on mobile?',
        a: 'Yes. Every site is built mobile-first and tested across phone sizes, because most visitors in Kashmir browse on their phones.',
      },
      {
        q: 'Can you handle domain and hosting?',
        a: 'Yes. I set up your domain and deploy the site on fast, reliable hosting, and walk you through it so nothing is a black box.',
      },
    ],
    related: ['web-design', 'ecommerce-development', 'seo'],
  },
  {
    slug: 'web-design',
    short: 'Web Design',
    icon: Palette,
    blurb:
      'Clean, premium, minimal design that makes your business look trustworthy and high-end — and guides visitors to act.',
    seoTitle: 'Website Design in Kashmir | Premium, Minimal UI — Wasim Pakhtoon',
    seoDescription:
      'Premium website design in Srinagar and Kashmir. Clean, minimal, modern layouts that build trust and turn visitors into enquiries and bookings.',
    h1: 'Premium website design in Kashmir',
    intro:
      'Design is the first thing a visitor judges. I design clean, minimal, premium interfaces that make your business feel credible in seconds — with clear structure, readable typography, and calls to action that actually get clicked.',
    includes: [
      'A distinct visual identity — colour, type and spacing tuned to your brand',
      'Clear layout and hierarchy so visitors instantly understand what you offer',
      'Conversion-focused sections: strong hero, proof, and easy contact points',
      'Consistent, reusable components across every page',
      'Accessible contrast and font sizes that work for everyone',
      'A design that stays fast — no heavy sliders or bloat',
    ],
    goodFor: [
      'Businesses that look outdated next to their competitors',
      'Premium brands, hotels and boutiques that need to feel high-end',
      'Anyone whose current site is cluttered or hard to use',
    ],
    process: [
      { title: 'Understand', text: 'I learn your brand, audience and the action you want visitors to take.' },
      { title: 'Design', text: 'I design the key screens and refine them with your feedback.' },
      { title: 'Systemise', text: 'I turn the design into reusable components for a consistent site.' },
    ],
    faqs: [
      {
        q: 'Do you design and build, or only design?',
        a: 'Both. I design and then build the same site myself, so nothing gets lost in handoff between a designer and a developer.',
      },
      {
        q: 'Can you match my existing brand colours and logo?',
        a: 'Yes. I design around your existing identity, or help refine it if your branding needs a light touch-up.',
      },
    ],
    related: ['web-development', 'website-redesign', 'seo'],
  },
  {
    slug: 'ecommerce-development',
    short: 'Ecommerce Development',
    icon: ShoppingCart,
    blurb:
      'Online stores and booking flows that let customers browse, enquire and pay — built to be simple to manage.',
    seoTitle: 'Ecommerce Website Development in Kashmir | Online Stores — Wasim Pakhtoon',
    seoDescription:
      'Ecommerce website development in Kashmir and Srinagar. Simple, fast online stores and booking flows for local products, crafts and services.',
    h1: 'Ecommerce website development in Kashmir',
    intro:
      "Whether you sell Kashmiri crafts, pashmina, dry fruits, or tour bookings, I build online stores that are simple for customers to use and simple for you to manage. No overwhelming dashboards — just a clean store that takes orders and enquiries.",
    includes: [
      'Product or package listings with clear photos, prices and details',
      'Cart and checkout, or a lighter enquiry-to-order flow where that fits better',
      'Payment options suited to your business (UPI, cards, bank transfer)',
      'Order and enquiry notifications by email or WhatsApp',
      'Mobile-first, fast product pages that are easy to share',
      'Product pages structured with schema so they can show rich results',
    ],
    goodFor: [
      'Sellers of Kashmiri crafts, pashmina, walnuts, saffron and dry fruits',
      'Businesses shipping products across India',
      'Tour operators taking package bookings and deposits',
    ],
    process: [
      { title: 'Scope', text: 'We list your products or packages and how you want to take payment.' },
      { title: 'Build', text: 'I build the store, checkout or enquiry flow, and connect payments.' },
      { title: 'Handover', text: 'I show you how to add products and manage orders yourself.' },
    ],
    faqs: [
      {
        q: 'Can customers pay online?',
        a: 'Yes. I can connect UPI, cards and bank transfer depending on what suits your business and volume. For smaller catalogues, a WhatsApp-based order flow sometimes converts better — I will advise honestly on what fits.',
      },
      {
        q: 'Can I add and edit products myself?',
        a: 'Yes. I set the store up so you can manage products and orders without needing me for every change.',
      },
    ],
    related: ['web-development', 'seo', 'web-design'],
  },
  {
    slug: 'seo',
    short: 'SEO-Friendly Websites',
    icon: Search,
    blurb:
      'Websites built to be found on Google — proper titles, structure, speed and schema, with a focus on local Kashmir searches.',
    seoTitle: 'SEO-Friendly Website Development in Kashmir | Local SEO — Wasim Pakhtoon',
    seoDescription:
      'SEO-friendly websites and local SEO in Kashmir and Srinagar. Get found on Google for the searches your customers actually use, built in from day one.',
    h1: 'SEO-friendly websites & local SEO in Kashmir',
    intro:
      'A beautiful website that no one can find is a missed opportunity. I build SEO in from the start — clean HTML, fast loading, correct titles and descriptions, sitemaps, and structured data — and set you up to rank for local searches like “hotels in Srinagar” or “tour packages in Kashmir”.',
    includes: [
      'Keyword-aware page titles, meta descriptions and headings',
      'Clean, crawlable HTML and a working XML sitemap and robots.txt',
      'Structured data (schema) so Google understands your business and pages',
      'Fast loading and good Core Web Vitals — a real ranking factor',
      'Local SEO signals: service area, location context, and consistent details',
      'Google Search Console setup guidance so you can track performance',
    ],
    goodFor: [
      'Businesses that rely on being found by tourists and locals',
      'New websites that want to start indexed and structured correctly',
      'Owners tired of paying commissions to booking aggregators',
    ],
    process: [
      { title: 'Foundation', text: 'I build the technical SEO basics into the site from day one.' },
      { title: 'Content', text: 'We shape page content around the real terms your customers search.' },
      { title: 'Submit', text: 'We connect Search Console and submit your sitemap for indexing.' },
    ],
    faqs: [
      {
        q: 'Can you guarantee I will rank number one on Google?',
        a: 'No honest developer can promise a number-one ranking — Google decides that. What I can do is give your site the strongest legitimate foundation: fast, well-structured, locally relevant, and correctly indexed, so it can compete fairly.',
      },
      {
        q: 'Do you do ongoing SEO or just the setup?',
        a: 'I build the technical foundation and can help with ongoing content and improvements over time. SEO is a long game, so consistency matters more than any one-off trick.',
      },
    ],
    related: ['web-development', 'web-design', 'website-redesign'],
  },
  {
    slug: 'website-redesign',
    short: 'Website Redesign',
    icon: RefreshCw,
    blurb:
      'Turn a slow, dated or hard-to-use website into a fast, modern one — without losing the search value you already have.',
    seoTitle: 'Website Redesign in Kashmir | Rebuild an Old Site — Wasim Pakhtoon',
    seoDescription:
      'Website redesign and rebuild services in Kashmir and Srinagar. Modernise a slow or outdated site while keeping your existing Google rankings safe.',
    h1: 'Website redesign & rebuild in Kashmir',
    intro:
      'If your current website is slow, looks dated, or is painful to update, a redesign can transform how customers see your business. I rebuild sites to be fast and modern — and I do it carefully, preserving the URLs and search value you have already earned.',
    includes: [
      'A fresh, modern, mobile-first design that fits your brand',
      'A faster, cleaner rebuild that fixes performance problems',
      'Careful URL handling and 301 redirects so you keep your rankings',
      'Improved structure and content that is easier to navigate',
      'SEO and schema brought up to current standards',
      'A clear before/after so you can see exactly what improved',
    ],
    goodFor: [
      'Businesses with a site built years ago that now feels outdated',
      'Owners who cannot easily update their current website',
      'Sites that load slowly or rank poorly on mobile',
    ],
    process: [
      { title: 'Audit', text: 'I review your current site, its speed, structure and search value.' },
      { title: 'Rebuild', text: 'I redesign and rebuild it modern and fast, keeping what works.' },
      { title: 'Migrate', text: 'I set up redirects and re-submit to Google so nothing is lost.' },
    ],
    faqs: [
      {
        q: 'Will a redesign hurt my Google rankings?',
        a: 'It should not, if done carefully. I keep or redirect your existing URLs with proper 301 redirects and preserve your content, which protects the search value you already have while improving speed and structure.',
      },
      {
        q: 'Can you work from my existing website?',
        a: 'Yes. I can use your current content, images and structure as a starting point, then modernise the design and code.',
      },
    ],
    related: ['web-design', 'web-development', 'seo'],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
