import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, LogIn, MessageCircle, Users } from "lucide-react";
import { SITE } from "@/content";

/** A product screenshot from the seeded demo school. Always labelled as sample data. */
export function Shot({ src, alt, caption, priority }: { src: string; alt: string; caption?: string; priority?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-surface shadow-pop">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={1440} height={900} loading={priority ? "eager" : "lazy"} className="block h-auto w-full" />
      <figcaption className="border-t border-line px-4 py-2 text-xs text-ink-faint">{caption ?? "Demo school, sample data"}</figcaption>
    </figure>
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

export function CtaBand({ title = "In 30 minutes, we'll show you how your school's problems get solved." }: { title?: string }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <div className="card overflow-hidden">
        <div className="bg-brand px-6 py-10 text-center text-brand-ink sm:px-10">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">Tell us a little about your school and we will walk you through ScholarBell using a demo school that looks like yours. No pressure and no jargon.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn !min-h-[48px] !px-6 !text-base bg-surface text-ink hover:opacity-90"><MessageCircle className="h-5 w-5" aria-hidden /> Book on WhatsApp</a>
            <a href={`tel:${SITE.phone1.tel}`} className="btn !min-h-[48px] !px-6 !text-base border border-white/40 text-brand-ink hover:bg-white/10">Call {SITE.phone1.label}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
