import clsx from "clsx";

export function Logo({ className }: { className?: string }) {
  return (
    <span aria-hidden className={clsx("inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-sm font-bold text-brand-ink shadow-card", className)}>SB</span>
  );
}
