import type { Metadata } from "next";
import { Check, LogIn, Phone } from "lucide-react";
import { SignInButton } from "@/components/ui";
import { WhatsAppMessageCard } from "@/components/WhatsAppMessageCard";
import { SITE } from "@/content";

export const metadata: Metadata = {
  title: "Book a walkthrough",
  description: "Book a 30-minute ScholarBell walkthrough on WhatsApp or by phone. Parents and staff can sign in from here.",
  alternates: { canonical: `${SITE.url}/contact/` },
};

const REASONS = [
  "See it running with a demo school that looks like yours",
  "Get a straight answer on pricing, based on your number of students",
  "Ask us anything: security, setup, moving your data, all of it",
];

const AFTER = [
  ["You tell us about your school", "A couple of lines is enough. We don't need a procurement document."],
  ["We reply and book a walkthrough", "Thirty minutes, over a call or WhatsApp, whichever suits you."],
  ["You decide", "No pressure, no jargon. If it's not a fit, we'll say so."],
] as const;

export default function Contact() {
  return (
    <section className="mx-auto grid max-w-[1400px] items-start gap-12 px-6 py-14 sm:py-20 lg:grid-cols-[1fr_1fr]">
      <div>
        <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          See ScholarBell <span className="marker">working in your school</span>, not a slideshow.
        </h1>

        <ul className="mt-7 space-y-3">
          {REASONS.map((r) => (
            <li key={r} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-strong" aria-hidden><Check className="h-3.5 w-3.5" /></span>
              <span className="text-[15px] text-ink-soft">{r}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex items-center gap-3 border-t border-line pt-6 text-[15px] text-ink-soft">
          <LogIn className="h-4 w-4 shrink-0 text-ink-faint" aria-hidden />
          Parent or school staff? <a href={SITE.signInUrl} className="font-semibold text-brand-strong hover:underline">Sign in</a> instead.
        </div>

        <div className="mt-8 rounded-2xl bg-canvas p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">What happens after you reach out</p>
          <ol className="mt-4 space-y-4">
            {AFTER.map(([h, t], i) => (
              <li key={h} className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-[12px] font-bold text-brand-ink" aria-hidden>{i + 1}</span>
                <div><p className="text-[14px] font-semibold text-ink">{h}</p><p className="text-[13px] text-ink-faint">{t}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div>
        <WhatsAppMessageCard />
        <div className="card mt-5 flex items-center gap-4 p-5">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-strong" aria-hidden><Phone className="h-5 w-5" /></span>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wide text-ink-faint">Prefer to call?</p>
            <p className="text-[15px]"><a className="font-semibold hover:underline" href={`tel:${SITE.phone1.tel}`}>{SITE.phone1.label}</a> · <a className="font-semibold hover:underline" href={`tel:${SITE.phone2.tel}`}>{SITE.phone2.label}</a></p>
          </div>
        </div>
        <div className="card mt-5 flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-ink" aria-hidden><LogIn className="h-5 w-5" /></span>
          <div className="flex-1">
            <p className="font-display text-base font-semibold">Parent or school staff?</p>
            <p className="text-[14px] text-ink-soft">Sign in to see what matters for your children. No invitation yet? Ask your school office.</p>
          </div>
          <SignInButton />
        </div>
      </div>
    </section>
  );
}
