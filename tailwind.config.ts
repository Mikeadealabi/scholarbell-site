import type { Config } from "tailwindcss";

/**
 * Colours are CSS variables so each school (tenant) can re-brand the product at runtime:
 * the layout injects --brand / --accent from the tenant's branding settings.
 */
/** Token colours that still accept Tailwind opacity modifiers (bg-surface/95): mixes the CSS variable with transparent. */
const c = (v: string) => `color-mix(in oklab, var(${v}) calc(<alpha-value> * 100%), transparent)`;

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: c("--brand"), ink: c("--brand-ink"), soft: c("--brand-soft"), strong: c("--brand-strong") },
        accent: { DEFAULT: c("--accent"), soft: c("--accent-soft") },
        canvas: c("--canvas"),
        surface: c("--surface"),
        line: c("--line"),
        ink: { DEFAULT: c("--ink"), soft: c("--ink-soft"), faint: c("--ink-faint") },
        ok: { DEFAULT: c("--ok"), soft: c("--ok-soft") },
        warn: { DEFAULT: c("--warn"), soft: c("--warn-soft") },
        danger: { DEFAULT: c("--danger"), soft: c("--danger-soft"), on: c("--on-danger") },
        info: { DEFAULT: c("--info"), soft: c("--info-soft") },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: { xl: "0.9rem", "2xl": "1.2rem" },
      boxShadow: {
        card: "0 1px 2px rgb(var(--shadow-rgb) / 0.04), 0 1px 3px rgb(var(--shadow-rgb) / 0.06)",
        pop: "0 12px 32px rgb(var(--shadow-rgb) / 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
