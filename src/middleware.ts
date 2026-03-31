import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["en", "ko", "zh", "ja", "es", "fr", "de", "ru", "ar", "pt"];

function getLocaleFromHeader(acceptLanguage: string | null): string {
  if (!acceptLanguage) return "en";

  // Parse Accept-Language header: "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, qPart] = lang.trim().split(";");
      const q = qPart ? parseFloat(qPart.replace("q=", "")) : 1;
      return { code: code.split("-")[0].toLowerCase(), q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { code } of languages) {
    if (SUPPORTED_LOCALES.includes(code)) return code;
  }

  return "en";
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Only set cookie if not already set (don't override user's manual choice)
  const existingLocale = request.cookies.get("warecon-locale")?.value;
  if (!existingLocale) {
    const acceptLanguage = request.headers.get("accept-language");
    const detectedLocale = getLocaleFromHeader(acceptLanguage);
    response.cookies.set("warecon-locale", detectedLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    // Match all pages but not static files or API routes
    "/((?!api|_next/static|_next/image|favicon.ico|og-image|icon-|manifest|robots|sitemap|google).*)",
  ],
};
