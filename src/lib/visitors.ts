import { VisitorCount } from "@/types";

const COUNTER_NAMESPACE = process.env.NEXT_PUBLIC_COUNTER_NAMESPACE || "warecon-monitor";

// Use localStorage for today tracking + a simple API approach
export async function getVisitorCount(): Promise<VisitorCount> {
  try {
    // Try CountAPI first
    const res = await fetch(
      `https://api.countapi.xyz/hit/${COUNTER_NAMESPACE}/visits`
    );
    if (res.ok) {
      const data = await res.json();
      const todayKey = `visitors-today-${new Date().toISOString().split("T")[0]}`;
      let todayCount = 1;

      if (typeof window !== "undefined") {
        const stored = localStorage.getItem(todayKey);
        if (stored) {
          todayCount = parseInt(stored, 10) + 1;
        }
        localStorage.setItem(todayKey, String(todayCount));
      }

      return { today: todayCount, total: data.value };
    }
  } catch {
    // CountAPI unavailable, fall back to local tracking
  }

  // Fallback: local-only counter
  if (typeof window !== "undefined") {
    const totalKey = "warecon-total-visits";
    const todayKey = `warecon-today-${new Date().toISOString().split("T")[0]}`;
    const total = parseInt(localStorage.getItem(totalKey) || "0", 10) + 1;
    const today = parseInt(localStorage.getItem(todayKey) || "0", 10) + 1;
    localStorage.setItem(totalKey, String(total));
    localStorage.setItem(todayKey, String(today));
    return { today, total };
  }

  return { today: 0, total: 0 };
}
