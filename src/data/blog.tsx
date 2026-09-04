import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  datePublished: string; // ISO
  dateModified?: string;
  readingTime: string;
  body: () => ReactNode;
};

/* Shared typographic wrappers so article bodies stay consistent */
function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-ink-soft leading-relaxed">{children}</p>;
}
function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 font-display font-bold text-2xl text-ink tracking-tight">{children}</h2>
  );
}
function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-6 font-display font-semibold text-lg text-ink">{children}</h3>;
}
function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-4 space-y-2 text-ink-soft list-disc pl-5 leading-relaxed">{children}</ul>;
}

export const POSTS: BlogPost[] = [
  {
    slug: 'website-cost-kashmir',
    title: 'How Much Does a Website Cost in Kashmir? (2026 Guide)',
    seoTitle: 'How Much Does a Website Cost in Kashmir? (2026 Guide) — Wasim Pakhtoon',
    seoDescription:
      'A clear, honest breakdown of what a website costs in Kashmir in 2026 — the factors that change the price, typical ranges, and what to watch out for.',
    excerpt:
      'A clear, honest look at what actually drives the price of a business website in Kashmir — and how to spend your budget where it counts.',
    datePublished: '2026-01-15',
    readingTime: '6 min read',
    body: () => (
      <>
        <P>
          “How much does a website cost?” is the first question almost every business owner in
          Kashmir asks — and the honest answer is: it depends. But that is not a useful answer on its
          own, so here is what actually moves the price, and roughly what to expect.
        </P>

        <H2>What actually decides the price</H2>
        <P>
          A website is not one fixed product. The cost depends on a handful of real factors, and
          understanding them helps you spend where it matters.
        </P>
        <H3>1. Number of pages and depth of content</H3>
        <P>
          A focused one-page site for a small business costs far less than a multi-page site with
          services, a portfolio, a blog and location pages. More pages means more design, more
          content and more testing.
        </P>
        <H3>2. Custom design vs. template</H3>
        <P>
          A ready-made template that is set up and branded for you is quicker and cheaper. A fully
          custom design, built around your brand from scratch, takes more time — but stands out more.
        </P>
        <H3>3. Features and functionality</H3>
        <UL>
          <li>A simple brochure or booking-enquiry site is the most affordable.</li>
          <li>Online payments, a product store, or a self-editable CMS add cost.</li>
          <li>Integrations (booking tools, maps, WhatsApp flows) add a little more.</li>
        </UL>
        <H3>4. SEO and content</H3>
        <P>
          A site that is genuinely built to rank — with proper structure, speed, schema and
          keyword-aware content — takes more care than one that simply exists online.
        </P>

        <H2>Typical ranges in Kashmir</H2>
        <P>
          Prices vary between developers and agencies, so treat these as broad guidance rather than
          fixed quotes. As a rough picture in 2026:
        </P>
        <UL>
          <li>
            <strong>Simple one-page / small business site:</strong> the most budget-friendly option,
            ideal for getting online quickly with contact and enquiry flows.
          </li>
          <li>
            <strong>Multi-page business or hotel website:</strong> mid-range, with proper design,
            several pages, galleries and SEO built in.
          </li>
          <li>
            <strong>Ecommerce store or complex custom build:</strong> the higher end, reflecting
            payments, product management and more testing.
          </li>
        </UL>
        <P>
          Beyond the build, budget a little for the ongoing basics: a domain name and hosting are
          usually modest yearly costs, and optional maintenance keeps the site fast and updated.
        </P>

        <H2>What to watch out for</H2>
        <UL>
          <li>
            <strong>A price with no scope.</strong> A quote only means something once the pages and
            features are agreed. Ask what is actually included.
          </li>
          <li>
            <strong>Very cheap, very slow.</strong> Bargain sites built on heavy page-builders often
            load slowly and hurt your Google ranking — costing you more in lost customers.
          </li>
          <li>
            <strong>No mobile testing.</strong> Most visitors in Kashmir are on phones. If a site is
            not tested on mobile, it is not finished.
          </li>
        </UL>

        <H2>The honest takeaway</H2>
        <P>
          The right budget is the one that gets you a fast, credible site that brings in enquiries —
          not the cheapest possible number. If you tell me your pages and goals, I will give you a
          clear, itemised quote with no surprises. You can{' '}
          <Link to="/contact" className="text-emerald font-medium hover:underline">
            get a quote here
          </Link>{' '}
          or read more about my{' '}
          <Link to="/services/web-development" className="text-emerald font-medium hover:underline">
            web development service
          </Link>
          .
        </P>
      </>
    ),
  },
  {
    slug: 'choose-web-developer-srinagar',
    title: 'How to Choose a Web Developer in Srinagar',
    seoTitle: 'How to Choose a Web Developer in Srinagar (2026) — Wasim Pakhtoon',
    seoDescription:
      'A practical checklist for choosing a web developer in Srinagar or Kashmir — the right questions to ask, red flags to avoid, and how to compare quotes fairly.',
    excerpt:
      'A practical checklist for hiring the right web developer in Srinagar — the questions to ask, the red flags to avoid, and how to compare quotes fairly.',
    datePublished: '2026-02-02',
    readingTime: '5 min read',
    body: () => (
      <>
        <P>
          Hiring the wrong web developer is expensive — not just in money, but in the months you lose
          before the site is fixed or rebuilt. If you are choosing a web developer in Srinagar or
          anywhere in Kashmir, here is a practical way to pick well.
        </P>

        <H2>1. Look at their actual work</H2>
        <P>
          Ask to see live websites they have built — not just screenshots. Open them on your phone.
          Do they load fast? Are they easy to use? Does the design feel current? Real, working
          examples tell you far more than promises. You can see my own{' '}
          <Link to="/work" className="text-emerald font-medium hover:underline">
            portfolio and live projects here
          </Link>
          .
        </P>

        <H2>2. Check that they build for mobile and speed</H2>
        <P>
          Most of your customers in Kashmir will visit on a phone, often on mobile data. A good
          developer builds mobile-first and cares about loading speed, because a slow site loses
          visitors and ranks lower on Google.
        </P>

        <H2>3. Ask how they handle SEO</H2>
        <P>
          A site that no one can find is a wasted investment. Ask whether they build in the basics:
          proper titles and descriptions, clean structure, a sitemap, and schema. Be wary of anyone
          who <em>guarantees</em> a number-one ranking — no honest developer can promise that.
        </P>

        <H2>4. Understand who you are actually working with</H2>
        <P>
          Will you deal directly with the person building your site, or be passed around a team? For
          most small and medium businesses in Kashmir, working directly with one developer means
          faster answers, clearer communication, and no detail lost in handoff.
        </P>

        <H2>5. Get the scope and price in writing</H2>
        <UL>
          <li>How many pages, and what is on each?</li>
          <li>Is the design custom or a template?</li>
          <li>Who handles the domain, hosting and going live?</li>
          <li>What happens after launch — support, changes, maintenance?</li>
        </UL>
        <P>
          When scope is clear, you can compare quotes fairly. A cheaper price for far less work is
          not actually cheaper.
        </P>

        <H2>Red flags to avoid</H2>
        <UL>
          <li>No live examples of past work.</li>
          <li>Guarantees of instant number-one Google rankings.</li>
          <li>No mention of mobile or speed.</li>
          <li>A quote with no clear list of what is included.</li>
          <li>Poor communication before you have even paid — it rarely improves later.</li>
        </UL>

        <H2>Ready to talk?</H2>
        <P>
          If you are weighing up options, I am happy to give you honest advice even before any
          commitment. Tell me about your business and I will tell you what I would actually
          recommend. Start on the{' '}
          <Link to="/contact" className="text-emerald font-medium hover:underline">
            contact page
          </Link>{' '}
          or learn more{' '}
          <Link to="/about" className="text-emerald font-medium hover:underline">
            about me and how I work
          </Link>
          .
        </P>
      </>
    ),
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
