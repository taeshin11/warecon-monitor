"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { translations, Locale, LOCALE_NAMES } from "./translations";

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string>) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";

  // Check localStorage first
  const saved = localStorage.getItem("warecon-locale");
  if (saved && saved in translations) return saved as Locale;

  // Detect from browser
  const browserLangs = navigator.languages || [navigator.language];
  for (const lang of browserLangs) {
    const code = lang.toLowerCase().split("-")[0] as Locale;
    if (code in translations) return code;
  }

  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(detectLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((loc: Locale) => {
    setLocaleState(loc);
    localStorage.setItem("warecon-locale", loc);
    document.documentElement.lang = loc;
    if (loc === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }, []);

  const t = useCallback(
    (key: string, vars?: Record<string, string>) => {
      const dict = translations[locale];
      let value = dict[key] ?? translations.en[key] ?? key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          value = value.replace(`{${k}}`, v);
        }
      }
      return value;
    },
    [locale]
  );

  // Don't flash English before switching — but still render children for SSR
  if (!mounted) {
    return (
      <I18nContext.Provider value={{ locale: "en", setLocale, t: (key) => translations.en[key] ?? key }}>
        {children}
      </I18nContext.Provider>
    );
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function useT() {
  return useI18n().t;
}

export { LOCALE_NAMES };
export type { Locale };
