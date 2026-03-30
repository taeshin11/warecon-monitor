"use client";

import Link from "next/link";
import AdSlot from "../ads/AdSlot";
import { useVisitorCount } from "@/hooks/useVisitorCount";
import { useT } from "@/lib/i18n";

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export default function Footer() {
  const { today, total } = useVisitorCount();
  const t = useT();

  return (
    <footer className="border-t border-[var(--border-light)] bg-[var(--bg-secondary)] mt-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdSlot slotId="slot-footer" format="banner" className="mb-6" />

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-6">
          <div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 font-heading">
              WarEcon Monitor
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 font-heading">
              {t("footer.commodities")}
            </h3>
            <nav aria-label="Commodity links" className="flex flex-col gap-2">
              <Link href="/commodity/crude-oil" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                {t("commodity.crudeOil")}
              </Link>
              <Link href="/commodity/brent-oil" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                {t("commodity.brentOil")}
              </Link>
              <Link href="/commodity/natural-gas" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                {t("commodity.naturalGas")}
              </Link>
              <Link href="/commodity/gold" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                {t("commodity.gold")}
              </Link>
              <Link href="/commodity/wheat" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                {t("commodity.wheat")}
              </Link>
              <Link href="/commodity/corn" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                {t("commodity.corn")}
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 font-heading">
              {t("footer.resources")}
            </h3>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              <Link href="/insights" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                {t("footer.insightsAnalysis")}
              </Link>
              <Link href="/about" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                {t("footer.aboutUs")}
              </Link>
              <Link href="/how-to-use" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                {t("footer.howToUseFaq")}
              </Link>
              <Link href="/#calculator" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                {t("footer.impactCalculator")}
              </Link>
              <Link href="/#alerts" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                {t("footer.priceAlerts")}
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 font-heading">
              {t("footer.legal")}
            </h3>
            <nav aria-label="Legal navigation" className="flex flex-col gap-2">
              <Link href="/privacy-policy" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link href="/terms-of-service" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                {t("footer.terms")}
              </Link>
              <a
                href="mailto:taeshinkim11@gmail.com?subject=WarEcon Monitor Feedback"
                className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {t("footer.sendFeedback")}
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-[var(--border-light)] pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[var(--text-muted)]">
            {t("footer.copyright")}
          </div>

          <div className="text-xs text-[var(--text-muted)]" aria-label="Visitor count">
            <span role="img" aria-label="views">&#128065;</span>{" "}
            {t("footer.today")} {formatNumber(today)} | {t("footer.total")} {formatNumber(total)}
          </div>
        </div>
      </div>
    </footer>
  );
}
