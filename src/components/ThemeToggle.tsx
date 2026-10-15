"use client";
import { Moon, Sun } from "lucide-react";

/** Light/dark switch. The choice is kept in this browser only (localStorage); /theme.js applies it before first paint. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("sb_theme", next); } catch { /* storage blocked: the theme still switches for this visit */ }
  }
  return (
    <button type="button" onClick={toggle} className={`btn btn-ghost !min-h-[44px] !min-w-[44px] !px-2 ${className}`} aria-label="Switch between light and dark mode" title="Light / dark mode">
      <Moon className="h-5 w-5 dark:hidden" aria-hidden />
      <Sun className="hidden h-5 w-5 dark:block" aria-hidden />
    </button>
  );
}
