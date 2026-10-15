import Link from "next/link";
import { LogIn } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, SITE } from "@/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5"><Logo /><span className="font-display text-lg font-semibold">ScholarBell</span></div>
          <p className="mt-3 max-w-sm text-[15px] text-ink-soft">{SITE.tagline} A secure way for schools to reach the right families, with proof the message landed.</p>
          <a href={SITE.signInUrl} className="btn btn-primary mt-4"><LogIn className="h-4 w-4" aria-hidden /> Sign in to ScholarBell</a>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Explore</p>
          <ul className="mt-3 space-y-2 text-[15px]">
            <li><Link href="/" className="text-ink-soft hover:text-ink">Home</Link></li>
            {NAV.map((n) => <li key={n.href}><Link href={n.href} className="text-ink-soft hover:text-ink">{n.label}</Link></li>)}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Talk to us</p>
          <ul className="mt-3 space-y-2 text-[15px]">
            <li><a className="text-ink-soft hover:text-ink" href={`tel:${SITE.phone1.tel}`}>{SITE.phone1.label}</a></li>
            <li><a className="text-ink-soft hover:text-ink" href={`tel:${SITE.phone2.tel}`}>{SITE.phone2.label}</a></li>
            <li><a className="text-ink-soft hover:text-ink" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-4 py-4 text-center text-xs text-ink-faint">ScholarBell. {SITE.tagline}</div>
    </footer>
  );
}
