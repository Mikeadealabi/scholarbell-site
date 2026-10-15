import type { Metadata } from "next";
import { X } from "lucide-react";
import { CtaBand, MoreLink, PageHero, SectionHead, Shot } from "@/components/ui";
import { SITE, SOLUTIONS, STEPS } from "@/content";

export const metadata: Metadata = {
  title: "Features",
  description: "Reach the right families, see that it landed, and keep every date and permission in one place. We show the detail in a live demo.",
  alternates: { canonical: `${SITE.url}/features/` },
};

export default function Features() {
  return (
    <>
      <PageHero eyebrow="Features" title="One job, done properly" intro="Getting the right information to the right family and proving it arrived. Every feature below answers a real problem schools tell us about." />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <dl className="divide-y divide-line rounded-2xl border border-line bg-surface">
            {SOLUTIONS.map(([p, s], i) => (
              <div key={p} className="grid gap-1 p-4 sm:grid-cols-[11rem_1fr] sm:gap-4">
                <dt className="flex gap-2 text-sm font-semibold text-brand-strong"><span className="tabular-nums text-ink-faint">{i + 1}.</span> {p}</dt>
                <dd className="text-[15px] text-ink-soft">{s}</dd>
              </div>
            ))}
          </dl>
          <div className="space-y-6 lg:sticky lg:top-24">
            <Shot src="/shots/composer.png" alt="The announcement composer showing how many parents will receive the message" />
            <Shot src="/shots/actions.png" alt="The actions tracker, with details hidden" />
            <Shot src="/shots/calendar.png" alt="A calendar event, with details hidden" />
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-ink-soft">Looking for the problems these solve? <MoreLink href="/about/#problems">See the eight signs</MoreLink></p>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 md:grid-cols-2">
          <div className="card p-6">
            <p className="font-display text-lg font-semibold">A term-aware parent home page</p>
            <p className="mt-2 text-[15px] text-ink-soft">A home page that reflects your school&apos;s own term and your own voice. You edit all of it yourself.</p>
          </div>
          <div className="card p-6">
            <p className="font-display text-lg font-semibold">Optional AI help, always under your control</p>
            <p className="mt-2 text-[15px] text-ink-soft">Optional AI help for staff. It is off until your administrator switches it on, and staff always decide what is published.</p>
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
        <SectionHead eyebrow="A day in the life" title="Before and after" />
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="card p-6">
            <h3 className="font-display text-xl font-semibold">The principal publishes a trip notice</h3>
            <p className="mt-4 flex gap-2 rounded-xl bg-danger-soft p-3 text-[15px] text-ink-soft"><X className="mt-0.5 h-4 w-4 shrink-0 text-danger" aria-hidden /><span><strong className="text-ink">Before:</strong> Type the notice. Paste it into three WhatsApp groups and a printed circular. Wait. Phone the parents who haven&apos;t replied. Collect paper slips. Count them by hand.</span></p>
            <p className="mt-4 text-sm font-semibold text-brand-strong">With ScholarBell</p>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-[15px] text-ink-soft marker:font-semibold marker:text-brand-strong">
              <li>Write the notice and choose who it is for.</li>
              <li>Know how many parents will receive it before you publish.</li>
              <li>Ask for permission and add the trip to the calendar in the same flow.</li>
              <li>Publish, then watch the responses come in.</li>
            </ol>
          </article>
          <article className="card p-6">
            <h3 className="font-display text-xl font-semibold">A parent with three children opens the app</h3>
            <p className="mt-4 flex gap-2 rounded-xl bg-danger-soft p-3 text-[15px] text-ink-soft"><X className="mt-0.5 h-4 w-4 shrink-0 text-danger" aria-hidden /><span><strong className="text-ink">Before:</strong> Three WhatsApp groups, two printed circulars in a school bag, and a message from last week she cannot find.</span></p>
            <p className="mt-4 text-sm font-semibold text-brand-strong">With ScholarBell</p>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-[15px] text-ink-soft marker:font-semibold marker:text-brand-strong">
              <li>One sign-in for the whole family.</li>
              <li>What needs her attention comes first.</li>
              <li>Every update is clearly labelled for the child it concerns.</li>
              <li>Dates and documents are easy to find.</li>
            </ol>
          </article>
        </div>
        <div className="mt-8"><Shot src="/shots/feed.png" alt="The parent feed, with details hidden" /></div>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Getting started" title="Simpler than you think" intro="You do not need an IT team. We guide your administrator through each step." />
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <ol className="space-y-4">
              {STEPS.map(([b, r], i) => (
                <li key={b} className="card flex gap-4 p-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-brand-ink" aria-hidden>{i + 1}</span>
                  <p className="text-[15px] text-ink-soft"><strong className="text-ink">{b}</strong>{r}</p>
                </li>
              ))}
            </ol>
            <div className="space-y-6">
              <Shot src="/shots/import.png" alt="The import page, with details hidden" />
              <Shot src="/shots/setup.png" alt="The guided setup checklist, with details hidden" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
