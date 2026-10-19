import Link from "next/link";
import { LogIn, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/content";

const COLUMNS: { heading: string; links: { href: string; label: string; external?: boolean }[] }[] = [
  {
    heading: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/features/", label: "Features" },
      { href: "/security/", label: "Security" },
      { href: "/about/", label: "About" },
      { href: "/faq/", label: "FAQ" },
      { href: "/help/", label: "Help centre" },
      { href: "/contact/", label: "Contact" },
    ],
  },
  {
    heading: "For school leaders",
    links: [
      { href: SITE.whatsapp, label: "Book a walkthrough", external: true },
      { href: `tel:${SITE.phone1.tel}`, label: `Call ${SITE.phone1.label}`, external: true },
      { href: "/about/#problems", label: "The nine signs we hear" },
      { href: "/about/#story", label: "Why we built ScholarBell" },
    ],
  },
  {
    heading: "For parents & staff",
    links: [
      { href: SITE.signInUrl, label: "Sign in", external: true },
      { href: "/help/signing-in/", label: "Trouble signing in?" },
      { href: "/security/", label: "How we protect your data" },
      { href: "/features/#how", label: "A day in the life" },
    ],
  },
  {
    heading: "Talk to us",
    links: [
      { href: `tel:${SITE.phone1.tel}`, label: SITE.phone1.label, external: true },
      { href: `tel:${SITE.phone2.tel}`, label: SITE.phone2.label, external: true },
      { href: SITE.whatsapp, label: "WhatsApp us", external: true },
      { href: "/contact/", label: "All ways to reach us" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
          <div className="flex items-center gap-2.5"><Logo /><span className="font-display text-lg font-semibold">ScholarBell</span></div>
          <p className="mt-3 max-w-xs text-[15px] text-ink-soft">{SITE.tagline}</p>
          <a href={SITE.signInUrl} className="btn btn-primary mt-4"><LogIn className="h-4 w-4" aria-hidden /> Sign in</a>
        </div>
        {COLUMNS.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{col.heading}</p>
            <ul className="mt-3 space-y-2 text-[15px]">
              {col.links.map((l) =>
                l.external ? (
                  <li key={l.label}><a className="text-ink-soft hover:text-ink" href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}>{l.label}</a></li>
                ) : (
                  <li key={l.label}><Link href={l.href} className="text-ink-soft hover:text-ink">{l.label}</Link></li>
                ),
              )}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-6 py-4 text-xs text-ink-faint">
          <p>ScholarBell. {SITE.tagline}</p>
          <div className="flex items-center gap-4">
            <a href={`tel:${SITE.phone1.tel}`} className="flex items-center gap-1.5 text-ink-soft hover:text-ink"><Phone className="h-3.5 w-3.5" aria-hidden /> Call us</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-ink-soft hover:text-ink"><MessageCircle className="h-3.5 w-3.5" aria-hidden /> WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
