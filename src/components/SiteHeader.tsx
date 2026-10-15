"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogIn, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { NAV, SITE } from "@/content";

export function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  const active = (href: string) => path === href || path === href.replace(/\/$/, "");
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="ScholarBell home">
          <Logo />
          <span className="font-display text-lg font-semibold">ScholarBell</span>
        </Link>
        <nav aria-label="Main" className="ml-6 hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={active(n.href) ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium hover:bg-brand-soft hover:text-ink ${active(n.href) ? "bg-brand-soft text-ink" : "text-ink-soft"}`}>{n.label}</Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact/" className="btn btn-secondary btn-sm hidden whitespace-nowrap lg:inline-flex">Book a walkthrough</Link>
          <a href={SITE.signInUrl} className="btn btn-primary !min-h-[44px] whitespace-nowrap !px-4"><LogIn className="h-4 w-4" aria-hidden /> Sign in</a>
          <button type="button" className="btn btn-ghost !min-w-[44px] !px-2 md:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-surface px-4 py-3 md:hidden">
          <ul className="space-y-1">
            {NAV.map((n) => (
              <li key={n.href}><Link href={n.href} className="block rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-brand-soft">{n.label}</Link></li>
            ))}
            <li><Link href="/contact/" className="block rounded-lg px-3 py-3 text-base font-semibold text-brand-strong hover:bg-brand-soft">Book a walkthrough</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
