"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";

const insights = [
  {
    slug: "russia-ukraine-commodity-impact",
    titleKey: "insights.article1.title",
    summaryKey: "insights.article1.summary",
    titleFallback: "How the Russia-Ukraine War Reshaped Global Commodity Markets",
    summaryFallback: "The February 2022 invasion triggered the most significant commodity price shock since the 1973 oil embargo. Wheat surged 50%, natural gas in Europe hit record highs, and global food security was threatened as two of the world's top grain exporters went to war.",
    commodities: ["Wheat", "Natural Gas", "Crude Oil"],
    date: "2025-03-15",
    readTime: "8 min",
  },
  {
    slug: "middle-east-oil-price-cycle",
    titleKey: "insights.article2.title",
    summaryKey: "insights.article2.summary",
    titleFallback: "The Middle East Conflict Cycle and Oil Price Volatility",
    summaryFallback: "From the Hamas-Israel war to Houthi Red Sea attacks and Iran's direct strikes on Israel, the 2023-2024 Middle East escalation created sustained oil price volatility. Brent crude saw swings of 15%+ within single weeks.",
    commodities: ["Crude Oil", "Brent Oil", "Gold"],
    date: "2025-03-10",
    readTime: "7 min",
  },
  {
    slug: "gold-safe-haven-wars",
    titleKey: "insights.article3.title",
    summaryKey: "insights.article3.summary",
    titleFallback: "Gold as a Safe Haven: How Wars Drive Precious Metal Prices",
    summaryFallback: "Gold has historically served as the ultimate safe-haven asset during geopolitical crises. From the Gulf War to the Russia-Ukraine conflict, gold prices consistently surge when global uncertainty peaks.",
    commodities: ["Gold"],
    date: "2025-03-05",
    readTime: "6 min",
  },
  {
    slug: "food-security-conflict-zones",
    titleKey: "insights.article4.title",
    summaryKey: "insights.article4.summary",
    titleFallback: "War and Food Security: How Conflicts Inflate Wheat and Corn Prices",
    summaryFallback: "When conflict disrupts agricultural regions, the global food supply chain faces cascading effects. The Black Sea grain corridor collapse pushed food commodity prices to threatening levels.",
    commodities: ["Wheat", "Corn"],
    date: "2025-02-28",
    readTime: "9 min",
  },
  {
    slug: "red-sea-shipping-energy-prices",
    titleKey: "insights.article5.title",
    summaryKey: "insights.article5.summary",
    titleFallback: "Red Sea Shipping Crisis: The Hidden Impact on Energy Prices",
    summaryFallback: "Houthi attacks on commercial vessels forced major shipping companies to reroute around Africa, adding 10-14 days to transit times and tripling insurance premiums.",
    commodities: ["Crude Oil", "Brent Oil", "Natural Gas"],
    date: "2025-02-20",
    readTime: "7 min",
  },
  {
    slug: "opec-geopolitics-oil-production",
    titleKey: "insights.article6.title",
    summaryKey: "insights.article6.summary",
    titleFallback: "OPEC, Geopolitics, and the Fight for Oil Price Control",
    summaryFallback: "OPEC+ production decisions are deeply intertwined with geopolitical events. Emergency production cuts during the Middle East crisis and Russia's quota disputes all play into oil price movements.",
    commodities: ["Crude Oil", "Brent Oil"],
    date: "2025-02-10",
    readTime: "8 min",
  },
];

export default function InsightsContent() {
  const t = useT();

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-3 font-heading">
        {t("insights.title")}
      </h1>
      <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
        {t("insights.description")}
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
              {t(article.titleKey) !== article.titleKey ? t(article.titleKey) : article.titleFallback}
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              {t(article.summaryKey) !== article.summaryKey ? t(article.summaryKey) : article.summaryFallback}
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

      <section className="bg-[var(--bg-secondary)] rounded-[var(--radius-md)] p-6">
        <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3 font-heading">
          {t("insights.whyTitle")}
        </h2>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
          {t("insights.whyText1")}
        </p>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          {t("insights.whyText2")}
        </p>
        <div className="flex flex-wrap gap-3 text-xs">
          <Link href="/" className="text-[var(--accent-primary)] hover:underline">{t("insights.liveDashboard")}</Link>
          <Link href="/#calculator" className="text-[var(--accent-primary)] hover:underline">{t("footer.impactCalculator")}</Link>
          <Link href="/about" className="text-[var(--accent-primary)] hover:underline">{t("footer.aboutUs")}</Link>
          <Link href="/how-to-use" className="text-[var(--accent-primary)] hover:underline">{t("footer.howToUseFaq")}</Link>
        </div>
      </section>
    </div>
  );
}
