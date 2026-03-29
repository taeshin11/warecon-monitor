import { NextResponse } from "next/server";

let totalVisits = 0;
const dailyVisits = new Map<string, number>();

export async function GET() {
  const today = new Date().toISOString().split("T")[0];
  totalVisits++;
  dailyVisits.set(today, (dailyVisits.get(today) || 0) + 1);

  return NextResponse.json({
    today: dailyVisits.get(today) || 0,
    total: totalVisits,
  });
}
