# PRD.md — WarEcon Monitor

## Product Requirements Document

**Service Name:** WarEcon Monitor
**Short Title:** War & Commodity Prices
**Tagline:** "Track how geopolitical conflict moves global commodity markets — in real time."
**Version:** 1.0.0
**Last Updated:** 2026-03-29

---

## Table of Contents

1. [Overview](#1-overview)
2. [Harness Architecture](#2-harness-architecture)
3. [Tech Stack & Cost Strategy](#3-tech-stack--cost-strategy)
4. [Feature List](#4-feature-list)
5. [UI/UX Design Spec](#5-uiux-design-spec)
6. [SEO Strategy](#6-seo-strategy)
7. [Data Collection — Google Sheets Webhook](#7-data-collection--google-sheets-webhook)
8. [Ad Monetization — Adsterra First](#8-ad-monetization--adsterra-first)
9. [Visitor Counter](#9-visitor-counter)
10. [Deployment — Vercel (Free Tier)](#10-deployment--vercel-free-tier)
11. [Git Strategy & Milestones](#11-git-strategy--milestones)
12. [File Structure](#12-file-structure)
13. [Implementation Phases](#13-implementation-phases)
14. [Session Routine for Claude Code](#14-session-routine-for-claude-code)

---

## 1. Overview

### What We Are Building

A **free, public, responsive web dashboard** that tracks commodity prices (crude oil, natural gas, wheat, corn, gold, etc.) that are directly impacted by armed conflicts and geopolitical tension. Users see real-time percentage changes, historical mini-charts, and contextual war-event annotations — all at zero cost.

### Core Value Proposition

- **For retail investors:** Quick visual snapshot of war-sensitive commodities without paid Bloomberg/Reuters terminals.
- **For researchers/journalists:** Citable, embeddable data widgets.
- **For general public:** Easy-to-understand "war → price" cause-effect dashboard.

### Non-Negotiable Constraints

| Constraint | Rule |
|---|---|
| **Cost** | $0 infrastructure. Free tiers only (Vercel, GitHub, Google Sheets, free APIs). |
| **SEO** | Must rank for "war commodity prices", "conflict commodity index", etc. |
| **Responsive** | Mobile-first. Must work perfectly on 320px–2560px screens. |
| **Monetization** | Adsterra ads from Day 1 for earliest possible revenue. |
| **Data collection** | Google Sheets via Apps Script webhook — zero DB cost. |
| **Visitor tracking** | Today + Total visitor counts, non-intrusive placement. |

---

## 2. Harness Architecture

This project uses the **Anthropic Harness Design Method** for fully autonomous Claude Code development.

### 2.1 Planner Agent Phase

Claude Code acts as the Planner Agent first:
- Read this PRD.md in full.
- Do NOT add implementation details beyond what is specified here.
- Focus on WHAT to build, not HOW (implementation decisions are made during coding).

### 2.2 Initializer Agent — First Session Setup

On the very first session, Claude Code MUST create these files:

```
feature_list.json    → ordered list of all features with status
claude-progress.txt  → current progress log (updated after every feature)
init.sh              → project bootstrap script (install deps, start dev server)
```

**feature_list.json format:**
```json
{
  "features": [
    {
      "id": "F01",
      "name": "Project scaffold + Next.js setup",
      "status": "pending",
      "priority": 1,
      "milestone": true
    }
  ]
}
```

**claude-progress.txt format:**
```
=== WarEcon Monitor Progress ===
Last updated: [timestamp]
Current feature: F01
Completed: []
Blocked: []
Notes: []
```

### 2.3 Session Start Routine (EVERY session)

```
1. Read claude-progress.txt → understand where we left off
2. Read feature_list.json → know what's next
3. Run tests (if any exist) → confirm nothing is broken
4. Pick the next "pending" feature → implement it
5. Test the feature → verify it works
6. Git commit with descriptive message
7. Update claude-progress.txt
8. If milestone feature → git push
9. Move to next feature or end session
```

### 2.4 Builder + Reviewer Separation

- **Builder pass:** Implement the feature.
- **Reviewer pass:** After implementation, re-read the code critically. Check for:
  - Responsive breakpoints working?
  - SEO meta tags present?
  - Ad slots not broken?
  - Accessibility basics (alt text, semantic HTML, aria labels)?
  - Performance (no unnecessary re-renders, images optimized)?
- Fix issues found in review before committing.

---

## 3. Tech Stack & Cost Strategy

### Stack (All Free Tier)

| Layer | Technology | Cost |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | Free |
| Language | **TypeScript** | Free |
| Styling | **Tailwind CSS** | Free |
| Charts | **Recharts** or **Chart.js** (pick lighter one) | Free |
| Data API | **Yahoo Finance API** (via `yahoo-finance2` npm package) | Free |
| Fallback API | If Yahoo blocked → use **Alpha Vantage free tier** (25 req/day) or scrape public data | Free |
| Hosting | **Vercel** (free tier, 100GB bandwidth) | Free |
| DNS/URL | **Vercel auto-generated URL** (no custom domain cost) | Free |
| Database | **None** — Google Sheets as data store | Free |
| Data Collection | **Google Apps Script** webhook → Google Sheets | Free |
| Analytics/Visitor Count | **Custom counter using Google Sheets** or **CountAPI** (free) | Free |
| Ads | **Adsterra** (primary), fallback: **PopAds**, **HilltopAds** | Revenue generating |
| Version Control | **GitHub** (free public or private repo) | Free |
| CI/CD | **Vercel auto-deploy on push** | Free |

### Cost Guardrails

- NEVER introduce any paid service, paid API tier, or paid hosting.
- If a free API has rate limits, implement **client-side caching** (localStorage) with 5-minute TTL.
- All images must be SVG or optimized WebP < 50KB.
- No external font files — use Google Fonts CDN link only.

---

## 4. Feature List

### Phase 1: Foundation (Milestone → git push)

| ID | Feature | Details |
|---|---|---|
| F01 | Project scaffold | Next.js 14 + TypeScript + Tailwind CSS + ESLint setup |
| F02 | GitHub repo creation | Use `gh repo create` CLI command. Public repo. |
| F03 | Base layout + responsive shell | Header, main content area, footer. Mobile-first grid. |
| F04 | Soft color theme system | CSS variables for warm/soft palette. Light mode default. |

### Phase 2: Core Dashboard (Milestone → git push)

| ID | Feature | Details |
|---|---|---|
| F05 | Commodity data fetcher | Server-side API route using yahoo-finance2 for: Crude Oil (CL=F), Natural Gas (NG=F), Wheat (ZW=F), Corn (ZC=F), Gold (GC=F), Brent Oil (BZ=F). Cache results for 5 min. |
| F06 | Commodity price cards | Card grid showing: commodity name, current price, % change (daily), mini sparkline chart, color-coded (green/red). |
| F07 | Historical chart view | Expandable chart per commodity — 1W, 1M, 3M, 6M, 1Y toggle. |
| F08 | War event timeline overlay | Annotate chart with major geopolitical events (stored as local JSON). |

### Phase 3: SEO & Meta (Milestone → git push)

| ID | Feature | Details |
|---|---|---|
| F09 | SEO meta tags | Dynamic `<title>`, `<meta description>`, Open Graph, Twitter Card for every page. |
| F10 | Sitemap + robots.txt | Auto-generated sitemap.xml. |
| F11 | Structured data (JSON-LD) | Schema.org WebApplication + Dataset markup. |
| F12 | Semantic HTML | Proper heading hierarchy, landmark roles, alt texts. |

### Phase 4: Monetization (Milestone → git push)

| ID | Feature | Details |
|---|---|---|
| F13 | Adsterra ad integration | Banner ad (728x90 header), native ad (in-feed), popunder (optional). Use Adsterra script tags. Placeholder slots ready for Adsterra ad unit keys. |
| F14 | Ad slot responsive behavior | Ads must resize/hide gracefully on mobile. Never overlap content. |
| F15 | Ad fallback | If Adsterra not approved yet, show placeholder with "Ad Space" text so layout is preserved. |

### Phase 5: Data Collection (Milestone → git push)

| ID | Feature | Details |
|---|---|---|
| F16 | "Price Alert" signup form | Simple form: email + selected commodities. |
| F17 | Google Sheets webhook | Apps Script web app (doPost) that receives form data and appends to Sheet. |
| F18 | Auto POST on form submit | When user clicks "Subscribe" button, JS fires fetch() POST to Apps Script URL. Show success/error toast. |
| F19 | "Calculate Impact" tool | User inputs: commodity, start date, end date → shows % change. On click "Calculate", POST input data to Google Sheets for collection. |

### Phase 6: Visitor Counter (Milestone → git push)

| ID | Feature | Details |
|---|---|---|
| F20 | Visitor counter (Today + Total) | Use a free counting API (CountAPI.xyz or custom Google Sheets counter). |
| F21 | Counter UI placement | Small, subtle badge in the **footer** area — does NOT distract from main content. Format: "👁 Today: 142 | Total: 12,847" |

### Phase 7: Polish & Deploy (Milestone → git push)

| ID | Feature | Details |
|---|---|---|
| F22 | Loading skeletons | Shimmer effect placeholders while data loads. |
| F23 | Error boundaries | Graceful fallback UI if API fails. |
| F24 | Performance audit | Lighthouse score ≥ 90 for Performance, SEO, Accessibility. |
| F25 | Vercel deployment | Deploy to Vercel. Get live URL. Verify all features work in production. |
| F26 | Final README.md | Project description, tech stack, setup guide, live URL. |

---

## 5. UI/UX Design Spec

### 5.1 Design Philosophy

- **Comfortable & Modern**: Clean whitespace, soft shadows, rounded corners.
- **Non-overwhelming**: Maximum 6 commodity cards visible without scrolling on desktop.
- **Data-first**: Numbers and charts are the hero, not decoration.
- **Trust-building**: Professional typography, consistent spacing, subtle animations.

### 5.2 Color Palette (Soft & Warm)

```css
:root {
  /* Background */
  --bg-primary: #FAFAF8;        /* warm off-white */
  --bg-secondary: #F3F1EE;      /* soft cream */
  --bg-card: #FFFFFF;            /* white cards with shadow */

  /* Text */
  --text-primary: #2D2D2D;      /* near-black, not pure black */
  --text-secondary: #6B7280;    /* muted gray */
  --text-muted: #9CA3AF;        /* light gray */

  /* Accent */
  --accent-primary: #4A72FF;    /* calm blue */
  --accent-success: #34D399;    /* soft green for positive */
  --accent-danger: #F87171;     /* soft red for negative */
  --accent-warning: #FBBF24;    /* warm yellow */

  /* Borders & Shadows */
  --border-light: #E5E7EB;
  --shadow-card: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-hover: 0 4px 12px rgba(0,0,0,0.08);

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
}
```

### 5.3 Typography

- **Headings:** "Plus Jakarta Sans" (Google Fonts) — modern, geometric, warm.
- **Body:** "Inter" for body text — maximum readability at small sizes.
- **Monospace (prices):** "JetBrains Mono" — clear number distinction.

### 5.4 Responsive Breakpoints

```
Mobile:  320px – 767px   → 1 column, stacked cards
Tablet:  768px – 1023px  → 2 columns
Desktop: 1024px – 1439px → 3 columns
Wide:    1440px+          → 3 columns with max-width container (1280px)
```

### 5.5 Layout Structure

```
┌─────────────────────────────────────────┐
│  Header: Logo + Nav + "War & Commodity" │
│  [Adsterra Banner Ad - 728x90]          │
├─────────────────────────────────────────┤
│                                         │
│  Hero Section:                          │
│  "Global Commodity Impact Dashboard"    │
│  Last updated: [timestamp]              │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────┐  ┌──────┐  ┌──────┐          │
│  │Crude │  │ Nat  │  │Wheat │          │
│  │ Oil  │  │ Gas  │  │      │          │
│  │$72.4 │  │$3.21 │  │$5.82 │          │
│  │+2.3% │  │-1.1% │  │+0.8% │          │
│  │▁▂▃▅▆ │  │▆▅▃▂▁ │  │▁▂▂▃▅ │          │
│  └──────┘  └──────┘  └──────┘          │
│                                         │
│  ┌──────┐  ┌──────┐  ┌──────┐          │
│  │Corn  │  │ Gold │  │Brent │          │
│  │      │  │      │  │ Oil  │          │
│  │$4.51 │  │$2031 │  │$76.2 │          │
│  │-0.5% │  │+1.2% │  │+1.8% │          │
│  │▃▂▁▁▂ │  │▁▃▅▆▇ │  │▂▃▅▆▇ │          │
│  └──────┘  └──────┘  └──────┘          │
│                                         │
│  [Adsterra Native Ad - In Feed]        │
│                                         │
├─────────────────────────────────────────┤
│  Detailed Chart Section (expandable)    │
│  [Time Range: 1W | 1M | 3M | 6M | 1Y] │
│  [Chart with war event annotations]    │
├─────────────────────────────────────────┤
│  "Calculate Impact" Tool               │
│  [Commodity ▼] [Start Date] [End Date] │
│  [Calculate Button] → shows % change   │
│  (silently POSTs data to Google Sheets) │
├─────────────────────────────────────────┤
│  Price Alert Signup                     │
│  [Email] [Select Commodities]           │
│  [Subscribe Button]                     │
│  → POST to Google Sheets webhook        │
├─────────────────────────────────────────┤
│  Footer:                                │
│  About | Data Sources | Contact         │
│  👁 Today: 142 | Total: 12,847         │
│  © 2026 WarEcon Monitor                 │
│  [Adsterra Banner Ad - Footer]          │
└─────────────────────────────────────────┘
```

### 5.6 Micro-interactions

- Card hover: lift with `--shadow-hover`, slight scale(1.02).
- Price change flash: brief highlight animation when data refreshes.
- Chart tooltip: follows cursor, shows exact price + date.
- Form submit: button shows spinner → success checkmark.
- Skeleton loaders: pulse animation while data loads.

---

## 6. SEO Strategy

### 6.1 Target Keywords

**Primary:**
- war commodity prices
- conflict commodity index
- war impact on oil prices
- geopolitical commodity tracker

**Secondary:**
- crude oil price war
- natural gas conflict price
- wheat price ukraine war
- commodity prices live dashboard

### 6.2 On-Page SEO

- **Title tag:** "WarEcon Monitor — Live War-Impact Commodity Price Dashboard"
- **Meta description:** "Track real-time commodity prices affected by global conflicts. Monitor crude oil, natural gas, wheat, corn, and gold prices with war-event annotations. Free dashboard."
- **H1:** One per page, keyword-rich.
- **URL structure:** Clean paths: `/`, `/commodity/crude-oil`, `/calculator`.
- **Image alt tags:** Descriptive, keyword-relevant.
- **Internal linking:** Cards link to detail pages.

### 6.3 Technical SEO

- **SSR/SSG** via Next.js for search engine crawlability.
- **sitemap.xml** auto-generated at build time.
- **robots.txt** allowing all crawlers.
- **JSON-LD** structured data: WebApplication, Dataset schemas.
- **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1.
- **Canonical URLs** on all pages.

---

## 7. Data Collection — Google Sheets Webhook

### 7.1 Architecture

```
User Action (browser)
    ↓
fetch() POST → Google Apps Script Web App URL
    ↓
Apps Script doPost(e) → parse JSON body
    ↓
Append row to Google Sheet
    ↓
Return { status: "success" } JSON
```

### 7.2 Google Apps Script Code (Claude Code MUST create this file)

Create file: `google-apps-script/webhook.gs`

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),                    // Timestamp
      data.type || "unknown",        // Form type: "alert_signup" or "calculate_impact"
      data.email || "",              // Email (for alerts)
      data.commodity || "",          // Selected commodity
      data.startDate || "",          // Start date (for calculator)
      data.endDate || "",            // End date (for calculator)
      data.result || "",             // Calculation result
      data.userAgent || "",          // Browser info
      data.referrer || ""            // Where they came from
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Required for CORS preflight
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "Webhook is active" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 7.3 Setup Instructions (Include in README.md)

```
1. Go to Google Sheets → Create new spreadsheet named "WarEcon Monitor Data"
2. Add headers: Timestamp | Type | Email | Commodity | StartDate | EndDate | Result | UserAgent | Referrer
3. Extensions → Apps Script
4. Paste the webhook.gs code
5. Deploy → New Deployment → Web App
6. Execute as: Me | Who has access: Anyone
7. Copy the deployment URL
8. Set the URL as environment variable: NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL
```

### 7.4 Frontend Integration

On "Calculate" button click AND "Subscribe" button click:

```typescript
const postToSheet = async (data: Record<string, string>) => {
  try {
    await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL!, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        userAgent: navigator.userAgent,
        referrer: document.referrer,
      }),
    });
  } catch (err) {
    console.error("Sheet webhook error:", err);
  }
};
```

---

## 8. Ad Monetization — Adsterra First

### 8.1 Strategy: Revenue from Day 1

**Primary network:** Adsterra (fast approval, accepts new sites, multiple ad formats).
**Why not Google AdSense first:** Slow approval (weeks), strict content policy, requires traffic history. Adsterra approves within 24-48 hours.

**Fallback networks (if Adsterra insufficient):**
1. PopAds — popunder monetization
2. HilltopAds — push notification ads
3. Monetag — smart links + push
4. Google AdSense — once traffic > 1,000/month

### 8.2 Ad Slot Placement

| Slot | Format | Location | Size |
|---|---|---|---|
| slot-header | Banner | Below header | 728x90 (desktop), 320x50 (mobile) |
| slot-infeed | Native Banner | Between commodity cards row 1 and row 2 | Responsive |
| slot-calculator | Banner | Above calculator tool | 468x60 |
| slot-footer | Banner | Above footer | 728x90 (desktop), 320x100 (mobile) |
| slot-popunder | Popunder (optional) | Triggered once per session | Full page |

### 8.3 Adsterra Integration Code Pattern

Claude Code must create a reusable `<AdSlot />` component:

```tsx
// components/AdSlot.tsx
interface AdSlotProps {
  slotId: string;
  format: "banner" | "native" | "popunder";
  adKey?: string; // Adsterra ad unit key — set when received from dashboard
  className?: string;
}

export default function AdSlot({ slotId, format, adKey, className }: AdSlotProps) {
  if (!adKey) {
    // Placeholder until Adsterra key is configured
    return (
      <div
        id={slotId}
        className={`ad-slot ad-placeholder ${className}`}
        style={{
          background: "var(--bg-secondary)",
          border: "1px dashed var(--border-light)",
          borderRadius: "var(--radius-sm)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-muted)",
          fontSize: "12px",
          padding: "8px",
          minHeight: "90px",
        }}
      >
        Advertisement
      </div>
    );
  }

  // Inject Adsterra script for this ad unit
  return (
    <div id={slotId} className={`ad-slot ${className}`}>
      <script
        async
        src={`//www.highperformanceformat.com/${adKey}/invoke.js`}
      />
      <div id={adKey} />
    </div>
  );
}
```

### 8.4 Adsterra Setup Steps

```
1. Register at https://www.adsterra.com (Publisher account)
2. Add website URL (the Vercel deployment URL)
3. Wait for approval (usually 24-48 hours)
4. Once approved, go to Ad Units → Create new unit for each slot
5. Copy the ad unit key for each slot
6. Update environment variables or constants:
   NEXT_PUBLIC_ADSTERRA_HEADER_KEY=xxxxx
   NEXT_PUBLIC_ADSTERRA_INFEED_KEY=xxxxx
   NEXT_PUBLIC_ADSTERRA_CALCULATOR_KEY=xxxxx
   NEXT_PUBLIC_ADSTERRA_FOOTER_KEY=xxxxx
   NEXT_PUBLIC_ADSTERRA_POPUNDER_KEY=xxxxx
7. Redeploy to Vercel
```

### 8.5 Ad Rules

- Ads must NEVER overlap content.
- Ads must be clearly distinguishable from content.
- On mobile, reduce ad frequency — max 2 visible ad slots at a time.
- Popunder: maximum 1 per user session (use sessionStorage flag).
- Ad loading must NOT block page render — use lazy loading / async scripts.

---

## 9. Visitor Counter

### 9.1 Implementation Options (Pick cheapest working one)

**Option A — CountAPI (Preferred, simplest):**
```
GET https://api.countapi.xyz/hit/warecon-monitor/visits → { value: 12847 }
```
- Free, no signup, no CORS issues.
- Caveat: CountAPI may have downtime. If so, fall back to Option B.

**Option B — Google Sheets Counter:**
- Same Apps Script, separate sheet tab "Visitors".
- On page load, POST { type: "visit" } → increment counter in sheet.
- GET endpoint returns current count.

**Option C — Vercel KV (if free tier available):**
- Use Vercel KV for atomic increment.

### 9.2 Display Rules

- **Location:** Footer area, right-aligned or centered.
- **Style:** Small, muted text. Must NOT compete with main content.
- **Format:** `👁 Today: {n} | Total: {n}` with number formatting (commas).
- **Update:** On page load only. No real-time WebSocket.

---

## 10. Deployment — Vercel (Free Tier)

### 10.1 Deployment Steps (Claude Code MUST execute these via CLI)

```bash
# 1. Install Vercel CLI (if not already installed)
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Link project to Vercel
vercel link

# 4. Set environment variables
vercel env add NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL production
vercel env add NEXT_PUBLIC_ADSTERRA_HEADER_KEY production
vercel env add NEXT_PUBLIC_ADSTERRA_INFEED_KEY production
vercel env add NEXT_PUBLIC_ADSTERRA_FOOTER_KEY production

# 5. Deploy to production
vercel --prod

# 6. Get the live URL
vercel ls
```

### 10.2 URL Strategy

- Vercel auto-generates: `warecon-monitor.vercel.app` (or similar).
- This URL does NOT expose GitHub username.
- Share this Vercel URL publicly.
- Do NOT share the GitHub repo URL publicly (username exposure).

### 10.3 Auto-Deploy

- Connect GitHub repo to Vercel project.
- Every `git push` to `main` triggers auto-deploy.
- Preview deployments on PRs.

---

## 11. Git Strategy & Milestones

### 11.1 Repository Setup (FIRST THING TO DO)

```bash
# Create GitHub repo using gh CLI — MANDATORY
gh repo create warecon-monitor --public --description "War Impact Commodity Price Dashboard" --clone
cd warecon-monitor
git checkout -b main
```

### 11.2 Commit Convention

```
feat: add commodity price cards with sparklines
fix: resolve mobile layout overflow on card grid
style: apply soft color palette to all components
seo: add structured data JSON-LD markup
ads: integrate Adsterra banner slots
data: wire Google Sheets webhook for calculator
deploy: configure Vercel production deployment
```

### 11.3 Milestone Push Schedule

| Milestone | After Feature | Push Command |
|---|---|---|
| M1: Foundation | F04 complete | `git push origin main` |
| M2: Core Dashboard | F08 complete | `git push origin main` |
| M3: SEO & Meta | F12 complete | `git push origin main` |
| M4: Monetization | F15 complete | `git push origin main` |
| M5: Data Collection | F19 complete | `git push origin main` |
| M6: Visitor Counter | F21 complete | `git push origin main` |
| M7: Polish & Deploy | F26 complete | `git push origin main` |

**IMPORTANT:** Every milestone push triggers Vercel auto-deploy. Verify the live site after each push.

---

## 12. File Structure

```
warecon-monitor/
├── .github/
│   └── workflows/           # (optional) CI actions
├── google-apps-script/
│   └── webhook.gs           # Google Apps Script code (for reference)
├── public/
│   ├── favicon.ico
│   ├── og-image.png         # Open Graph preview image (1200x630)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with fonts, meta, ad scripts
│   │   ├── page.tsx         # Home — dashboard
│   │   ├── commodity/
│   │   │   └── [slug]/
│   │   │       └── page.tsx # Individual commodity detail page
│   │   └── api/
│   │       ├── commodities/
│   │       │   └── route.ts # API route: fetch & cache commodity data
│   │       └── visitors/
│   │           └── route.ts # API route: visitor count
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── dashboard/
│   │   │   ├── CommodityCard.tsx
│   │   │   ├── CommodityGrid.tsx
│   │   │   ├── SparklineChart.tsx
│   │   │   └── DetailChart.tsx
│   │   ├── tools/
│   │   │   ├── ImpactCalculator.tsx
│   │   │   └── PriceAlertForm.tsx
│   │   ├── ads/
│   │   │   └── AdSlot.tsx
│   │   ├── ui/
│   │   │   ├── Skeleton.tsx
│   │   │   ├── Toast.tsx
│   │   │   └── Badge.tsx
│   │   └── seo/
│   │       ├── JsonLd.tsx
│   │       └── MetaTags.tsx
│   ├── lib/
│   │   ├── api.ts           # Yahoo Finance fetcher with cache
│   │   ├── sheets.ts        # Google Sheets POST helper
│   │   ├── visitors.ts      # Visitor counter logic
│   │   └── constants.ts     # Commodity symbols, war events, config
│   ├── hooks/
│   │   ├── useCommodityData.ts
│   │   └── useVisitorCount.ts
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   └── styles/
│       └── globals.css      # Tailwind + CSS variables
├── feature_list.json        # Feature tracking (harness file)
├── claude-progress.txt      # Progress log (harness file)
├── init.sh                  # Bootstrap script (harness file)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── .env.local               # Local environment variables
├── .env.example             # Template for env vars
├── .gitignore
├── vercel.json              # Vercel configuration
├── LICENSE
└── README.md
```

---

## 13. Implementation Phases

### Phase Execution Rules

1. Complete each feature fully before moving to the next.
2. Test after every feature.
3. Commit after every feature with a descriptive message.
4. Push at milestones only (not after every commit).
5. If a free API is blocked or rate-limited, implement mock data fallback immediately — do not stall.
6. If stuck on a CLI task, solve it via CLI automation — never leave it as a manual step.
7. When creating external links (share URLs), ALWAYS use the Vercel deployment URL, never the GitHub repo URL.

### Automation-First Principle

If a problem can be solved via CLI, solve it via CLI. Examples:
- `gh repo create` instead of manual GitHub creation.
- `vercel --prod` instead of manual Vercel dashboard deploy.
- `npx next lint` instead of manual code review.
- Environment variable setup via `vercel env add`.

---

## 14. Session Routine for Claude Code

**Copy this block into your Claude Code session as the starting prompt:**

```
You are building WarEcon Monitor. Read these files first:
1. PRD.md — full product requirements
2. feature_list.json — current feature list with statuses
3. claude-progress.txt — where we left off

Then follow this loop:
1. Check progress → What's the next pending feature?
2. Read feature requirements from PRD.md
3. Implement the feature
4. Self-review: Check responsive, SEO, ads, accessibility
5. Run `npm run build` to verify no errors
6. Commit: `git add -A && git commit -m "feat: [description]"`
7. Update feature_list.json (set status to "done")
8. Update claude-progress.txt
9. If this feature is a milestone → `git push origin main`
10. Continue to next feature

IMPORTANT RULES:
- All costs must be $0. Free tiers only.
- Responsive design: mobile-first, test at 375px and 1440px.
- Soft background colors — never pure white (#FFF) or pure black (#000).
- SEO meta tags on every page.
- Adsterra ad slots with placeholder if no key yet.
- Google Sheets webhook for all form submissions.
- Visitor counter in footer, subtle styling.
- Use `gh` CLI for GitHub operations.
- Deploy to Vercel via CLI.
- Never expose GitHub username — share Vercel URL only.
```

---

## Appendix A: War Events Data (Seed)

```json
[
  {
    "date": "2022-02-24",
    "event": "Russia invades Ukraine",
    "impactedCommodities": ["CL=F", "NG=F", "ZW=F"],
    "severity": "critical"
  },
  {
    "date": "2023-10-07",
    "event": "Hamas attack on Israel",
    "impactedCommodities": ["CL=F", "BZ=F", "GC=F"],
    "severity": "high"
  },
  {
    "date": "2024-01-12",
    "event": "Houthi Red Sea shipping attacks escalate",
    "impactedCommodities": ["CL=F", "BZ=F", "NG=F"],
    "severity": "high"
  },
  {
    "date": "2024-04-13",
    "event": "Iran drone/missile attack on Israel",
    "impactedCommodities": ["CL=F", "GC=F", "BZ=F"],
    "severity": "high"
  }
]
```

## Appendix B: Environment Variables Template

```env
# .env.example

# Google Sheets Webhook (Apps Script deployment URL)
NEXT_PUBLIC_GOOGlease complete all instrLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# Adsterra Ad Unit Keys (get from Adsterra dashboard after approval)
NEXT_PUBLIC_ADSTERRA_HEADER_KEY=
NEXT_PUBLIC_ADSTERRA_INFEED_KEY=
NEXT_PUBLIC_ADSTERRA_CALCULATOR_KEY=
NEXT_PUBLIC_ADSTERRA_FOOTER_KEY=
NEXT_PUBLIC_ADSTERRA_POPUNDER_KEY=

# Visitor Counter
NEXT_PUBLIC_COUNTER_NAMESPACE=warecon-monitor

# Site URL (Vercel deployment)
NEXT_PUBLIC_SITE_URL=https://warecon-monitor.vercel.app
```

---

**END OF PRD**

*This document is the single source of truth. Claude Code should reference this file at the start of every session. Do not deviate from these specifications without updating this document first.*