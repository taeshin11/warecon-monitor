"use client";

import AdSlot from "../ads/AdSlot";
import { useVisitorCount } from "@/hooks/useVisitorCount";

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export default function Footer() {
  const { today, total } = useVisitorCount();

  return (
    <footer className="border-t border-[var(--border-light)] bg-[var(--bg-secondary)] mt-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdSlot slotId="slot-footer" format="banner" className="mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
            <span>About</span>
            <span>Data Sources</span>
            <span>Contact</span>
          </div>

          <div className="text-xs text-[var(--text-muted)]" aria-label="Visitor count">
            <span role="img" aria-label="views">&#128065;</span>{" "}
            Today: {formatNumber(today)} | Total: {formatNumber(total)}
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-[var(--text-muted)]">
          &copy; 2026 WarEcon Monitor. Data from Yahoo Finance. Not financial advice.
        </div>
      </div>
    </footer>
  );
}
