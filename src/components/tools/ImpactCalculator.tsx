"use client";

import { useState } from "react";
import { COMMODITY_MAP } from "@/types";
import { postToSheet } from "@/lib/sheets";
import { Toast, useToast } from "../ui/Toast";
import AdSlot from "../ads/AdSlot";

export default function ImpactCalculator() {
  const [commodity, setCommodity] = useState("CL=F");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast, showToast, hideToast } = useToast();

  const handleCalculate = async () => {
    if (!startDate || !endDate) {
      showToast("Please select both dates", "error");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `/api/commodities?symbol=${encodeURIComponent(commodity)}&range=1Y`
      );
      const data = await res.json();

      if (data.length < 2) {
        setResult("Insufficient data for calculation");
        setLoading(false);
        return;
      }

      const startEntry = data.find((d: { date: string }) => d.date >= startDate) || data[0];
      const endEntry = [...data].reverse().find((d: { date: string }) => d.date <= endDate) || data[data.length - 1];

      const change = ((endEntry.price - startEntry.price) / startEntry.price) * 100;
      const resultStr = `${change >= 0 ? "+" : ""}${change.toFixed(2)}% ($${startEntry.price.toFixed(2)} → $${endEntry.price.toFixed(2)})`;
      setResult(resultStr);

      postToSheet({
        type: "calculate_impact",
        commodity,
        startDate,
        endDate,
        result: resultStr,
      });
    } catch {
      showToast("Failed to calculate. Try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="calculator" className="scroll-mt-20" aria-labelledby="calc-heading">
      <AdSlot slotId="slot-calculator" format="banner" className="mb-4" />

      <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-card)]">
        <h2
          id="calc-heading"
          className="text-xl font-bold text-[var(--text-primary)] mb-4 font-heading"
        >
          Calculate Impact
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mb-6">
          See how a commodity&apos;s price changed between two dates.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="calc-commodity" className="block text-xs text-[var(--text-muted)] mb-1">
              Commodity
            </label>
            <select
              id="calc-commodity"
              value={commodity}
              onChange={(e) => setCommodity(e.target.value)}
              className="w-full px-3 py-2 bg-[var(--bg-primary)] border border-[var(--border-light)] rounded-[var(--radius-sm)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
            >
              {Object.entries(COMMODITY_MAP).map(([sym, info]) => (
                <option key={sym} value={sym}>
                  {info.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="calc-start" className="block text-xs text-[var(--text-muted)] mb-1">
              Start Date
            </label>
            <input
              id="calc-start"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 py-2 bg-[var(--bg-primary)] border border-[var(--border-light)] rounded-[var(--radius-sm)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
            />
          </div>

          <div>
            <label htmlFor="calc-end" className="block text-xs text-[var(--text-muted)] mb-1">
              End Date
            </label>
            <input
              id="calc-end"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-3 py-2 bg-[var(--bg-primary)] border border-[var(--border-light)] rounded-[var(--radius-sm)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
            />
          </div>
        </div>

        <button
          onClick={handleCalculate}
          disabled={loading}
          className="px-6 py-2.5 bg-[var(--accent-primary)] text-white rounded-[var(--radius-sm)] text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? <><span className="spinner" /><span>Calculating...</span></> : "Calculate"}
        </button>

        {result && (
          <div className="mt-4 p-4 bg-[var(--bg-secondary)] rounded-[var(--radius-sm)]">
            <p className="text-sm text-[var(--text-secondary)]">Price Change:</p>
            <p className="text-lg font-bold font-mono text-[var(--text-primary)]">{result}</p>
          </div>
        )}
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={hideToast} />}
    </section>
  );
}
