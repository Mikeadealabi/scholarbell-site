import type { Metadata } from "next";
import { LogIn, MessageCircle, Phone } from "lucide-react";
import { PageHero, SignInButton } from "@/components/ui";
import { SITE } from "@/content";

export const metadata: Metadata = {
  title: "Book a walkthrough",
  description: "Book a 30-minute ScholarBell walkthrough on WhatsApp or by phone. Parents and staff can sign in from here.",
  alternates: { canonical: `${SITE.url}/contact/` },
};

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="See it working in your school" intro="In 30 minutes, we'll show you how your school's problems get solved, using a demo school that looks like yours. No pressure and no jargon." />

      <section className="mx-auto grid max-w-4xl gap-6 px-4 py-16 md:grid-cols-2">
        <div className="card p-6">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-strong" aria-hidden><MessageCircle className="h-5 w-5" /></span>
          <h2 className="mt-4 font-display text-xl font-semibold">Message us on WhatsApp</h2>
          <p className="mt-1 text-[15px] text-ink-soft">The message is ready-written. Add your school name, your role and the number of students, then send.</p>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4 !min-h-[48px] !px-6 !text-base"><MessageCircle className="h-5 w-5" aria-hidden /> Book on WhatsApp</a>
          <p className="hint">{SITE.phone1.label}</p>
        </div>
        <div className="card p-6">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-strong" aria-hidden><Phone className="h-5 w-5" /></span>
          <h2 className="mt-4 font-display text-xl font-semibold">Call us</h2>
          <ul className="mt-2 space-y-2 text-[15px]">
            <li><a className="text-lg font-semibold hover:underline" href={`tel:${SITE.phone1.tel}`}>{SITE.phone1.label}</a></li>
            <li><a className="text-lg font-semibold hover:underline" href={`tel:${SITE.phone2.tel}`}>{SITE.phone2.label}</a></li>
          </ul>
          <p className="hint">For pricing, call or message us for a quote based on your number of students.</p>
        </div>
        <div className="card flex flex-col items-start gap-3 p-6 md:col-span-2 md:flex-row md:items-center">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-ink" aria-hidden><LogIn className="h-5 w-5" /></span>
          <div className="flex-1">
            <h2 className="font-display text-xl font-semibold">Parent or school staff?</h2>
            <p className="text-[15px] text-ink-soft">Sign in to see what matters for your children. Parents join by invitation, so if you have not received one, ask your school office to invite you.</p>
          </div>
          <SignInButton />
        </div>
      </section>
    </>
  );
}
