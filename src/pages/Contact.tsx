import { Mail, MapPin, Phone } from 'lucide-react';
import { Seo } from '../seo/Seo';
import { graph, professionalServiceSchema, breadcrumbSchema } from '../seo/schema';
import { SITE, waLink } from '../data/site';
import { Breadcrumbs, useReveal, Eyebrow } from '../components/ui';
import { QuickForm } from '../components/QuickForm';

export default function Contact() {
  useReveal();
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];
  const jsonLd = graph(professionalServiceSchema(), breadcrumbSchema(crumbs));

  return (
    <>
      <Seo
        title="Contact Wasim Pakhtoon | Web Developer in Kashmir & Srinagar"
        description="Get in touch to start a website project. Message Wasim Pakhtoon on WhatsApp or email for web development and design in Srinagar, Kashmir and remotely."
        path="/contact"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={crumbs} />

      <section className="py-12 sm:py-16">
        <div className="container-max section-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="reveal">
            <Eyebrow>Let&apos;s talk</Eyebrow>
            <h1 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
              Start your website project
            </h1>
            <p className="mt-4 text-ink-soft max-w-lg">
              Tell me what you need and I&apos;ll reply on WhatsApp with honest advice and a clear
              quote — no pressure at all. Based in Srinagar, working with clients across Kashmir and
              remotely.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={waLink("Hi Wasim, I'd like to talk about a website for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-line bg-background p-4 hover:border-emerald/50 transition-colors"
              >
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-[color:var(--color-whatsapp)]/12 text-[color:var(--color-whatsapp)]">
                  <Phone size={20} />
                </span>
                <span>
                  <span className="block text-xs text-muted">WhatsApp (fastest)</span>
                  <span className="block font-semibold text-ink">{SITE.whatsappDisplay}</span>
                </span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 rounded-2xl border border-line bg-background p-4 hover:border-emerald/50 transition-colors"
              >
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-emerald-soft text-emerald">
                  <Mail size={20} />
                </span>
                <span>
                  <span className="block text-xs text-muted">Email</span>
                  <span className="block font-semibold text-ink break-all">{SITE.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-line bg-background p-4">
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-emerald-soft text-emerald">
                  <MapPin size={20} />
                </span>
                <span>
                  <span className="block text-xs text-muted">Based in</span>
                  <span className="block font-semibold text-ink">Srinagar, Jammu &amp; Kashmir</span>
                </span>
              </div>
            </div>
          </div>

          <div className="reveal">
            <QuickForm />
          </div>
        </div>
      </section>
    </>
  );
}
