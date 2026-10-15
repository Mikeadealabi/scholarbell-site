import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { AudienceCards, BookButton, CtaBand, MoreLink, SectionHead, Shot, SignInButton } from "@/components/ui";
import { PROBLEMS, SITE, SOLUTIONS, TRUST } from "@/content";

export const metadata: Metadata = { alternates: { canonical: `${SITE.url}/` } };

const HOW = [
  ["Set up with guidance", "We help you add your school's identity and bring your families across."],
  ["Invite every parent", "Each parent receives a personal invitation. The school confirms every guardian."],
  ["Publish and watch it land", "Send to the right families and see how it is landing."],
];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="badge bg-brand-soft text-brand-strong">For schools that want every parent informed</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Every parent informed. Every message reaching the <span className="marker">right family</span>.
          </h1>
          <p className="mt-5 text-lg text-ink-soft">
            ScholarBell is the secure way for your school to keep parents in the loop on their scholars. The right news, to the right parents, with proof they saw it.
          </p>
          <div className="mt-7 flex flex-wrap gap-3"><BookButton /><SignInButton /></div>
          <ul className="mt-8 space-y-2 text-[15px] text-ink-soft">
            {[
              "Each school's data is kept separate from every other school's",
              "Parents join by invitation only, confirmed by the school",
              "Works on any phone, with nothing to install",
            ].map((t) => (
              <li key={t} className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-ok" aria-hidden /> {t}</li>
            ))}
          </ul>
        </div>
        <Shot src="/shots/parent-home.png" alt="The ScholarBell parent home page showing the term banner, each child, and the actions waiting for the parent" priority />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16" aria-label="Who is this for">
        <AudienceCards />
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Problems you may have without knowing it" title="Does any of this sound like your school?" intro="Most schools do not say &quot;we have a communication problem.&quot; They say &quot;parents never read anything&quot; or &quot;my office is overwhelmed.&quot; The cause is the system between parents and staff." />
          <ul className="grid gap-5 md:grid-cols-2">
            {PROBLEMS.slice(0, 4).map((p) => (
              <li key={p.quote} className="card flex gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-warn-soft text-warn" aria-hidden><p.icon className="h-5 w-5" /></span>
                <div>
                  <p className="font-display text-lg font-semibold leading-snug">&ldquo;{p.quote}&rdquo;</p>
                  <p className="mt-2 text-[15px] text-ink-soft"><span className="font-semibold text-ink">What is really happening: </span>{p.truth}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center"><MoreLink href="/about/#problems">See all eight signs</MoreLink></p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead eyebrow="What ScholarBell does" title="One job, done properly" intro="Getting the right information to the right family and proving it arrived." />
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <ul className="space-y-4">
            {SOLUTIONS.slice(0, 4).map(([p, s]) => (
              <li key={p} className="card p-5"><p className="font-display text-lg font-semibold">{p}</p><p className="mt-1 text-[15px] text-ink-soft">{s}</p></li>
            ))}
          </ul>
          <Shot src="/shots/composer.png" alt="The announcement composer showing a live count of how many parents will receive the message" />
        </div>
        <p className="mt-8 text-center"><MoreLink href="/features/">Explore every feature</MoreLink></p>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="How it works" title="From sign-up to first announcement" />
          <ol className="grid gap-5 md:grid-cols-3">
            {HOW.map(([h, t], i) => (
              <li key={h} className="card p-6">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-sm font-bold text-brand-ink" aria-hidden>{i + 1}</span>
                <p className="mt-3 font-display text-lg font-semibold">{h}</p>
                <p className="mt-1 text-[15px] text-ink-soft">{t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead eyebrow="Built for trust" title="You are handing us information about children" intro="Here is how we protect it, in plain words." />
        <ul className="grid gap-5 md:grid-cols-2">
          {TRUST.slice(0, 4).map((t) => (
            <li key={t.title} className="card flex gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-strong" aria-hidden><t.icon className="h-5 w-5" /></span>
              <div><p className="font-display text-lg font-semibold">{t.title}</p><p className="mt-1 text-[15px] text-ink-soft">{t.text}</p></div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center"><MoreLink href="/security/">Read the full security page</MoreLink></p>
      </section>

      <CtaBand />
      <p className="pb-12 text-center text-sm text-ink-soft">Already a ScholarBell parent or staff member? <a className="font-semibold text-brand-strong hover:underline" href={SITE.signInUrl}>Sign in</a>. Questions? <Link className="font-semibold text-brand-strong hover:underline" href="/faq/">Read the FAQ</Link>.</p>
    </>
  );
}
