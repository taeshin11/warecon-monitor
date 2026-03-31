import type { Metadata } from "next";
import InsightsContent from "@/components/pages/InsightsContent";

export const metadata: Metadata = {
  title: "War & Commodity Market Insights — Analysis & Research",
  description:
    "In-depth analysis of how geopolitical conflicts impact commodity prices. Expert insights on oil, gold, wheat, and natural gas during wars and international tensions.",
  keywords: [
    "war commodity analysis",
    "geopolitical risk commodities",
    "oil price war analysis",
    "gold price geopolitical crisis",
    "wheat price war impact",
    "commodity market conflict research",
    "war economy analysis",
    "conflict commodity index research",
  ],
  openGraph: {
    title: "War & Commodity Market Insights — WarEcon Monitor",
    description: "In-depth analysis of how wars impact commodity prices globally.",
    url: "https://warecon-monitor.vercel.app/insights",
  },
};

export default function InsightsPage() {
  return <InsightsContent />;
}
