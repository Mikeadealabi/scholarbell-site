import type { Metadata } from "next";
import { X } from "lucide-react";
import { CtaBand, MoreLink, PageHero, SectionHead, Shot } from "@/components/ui";
import { SITE, SOLUTIONS, STEPS } from "@/content";

export const metadata: Metadata = {
  title: "Features",
  description: "Audience targeting with a live parent count, read and acknowledgement tracking, permission slips, a calendar that remembers changes, and one account per family.",
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
            <Shot src="/shots/composer.png" alt="The announcement composer showing a live count of how many parents will receive the message" />
            <Shot src="/shots/actions.png" alt="The actions tracker showing completed, outstanding and overdue responses" />
            <Shot src="/shots/calendar.png" alt="A calendar event with its change history" />
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-ink-soft">Looking for the problems these solve? <MoreLink href="/about/#problems">See the eight signs</MoreLink></p>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 md:grid-cols-2">
          <div className="card p-6">
            <p className="font-display text-lg font-semibold">A term-aware parent home page</p>
            <p className="mt-2 text-[15px] text-ink-soft">A welcome banner (&ldquo;Week 4 of 13&rdquo;) built from your own term dates, a message from the Principal or Director with an optional video from YouTube or Vimeo, and &ldquo;What we stand for&rdquo;. You edit all of it yourself.</p>
          </div>
          <div className="card p-6">
            <p className="font-display text-lg font-semibold">Optional AI help, always under your control</p>
            <p className="mt-2 text-[15px] text-ink-soft">A writing assistant helps staff turn rough notes into a clear announcement. It only suggests, and staff publish. Parents can also see a short, kind &ldquo;Your week&rdquo; summary written from the school&apos;s own facts. Both are off until your administrator switches them on.</p>
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
              <li>Write the notice, or turn rough notes into a clean message with the optional writing assistant.</li>
              <li>Pick the audience, for example Primary 4A. The live count tells you exactly how many parents will receive it.</li>
              <li>Attach a permission request and add the trip to the calendar in the same step.</li>
              <li>Publish. Parents are notified in the app and by email. You watch the completed, outstanding and overdue counts update.</li>
            </ol>
          </article>
          <article className="card p-6">
            <h3 className="font-display text-xl font-semibold">A parent with three children opens the app</h3>
            <p className="mt-4 flex gap-2 rounded-xl bg-danger-soft p-3 text-[15px] text-ink-soft"><X className="mt-0.5 h-4 w-4 shrink-0 text-danger" aria-hidden /><span><strong className="text-ink">Before:</strong> Three WhatsApp groups, two printed circulars in a school bag, and a message from last week she cannot find.</span></p>
            <p className="mt-4 text-sm font-semibold text-brand-strong">With ScholarBell</p>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-[15px] text-ink-soft marker:font-semibold marker:text-brand-strong">
              <li>One sign-in. The home page answers &ldquo;what do I need to know today?&rdquo; in priority order.</li>
              <li><strong className="text-ink">Action required</strong> comes first: a permission slip for David and a form for Sarah.</li>
              <li>Updates below are clearly labelled School-wide, Primary 4A or For Sarah.</li>
              <li>Coming up shows the calendar, including any change and why it moved. The documents she needs are one search away.</li>
            </ol>
          </article>
        </div>
        <div className="mt-8"><Shot src="/shots/feed.png" alt="The parent feed with badges showing who each update is for: School-wide, Primary 4A, or a single child" /></div>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Getting started" title="Simpler than you think" intro="You do not need an IT team. A guided setup checklist walks your administrator through each step and ticks itself off as you complete it." />
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
              <Shot src="/shots/import.png" alt="The import page: download the template, add your file, and check it before anything is saved" />
              <Shot src="/shots/setup.png" alt="The guided setup checklist that ticks itself off as the school completes each step" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
