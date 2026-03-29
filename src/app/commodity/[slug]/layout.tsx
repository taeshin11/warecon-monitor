import type { Metadata } from "next";
import { generateCommodityMetadata, commodityDescriptions } from "@/components/seo/MetaTags";
import { SLUG_TO_SYMBOL } from "@/lib/constants";
import { COMMODITY_MAP } from "@/types";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const symbol = SLUG_TO_SYMBOL[slug];

  if (!symbol) {
    return { title: "Commodity Not Found — WarEcon Monitor" };
  }

  const info = COMMODITY_MAP[symbol];
  const description =
    commodityDescriptions[slug] ||
    `Track ${info.name} prices affected by global conflicts. Live charts with war-event annotations on WarEcon Monitor.`;

  return generateCommodityMetadata(slug, info.name, description);
}

export default function CommodityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
