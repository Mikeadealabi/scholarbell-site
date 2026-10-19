"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Check, FileCheck2 } from "lucide-react";
import { Logo } from "@/components/Logo";

/** Four real capabilities, each paired with a small built-from-tokens preview (never a new screenshot). */
const CARDS = [
  {
    title: "Every message, targeted",
    text: "Choose the whole school, one class, or one child's family, and know exactly how many parents will receive it before you publish.",
    pills: ["Live recipient count", "Class or child-level targeting", "Delivery confirmation"],
    tint: "bg-brand-soft",
    panel: (
      <div className="w-full max-w-[220px] rounded-xl border border-line bg-surface p-3 shadow-card">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-faint">To</p>
        <p className="mt-0.5 text-[13px] font-semibold text-ink">Primary 4A</p>
        <p className="mt-2 rounded-lg bg-brand-soft px-2 py-1.5 text-[12px] font-semibold text-brand-strong">36 parents will receive this</p>
        <p className="mt-2 flex items-center gap-1.5 text-[12px] font-semibold text-ink"><Check className="h-3.5 w-3.5 shrink-0 text-ok" aria-hidden /> Delivered to 36 parents</p>
      </div>
    ),
  },
  {
    title: "Permission slips that come back",
    text: "See at a glance who has responded to a form and who is still outstanding, then send one reminder instead of thirty phone calls.",
    pills: ["Who responded", "Who's outstanding", "One-tap reminder"],
    tint: "bg-accent-soft",
    panel: (
      <div className="w-full max-w-[220px] rounded-xl border border-line bg-surface p-3 shadow-card">
        <p className="flex items-center gap-1.5 text-[12px] font-semibold text-ink"><FileCheck2 className="h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden /> Trip permission · 4A</p>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-line"><div className="h-full w-[89%] rounded-full bg-brand" /></div>
        <p className="mt-2 rounded-lg bg-warn-soft px-2 py-1.5 text-[12px] font-semibold text-warn">32 of 36 confirmed · 4 outstanding</p>
      </div>
    ),
  },
  {
    title: "Dates that explain themselves",
    text: "When an event moves, parents see the old date, the new date, and the reason. Nobody is left showing up on the old one.",
    pills: ["Every change logged", "Reason captured", "Parents notified automatically"],
    tint: "bg-info-soft",
    panel: (
      <div className="w-full max-w-[220px] rounded-xl border border-line bg-surface p-3 shadow-card">
        <div className="flex items-center gap-1.5">
          <span className="rounded-md bg-line px-1.5 py-0.5 text-[10px] font-semibold text-ink-faint line-through">10 Oct</span>
          <ArrowRight className="h-3 w-3 shrink-0 text-ink-faint" aria-hidden />
          <span className="rounded-md bg-brand px-1.5 py-0.5 text-[10px] font-semibold text-brand-ink">12 Oct</span>
        </div>
        <p className="mt-2 text-[13px] font-semibold text-ink">Sports Day moved</p>
        <p className="text-[11px] text-ink-faint">Reason: pitch waterlogged</p>
        <p className="mt-2 flex items-center gap-1.5 text-[12px] font-semibold text-ink"><Check className="h-3.5 w-3.5 shrink-0 text-ok" aria-hidden /> All parents notified</p>
      </div>
    ),
  },
  {
    title: "Your school's own look",
    text: "Your name, your colours, your logo letters. Each school's records are kept walled off from every other school's, by design.",
    pills: ["Your colours and logo", "Data walled off per school", "Role-based staff access"],
    tint: "bg-canvas",
    panel: (
      <div className="w-full max-w-[220px] rounded-xl border border-line bg-surface p-3 shadow-card">
        <div className="flex items-center gap-2.5">
          <Logo />
          <div className="min-w-0">
            <p className="truncate text-[12px] font-semibold text-ink">Greenfield International</p>
            <p className="truncate text-[10px] text-ink-faint">Your colours, your logo letters</p>
          </div>
        </div>
        <div className="mt-2.5 flex gap-1.5" aria-hidden>
          <span className="h-5 flex-1 rounded-md" style={{ background: "#14532d" }} />
          <span className="h-5 flex-1 rounded-md" style={{ background: "#0e4f8c" }} />
          <span className="h-5 flex-1 rounded-md" style={{ background: "#9d174d" }} />
        </div>
      </div>
    ),
  },
];

/** A monday.com-style horizontal card rail: one capability per card, a small built preview, and two scroll arrows. */
export function FeatureCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.86, 440), behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {CARDS.map((c) => (
          <article key={c.title} className="card flex w-[86%] shrink-0 snap-start flex-col overflow-hidden sm:w-[62%] sm:flex-row lg:w-[45%]">
            <div className="flex-1 p-6">
              <p className="font-display text-xl font-semibold">{c.title}</p>
              <p className="mt-2 text-[15px] text-ink-soft">{c.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.pills.map((p) => (
                  <span key={p} className="badge border border-line bg-canvas text-[12px] font-semibold text-ink-soft">{p}</span>
                ))}
              </div>
            </div>
            <div className={`flex shrink-0 items-center justify-center p-5 sm:w-[40%] ${c.tint}`}>{c.panel}</div>
          </article>
        ))}
      </div>
      <div className="mt-5 flex gap-3">
        <button type="button" onClick={() => scroll(-1)} aria-label="Scroll to the previous capability" className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink transition hover:bg-brand-soft">
          <ArrowLeft className="h-4 w-4" aria-hidden />
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label="Scroll to the next capability" className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink transition hover:bg-brand-soft">
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
