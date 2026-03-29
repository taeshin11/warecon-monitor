"use client";

import Link from "next/link";
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

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-6">
          <div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 font-heading">
              WarEcon Monitor
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Track how geopolitical conflict moves global commodity markets — in real time. Free,
              open-access dashboard for investors, researchers, and the public.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 font-heading">
              Commodities
            </h3>
            <nav aria-label="Commodity links" className="flex flex-col gap-2">
              <Link href="/commodity/crude-oil" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                Crude Oil (WTI)
              </Link>
              <Link href="/commodity/brent-oil" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                Brent Crude Oil
              </Link>
              <Link href="/commodity/natural-gas" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                Natural Gas
              </Link>
              <Link href="/commodity/gold" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                Gold
              </Link>
              <Link href="/commodity/wheat" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                Wheat
              </Link>
              <Link href="/commodity/corn" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                Corn
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 font-heading">
              Resources
            </h3>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              <Link href="/insights" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                Insights & Analysis
              </Link>
              <Link href="/about" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                About Us
              </Link>
              <Link href="/how-to-use" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                How to Use & FAQ
              </Link>
              <Link href="/#calculator" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                Impact Calculator
              </Link>
              <Link href="/#alerts" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                Price Alerts
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 font-heading">
              Legal & Contact
            </h3>
            <nav aria-label="Legal navigation" className="flex flex-col gap-2">
              <Link href="/privacy-policy" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                Terms of Service
              </Link>
              <a
                href="mailto:taeshinkim11@gmail.com?subject=WarEcon Monitor Feedback"
                className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                Send Feedback
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-[var(--border-light)] pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[var(--text-muted)]">
            &copy; 2026 WarEcon Monitor. Data from Yahoo Finance. Not financial advice.
          </div>

          <div className="text-xs text-[var(--text-muted)]" aria-label="Visitor count">
            <span role="img" aria-label="views">&#128065;</span>{" "}
            Today: {formatNumber(today)} | Total: {formatNumber(total)}
          </div>
        </div>
      </div>
    </footer>
  );
}
