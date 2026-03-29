import type { Metadata } from "next";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

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
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <FaqJsonLd />
      <article className="prose-custom">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-6 font-heading">
          How to Use WarEcon Monitor
        </h1>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
          WarEcon Monitor is designed to be intuitive and easy to use. Whether you&apos;re a
          seasoned investor or someone who just wants to understand why gas prices are rising,
          here&apos;s how to get the most out of our platform.
        </p>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6 font-heading">
            3-Step Quick Start Guide
          </h2>

          <div className="space-y-6">
            <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-card)] border-l-4 border-[var(--accent-primary)]">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent-primary)] text-white flex items-center justify-center font-bold text-lg">
                  1
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    Check the Dashboard for Real-Time Prices
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-2">
                    Visit the main dashboard to see all six war-sensitive commodities at a glance.
                    Each card shows the current market price, daily percentage change (green for
                    gains, red for losses), and a 7-day mini chart showing recent price trends.
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Prices are automatically refreshed every 5 minutes. The &quot;Last updated&quot;
                    timestamp at the top of the dashboard shows when data was last fetched. Click any
                    commodity card to navigate to its detailed analysis page.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-card)] border-l-4 border-[var(--accent-success)]">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent-success)] text-white flex items-center justify-center font-bold text-lg">
                  2
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    Explore Historical Charts with War Event Annotations
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-2">
                    Click &quot;View detailed chart&quot; on the dashboard or navigate to an
                    individual commodity page to access full historical price charts. Use the time
                    range buttons (1W, 1M, 3M, 6M, 1Y) to zoom into different periods.
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Yellow dashed lines on the chart represent major geopolitical events. Hover over
                    the chart to see exact prices and dates. This visual overlay lets you directly
                    see how events like the Russia-Ukraine invasion or Houthi shipping attacks
                    affected specific commodity prices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-card)] border-l-4 border-[var(--accent-warning)]">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent-warning)] text-white flex items-center justify-center font-bold text-lg">
                  3
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    Use the Impact Calculator &amp; Set Up Price Alerts
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-2">
                    Scroll down to the <strong>Calculate Impact</strong> tool. Select a commodity,
                    choose a start date and end date, then click &quot;Calculate&quot; to see the
                    exact percentage price change during that period. This is perfect for measuring
                    how a specific conflict affected a commodity&apos;s price.
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Want to stay informed? Use the <strong>Price Alerts</strong> form at the bottom
                    of the page. Enter your email, select the commodities you care about, and
                    subscribe to receive notifications about significant price movements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6 font-heading">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-5 shadow-[var(--shadow-card)]">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">
                What commodities does WarEcon Monitor track?
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                We track six key war-sensitive commodities: <strong>Crude Oil (WTI)</strong> — the
                most traded oil benchmark in the Americas; <strong>Brent Crude Oil</strong> — the
                international oil price benchmark; <strong>Natural Gas</strong> — critical for
                heating and electricity; <strong>Wheat</strong> — a global food staple heavily
                affected by Black Sea conflicts; <strong>Corn</strong> — used in food, animal feed,
                and biofuels; and <strong>Gold</strong> — the traditional safe-haven asset during
                geopolitical uncertainty. These six commodities were chosen because they have
                historically shown the strongest price reactions to armed conflicts and geopolitical
                tensions.
              </p>
            </div>

            <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-5 shadow-[var(--shadow-card)]">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">
                How often is the price data updated?
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Commodity prices on WarEcon Monitor are refreshed every 5 minutes during market
                hours. Data is sourced from Yahoo Finance, which aggregates prices from major
                commodity exchanges including NYMEX, COMEX, and CBOT. Please note that free-tier
                data may have a slight delay (typically 15-20 minutes) compared to live exchange
                feeds. The &quot;Last updated&quot; timestamp on the dashboard always shows the exact
                time of the most recent data fetch.
              </p>
            </div>

            <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-5 shadow-[var(--shadow-card)]">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">
                Is WarEcon Monitor free to use? Are there hidden costs?
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Yes, WarEcon Monitor is completely free with no hidden costs, no account registration
                required, and no paywall. We are supported by non-intrusive display advertising. We
                do not sell user data, and we do not offer premium tiers. Our mission is to make
                war-impact commodity intelligence accessible to everyone, regardless of their
                financial resources.
              </p>
            </div>

            <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-5 shadow-[var(--shadow-card)]">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">
                How does the Impact Calculator work?
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                The Impact Calculator lets you measure the price change of any tracked commodity
                between two dates you choose. Simply select a commodity from the dropdown, pick a
                start date and end date, and click &quot;Calculate.&quot; The tool fetches
                historical price data for that period and calculates the exact percentage change,
                showing you both the starting price and ending price. This is particularly useful for
                analyzing how a specific conflict or geopolitical event affected commodity prices
                over a defined time window.
              </p>
            </div>

            <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-5 shadow-[var(--shadow-card)]">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">
                What are the war event annotations on the charts?
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                War event annotations are yellow dashed vertical lines displayed on historical price
                charts. Each line represents a major geopolitical event that impacted commodity
                markets. Currently tracked events include: the Russian invasion of Ukraine (February
                2022), the Hamas attack on Israel (October 2023), the Houthi Red Sea shipping attack
                escalation (January 2024), and the Iran drone/missile strike on Israel (April 2024).
                These annotations help you visually correlate geopolitical events with price
                movements. We continuously update our event database as new significant geopolitical
                developments occur.
              </p>
            </div>

            <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-5 shadow-[var(--shadow-card)]">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">
                Can I use WarEcon Monitor data for research or journalism?
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Absolutely. WarEcon Monitor data is freely available for educational, research, and
                journalistic purposes. If you cite our platform, please reference it as &quot;WarEcon
                Monitor (warecon-monitor.vercel.app)&quot; and note that commodity prices are sourced
                from Yahoo Finance. Please keep in mind that our data is intended for informational
                purposes and should be cross-referenced with primary sources for academic
                publications or regulatory filings.
              </p>
            </div>

            <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-5 shadow-[var(--shadow-card)]">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">
                Should I make financial decisions based on WarEcon Monitor?
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                WarEcon Monitor is an informational tool, not a financial advisory service. While our
                data is sourced from reputable financial data providers, commodity markets are
                inherently volatile and influenced by countless factors beyond geopolitical events.
                Never make investment decisions based solely on information from any single source.
                Always consult with a qualified financial advisor, conduct your own due diligence,
                and consider your personal risk tolerance before investing in commodity markets.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
