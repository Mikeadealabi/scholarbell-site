import type { Metadata } from "next";
import { X } from "lucide-react";
import { CtaBand, MoreLink, PageHero, SectionHead } from "@/components/ui";
import { COSTS, NOT, PROBLEMS, SITE } from "@/content";

export const metadata: Metadata = {
  title: "About",
  description: "ScholarBell is the secure way for schools to keep parents in the loop on their scholars. The problems we solve, what we are not, and why we built it.",
  alternates: { canonical: `${SITE.url}/about/` },
};

export default function About() {
  return (
    <>
      <PageHero eyebrow="About ScholarBell" title="The system between your school and your parents" intro="Most schools do not say &quot;we have a communication problem.&quot; They say &quot;parents never read anything&quot; or &quot;my office is overwhelmed.&quot; This is what we built to fix it, and why." />

      <section id="problems" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
        <SectionHead eyebrow="Problems you may have without knowing it" title="Does any of this sound like your school?" intro="Here are eight things we hear. If three of them sound familiar, the cause is not your parents or your staff. It is the system between them." />
        <ol className="grid gap-5 md:grid-cols-2">
          {PROBLEMS.map((p, i) => (
            <li key={p.quote} className="card flex gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-warn-soft text-warn" aria-hidden><p.icon className="h-5 w-5" /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Sign {i + 1} of 8</p>
                <p className="mt-1 font-display text-lg font-semibold leading-snug">&ldquo;{p.quote}&rdquo;</p>
                <p className="mt-2 text-[15px] text-ink-soft"><span className="font-semibold text-ink">What is really happening: </span>{p.truth}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-10 max-w-2xl text-center font-display text-xl font-semibold">
          You do not need more reminders. You need a system where the right parent gets the right message, and you can see that it landed.
        </p>
        <p className="mt-6 text-center"><MoreLink href="/features/">See how ScholarBell solves each one</MoreLink></p>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="The hidden bill" title="What it quietly costs you" intro="None of these problems send an invoice, which is why they last. The cost shows up elsewhere:" />
          <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {COSTS.map(([h, t]) => (
              <li key={h} className="card p-5"><p className="font-display text-lg font-semibold">{h}</p><p className="mt-1 text-[15px] text-ink-soft">{t}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <SectionHead eyebrow="Focus" title="What ScholarBell is not" intro="We do one thing well: secure communication between your school and your parents. We are deliberately not:" />
        <ul className="space-y-3">
          {NOT.map((n) => <li key={n} className="card flex gap-3 p-4 text-[15px] text-ink-soft"><X className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" aria-hidden /> {n}</li>)}
        </ul>
        <p className="mt-6 text-center text-[15px] text-ink-soft">That focus is why parents trust it. They only see what is meant for their own children.</p>
      </section>

      <section id="story" className="scroll-mt-20 border-y border-line bg-surface py-16">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHead eyebrow="Our story" title="Why we built ScholarBell" />
          <div className="space-y-4 text-[17px] leading-relaxed text-ink-soft">
            <p>We are a technology-solution provider, and most of our work has been building systems that organisations in Nigeria have to be able to trust: platforms where the right person sees the right information, where every action leaves a record, and where a mistake cannot quietly expose someone else&apos;s data.</p>
            <p>When we looked closely at how schools talk to parents, we saw something that would not be accepted anywhere else. A child&apos;s trip permission, a fee notice or a change of date was travelling through personal WhatsApp groups, paper circulars and a front-desk phone. There was no record of who had been told, no control over who saw what, and no way for a principal to know whether the message had landed.</p>
            <p>Schools were not careless. They were using the only tools within reach. But they were handling information about children, and that deserves the same discipline we expect when handling money or health records.</p>
            <p>So we built ScholarBell around three beliefs:</p>
            <ol className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-brand-strong">
              <li><strong className="text-ink">A parent should never have to wonder.</strong> Each family sees exactly what concerns their own children, clearly labelled, in one place.</li>
              <li><strong className="text-ink">A school should never have to guess.</strong> If a message matters, you should be able to see who has read it and who has acted on it.</li>
              <li><strong className="text-ink">Security is not a feature you add later.</strong> Separation between schools, careful access and a record of important actions are built into the foundation.</li>
            </ol>
            <p>We built ScholarBell for the principal who wants an organised school, the administrator who wants their evenings back, and the parent who just wants to know what is happening with their child.</p>
            <p>If that is the kind of school you are building, we would be glad to show you how it works.</p>
            <p className="font-display text-lg font-semibold text-ink">The ScholarBell team</p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
