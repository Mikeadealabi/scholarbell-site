import { Bell, Check, FileCheck2, Users } from "lucide-react";

/**
 * The real roles in a school's day: office staff, the class teacher, and parents, each seeing
 * their own piece of the same record. Built entirely from brand tokens and demo-persona names
 * drawn from across the country — no AI agent, no new screenshot.
 */
export function WorkTogether() {
  return (
    <div className="relative mx-auto max-w-5xl py-6 lg:py-10">
      {/* Centre: the teacher's own card, and a parent's reply landing on it. */}
      <div className="relative z-10 mx-auto max-w-sm rounded-3xl border border-line bg-surface p-7 text-center shadow-pop sm:max-w-md">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand text-lg font-bold text-brand-ink" aria-hidden>ZA</span>
        <p className="mt-3 font-display text-lg font-semibold text-ink">Mrs. Abdulrazaq</p>
        <p className="text-[13px] text-ink-faint">Class teacher, Primary 4A</p>
        <div className="mx-auto mt-5 flex max-w-[260px] items-start gap-2.5 rounded-2xl bg-canvas p-3 text-left">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent-soft text-[11px] font-bold text-ink" aria-hidden>CE</span>
          <div>
            <p className="text-[11px] font-semibold text-ink-faint">Chiamaka Eze · parent</p>
            <p className="text-[13px] font-medium text-ink">Confirmed, thank you!</p>
          </div>
        </div>
      </div>

      {/* Scattered, on large screens only: there isn't room to lay these out honestly below ~1024px. */}
      <div className="animate-float-a pointer-events-none absolute left-0 top-0 hidden w-52 rounded-2xl border border-line bg-surface p-3.5 text-left shadow-pop lg:block">
        <p className="flex items-center gap-1.5 text-[12px] font-semibold text-ink"><FileCheck2 className="h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden /> Trip permission slip</p>
        <p className="mt-1 text-[11px] text-ink-faint">Primary 4A · due Friday</p>
        <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-warn-soft px-2 py-0.5 text-[10px] font-semibold text-warn">Office</span>
      </div>

      <div className="animate-float-b pointer-events-none absolute -bottom-2 left-10 hidden flex-col items-start gap-2 lg:flex" style={{ animationDelay: ".3s" }}>
        <span className="rounded-full bg-brand px-4 py-2 text-[13px] font-semibold text-brand-ink shadow-pop">32 of 36 confirmed</span>
        <span className="ml-3 inline-flex items-center gap-1 rounded-full border border-line bg-surface px-2.5 py-1 text-[11px] font-semibold text-ink-soft shadow-card"><Users className="h-3 w-3 shrink-0" aria-hidden /> Parents</span>
      </div>

      <div className="animate-float-b pointer-events-none absolute -top-2 right-2 hidden w-48 rounded-2xl border border-line bg-surface p-3 text-left shadow-pop lg:block" style={{ animationDelay: ".7s" }}>
        <p className="flex items-center gap-1.5 text-[12px] font-semibold text-ink"><Bell className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden /> Reminder sent</p>
        <p className="mt-1 text-[11px] text-ink-faint">4 outstanding parents</p>
        <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-warn-soft px-2 py-0.5 text-[10px] font-semibold text-warn">Office</span>
      </div>

      <div className="animate-float-a pointer-events-none absolute bottom-10 right-0 hidden rounded-full bg-brand px-4 py-2 text-[12px] font-semibold text-brand-ink shadow-pop lg:block" style={{ animationDelay: "1.1s" }}>
        <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 shrink-0" aria-hidden /> Published to the whole class</span>
      </div>

      <div className="animate-float-b pointer-events-none absolute -bottom-6 right-16 hidden w-44 rounded-2xl border border-line bg-surface p-3 text-left shadow-pop lg:block" style={{ animationDelay: "1.6s" }}>
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 flex-col items-center justify-center rounded-lg bg-info-soft text-info" aria-hidden>
            <span className="text-[8px] font-bold uppercase leading-none">Oct</span>
            <span className="text-sm font-bold leading-none">12</span>
          </span>
          <div className="min-w-0">
            <p className="truncate text-[12px] font-semibold text-ink">Sports Day moved</p>
            <p className="truncate text-[10px] text-ink-faint">Calendar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
