export type LocationBlock = { title: string; text: string };

export type LocationPage = {
  slug: string; // e.g. "web-development-kashmir"
  footerLabel: string;
  breadcrumb: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  /** unique opening — never templated across locations */
  intro: string[];
  /** unique local-context sections */
  blocks: LocationBlock[];
  /** location-specific FAQs */
  faqs: { q: string; a: string }[];
};

/**
 * Two flagship location pages only. Each has materially different content,
 * angle and local context — not a city-name swap. More towns will be added
 * only when each can carry genuinely unique, useful information.
 */
export const LOCATIONS: LocationPage[] = [
  {
    slug: 'web-development-kashmir',
    footerLabel: 'Web Development in Kashmir',
    breadcrumb: 'Web Development in Kashmir',
    seoTitle: 'Web Development in Kashmir | Websites for Valley Businesses — Wasim Pakhtoon',
    seoDescription:
      'Web development across the Kashmir Valley. I build fast, bookings-focused websites for hotels, travel businesses and shops from Srinagar to Gulmarg, Pahalgam and beyond.',
    h1: 'Web development across the Kashmir Valley',
    intro: [
      'Much of Kashmir’s economy runs on tourism and seasonal demand — and more of that demand starts on a phone screen than ever before. A traveller planning a trip to Gulmarg, Pahalgam or Srinagar usually searches, compares and books online before they arrive.',
      'I build websites for businesses across the Valley that turn that online attention into direct enquiries and bookings — without paying heavy commissions to aggregator platforms. Being based in Srinagar, I understand the local context, and I work remotely with businesses in towns that don’t have a developer nearby.',
    ],
    blocks: [
      {
        title: 'Built for seasonal, mobile-first traffic',
        text: 'Kashmir tourism spikes hard around seasons and holidays. Your site has to load quickly on mobile data and handle a surge of visitors without breaking. I build lightweight, fast sites so you never lose a booking to a slow page during peak season.',
      },
      {
        title: 'Direct bookings, fewer commissions',
        text: 'Aggregator platforms take a cut of every booking. A strong website with clear photos, rates and a direct WhatsApp enquiry flow lets guests reach you directly — so more of the booking value stays with your business.',
      },
      {
        title: 'Remote delivery to any town in the Valley',
        text: 'Whether you are in Srinagar, Baramulla, Anantnag or Pahalgam, the whole process — planning, design, feedback and launch — works smoothly over WhatsApp and calls. Distance is not a barrier to getting a professional website.',
      },
    ],
    faqs: [
      {
        q: 'Do you only work with businesses in Srinagar?',
        a: 'No. I am based in Srinagar but work with businesses across the entire Kashmir Valley — and remote clients elsewhere in India and abroad. The full process works over WhatsApp and calls.',
      },
      {
        q: 'I run a hotel outside Srinagar. Can a website really help?',
        a: 'Yes — often more so. Travellers research properties in Gulmarg, Pahalgam and Sonamarg online before they arrive. A fast, well-structured website with real photos and a direct enquiry flow helps you capture that demand directly.',
      },
    ],
  },
  {
    slug: 'web-development-srinagar',
    footerLabel: 'Web Development in Srinagar',
    breadcrumb: 'Web Development in Srinagar',
    seoTitle: 'Web Development in Srinagar | Local Web Developer — Wasim Pakhtoon',
    seoDescription:
      'A local web developer in Srinagar building fast, modern websites for houseboats, hotels, retailers and services around Dal Lake, Lal Chowk and the city.',
    h1: 'Web development in Srinagar',
    intro: [
      'Srinagar is the commercial and tourism heart of Kashmir — from the houseboats and shikaras of Dal Lake to the hotels, retailers and services around Lal Chowk and the wider city. For all of them, a customer’s first impression increasingly happens online.',
      'As a web developer based right here in Srinagar, I build websites that help local businesses look credible, get found on Google, and convert visitors into real customers. And because I am local, we can meet in person when a project calls for it, and move quickly.',
    ],
    blocks: [
      {
        title: 'For Dal Lake hospitality and houseboats',
        text: 'Houseboats and lakeside stays live or die by their photos and how easy they are to book. I build image-led sites that show the experience properly and put a direct enquiry button on every screen — so guests can reach you in a tap.',
      },
      {
        title: 'For Lal Chowk retail and services',
        text: 'Shops, clinics, restaurants and service businesses in the city need to be findable when someone searches nearby. I build sites with the local SEO signals and clear contact details that help you show up and get walk-ins and calls.',
      },
      {
        title: 'Local, so we can move fast',
        text: 'Being in Srinagar means we can meet when it helps, review the site together, and turn feedback around quickly. You are not dealing with a distant agency or a call centre — you are working directly with the person building your site.',
      },
    ],
    faqs: [
      {
        q: 'Can we meet in person in Srinagar?',
        a: 'Yes. I am based in Srinagar, so we can meet for a project that benefits from it. Many clients still prefer the speed of WhatsApp and calls — either works.',
      },
      {
        q: 'I have a houseboat on Dal Lake. What would my website need?',
        a: 'Strong photography, clear room and rate details, the experiences you offer, and a direct enquiry flow to WhatsApp. I also add the local structure and schema that help you appear in relevant Srinagar searches.',
      },
    ],
  },
];

export function getLocation(slug: string): LocationPage | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
