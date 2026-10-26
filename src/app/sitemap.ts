import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/treatments", "/about", "/gallery", "/reviews", "/contact"];
  return pages.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p === "/treatments" ? 0.9 : 0.7,
  }));
}
