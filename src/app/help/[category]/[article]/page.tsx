import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MessageCircle } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { SITE } from "@/content";
import { HELP_ARTICLES, HELP_CATEGORIES, articleBySlug } from "@/help-content";

export function generateStaticParams() {
  return HELP_ARTICLES.map((a) => ({ category: a.category, article: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; article: string }> }): Promise<Metadata> {
  const { article } = await params;
  const a = articleBySlug(article);
  if (!a) return {};
  return {
    title: a.title,
    description: a.summary,
    alternates: { canonical: `${SITE.url}/help/${a.category}/${a.slug}/` },
  };
}

export default async function HelpArticlePage({ params }: { params: Promise<{ category: string; article: string }> }) {
  const { category, article } = await params;
  const a = articleBySlug(article);
  const cat = HELP_CATEGORIES.find((c) => c.slug === category);
  if (!a || !cat || a.category !== category) notFound();

  const related = (a.related ?? []).map((slug) => articleBySlug(slug)).filter((x): x is NonNullable<typeof x> => Boolean(x));

  const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: a.title,
    description: a.summary,
    step: a.steps.map((s) => ({ "@type": "HowToStep", text: s })),
  };

  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-[13px] text-ink-faint">
            <Link href="/help/" className="hover:text-ink">Help centre</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <Link href={`/help/${cat.slug}/`} className="hover:text-ink">{cat.title}</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <span className="text-ink">{a.title}</span>
          </nav>
          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{a.title}</h1>
          <p className="mt-4 text-lg text-ink-soft">{a.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <ol className="space-y-4">
          {a.steps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-[13px] font-semibold text-brand-ink">{i + 1}</span>
              <p className="text-[15px] text-ink-soft">{step}</p>
            </li>
          ))}
        </ol>

        {a.note && (
          <div className="card mt-8 p-4 text-[14px] text-ink-soft">{a.note}</div>
        )}

        <div className="card mt-8 flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-ink">Still stuck?</p>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary shrink-0">
            <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp us
          </a>
        </div>

        {related.length > 0 && (
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Related articles</p>
            <ul className="mt-3 space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/help/${r.category}/${r.slug}/`} className="font-semibold text-brand-strong hover:underline">{r.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <CtaBand />
    </>
  );
}
