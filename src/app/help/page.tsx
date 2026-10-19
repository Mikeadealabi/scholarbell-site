import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/ui";
import { SITE } from "@/content";
import { HELP_ARTICLES, HELP_CATEGORIES, articlesInCategory } from "@/help-content";

export const metadata: Metadata = {
  title: "Help centre",
  description: "Step-by-step help for schools and parents using ScholarBell, starting with signing in and invitations.",
  alternates: { canonical: `${SITE.url}/help/` },
};

export default function HelpIndex() {
  return (
    <>
      <PageHero eyebrow="Help centre" title="How can we help?" intro="Step-by-step answers for specific problems. For general questions about ScholarBell, see the FAQ instead." />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-4">
          {HELP_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const articles = articlesInCategory(cat.slug);
            return (
              <Link key={cat.slug} href={`/help/${cat.slug}/`} className="card flex items-start gap-4 p-6 transition hover:shadow-pop">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-strong" aria-hidden><Icon className="h-5 w-5" /></span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-xl font-semibold">{cat.title}</h2>
                  <p className="mt-1 text-[15px] text-ink-soft">{cat.description}</p>
                  <p className="mt-2 text-[13px] font-semibold text-brand-strong">{articles.length} article{articles.length === 1 ? "" : "s"}</p>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-ink-faint" aria-hidden />
              </Link>
            );
          })}
        </div>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-faint">All articles</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {HELP_ARTICLES.map((a) => (
              <Link key={a.slug} href={`/help/${a.category}/${a.slug}/`} className="card p-4 transition hover:shadow-pop">
                <p className="font-semibold text-ink">{a.title}</p>
                <p className="mt-1 text-[14px] text-ink-soft">{a.summary}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="card mt-12 flex flex-col items-start gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-ink">Can't find what you're looking for?</p>
            <p className="mt-1 text-[14px] text-ink-soft">Message us on WhatsApp and we'll answer directly.</p>
          </div>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary shrink-0">
            <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp us
          </a>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
