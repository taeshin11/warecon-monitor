import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Us — WarEcon Monitor | War-Impact Commodity Tracker",
  description:
    "Learn about WarEcon Monitor, the free dashboard tracking how geopolitical conflicts impact global commodity prices including oil, gas, wheat, and gold.",
  keywords: [
    "war commodity prices",
    "geopolitical commodity tracker",
    "about warecon monitor",
    "conflict impact on commodities",
    "free commodity dashboard",
  ],
  openGraph: {
    title: "About Us — WarEcon Monitor",
    description:
      "Learn about WarEcon Monitor, the free dashboard tracking how geopolitical conflicts impact global commodity prices.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://warecon-monitor.vercel.app"}/about`,
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
