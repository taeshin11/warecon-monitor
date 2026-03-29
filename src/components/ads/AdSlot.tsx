"use client";

import { useEffect, useState } from "react";

interface AdSlotProps {
  slotId: string;
  format: "banner" | "native" | "popunder";
  adKey?: string;
  className?: string;
}

export default function AdSlot({ slotId, format, adKey, className }: AdSlotProps) {
  const [popunderAllowed, setPopunderAllowed] = useState(false);

  const envKeys: Record<string, string | undefined> = {
    "slot-header": process.env.NEXT_PUBLIC_ADSTERRA_HEADER_KEY,
    "slot-infeed": process.env.NEXT_PUBLIC_ADSTERRA_INFEED_KEY,
    "slot-calculator": process.env.NEXT_PUBLIC_ADSTERRA_CALCULATOR_KEY,
    "slot-footer": process.env.NEXT_PUBLIC_ADSTERRA_FOOTER_KEY,
  };

  const key = adKey || envKeys[slotId];

  useEffect(() => {
    if (format === "popunder" && key) {
      const shown = sessionStorage.getItem("warecon_popunder_shown");
      if (!shown) {
        setPopunderAllowed(true);
        sessionStorage.setItem("warecon_popunder_shown", "true");
      }
    }
  }, [format, key]);

  if (!key) {
    return (
      <div
        id={slotId}
        className={`ad-slot ad-placeholder ${className || ""}`}
        style={{
          background: "var(--bg-secondary)",
          border: "1px dashed var(--border-light)",
          borderRadius: "var(--radius-sm)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-muted)",
          fontSize: "12px",
          padding: "8px",
          minHeight: format === "banner" ? "90px" : "60px",
        }}
        role="complementary"
        aria-label="Advertisement"
      >
        Advertisement
      </div>
    );
  }

  if (format === "popunder") {
    if (!popunderAllowed) return null;
    return (
      <script
        async
        src={`//www.highperformanceformat.com/${key}/invoke.js`}
      />
    );
  }

  return (
    <div
      id={slotId}
      className={`ad-slot ${className || ""}`}
      role="complementary"
      aria-label="Advertisement"
    >
      <script
        async
        src={`//www.highperformanceformat.com/${key}/invoke.js`}
      />
      <div id={key} />
    </div>
  );
}
