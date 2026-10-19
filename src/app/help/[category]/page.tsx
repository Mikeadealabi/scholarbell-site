import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/ui";
import { SITE } from "@/content";
import { HELP_CATEGORIES, articlesInCategory } from "@/help-content";

export function generateStaticParams() {
  return HELP_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = HELP_CATEGORIES.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: cat.title,
    description: cat.description,
    alternates: { canonical: `${SITE.url}/help/${cat.slug}/` },
  };
}

export default async function HelpCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = HELP_CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();
  const articles = articlesInCategory(cat.slug);

  return (
    <>
      <PageHero
        eyebrow="Help centre"
        title={cat.title}
        intro={cat.description}
      />
      <section className="mx-auto max-w-3xl px-4 py-16">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-[13px] text-ink-faint">
          <Link href="/help/" className="hover:text-ink">Help centre</Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
          <span className="text-ink">{cat.title}</span>
        </nav>
        <div className="space-y-3">
          {articles.map((a) => (
            <Link key={a.slug} href={`/help/${cat.slug}/${a.slug}/`} className="card flex items-center justify-between gap-3 p-5 transition hover:shadow-pop">
              <div className="min-w-0">
                <p className="font-semibold text-ink">{a.title}</p>
                <p className="mt-1 text-[14px] text-ink-soft">{a.summary}</p>
              </div>
              <ChevronRight className="h-5 w-5 shrink-0 text-ink-faint" aria-hidden />
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
