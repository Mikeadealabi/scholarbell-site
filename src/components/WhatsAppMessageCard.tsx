"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/content";

const ROLES = ["Principal / head of school", "Administrator / office", "Class teacher", "Other"];

function buildMessage({ name, role, school, students, note }: { name: string; role: string; school: string; students: string; note: string }) {
  const lines = [
    "Hello ScholarBell, we would like a 30-minute walkthrough.",
    `School name: ${school}`,
    `My name and role: ${name}${role ? `, ${role}` : ""}`,
    `Number of students: ${students}`,
  ];
  if (note.trim()) lines.push(`Anything else: ${note.trim()}`);
  return lines.join("\n");
}

/** A real form, but it never posts anywhere: it writes your message and hands you to WhatsApp to send it yourself. No server, no CSP form-action needed, nothing collected if you close the tab. */
export function WhatsAppMessageCard() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [school, setSchool] = useState("");
  const [students, setStudents] = useState("");
  const [note, setNote] = useState("");

  const href = `https://wa.me/${SITE.phone1.tel.replace("+", "")}?text=${encodeURIComponent(buildMessage({ name, role, school, students, note }))}`;

  return (
    <div className="card p-6 sm:p-7">
      <p className="font-display text-xl font-semibold">Message our team</p>
      <p className="mt-1 text-[14px] text-ink-soft">Fill this in and we will open WhatsApp with it already written. You still hit send.</p>

      <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="cf-name">Your name</label>
            <input id="cf-name" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ada Obi" />
          </div>
          <div>
            <label className="label" htmlFor="cf-role">Your role</label>
            <select id="cf-role" className="input" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select one</option>
              {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="cf-school">School name</label>
            <input id="cf-school" className="input" value={school} onChange={(e) => setSchool(e.target.value)} placeholder="Greenfield International" />
          </div>
          <div>
            <label className="label" htmlFor="cf-students">Number of students</label>
            <input id="cf-students" className="input" inputMode="numeric" value={students} onChange={(e) => setStudents(e.target.value)} placeholder="About 400" />
          </div>
        </div>
        <div>
          <label className="label" htmlFor="cf-note">Anything else? (optional)</label>
          <textarea id="cf-note" className="input min-h-[88px] resize-y" value={note} onChange={(e) => setNote(e.target.value)} placeholder="A good time to call, or what you're hoping to fix first." />
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!name.trim()}
          className={`btn btn-primary !min-h-[48px] w-full !text-base ${!name.trim() ? "pointer-events-none opacity-50" : ""}`}
        >
          <MessageCircle className="h-5 w-5" aria-hidden /> Continue on WhatsApp <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
        <p className="hint text-center">Opens WhatsApp with your message ready. Nothing is sent until you press send there, and nothing is stored if you close this tab.</p>
      </form>
    </div>
  );
}
