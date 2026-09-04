import { useState, type FormEvent } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { waLink } from '../data/site';

export function QuickForm() {
  const [name, setName] = useState('');
  const [type, setType] = useState('Business website');
  const [detail, setDetail] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg =
      `Hi Wasim, I'd like a website.\n` +
      `• Name: ${name || '—'}\n` +
      `• Project: ${type}\n` +
      (detail ? `• Details: ${detail}\n` : '') +
      `\nCan we talk?`;
    window.open(waLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-line bg-background shadow-[0_20px_60px_-30px_rgba(4,120,87,0.35)] p-5 sm:p-6"
      aria-label="Website enquiry form"
    >
      <p className="text-sm font-semibold text-ink mb-4">Tell me what you need — I reply on WhatsApp</p>
      <div className="grid gap-3">
        <label className="sr-only" htmlFor="qf-name">Your name</label>
        <input
          id="qf-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-xl border border-line bg-surface/60 px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-emerald focus:bg-white transition"
        />
        <div className="relative">
          <label className="sr-only" htmlFor="qf-type">Project type</label>
          <select
            id="qf-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full appearance-none rounded-xl border border-line bg-surface/60 px-4 py-3 text-sm text-ink focus:outline-none focus:border-emerald focus:bg-white transition"
          >
            <option>Business website</option>
            <option>Hotel / homestay website</option>
            <option>Travel agency website</option>
            <option>Ecommerce / online store</option>
            <option>Redesign my old website</option>
            <option>Something else</option>
          </select>
          <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted" />
        </div>
        <label className="sr-only" htmlFor="qf-detail">One line about your business</label>
        <input
          id="qf-detail"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          placeholder="One line about your business (optional)"
          className="w-full rounded-xl border border-line bg-surface/60 px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-emerald focus:bg-white transition"
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald text-white text-sm font-semibold px-5 py-3.5 hover:bg-emerald-deep transition-colors"
      >
        Send on WhatsApp <ArrowRight size={16} />
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        Free advice • No pressure • Usually reply within a few hours
      </p>
    </form>
  );
}
