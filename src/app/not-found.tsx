import Link from "next/link";
import { SignInButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-semibold">That page is not here</h1>
      <p className="mt-3 text-ink-soft">It may have moved. Head back to the home page, or sign in if you are a ScholarBell parent or staff member.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">Back to home</Link>
        <SignInButton />
      </div>
    </section>
  );
}
