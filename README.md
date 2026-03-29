# WarEcon Monitor

**Live War-Impact Commodity Price Dashboard**

Track how geopolitical conflict moves global commodity markets — in real time.

## Features

- **Real-time commodity prices**: Crude Oil (WTI), Natural Gas, Wheat, Corn, Gold, Brent Oil
- **Interactive charts**: Historical price data with 1W/1M/3M/6M/1Y toggles
- **War event annotations**: Geopolitical events overlaid on price charts
- **Impact Calculator**: Calculate price changes between any two dates
- **Price Alerts**: Subscribe to commodity price notifications
- **Mobile-first responsive design**: Works on 320px to 2560px screens
- **SEO optimized**: Structured data, sitemap, Open Graph, Twitter Cards

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Data API | Yahoo Finance (yahoo-finance2) |
| Hosting | Vercel (free tier) |
| Data Collection | Google Sheets via Apps Script webhook |
| Ads | Adsterra (placeholder slots ready) |

## Setup

```bash
# Clone the repo
git clone https://github.com/taeshin11/warecon-monitor.git
cd warecon-monitor

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Environment Variables

See `.env.example` for all available configuration options:

- `NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL` — Google Apps Script webhook URL
- `NEXT_PUBLIC_ADSTERRA_*` — Adsterra ad unit keys
- `NEXT_PUBLIC_SITE_URL` — Production URL for SEO

## Google Sheets Webhook Setup

1. Create a Google Sheet named "WarEcon Monitor Data"
2. Add headers: Timestamp | Type | Email | Commodity | StartDate | EndDate | Result | UserAgent | Referrer
3. Open Extensions > Apps Script
4. Paste the code from `google-apps-script/webhook.gs`
5. Deploy as Web App (Execute as: Me, Access: Anyone)
6. Copy the deployment URL to `NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL`

## Deployment

```bash
# Deploy to Vercel
vercel --prod
```

## Commodities Tracked

| Symbol | Commodity |
|---|---|
| CL=F | Crude Oil (WTI) |
| NG=F | Natural Gas |
| ZW=F | Wheat |
| ZC=F | Corn |
| GC=F | Gold |
| BZ=F | Brent Crude Oil |

## License

MIT
