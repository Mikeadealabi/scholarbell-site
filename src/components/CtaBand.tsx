"use client";

import { useState } from "react";
import { ArrowRight, Check, FileCheck2, MessageCircle, Users } from "lucide-react";
import { SITE } from "@/content";

const AUDIENCES = [
  { label: "Principal", line: "See how your school looks organised from day one." },
  { label: "Administrator", line: "See how many hours a week you get back from chasing replies." },
  { label: "Class teacher", line: "See one message reach every parent, with proof it landed." },
] as const;

/** Three real moments from the product, swapped to the front as the visitor picks the role closest to theirs. */
function PersonaCard({ index, active }: { index: 0 | 1 | 2; active: number }) {
  const state = index === active ? "z-20 scale-100 opacity-100" : index < active ? "z-10 -translate-x-4 scale-90 opacity-60" : "z-10 translate-x-4 scale-90 opacity-60";
  const base = "absolute inset-0 m-auto flex h-fit w-56 flex-col gap-2 rounded-2xl border border-line bg-surface p-4 text-left shadow-pop transition-all duration-500 ease-out";

  if (index === 0) {
    return (
      <div className={`${base} ${state}`}>
        <p className="flex items-center gap-1.5 text-[12px] font-semibold text-ink"><Check className="h-3.5 w-3.5 shrink-0 text-ok" aria-hidden /> Trip notice published</p>
        <p className="text-[11px] text-ink-faint">Delivered to 36 parents · 32 already read</p>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className={`${base} ${state}`}>
        <p className="flex items-center gap-1.5 text-[12px] font-semibold text-ink"><FileCheck2 className="h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden /> Trip permission · 4A</p>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-line"><div className="h-full w-[89%] rounded-full bg-brand" /></div>
        <p className="rounded-lg bg-warn-soft px-2 py-1 text-[11px] font-semibold text-warn">4 outstanding · remind</p>
      </div>
    );
  }
  return (
    <div className={`${base} ${state}`}>
      <div className="flex items-center gap-2.5">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-strong" aria-hidden><Users className="h-4 w-4" /></span>
        <div className="min-w-0"><p className="truncate text-[12px] font-semibold text-ink">Mrs. Jubril</p><p className="truncate text-[10px] text-ink-faint">Primary 4A, class teacher</p></div>
      </div>
      <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink"><Check className="h-3.5 w-3.5 shrink-0 text-ok" aria-hidden /> Sent to 36 parents · 32 read</p>
    </div>
  );
}

export function CtaBand({ title = "We'll walk you through the fix, not a sales pitch." }: { title?: string }) {
  const [active, setActive] = useState(2);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-16">
      <div className="card overflow-hidden">
        <div className="grid items-center gap-8 bg-brand px-6 py-10 text-brand-ink sm:px-10 lg:grid-cols-[1.1fr_1fr] lg:py-14">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-xl text-lg opacity-90">Tell us a little about your school and we will walk you through ScholarBell using a demo school that looks like yours.</p>

            <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="See it from your role">
              {AUDIENCES.map((a, i) => (
                <button
                  key={a.label}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${i === active ? "bg-surface text-brand-strong" : "border border-white/35 bg-white/10 text-brand-ink hover:bg-white/20"}`}
                  aria-pressed={i === active}
                >
                  {a.label}
                </button>
              ))}
            </div>
            <p className="mt-3 min-h-[1.5em] text-[14px] font-medium opacity-90">{AUDIENCES[active].line}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn !min-h-[48px] !rounded-full !px-6 !text-base bg-surface text-ink hover:opacity-90">
                <MessageCircle className="h-5 w-5" aria-hidden /> Book on WhatsApp <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a href={`tel:${SITE.phone1.tel}`} className="btn !min-h-[48px] !rounded-full !px-6 !text-base border border-white/40 text-brand-ink hover:bg-white/10">
                Call {SITE.phone1.label}
              </a>
            </div>
            <p className="mt-3 text-[13px] opacity-75">No pressure, no jargon. Thirty minutes, with a demo school that looks like yours.</p>
          </div>

          <div className="relative hidden h-44 lg:block">
            <PersonaCard index={0} active={active} />
            <PersonaCard index={1} active={active} />
            <PersonaCard index={2} active={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
