import type { Metadata } from "next";
import { CtaBand, PageHero, SectionHead, Shot } from "@/components/ui";
import { SITE, TRUST } from "@/content";

export const metadata: Metadata = {
  title: "Security and privacy",
  description: "How ScholarBell protects information about children and families, in plain words.",
  alternates: { canonical: `${SITE.url}/security/` },
};

export default function Security() {
  return (
    <>
      <PageHero eyebrow="Security and privacy" title="You are handing us information about children and families" intro="Here is how we protect it, in plain words." />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <ul className="grid gap-5 md:grid-cols-2">
          {TRUST.map((t) => (
            <li key={t.title} className="card flex gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-strong" aria-hidden><t.icon className="h-5 w-5" /></span>
              <div><p className="font-display text-lg font-semibold">{t.title}</p><p className="mt-1 text-[15px] text-ink-soft">{t.text}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-2">
          <div>
            <SectionHead align="left" eyebrow="The audit log" title="A record you can rely on" intro="Important actions are recorded, so you can always answer who did what, and when." />
            <div className="rounded-2xl border border-line bg-canvas p-6">
              <p className="font-display text-lg font-semibold">Our honest position</p>
              <p className="mt-2 text-[15px] text-ink-soft">Our protections are tested automatically every time the software changes. We have not yet had an independent security review, and we will say so here when we have.</p>
            </div>
          </div>
          <Shot src="/shots/audit.png" alt="The audit log, with details hidden" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <SectionHead eyebrow="If you leave" title="Your data belongs to your school" />
        <p className="text-[17px] leading-relaxed text-ink-soft">If you leave, you can request a full copy of the school&apos;s data, and it is then permanently deleted. We will walk you through the process in the demo.</p>
      </section>

      <CtaBand title="Have a security question? Ask us directly." />
    </>
  );
}
