import type { Metadata } from "next";
import Link from "next/link";

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

const insights = [
  {
    slug: "russia-ukraine-commodity-impact",
    title: "How the Russia-Ukraine War Reshaped Global Commodity Markets",
    summary:
      "The February 2022 invasion triggered the most significant commodity price shock since the 1973 oil embargo. Wheat surged 50%, natural gas in Europe hit record highs, and global food security was threatened as two of the world's top grain exporters went to war.",
    commodities: ["Wheat", "Natural Gas", "Crude Oil"],
    date: "2026-03-15",
    readTime: "8 min read",
  },
  {
    slug: "middle-east-oil-price-cycle",
    title: "The Middle East Conflict Cycle and Oil Price Volatility",
    summary:
      "From the Hamas-Israel war to Houthi Red Sea attacks and Iran's direct strikes on Israel, the 2023-2024 Middle East escalation created sustained oil price volatility. Brent crude saw swings of 15%+ within single weeks, while gold reached all-time highs as investors fled to safety.",
    commodities: ["Crude Oil", "Brent Oil", "Gold"],
    date: "2026-03-10",
    readTime: "7 min read",
  },
  {
    slug: "gold-safe-haven-wars",
    title: "Gold as a Safe Haven: How Wars Drive Precious Metal Prices",
    summary:
      "Gold has historically served as the ultimate safe-haven asset during geopolitical crises. From the Gulf War to the Russia-Ukraine conflict, gold prices consistently surge when global uncertainty peaks. We analyze the correlation between conflict intensity and gold price movements.",
    commodities: ["Gold"],
    date: "2026-03-05",
    readTime: "6 min read",
  },
  {
    slug: "food-security-conflict-zones",
    title: "War and Food Security: How Conflicts Inflate Wheat and Corn Prices",
    summary:
      "When conflict disrupts agricultural regions, the global food supply chain faces cascading effects. The Black Sea grain corridor collapse, sanctions on Russian fertilizers, and Ukrainian harvest disruptions have pushed food commodity prices to levels that threaten food security in developing nations.",
    commodities: ["Wheat", "Corn"],
    date: "2026-02-28",
    readTime: "9 min read",
  },
  {
    slug: "red-sea-shipping-energy-prices",
    title: "Red Sea Shipping Crisis: The Hidden Impact on Energy Prices",
    summary:
      "Houthi attacks on commercial vessels in the Red Sea forced major shipping companies to reroute around Africa, adding 10-14 days to transit times. This disruption impacted not just oil and gas shipments but insurance costs, tripling premiums and creating a ripple effect across all energy commodities.",
    commodities: ["Crude Oil", "Brent Oil", "Natural Gas"],
    date: "2026-02-20",
    readTime: "7 min read",
  },
  {
    slug: "opec-geopolitics-oil-production",
    title: "OPEC, Geopolitics, and the Fight for Oil Price Control",
    summary:
      "OPEC+ production decisions are deeply intertwined with geopolitical events. Emergency production cuts during the Middle East crisis, Russia's quota disputes, and Saudi Arabia's strategic calculations all play into oil price movements. Understanding OPEC's geopolitical playbook is essential for commodity investors.",
    commodities: ["Crude Oil", "Brent Oil"],
    date: "2026-02-10",
    readTime: "8 min read",
  },
];

export default function InsightsPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-3 font-heading">
        War & Commodity Market Insights
      </h1>
      <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
        In-depth analysis of how geopolitical conflicts, wars, and international tensions impact global commodity prices.
        Research-backed insights for investors, journalists, researchers, and anyone seeking to understand the war-economy connection.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {insights.map((article) => (
          <article
            key={article.slug}
            className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow"
          >
            <div className="flex items-center gap-2 mb-3">
              <time className="text-xs text-[var(--text-muted)]">{article.date}</time>
              <span className="text-xs text-[var(--text-muted)]">&middot;</span>
              <span className="text-xs text-[var(--text-muted)]">{article.readTime}</span>
            </div>
            <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2 font-heading leading-snug">
              {article.title}
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              {article.summary}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {article.commodities.map((c) => (
                <span
                  key={c}
                  className="px-2 py-0.5 text-xs bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded-full"
                >
                  {c}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* SEO content block */}
      <section className="bg-[var(--bg-secondary)] rounded-[var(--radius-md)] p-6">
        <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3 font-heading">
          Why Understanding War-Commodity Dynamics Matters
        </h2>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
          Geopolitical conflicts have always been among the most powerful drivers of commodity price volatility.
          Whether it&apos;s oil supply disruptions from Middle East tensions, agricultural export blockades from
          the Russia-Ukraine war, or gold surging as a safe-haven asset during global uncertainty — the
          relationship between war and commodity markets is both immediate and profound.
        </p>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          At WarEcon Monitor, we provide real-time tracking and analysis of these dynamics, making
          professional-grade commodity intelligence accessible to everyone — completely free.
        </p>
        <div className="flex flex-wrap gap-3 text-xs">
          <Link href="/" className="text-[var(--accent-primary)] hover:underline">Live Dashboard</Link>
          <Link href="/#calculator" className="text-[var(--accent-primary)] hover:underline">Impact Calculator</Link>
          <Link href="/about" className="text-[var(--accent-primary)] hover:underline">About Us</Link>
          <Link href="/how-to-use" className="text-[var(--accent-primary)] hover:underline">How to Use</Link>
        </div>
      </section>
    </div>
  );
}
