import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/ui";
import { FAQ as ITEMS, SITE } from "@/content";

export const metadata: Metadata = {
  title: "Questions schools and parents ask",
  description: "Answers about installing, parent sign-up, moving your data, data ownership, AI, pricing and support.",
  alternates: { canonical: `${SITE.url}/faq/` },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ITEMS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function Faq() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions schools and parents ask" intro="If your question is not here, call or message us. We answer plainly." />
      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="space-y-3">
          {ITEMS.map(([q, a]) => (
            <details key={q} className="card group p-4 open:shadow-pop">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold">
                {q}<span className="text-xl text-ink-faint transition group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-3 text-[15px] text-ink-soft">{a}</p>
            </details>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <CtaBand />
    </>
  );
}
