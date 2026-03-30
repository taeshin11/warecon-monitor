"use client";

import { useCommodityData } from "@/hooks/useCommodityData";
import CommodityGrid from "@/components/dashboard/CommodityGrid";
import DetailChart from "@/components/dashboard/DetailChart";
import ImpactCalculator from "@/components/tools/ImpactCalculator";
import PriceAlertForm from "@/components/tools/PriceAlertForm";
import Navigation from "@/components/layout/Navigation";
import ShareButtons from "@/components/ui/ShareButtons";
import Link from "next/link";
import { useT } from "@/lib/i18n";

export default function Home() {
  const { commodities, loading, error } = useCommodityData();
  const t = useT();

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-2 font-heading">
          {t("hero.title")}
        </h1>
        <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-2">
          {t("hero.description")}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          {commodities.length > 0 && (
            <p className="text-xs text-[var(--text-muted)]">
              {t("hero.lastUpdated")} {new Date(commodities[0].lastUpdated).toLocaleString()}
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
          {error}. {t("error.showingCached")}
        </div>
      )}

      {/* Commodity Cards Grid */}
      <section aria-label="Commodity prices" className="mb-10">
        <CommodityGrid commodities={commodities} loading={loading} />
      </section>

      {/* Detail Charts */}
      <section aria-label="Detailed charts" className="mb-10 space-y-4">
        <h2 className="text-xl font-bold text-[var(--text-primary)] font-heading mb-4">
          {t("charts.detailed")}
        </h2>
        {commodities.map((c) => (
          <DetailChart key={c.symbol} commodity={c} />
        ))}
      </section>

      {/* Calculator */}
      <div className="mb-10" id="calculator">
        <ImpactCalculator />
      </div>

      {/* Price Alerts */}
      <div className="mb-10" id="alerts">
        <PriceAlertForm />
      </div>

      {/* SEO Content Section */}
      <section className="mb-10 bg-[var(--bg-card)] rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-card)]">
        <h2 className="text-xl font-bold text-[var(--text-primary)] font-heading mb-4">
          {t("seo.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[var(--text-secondary)] leading-relaxed">
          <div>
            <h3 className="font-bold text-[var(--text-primary)] mb-2">{t("seo.whyTitle")}</h3>
            <p className="mb-3">{t("seo.whyText1")}</p>
            <p>{t("seo.whyText2")}</p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--text-primary)] mb-2">{t("seo.keyTitle")}</h3>
            <ul className="space-y-2">
              <li><Link href="/commodity/crude-oil" className="text-[var(--accent-primary)] hover:underline font-medium">{t("commodity.crudeOil")}</Link> — {t("seo.crudeOilDesc")}</li>
              <li><Link href="/commodity/brent-oil" className="text-[var(--accent-primary)] hover:underline font-medium">{t("commodity.brentOil")}</Link> — {t("seo.brentDesc")}</li>
              <li><Link href="/commodity/natural-gas" className="text-[var(--accent-primary)] hover:underline font-medium">{t("commodity.naturalGas")}</Link> — {t("seo.natGasDesc")}</li>
              <li><Link href="/commodity/wheat" className="text-[var(--accent-primary)] hover:underline font-medium">{t("commodity.wheat")}</Link> — {t("seo.wheatDesc")}</li>
              <li><Link href="/commodity/corn" className="text-[var(--accent-primary)] hover:underline font-medium">{t("commodity.corn")}</Link> — {t("seo.cornDesc")}</li>
              <li><Link href="/commodity/gold" className="text-[var(--accent-primary)] hover:underline font-medium">{t("commodity.gold")}</Link> — {t("seo.goldDesc")}</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[var(--border-light)] flex flex-wrap gap-3 text-xs">
          <Link href="/insights" className="text-[var(--accent-primary)] hover:underline">{t("seo.readAnalysis")}</Link>
          <Link href="/about" className="text-[var(--accent-primary)] hover:underline">{t("seo.aboutUs")}</Link>
          <Link href="/how-to-use" className="text-[var(--accent-primary)] hover:underline">{t("seo.howToUse")}</Link>
        </div>
      </section>
    </div>
  );
}
