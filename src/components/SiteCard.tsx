import { ArrowRight } from 'lucide-react';
import type { Site } from '../data/projects';

export function SiteCard({ s, cta }: { s: Site; cta: string }) {
  return (
    <a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal lift group block rounded-2xl overflow-hidden border border-line bg-background hover:border-emerald/40 hover:shadow-[0_28px_70px_-45px_rgba(4,120,87,0.5)]"
    >
      <div className="relative aspect-[16/10] bg-surface overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-9 bg-surface-2 border-b border-line flex items-center gap-1.5 px-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-3 truncate text-[11px] text-muted font-medium">
            {s.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </span>
        </div>
        <div className="absolute inset-0 top-9 grid place-items-center bg-gradient-to-br from-emerald-soft to-surface p-6 text-center transition-transform duration-500 group-hover:scale-[1.03]">
          <span className="font-display font-bold text-2xl text-ink/80">{s.title}</span>
        </div>
        <span className="absolute top-[3.1rem] left-3 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold text-emerald border border-line">
          {s.tag}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display font-semibold text-lg text-ink">{s.title}</h3>
          <ArrowRight size={16} className="shrink-0 text-emerald opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </div>
        <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.desc}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald">
          {cta} <ArrowRight size={14} />
        </span>
      </div>
    </a>
  );
}
