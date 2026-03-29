import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://warecon-monitor.vercel.app";

export function generateCommodityMetadata(
  slug: string,
  name: string,
  description: string
): Metadata {
  return {
    title: `${name} Price — War Impact & Live Chart | WarEcon Monitor`,
    description,
    keywords: [
      `${name.toLowerCase()} price`,
      `${name.toLowerCase()} war impact`,
      `${name.toLowerCase()} geopolitical`,
      `${name.toLowerCase()} live chart`,
      "commodity prices",
      "war commodity tracker",
    ],
    openGraph: {
      title: `${name} Price — War Impact & Live Chart`,
      description,
      url: `${siteUrl}/commodity/${slug}`,
      siteName: "WarEcon Monitor",
      images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} Price — WarEcon Monitor`,
      description,
    },
    alternates: {
      canonical: `${siteUrl}/commodity/${slug}`,
    },
  };
}

export const commodityDescriptions: Record<string, string> = {
  "crude-oil":
    "Track live Crude Oil (WTI) prices and see how geopolitical conflicts like the Russia-Ukraine war and Middle East tensions impact oil markets. Free real-time chart with war-event annotations.",
  "natural-gas":
    "Monitor Natural Gas prices affected by global conflicts. See historical charts with war-event annotations showing how geopolitical tensions drive natural gas price volatility.",
  wheat:
    "Track Wheat prices impacted by the Russia-Ukraine conflict and global supply chain disruptions. Live charts with war-event annotations on our free commodity dashboard.",
  corn:
    "Monitor Corn prices affected by geopolitical tensions and armed conflicts. Historical price data with war-event annotations on our free real-time dashboard.",
  gold:
    "Track Gold prices as the ultimate safe-haven asset during geopolitical uncertainty. See how wars and conflicts drive gold prices with our annotated live charts.",
  "brent-oil":
    "Monitor Brent Crude Oil prices impacted by Middle East conflicts, Red Sea shipping disruptions, and global geopolitical tensions. Free live dashboard with war annotations.",
};
