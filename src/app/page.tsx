"use client";

import { useCommodityData } from "@/hooks/useCommodityData";
import CommodityGrid from "@/components/dashboard/CommodityGrid";
import DetailChart from "@/components/dashboard/DetailChart";
import ImpactCalculator from "@/components/tools/ImpactCalculator";
import PriceAlertForm from "@/components/tools/PriceAlertForm";
import Navigation from "@/components/layout/Navigation";
import ShareButtons from "@/components/ui/ShareButtons";
import Link from "next/link";

export default function Home() {
  const { commodities, loading, error } = useCommodityData();

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-2 font-heading">
          Global Commodity Impact Dashboard
        </h1>
        <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-2">
          Track how geopolitical conflict moves global commodity markets — in real time.
          Monitor crude oil, natural gas, wheat, corn, gold, and brent oil prices affected by wars and international tensions.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          {commodities.length > 0 && (
            <p className="text-xs text-[var(--text-muted)]">
              Last updated: {new Date(commodities[0].lastUpdated).toLocaleString()}
            </p>
          )}
          <ShareButtons />
        </div>
      </section>

      {/* Commodity Navigation */}
      <Navigation />

      {/* Error State */}
      {error && (
        <div
          className="mb-6 p-4 bg-[#FEF2F2] border border-[var(--accent-danger)] rounded-[var(--radius-sm)] text-sm text-[var(--accent-danger)]"
          role="alert"
        >
          {error}. Showing cached or mock data.
        </div>
      )}

      {/* Commodity Cards Grid */}
      <section aria-label="Commodity prices" className="mb-10">
        <CommodityGrid commodities={commodities} loading={loading} />
      </section>

      {/* Detail Charts */}
      <section aria-label="Detailed charts" className="mb-10 space-y-4">
        <h2 className="text-xl font-bold text-[var(--text-primary)] font-heading mb-4">
          Detailed Charts
        </h2>
        {commodities.map((c) => (
          <DetailChart key={c.symbol} commodity={c} />
        ))}
      </section>

      {/* Calculator */}
      <div className="mb-10">
        <ImpactCalculator />
      </div>

      {/* Price Alerts */}
      <div className="mb-10">
        <PriceAlertForm />
      </div>

      {/* SEO Content Section — keyword-rich, improves crawlability & rankings */}
      <section className="mb-10 bg-[var(--bg-card)] rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-card)]">
        <h2 className="text-xl font-bold text-[var(--text-primary)] font-heading mb-4">
          Understanding War&apos;s Impact on Commodity Prices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[var(--text-secondary)] leading-relaxed">
          <div>
            <h3 className="font-bold text-[var(--text-primary)] mb-2">Why Do Commodity Prices Spike During Conflicts?</h3>
            <p className="mb-3">
              Geopolitical conflicts disrupt supply chains, create uncertainty in global markets, and drive investors
              toward safe-haven assets like gold. When major oil-producing regions face instability, crude oil and
              brent prices can surge within hours. The Russia-Ukraine war caused wheat prices to spike over 50% as
              both nations are top global exporters.
            </p>
            <p>
              Our dashboard tracks these war-sensitive commodities in real time, annotating major events directly on
              price charts so you can see the cause-and-effect relationship instantly.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--text-primary)] mb-2">Key Commodities Affected by War</h3>
            <ul className="space-y-2">
              <li><Link href="/commodity/crude-oil" className="text-[var(--accent-primary)] hover:underline font-medium">Crude Oil (WTI)</Link> — Most sensitive to Middle East and OPEC tensions</li>
              <li><Link href="/commodity/brent-oil" className="text-[var(--accent-primary)] hover:underline font-medium">Brent Crude Oil</Link> — Global benchmark reacts to Red Sea disruptions</li>
              <li><Link href="/commodity/natural-gas" className="text-[var(--accent-primary)] hover:underline font-medium">Natural Gas</Link> — European supply at risk from Russia-Ukraine conflict</li>
              <li><Link href="/commodity/wheat" className="text-[var(--accent-primary)] hover:underline font-medium">Wheat</Link> — Black Sea region exports critical for global food security</li>
              <li><Link href="/commodity/corn" className="text-[var(--accent-primary)] hover:underline font-medium">Corn</Link> — Ukraine is a top corn exporter; conflict disrupts harvests</li>
              <li><Link href="/commodity/gold" className="text-[var(--accent-primary)] hover:underline font-medium">Gold</Link> — Classic safe-haven asset surges during geopolitical crises</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[var(--border-light)] flex flex-wrap gap-3 text-xs">
          <Link href="/insights" className="text-[var(--accent-primary)] hover:underline">Read Our Analysis</Link>
          <Link href="/about" className="text-[var(--accent-primary)] hover:underline">About WarEcon Monitor</Link>
          <Link href="/how-to-use" className="text-[var(--accent-primary)] hover:underline">How to Use This Dashboard</Link>
        </div>
      </section>
    </div>
  );
}
