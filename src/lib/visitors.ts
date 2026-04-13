import { VisitorCount } from "@/types";

// Use localStorage for today tracking + a simple API approach
export async function getVisitorCount(): Promise<VisitorCount> {
  // Local-only counter
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
