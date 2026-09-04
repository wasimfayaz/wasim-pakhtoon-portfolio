/* ------------------------------------------------------------------ */
/*  Single source of truth for site-wide constants                     */
/* ------------------------------------------------------------------ */

export const SITE = {
  name: 'Wasim Pakhtoon',
  role: 'Web Developer & Designer',
  domain: 'https://wasimpakhtoon.com',
  whatsappNumber: '919596390069', // +91 95963 90069
  whatsappDisplay: '+91 95963 90069',
  email: 'contact@wasimpakhtoon.com',
  locality: 'Srinagar',
  region: 'Jammu & Kashmir',
  country: 'IN',
  geo: { lat: '34.0837', lng: '74.7973' },
  ogImage: 'https://wasimpakhtoon.com/og-image.jpg',
  sameAs: [
    'https://www.instagram.com/wasimpakhtoon',
  ],
} as const;

/** Absolute URL for a given path (path should start with "/") */
export function absUrl(path: string): string {
  if (path === '/') return `${SITE.domain}/`;
  return `${SITE.domain}${path}`;
}

/** WhatsApp deep link with a pre-filled message */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
