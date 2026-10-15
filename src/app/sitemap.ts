import type { MetadataRoute } from "next";
import { SITE } from "@/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "features/", "security/", "about/", "faq/", "contact/"].map((p) => ({ url: `${SITE.url}/${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
