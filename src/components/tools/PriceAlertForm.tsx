"use client";

import { useState } from "react";
import { COMMODITY_MAP } from "@/types";
import { postToSheet } from "@/lib/sheets";
import { Toast, useToast } from "../ui/Toast";
import { useT } from "@/lib/i18n";

export default function PriceAlertForm() {
  const [email, setEmail] = useState("");
  const [selectedCommodities, setSelectedCommodities] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast, showToast, hideToast } = useToast();
  const t = useT();

  const toggleCommodity = (symbol: string) => {
    setSelectedCommodities((prev) =>
      prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || selectedCommodities.length === 0) {
      showToast("Please enter email and select at least one commodity", "error");
      return;
    }

    setLoading(true);
    try {
      await postToSheet({
        type: "alert_signup",
        email,
        commodity: selectedCommodities.join(","),
      });
      showToast(t("alerts.success"), "success");
      setEmail("");
      setSelectedCommodities([]);
    } catch {
      showToast("Failed to subscribe. Try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="alerts" className="scroll-mt-20" aria-labelledby="alerts-heading">
      <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-card)]">
        <h2
          id="alerts-heading"
          className="text-xl font-bold text-[var(--text-primary)] mb-2 font-heading"
        >
          {t("alerts.title")}
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mb-6">
          {t("alerts.description")}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="alert-email" className="block text-xs text-[var(--text-muted)] mb-1">
              {t("alerts.email")}
            </label>
            <input
              id="alert-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-3 py-2 bg-[var(--bg-primary)] border border-[var(--border-light)] rounded-[var(--radius-sm)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
            />
          </div>

          <div className="mb-4">
            <p className="text-xs text-[var(--text-muted)] mb-2">{t("alerts.selectCommodities")}</p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(COMMODITY_MAP).map(([sym, info]) => (
                <button
                  key={sym}
                  type="button"
                  onClick={() => toggleCommodity(sym)}
                  className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                    selectedCommodities.includes(sym)
                      ? "border-[var(--accent-primary)] bg-[var(--accent-primary)] text-white"
                      : "border-[var(--border-light)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]"
                  }`}
                >
                  {info.shortName}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2.5 bg-[var(--accent-primary)] text-white rounded-[var(--radius-sm)] text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? <><span className="spinner" /><span>{t("alerts.subscribing")}</span></> : t("alerts.subscribe")}
          </button>
        </form>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={hideToast} />}
    </section>
  );
}
