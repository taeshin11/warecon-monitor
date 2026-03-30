"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n, LOCALE_NAMES, Locale } from "@/lib/i18n";

const LOCALE_FLAGS: Record<Locale, string> = {
  en: "EN",
  ko: "KO",
  zh: "ZH",
  ja: "JA",
  es: "ES",
  fr: "FR",
  de: "DE",
  ru: "RU",
  ar: "AR",
  pt: "PT",
};

export default function LanguageSelector() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-[var(--text-secondary)] border border-[var(--border-light)] rounded-[var(--radius-sm)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors"
        aria-label="Select language"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        {LOCALE_FLAGS[locale]}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-[var(--bg-card)] border border-[var(--border-light)] rounded-[var(--radius-sm)] shadow-lg py-1 z-50 min-w-[140px] animate-fadeIn">
          {(Object.keys(LOCALE_NAMES) as Locale[]).map((loc) => (
            <button
              key={loc}
              onClick={() => { setLocale(loc); setOpen(false); }}
              className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[var(--bg-secondary)] transition-colors flex items-center justify-between ${
                locale === loc ? "text-[var(--accent-primary)] font-bold" : "text-[var(--text-secondary)]"
              }`}
            >
              <span>{LOCALE_NAMES[loc]}</span>
              <span className="text-[var(--text-muted)]">{LOCALE_FLAGS[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
