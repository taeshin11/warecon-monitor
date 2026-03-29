"use client";

import { useCommodityData } from "@/hooks/useCommodityData";
import CommodityGrid from "@/components/dashboard/CommodityGrid";
import DetailChart from "@/components/dashboard/DetailChart";
import ImpactCalculator from "@/components/tools/ImpactCalculator";
import PriceAlertForm from "@/components/tools/PriceAlertForm";
import Navigation from "@/components/layout/Navigation";

export default function Home() {
  const { commodities, loading, error } = useCommodityData();

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-2 font-heading">
          Global Commodity Impact Dashboard
        </h1>
        <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-1">
          Track how geopolitical conflict moves global commodity markets — in real time.
        </p>
        {commodities.length > 0 && (
          <p className="text-xs text-[var(--text-muted)]">
            Last updated: {new Date(commodities[0].lastUpdated).toLocaleString()}
          </p>
        )}
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
    </div>
  );
}
