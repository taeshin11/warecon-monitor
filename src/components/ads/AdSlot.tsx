"use client";

import { useEffect, useRef } from "react";

interface AdSlotProps {
  slotId: string;
  format: "banner" | "native" | "popunder";
  className?: string;
}

interface AdConfig {
  type: "at-options" | "invoke-container";
  key: string;
  src: string;
  height: number;
  width: number;
}

// Desktop banner 728x90
const BANNER_728: AdConfig = {
  type: "at-options",
  key: "a9490d5bbc79b2d3896340934cd1f8e7",
  src: "https://www.highperformanceformat.com/a9490d5bbc79b2d3896340934cd1f8e7/invoke.js",
  height: 90,
  width: 728,
};

// Calculator banner 468x60
const BANNER_468: AdConfig = {
  type: "at-options",
  key: "25886d7792a5854fcd990cdb7ed41725",
  src: "https://www.highperformanceformat.com/25886d7792a5854fcd990cdb7ed41725/invoke.js",
  height: 60,
  width: 468,
};

// Mobile banner 320x50
const BANNER_320: AdConfig = {
  type: "at-options",
  key: "ce72f66af5e8fbd567371167cc33fe1d",
  src: "https://www.highperformanceformat.com/ce72f66af5e8fbd567371167cc33fe1d/invoke.js",
  height: 50,
  width: 320,
};

// Native in-feed
const NATIVE: AdConfig = {
  type: "invoke-container",
  key: "a9357d594356fc192e0252edcf09c45d",
  src: "https://pl29005636.profitablecpmratenetwork.com/a9357d594356fc192e0252edcf09c45d/invoke.js",
  height: 250,
  width: 300,
};

function getAdConfig(slotId: string, isMobile: boolean): AdConfig {
  switch (slotId) {
    case "slot-header":
    case "slot-footer":
      return isMobile ? BANNER_320 : BANNER_728;
    case "slot-calculator":
      return isMobile ? BANNER_320 : BANNER_468;
    case "slot-infeed":
      return NATIVE;
    default:
      return isMobile ? BANNER_320 : BANNER_728;
  }
}

export default function AdSlot({ slotId, format, className }: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current || !containerRef.current) return;
    loadedRef.current = true;

    const isMobile = window.innerWidth < 768;
    const config = getAdConfig(slotId, isMobile);

    if (config.type === "at-options") {
      const optionsScript = document.createElement("script");
      optionsScript.textContent = `atOptions = { 'key': '${config.key}', 'format': 'iframe', 'height': ${config.height}, 'width': ${config.width}, 'params': {} };`;
      containerRef.current.appendChild(optionsScript);

      const invokeScript = document.createElement("script");
      invokeScript.src = config.src;
      invokeScript.async = true;
      containerRef.current.appendChild(invokeScript);
    } else {
      const script = document.createElement("script");
      script.src = config.src;
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      containerRef.current.appendChild(script);

      const adDiv = document.createElement("div");
      adDiv.id = `container-${config.key}`;
      containerRef.current.appendChild(adDiv);
    }
  }, [slotId]);

  return (
    <div
      ref={containerRef}
      id={slotId}
      className={`ad-slot ${className || ""}`}
      role="complementary"
      aria-label="Advertisement"
      style={{
        minHeight: format === "native" ? "60px" : "50px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
}
