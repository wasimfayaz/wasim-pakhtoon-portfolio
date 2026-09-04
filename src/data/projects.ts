export type Site = {
  title: string;
  tag: string;
  desc: string;
  url: string;
};

export const LIVE_PROJECTS: Site[] = [
  {
    title: 'Shelter Trips',
    tag: 'Travel Agency',
    desc: 'A live booking website for Kashmir & Ladakh tour packages, luxury stays, and private cabs — built for real enquiries.',
    url: 'https://www.sheltertrips.com',
  },
  {
    title: 'The Power Planet',
    tag: 'Solar Energy',
    desc: 'A lead-generation website for a solar energy company in Kashmir, built to convert visitors into subsidy enquiries.',
    url: 'https://thepowerplanet.com',
  },
  {
    title: 'Cinmach Productions',
    tag: 'Creative Agency',
    desc: 'A premium portfolio site for a creative and marketing agency, showcasing cinematic campaigns and brand films.',
    url: 'https://cinmachproductions.com',
  },
];

export const TEMPLATES: Site[] = [
  {
    title: 'SERAI — Travel Agency Template',
    tag: 'Ready for Travel Agencies',
    desc: 'A bespoke-feeling template for tour operators — packages, houseboats & hotels, and a simple trip-planning flow.',
    url: 'https://travel-agency-web1.vercel.app/',
  },
  {
    title: 'Houseboat Template',
    tag: 'Ready for Houseboats & Stays',
    desc: 'A luxury houseboat / stay template with rooms, dining, gallery, and a direct booking flow — ready to be branded.',
    url: 'https://houseboat-srinagar.vercel.app/',
  },
  {
    title: 'KAYA — Hotel Template',
    tag: 'Ready for Hotels & Resorts',
    desc: 'A boutique hotel template with rooms, reviews, gallery, and an enquiry flow — ready to be set up for your property.',
    url: 'https://hotel-web-1-mocha.vercel.app/',
  },
];
