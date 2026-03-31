"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { translations, Locale, LOCALE_NAMES } from "./translations";

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string>) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
}

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";

  // 1. Check cookie (set by middleware from Accept-Language header)
  const cookieLocale = getCookie("warecon-locale");
  if (cookieLocale && cookieLocale in translations) return cookieLocale as Locale;

  // 2. Check localStorage (user's manual choice)
  const saved = localStorage.getItem("warecon-locale");
  if (saved && saved in translations) return saved as Locale;

  // 3. Detect from browser navigator
  const browserLangs = navigator.languages || [navigator.language];
  for (const lang of browserLangs) {
    const code = lang.toLowerCase().split("-")[0] as Locale;
    if (code in translations) return code;
  }

  return "en";
}

// Get initial locale from cookie synchronously (available during first render)
function getInitialLocale(): Locale {
  if (typeof document === "undefined") return "en";
  const cookieLocale = getCookie("warecon-locale");
  if (cookieLocale && cookieLocale in translations) return cookieLocale as Locale;
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // Use cookie-based locale for initial render to avoid flash
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  useEffect(() => {
    // After hydration, detect full locale (cookie + localStorage + navigator)
    const detected = detectLocale();
    setLocaleState(detected);

    // Set direction for RTL languages
    if (detected === "ar") {
      document.documentElement.dir = "rtl";
    }
    document.documentElement.lang = detected;
  }, []);

  const setLocale = useCallback((loc: Locale) => {
    setLocaleState(loc);
    localStorage.setItem("warecon-locale", loc);
    setCookie("warecon-locale", loc);
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

  // Suppress hydration warning by using suppressHydrationWarning on affected elements
  // The locale may differ between server (en) and client (detected), but this is intentional
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
