"use client";

import Link from "next/link";
import { COMMODITY_MAP } from "@/types";
import { SYMBOL_TO_SLUG } from "@/lib/constants";

export default function Navigation() {
  return (
    <nav aria-label="Commodity navigation" className="flex flex-wrap gap-2 mb-6">
      {Object.entries(COMMODITY_MAP).map(([symbol, info]) => (
        <Link
          key={symbol}
          href={`/commodity/${SYMBOL_TO_SLUG[symbol]}`}
          className="px-3 py-1.5 text-xs rounded-full bg-[var(--bg-card)] border border-[var(--border-light)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all"
        >
          {info.shortName}
        </Link>
      ))}
    </nav>
  );
}
