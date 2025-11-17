## BIBI – Integrated Equity Research Dashboard  
### Ford Otosan (FROTO.IS) – Institutional Equity Research

This project is an interactive, institutional‑grade equity research dashboard for **Ford Otosan (FROTO.IS)**.  
It brings together valuation, financials, macro, strategy, and ESG into a single, visually rich interface tailored for professional investors and analysts.

The analytical backbone, detailed assumptions, and narrative behind this dashboard are documented in the accompanying research note:  
**“BIBI – Integrated Equity Research Note”** on Notion:  
[`Report`](https://22khair.notion.site/BIBI-Integrated-Equity-Research-Note-2aeb3e45fddb80788640e5ba2d980722?source=copy_link).

**Author:** Made by **Soltanbibi Alimova**.  

---

## 1. Project Overview

- **Purpose**: Provide a concise yet deep, visually driven view of Ford Otosan’s investment case, suitable for buy‑side and sell‑side equity research workflows.
- **Scope**: Covers investment thesis, historical and projected financials, valuation & DCF, macro context, risk matrix, strategic initiatives, and ESG scorecard.
- **Audience**: Designed **for professional investors only**, mirroring the disclaimer in the app footer.
- **Domain**: Turkish autos, with emphasis on:
  - Hyperinflation accounting (IAS 29) in Turkey
  - FX dynamics (USD/TRY) and macro backdrop
  - Capacity expansion, export strategy, and EV transition

The app uses **static, research‑driven inputs** to match the figures and framing used in the associated Notion research note, turning a traditional PDF‑style equity report into an interactive, dashboard‑style presentation.

---

## 2. Key Features

- **Investment Thesis & Overview (`OverviewSection`)**
  - Clear **BUY** rating, target price and upside vs. current price.
  - Snapshot metrics such as Market Cap, EV/Sales, EV/EBITDA, P/E (2024E), Revenue (2024E), EBITDA margin, ROE (2024E), and FCF yield.
  - A narrative thesis block summarizing capacity expansion, export growth, profitability (ROIC), and IAS 29‑related accounting noise.

- **Financial Performance & Metrics (`FinancialsSection`)**
  - Multi‑series line charts for:
    - **Revenue, EBITDA, Net Income** (2014–2025E)
    - **Margin evolution** (EBITDA margin, Net margin)
    - **ROIC vs. ROE**
  - Dual‑axis bar chart for **CapEx vs Free Cash Flow**, highlighting investment and cash generation.
  - A contextual note on **IAS 29 hyperinflation impact**, volume vs. nominal growth, and margin stabilization assumptions.

- **Valuation & DCF Analysis (`ValuationSection`)**
  - **Scenario cards (Bear / Base / Bull)** with:
    - Revenue CAGR, EBITDA margin, terminal growth rate
    - Equity value, price target, and implied upside
  - **DCF sensitivity heatmap** (WACC vs. terminal growth) showing resulting target prices.
  - **Peer comparison bar chart** (EV/EBITDA) vs key Turkish auto peers and peer median.
  - Visual **FCF projection bars** with FCF CAGR and FCF yield commentary.
  - A valuation summary block tying together DCF, multiples, ROIC, and key downside risks.

- **Strategic Initiatives & ESG (`StrategySection`)**
  - Progress view of core strategic initiatives:
    - Capacity expansion to 475k units
    - EV platform development and first EV launch timing
    - Export diversification to new markets
    - Digital manufacturing / Industry 4.0 rollout
  - **ESG scorecard** with metrics (CO₂ reduction, renewable energy mix, gender diversity, safety) and letter grades.
  - Strategy highlight cards for capacity expansion, export growth strategy, and EV transition roadmap.

- **Macroeconomic Context & Risk Assessment (`MacroSection`)**
  - Macro line chart showing **Turkey CPI inflation vs USD/TRY** over time, including forward estimates.
  - Highlight of current CPI, FX rate, and GDP growth expectations.
  - **Risk matrix** with severity, impact, and probability for:
    - FX volatility
    - EU auto sector slowdown
    - Input cost inflation
    - Regulatory / EV‑related changes
    - Domestic demand shocks
  - Textual macro narrative block on hyperinflation, policy tightening, FX trends, and Ford Otosan’s export hedge.

- **Institutional‑grade UI/UX**
  - Clean, **single‑page dashboard** layout (`app/page.tsx`) with full‑width sections.
  - Typography using **Inter**, **IBM Plex Sans**, and **IBM Plex Mono** for a research‑report feel.
  - Tailwind‑based design system, leveraging a rich set of reusable `components/ui` primitives (buttons, cards, tabs, charts, etc.).
  - Light/dark icon support and Vercel Analytics integration.

---

## 3. Tech Stack

- **Framework**
  - **Next.js 16** (App Router, `app/` directory)
  - **React 19** with **TypeScript**

- **Styling & Design System**
  - **Tailwind CSS 4** with custom theme tokens and utility classes
  - Utility class merging via `clsx` and `tailwind-merge` (`cn` helper in `lib/utils.ts`)
  - UI primitives based on **Radix UI** and a shadcn‑style component library (`components/ui/*`)

- **Charts & Data Visualization**
  - **Recharts** for line and bar charts (e.g. `LineChartMulti`, `BarDualAxis`, `ValuationHeatmap`, `PeerComparisonBar`)
  - Custom chart configuration via `components/charts/*`

- **Form & UI Utilities**
  - `@radix-ui/*` components for accordions, dialogs, menus, tooltips, etc.
  - `react-hook-form`, `zod`, `@hookform/resolvers` (available for forms, even if minimal in this specific dashboard)
  - `lucide-react` for iconography

- **Analytics & Runtime**
  - `@vercel/analytics` for lightweight analytics (`Analytics` in `app/layout.tsx`)

Refer to `package.json` for the full dependency list.

---

## 4. Data & Methodology

While many of the section components currently embed arrays directly for simplicity and performance, the repository also includes CSV datasets in the `data/` directory that mirror the structure of the analysis:

- **`revenue-ebitda-ni.csv`**
  - Historical and projected **Revenue**, **EBITDA**, and **Net Income**.
  - Mirrors data used by `FinancialsSection` for the `Revenue, EBITDA & Net Income` chart.

- **`margins.csv`**
  - Time series of **EBITDA margin** and **Net margin**.
  - Mirrors the margin evolution chart.

- **`roic-roe.csv`**
  - Historical and projected **ROIC** and **ROE** data.

- **`capex-fcf.csv`**
  - Capital expenditures vs **Free Cash Flow** by year.

- **`dcf-scenarios.csv`**
  - Input grid for Bear/Base/Bull DCF scenarios:
    - Revenue CAGR, EBITDA margin, terminal growth
    - Equity value, price target, and implied upside.

- **`peer-multiples.csv`**
  - Peer EV/Sales, EV/EBITDA, and P/E multiples, including Ford Otosan and peer median.

- **`macro-turkey.csv`**
  - Macro variables such as inflation and USD/TRY, closely matching the macro chart in `MacroSection`.

The **detailed modelling assumptions, scenario rationales, and narrative interpretation** of these numbers are fully documented in the Notion research note:  
[`Details`](https://22khair.notion.site/BIBI-Integrated-Equity-Research-Note-2aeb3e45fddb80788640e5ba2d980722?source=copy_link).

---

## 5. Project Structure (High‑Level)

- **`app/`**
  - `layout.tsx`: Root layout, fonts, global styles, and Vercel Analytics.
  - `page.tsx`: Single dashboard page combining all major sections:
    - `OverviewSection`, `FinancialsSection`, `ValuationSection`, `StrategySection`, `MacroSection`.
  - `globals.css`: App‑specific global styles.

- **`components/`**
  - `dashboard-header.tsx`: Top‑of‑page header (branding, context).
  - `section-container.tsx`: Shared layout wrapper for each section (title, padding, responsive grid).
  - `sections/`:
    - `overview-section.tsx`
    - `financials-section.tsx`
    - `valuation-section.tsx`
    - `strategy-section.tsx`
    - `macro-section.tsx`
  - `charts/`:
    - `line-chart-multi.tsx`: Generic multi‑series line chart wrapper.
    - `bar-dual-axis.tsx`: Dual‑axis bar chart for CapEx vs FCF.
    - `peer-comparison-bar.tsx`: Peer multiple bar chart.
    - `valuation-heatmap.tsx`: DCF sensitivity heatmap.
  - `ui/`: Reusable UI primitives (buttons, cards, inputs, dialogs, tabs, toast, sidebar, etc.).
  - `theme-provider.tsx`: Theme / color‑scheme support (if used in the main layout).

- **`data/`**
  - CSV datasets for financials, valuation inputs, and macro series (see “Data & Methodology” above).

- **`lib/`**
  - `formatters.ts`: Numeric formatting helpers (TRY currency, numbers, percentages, multiples, large numbers).
  - `utils.ts`: `cn` helper to merge class names with Tailwind.

- **`hooks/`**
  - Reusable hooks such as mobile detection and toast helpers (`use-mobile.ts`, `use-toast.ts`).

---

## 6. Getting Started

### 6.1 Prerequisites

- **Node.js**: Recommended **Node 20+**
- **Package manager**: Project uses **pnpm** (see `packageManager` field in `package.json`), but `npm` or `yarn` can be used with minor adjustments.

### 6.2 Installation

Clone the repository and install dependencies:

```bash
# with pnpm (recommended)
pnpm install

# or with npm
npm install
```

### 6.3 Development Server

Run the Next.js dev server:

```bash
pnpm dev
# or
npm run dev
```

Then open `http://localhost:3000` in your browser.  
The dashboard is a single page (`/`) rendering all sections in sequence.

### 6.4 Production Build

Build the app:

```bash
pnpm build
# or
npm run build
```

Start the production server:

```bash
pnpm start
# or
npm start
```

### 6.5 Linting

```bash
pnpm lint
# or
npm run lint
```

---

## 7. Modifying & Extending the Dashboard

- **Updating figures / assumptions**
  - Most figures (target price, current price, upside, margins, macro forecasts, etc.) are defined as arrays/constants inside the section components.
  - To update any assumption, edit the relevant data arrays in:
    - `components/sections/overview-section.tsx`
    - `components/sections/financials-section.tsx`
    - `components/sections/valuation-section.tsx`
    - `components/sections/strategy-section.tsx`
    - `components/sections/macro-section.tsx`

- **Connecting to external data**
  - The `data/*.csv` files provide a natural bridge if you want to load inputs from a data pipeline instead of hard‑coded arrays.
  - You can add server components or API routes to parse these CSVs or to connect to an external data source (e.g., a data warehouse or financial API).

- **Styling and theme**
  - Tailwind classes are used extensively; global theme tokens are defined in `globals.css` (and related CSS files).
  - To adjust typography, spacing, or colors globally, update Tailwind tokens and CSS variables.
  - Individual components can be restyled via their class names or by extending the `components/ui` primitives.

- **Reusing the structure for other tickers**
  - Replace the hard‑coded Ford Otosan data and textual commentary with your target company’s metrics and thesis.
  - Mirror the same section structure and chart types, then adjust copywriting and datasets.
  - Update SEO metadata in `app/layout.tsx` (title, description) and the footer text in `app/page.tsx`.

---

## 8. Author & Credits

- **Primary author and researcher**: **Soltanbibi Alimova**
  - Detailed equity research note and methodology:  
    [`Details`](https://22khair.notion.site/BIBI-Integrated-Equity-Research-Note-2aeb3e45fddb80788640e5ba2d980722?source=copy_link)

- **UI foundation**
  - Built with **Next.js**, **React**, **Tailwind CSS**, **Radix UI**, and **Recharts**.
  - Layout and component scaffolding were originally generated with `v0.app` and then customized for this research use‑case.

---

## 9. Disclaimer

- This dashboard is intended **for informational purposes only** and **does not constitute investment advice**.
- The content is designed primarily **for professional / institutional investors**.
- All figures, projections, and scenarios are illustrative and based on the assumptions documented in the associated Notion research note by **Soltanbibi Alimova**.  
  Users should perform their own due diligence and consult their own advisors before making any investment decisions.


