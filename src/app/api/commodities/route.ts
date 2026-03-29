import { NextResponse } from "next/server";
import { fetchCommodities, fetchHistoricalData } from "@/lib/api";

export const dynamic = "force-dynamic";
export const revalidate = 300; // 5 minutes

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol");
  const range = searchParams.get("range");

  if (symbol && range) {
    const data = await fetchHistoricalData(symbol, range);
    return NextResponse.json(data);
  }

  const commodities = await fetchCommodities();
  return NextResponse.json(commodities);
}
