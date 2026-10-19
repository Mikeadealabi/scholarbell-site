import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE } from "@/content";

// Figtree: the typeface monday.com's "clay" design system runs on. One family, two weights of presence.
const sans = Figtree({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Figtree({ subsets: ["latin"], variable: "--font-display", display: "swap" });

const DESCRIPTION = "ScholarBell is the secure way for schools to keep parents in the loop on their scholars: the right news to the right families, with proof it landed.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "ScholarBell: every parent informed, every message reaching the right family", template: "%s · ScholarBell" },
  description: DESCRIPTION,
  openGraph: {
    type: "website", siteName: "ScholarBell", url: SITE.url, description: DESCRIPTION,
    title: "ScholarBell: every parent informed",
    images: [{ url: "/shots/parent-home.png", width: 1440, height: 900, alt: "The ScholarBell parent home page (demo school, sample data)" }],
  },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#1e3a5f" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`} suppressHydrationWarning>
      <head><script src="/theme.js" /></head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
