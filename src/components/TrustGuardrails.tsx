import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";

const PILLARS = [
  { title: "Walled off", text: "Each school's data is kept separate from every other school's, by design." },
  { title: "Accountable", text: "Every sensitive action is recorded, so you can always answer who did what, and when." },
  { title: "Controlled access", text: "Staff see only what their role allows. Sign-in gets an extra step for the people who need it." },
  { title: "By invitation only", text: "Parents cannot sign themselves up. The school confirms every guardian before they're in." },
] as const;

const ACCESS_ROWS = [
  { label: "Publish announcements", on: true },
  { label: "View audit log", on: false },
  { label: "Edit student records", on: false },
  { label: "Invite new staff", on: false },
] as const;

/** Four real guardrails, bold enough to read as a stance rather than a feature list. No compliance badges: we have not had an independent review yet, and we say so on /security/. */
export function TrustGuardrails() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-ink/70">Built for trust</p>
        <h2 className="mt-2 font-display text-3xl font-semibold leading-[1.15] sm:text-4xl">
          ScholarBell carries the message.<br />You keep the guardrails.
        </h2>
        <p className="mt-4 max-w-md text-[15px] text-brand-ink/80">You are handing us information about children. Here is what that promise actually rests on.</p>

        <div className="mt-8 divide-y divide-white/15">
          {PILLARS.map((p) => (
            <div key={p.title} className="py-5 first:pt-0">
              <p className="font-display text-lg font-semibold">{p.title}</p>
              <p className="mt-1.5 text-[15px] text-brand-ink/80">{p.text}</p>
            </div>
          ))}
        </div>

        <Link href="/security/" className="mt-7 inline-flex items-center gap-1.5 font-semibold text-brand-ink hover:underline">
          Read the full security page <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <div className="hidden lg:block">
        <div className="relative z-10 ml-3 -mb-5 w-52 rounded-2xl border border-line bg-surface p-3 text-left shadow-pop">
          <p className="flex items-center gap-1.5 text-[12px] font-semibold text-ink"><Lock className="h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden /> Greenfield International</p>
          <p className="mt-1 text-[11px] text-ink-faint">Walled off from every other school on ScholarBell</p>
        </div>

        <div className="rounded-3xl bg-white/10 p-6 pt-9">
          <div className="rounded-2xl bg-surface p-5 text-ink shadow-pop">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Staff access · Class teacher</p>
            <div className="mt-4 space-y-4">
              {ACCESS_ROWS.map((r) => (
                <div key={r.label} className="flex items-center justify-between gap-3">
                  <span className="text-[13px] text-ink">{r.label}</span>
                  <span className={`flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition ${r.on ? "bg-ok" : "bg-line"}`} aria-hidden>
                    <span className={`block h-4 w-4 rounded-full bg-white shadow transition ${r.on ? "translate-x-4" : "translate-x-0"}`} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 -mt-8 ml-auto mr-3 w-56 rounded-2xl border border-line bg-surface p-3.5 text-left shadow-pop">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft text-[11px] font-bold text-brand-strong" aria-hidden>DE</span>
            <div className="min-w-0">
              <p className="truncate text-[12px] font-semibold text-ink">Mr. Etim</p>
              <p className="truncate text-[10px] text-ink-faint">Role: Class teacher</p>
            </div>
          </div>
          <p className="mt-2 text-[11px] text-ink-faint">Can publish to his own class. Cannot edit student records.</p>
        </div>
      </div>
    </div>
  );
}
