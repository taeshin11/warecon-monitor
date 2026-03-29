import type { Metadata } from "next";

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
  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose-custom">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-6 font-heading">
          About WarEcon Monitor
        </h1>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            What Is WarEcon Monitor?
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            WarEcon Monitor is a free, open-access web dashboard designed to help individuals
            understand the direct relationship between geopolitical conflicts and global commodity
            prices. From crude oil and natural gas to agricultural staples like wheat and corn,
            armed conflicts have historically caused dramatic price swings that affect billions of
            people worldwide — from consumers paying more at the grocery store to investors managing
            multi-billion-dollar portfolios.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Our platform aggregates real-time market data for six key war-sensitive commodities —
            Crude Oil (WTI), Brent Crude Oil, Natural Gas, Wheat, Corn, and Gold — and presents
            them in an intuitive, visually rich dashboard. Each commodity card displays the current
            price, daily percentage change, and a 7-day sparkline chart, giving users an instant
            snapshot of market conditions.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            What makes WarEcon Monitor unique is our war-event annotation system. Major geopolitical
            events — such as the Russia-Ukraine conflict, the Hamas-Israel war, Houthi Red Sea
            shipping disruptions, and the Iran-Israel tensions — are overlaid directly on historical
            price charts. This allows users to visually correlate cause and effect: how a specific
            geopolitical event moved a specific commodity&apos;s price.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            The Problem We Solve
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Understanding how wars and geopolitical tensions affect commodity markets has
            traditionally required expensive tools. Bloomberg Terminal subscriptions cost over
            $20,000 per year. Reuters Eikon starts at $3,600 annually. Even basic financial data
            platforms often hide historical analysis behind paywalls.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            For retail investors, students, journalists, researchers, and the general public, this
            creates an information asymmetry. Institutional investors with access to premium tools
            can react to geopolitical events within seconds, while everyday people are left reading
            yesterday&apos;s news articles trying to understand why gas prices went up.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            WarEcon Monitor eliminates this barrier entirely. We provide professional-grade commodity
            price tracking with geopolitical context — completely free, with no account required, no
            paywall, and no hidden fees. Our mission is to democratize access to war-impact
            commodity intelligence.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            Who Is WarEcon Monitor For?
          </h2>
          <div className="space-y-4">
            <div className="bg-[var(--bg-secondary)] rounded-[var(--radius-md)] p-4">
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Retail Investors &amp; Traders</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Get quick visual snapshots of war-sensitive commodities without paid terminal
                subscriptions. Use the Impact Calculator to measure historical price changes during
                conflict periods to inform your investment decisions.
              </p>
            </div>
            <div className="bg-[var(--bg-secondary)] rounded-[var(--radius-md)] p-4">
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Journalists &amp; Researchers</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Access citable, real-time commodity data with built-in geopolitical context. Our
                war-event annotations provide ready-made data visualizations for articles, papers,
                and reports on conflict economics.
              </p>
            </div>
            <div className="bg-[var(--bg-secondary)] rounded-[var(--radius-md)] p-4">
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Students &amp; Educators</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Use WarEcon Monitor as a teaching tool for economics, international relations, and
                political science courses. The visual cause-and-effect relationship between conflicts
                and commodity prices makes complex geopolitical economics accessible.
              </p>
            </div>
            <div className="bg-[var(--bg-secondary)] rounded-[var(--radius-md)] p-4">
              <h3 className="font-bold text-[var(--text-primary)] mb-1">General Public</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Understand why everyday prices for fuel, food, and goods fluctuate during times of
                global conflict. WarEcon Monitor makes the &quot;war → price&quot; cause-effect
                relationship easy to understand for everyone.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            Technology &amp; Data Sources
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            WarEcon Monitor is built with modern web technologies to ensure fast load times,
            accessibility, and reliability:
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-4">
            <li><strong>Real-time data</strong> sourced from Yahoo Finance API, refreshed every 5 minutes</li>
            <li><strong>Historical charts</strong> with configurable time ranges (1 week to 1 year)</li>
            <li><strong>Server-side rendering</strong> via Next.js for fast initial page loads and SEO</li>
            <li><strong>Interactive visualizations</strong> powered by Recharts for smooth, responsive charts</li>
            <li><strong>Geopolitical event database</strong> curated from verified news sources and cross-referenced with market data</li>
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            All commodity prices displayed on WarEcon Monitor are sourced from public financial
            market data. While we strive for accuracy, prices may be delayed and should not be used
            as the sole basis for financial decisions. Always consult a qualified financial advisor
            before making investment decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            Our Commitment
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            WarEcon Monitor is committed to remaining free and accessible. We believe that
            understanding how global conflicts affect commodity markets is not a luxury — it&apos;s
            essential knowledge for informed citizenship and smart financial planning. We are
            supported by non-intrusive advertising and will never compromise the user experience
            with aggressive ad placement or data harvesting.
          </p>
        </section>
      </article>
    </div>
  );
}
