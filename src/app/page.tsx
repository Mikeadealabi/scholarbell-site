import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { FeatureCarousel } from "@/components/FeatureCarousel";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { AudienceCards, BookButton, HeroShot, MoreLink, SectionHead, SignInButton } from "@/components/ui";
import { TrustGuardrails } from "@/components/TrustGuardrails";
import { WorkTogether } from "@/components/WorkTogether";
import { PROBLEMS, SITE } from "@/content";

export const metadata: Metadata = { alternates: { canonical: `${SITE.url}/` } };

const HOW = [
  ["Set up with guidance", "We help you add your school's identity and bring your families across."],
  ["Invite every parent", "Each parent receives a personal invitation. The school confirms every guardian."],
  ["Publish and watch it land", "Send to the right families and see how it is landing."],
];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-14 sm:py-20 lg:grid-cols-[1fr_1.1fr]">
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
        <HeroShot src="/shots/parent-home.png" alt="The ScholarBell parent home page showing the term banner, each child, and the actions waiting for the parent" priority />
      </section>

      <Reveal>
        <section className="mx-auto max-w-[1400px] px-6 pb-16" aria-label="Who is this for">
          <AudienceCards />
        </section>
      </Reveal>

      <Reveal>
        <section className="border-y border-line bg-surface py-16">
          <div className="mx-auto max-w-[1400px] px-6">
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
            <p className="mt-8 text-center"><MoreLink href="/about/#problems">See all nine signs</MoreLink></p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-[1400px] px-6 py-16">
          <SectionHead eyebrow="What ScholarBell does" title="One job, done properly" intro="Getting the right information to the right family and proving it arrived." />
          <FeatureCarousel />
          <p className="mt-8 text-center"><MoreLink href="/features/">Explore every feature</MoreLink></p>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-y border-line bg-surface py-16">
          <div className="mx-auto max-w-[1400px] px-6">
            <SectionHead eyebrow="One shared record" title="Office, teachers and parents, in step" intro="Everyone sees their own part of the same message, response and change. Nobody is left guessing what happened." />
            <WorkTogether />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-[1400px] px-6 py-16">
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
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-brand py-16 text-brand-ink sm:py-20">
          <div className="mx-auto max-w-[1400px] px-6">
            <TrustGuardrails />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <CtaBand />
      </Reveal>
      <p className="pb-12 text-center text-sm text-ink-soft">Already a ScholarBell parent or staff member? <a className="font-semibold text-brand-strong hover:underline" href={SITE.signInUrl}>Sign in</a>. Questions? <Link className="font-semibold text-brand-strong hover:underline" href="/faq/">Read the FAQ</Link>.</p>
    </>
  );
}
