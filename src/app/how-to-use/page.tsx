import type { Metadata } from "next";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import HowToUseContent from "@/components/pages/HowToUseContent";

export const metadata: Metadata = {
  title: "How to Use & FAQ — WarEcon Monitor | Commodity Guide",
  description:
    "Learn how to use WarEcon Monitor to track war-impact commodity prices. Step-by-step guide plus answers to frequently asked questions.",
  keywords: [
    "how to track commodity prices",
    "war commodity tracker guide",
    "commodity price FAQ",
    "geopolitical commodity analysis",
    "oil price war tracker",
  ],
  openGraph: {
    title: "How to Use & FAQ — WarEcon Monitor",
    description:
      "Step-by-step guide to tracking war-impact commodity prices with WarEcon Monitor, plus frequently asked questions.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://warecon-monitor.vercel.app"}/how-to-use`,
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

export default function HowToUsePage() {
  return (
    <>
      <FaqJsonLd />
      <HowToUseContent />
    </>
  );
}
