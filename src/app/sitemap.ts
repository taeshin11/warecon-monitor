import { MetadataRoute } from "next";
import { SYMBOL_TO_SLUG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://warecon-monitor.vercel.app";

  const commodityPages = Object.values(SYMBOL_TO_SLUG).map((slug) => ({
    url: `${baseUrl}/commodity/${slug}`,
    lastModified: new Date(),
    changeFrequency: "hourly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "hourly" as const,
      priority: 1.0,
    },
    ...commodityPages,
  ];
}
