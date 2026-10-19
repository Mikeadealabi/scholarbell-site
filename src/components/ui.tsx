import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, LogIn, MessageCircle, Users } from "lucide-react";
import { SITE } from "@/content";

/** A product screenshot from the seeded demo school. */
export function Shot({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-surface shadow-pop">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={1440} height={900} loading={priority ? "eager" : "lazy"} className="block h-auto w-full" />
    </figure>
  );
}

/** The hero screenshot with two outcome cards drifting over it: what the product delivers, never how. Built from brand tokens, not screenshots, so nothing new leaks. */
export function HeroShot({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative">
      <Shot src={src} alt={alt} priority={priority} />
      <div className="animate-float-a pointer-events-none absolute -right-3 -top-5 hidden w-52 rounded-2xl border border-line bg-surface p-3.5 shadow-pop sm:block lg:-right-6 lg:w-56">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-strong" aria-hidden><Users className="h-4 w-4" /></span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-ink">Mrs. Okafor</p>
            <p className="truncate text-[11px] text-ink-faint">Primary 4A, class teacher</p>
          </div>
        </div>
        <p className="mt-2.5 flex items-center gap-1.5 text-[12px] font-semibold text-ink"><Check className="h-3.5 w-3.5 shrink-0 text-ok" aria-hidden /> Sent to 36 parents · 32 already read</p>
      </div>
      <div className="animate-float-b pointer-events-none absolute -bottom-6 -left-3 hidden w-48 rounded-2xl border border-line bg-surface p-3 shadow-pop sm:block lg:-left-6">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-xl bg-brand text-brand-ink" aria-hidden>
            <span className="text-[9px] font-bold uppercase leading-none">Oct</span>
            <span className="text-base font-bold leading-none">12</span>
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-ink">Sports Day moved</p>
            <p className="truncate text-[11px] text-ink-faint">All parents notified</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The composer screenshot with one reach card drifting over it: a smaller echo of HeroShot for the second selling image. */
export function ComposerShot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      <Shot src={src} alt={alt} />
      <div className="animate-float-a pointer-events-none absolute -right-3 -top-5 hidden w-44 rounded-2xl border border-line bg-surface p-3 shadow-pop sm:block lg:-right-7">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">This message</p>
        <p className="mt-1 text-[13px] font-semibold text-ink">Reaching 212 parents</p>
        <p className="text-[11px] text-ink-faint">Primary 4A &amp; 4B only</p>
      </div>
    </div>
  );
}

export function SectionHead({ eyebrow, title, intro, align = "center" }: { eyebrow: string; title: string; intro?: string; align?: "center" | "left" }) {
  return (
    <div className={`mb-10 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-strong">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-ink-soft">{intro}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro: string }) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-strong">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">{intro}</p>
      </div>
    </section>
  );
}

export function BookButton({ className = "" }: { className?: string }) {
  return <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className={`btn btn-primary !min-h-[48px] !px-6 !text-base ${className}`}><MessageCircle className="h-5 w-5" aria-hidden /> Book a walkthrough</a>;
}

export function SignInButton({ className = "" }: { className?: string }) {
  return <a href={SITE.signInUrl} className={`btn btn-secondary !min-h-[48px] !px-6 !text-base ${className}`}><LogIn className="h-5 w-5" aria-hidden /> Sign in</a>;
}

export function MoreLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="inline-flex items-center gap-1.5 font-semibold text-brand-strong hover:underline">{children} <ArrowRight className="h-4 w-4" aria-hidden /></Link>;
}

/** Two doors for the two kinds of visitor: a school leader deciding, and a parent or staff member who just needs in. */
export function AudienceCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <div className="card flex flex-col p-6">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-strong" aria-hidden><Users className="h-5 w-5" /></span>
        <h3 className="mt-4 font-display text-xl font-semibold">I run or lead a school</h3>
        <p className="mt-1 flex-1 text-[15px] text-ink-soft">See how ScholarBell gets the right message to the right family, and proves it landed. Thirty minutes, no pressure, no jargon.</p>
        <div className="mt-4 flex flex-wrap gap-3"><BookButton /></div>
      </div>
      <div className="card flex flex-col p-6">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-ink" aria-hidden><LogIn className="h-5 w-5" /></span>
        <h3 className="mt-4 font-display text-xl font-semibold">I am a parent or school staff member</h3>
        <p className="mt-1 flex-1 text-[15px] text-ink-soft">Sign in to see what matters for your children. New here? Parents join by invitation: ask your school office to invite you.</p>
        <div className="mt-4"><SignInButton /></div>
      </div>
    </div>
  );
}

