"use client";

import Link from "next/link";
import AdSlot from "../ads/AdSlot";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-primary)] border-b border-[var(--border-light)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">WE</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-[var(--text-primary)] leading-tight font-heading">
                WarEcon Monitor
              </h1>
              <p className="text-xs text-[var(--text-muted)] leading-tight hidden sm:block">
                War &amp; Commodity Prices
              </p>
            </div>
          </Link>
          <nav className="flex items-center gap-2 sm:gap-4" aria-label="Main navigation">
            <Link
              href="/"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/about"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors hidden sm:inline"
            >
              About
            </Link>
            <Link
              href="/how-to-use"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors hidden sm:inline"
            >
              FAQ
            </Link>
            <Link
              href="/#calculator"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Calculator
            </Link>
          </nav>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-4 pb-2">
        <AdSlot slotId="slot-header" format="banner" className="hidden sm:flex" />
      </div>
    </header>
  );
}
