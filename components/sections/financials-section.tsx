import { SectionContainer } from '../section-container';
import { LineChartMulti } from '../charts/line-chart-multi';
import { BarDualAxis } from '../charts/bar-dual-axis';

const revenueData = [
  { Year: '2014', Revenue: 14250, EBITDA: 1850, Net_Income: 980 },
  { Year: '2015', Revenue: 16800, EBITDA: 2150, Net_Income: 1125 },
  { Year: '2016', Revenue: 19200, EBITDA: 2680, Net_Income: 1340 },
  { Year: '2017', Revenue: 22400, EBITDA: 3120, Net_Income: 1580 },
  { Year: '2018', Revenue: 26100, EBITDA: 3450, Net_Income: 1720 },
  { Year: '2019', Revenue: 28900, EBITDA: 3580, Net_Income: 1650 },
  { Year: '2020', Revenue: 32500, EBITDA: 3920, Net_Income: 1780 },
  { Year: '2021', Revenue: 45600, EBITDA: 5840, Net_Income: 2950 },
  { Year: '2022', Revenue: 89400, EBITDA: 11280, Net_Income: 5640 },
  { Year: '2023', Revenue: 112300, EBITDA: 13876, Net_Income: 6520 },
  { Year: '2024E', Revenue: 125000, EBITDA: 15000, Net_Income: 7000 },
  { Year: '2025E', Revenue: 135000, EBITDA: 16200, Net_Income: 7560 },
];

const marginData = [
  { Year: '2014', EBITDA_Margin: 13.0, Net_Margin: 6.9 },
  { Year: '2015', EBITDA_Margin: 12.8, Net_Margin: 6.7 },
  { Year: '2016', EBITDA_Margin: 14.0, Net_Margin: 7.0 },
  { Year: '2017', EBITDA_Margin: 13.9, Net_Margin: 7.1 },
  { Year: '2018', EBITDA_Margin: 13.2, Net_Margin: 6.6 },
  { Year: '2019', EBITDA_Margin: 12.4, Net_Margin: 5.7 },
  { Year: '2020', EBITDA_Margin: 12.1, Net_Margin: 5.5 },
  { Year: '2021', EBITDA_Margin: 12.8, Net_Margin: 6.5 },
  { Year: '2022', EBITDA_Margin: 12.6, Net_Margin: 6.3 },
  { Year: '2023', EBITDA_Margin: 12.4, Net_Margin: 5.8 },
  { Year: '2024E', EBITDA_Margin: 12.0, Net_Margin: 5.6 },
  { Year: '2025E', EBITDA_Margin: 12.0, Net_Margin: 5.6 },
];

const roicData = [
  { Year: '2014', ROIC: 15.2, ROE: 18.5 },
  { Year: '2016', ROIC: 18.4, ROE: 22.3 },
  { Year: '2018', ROIC: 18.9, ROE: 21.8 },
  { Year: '2020', ROIC: 14.8, ROE: 16.2 },
  { Year: '2022', ROIC: 24.3, ROE: 31.2 },
  { Year: '2023', ROIC: 22.1, ROE: 28.6 },
  { Year: '2024E', ROIC: 21.5, ROE: 27.8 },
];

const capexData = [
  { Year: '2014', CapEx: 850, FCF: 420 },
  { Year: '2016', CapEx: 1050, FCF: 720 },
  { Year: '2018', CapEx: 1350, FCF: 950 },
  { Year: '2020', CapEx: 1280, FCF: 1120 },
  { Year: '2022', CapEx: 2450, FCF: 3920 },
  { Year: '2023', CapEx: 2980, FCF: 4240 },
  { Year: '2024E', CapEx: 3250, FCF: 4500 },
];

export function FinancialsSection() {
  return (
    <SectionContainer title="Financial Performance & Metrics">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="border border-border bg-card p-4">
          <h3 className="mb-3 font-mono text-xs font-semibold text-foreground">
            Revenue, EBITDA & Net Income (₺M)
          </h3>
          <LineChartMulti 
            data={revenueData}
            xKey="Year"
            lines={[
              { key: 'Revenue', color: 'oklch(0.6 0.2 250)', name: 'Revenue' },
              { key: 'EBITDA', color: 'oklch(0.65 0.18 145)', name: 'EBITDA' },
              { key: 'Net_Income', color: 'oklch(0.7 0.15 50)', name: 'Net Income' },
            ]}
          />
        </div>
        
        <div className="border border-border bg-card p-4">
          <h3 className="mb-3 font-mono text-xs font-semibold text-foreground">
            Margin Evolution (%)
          </h3>
          <LineChartMulti 
            data={marginData}
            xKey="Year"
            lines={[
              { key: 'EBITDA_Margin', color: 'oklch(0.6 0.2 250)', name: 'EBITDA Margin' },
              { key: 'Net_Margin', color: 'oklch(0.65 0.18 145)', name: 'Net Margin' },
            ]}
          />
        </div>

        <div className="border border-border bg-card p-4">
          <h3 className="mb-3 font-mono text-xs font-semibold text-foreground">
            ROIC vs ROE (%)
          </h3>
          <LineChartMulti 
            data={roicData}
            xKey="Year"
            lines={[
              { key: 'ROIC', color: 'oklch(0.6 0.2 250)', name: 'ROIC' },
              { key: 'ROE', color: 'oklch(0.7 0.15 50)', name: 'ROE' },
            ]}
          />
        </div>

        <div className="border border-border bg-card p-4">
          <h3 className="mb-3 font-mono text-xs font-semibold text-foreground">
            CapEx vs Free Cash Flow (₺M)
          </h3>
          <BarDualAxis 
            data={capexData}
            xKey="Year"
            bars={[
              { key: 'CapEx', color: 'oklch(0.55 0.22 15)', name: 'CapEx' },
              { key: 'FCF', color: 'oklch(0.65 0.18 145)', name: 'FCF' },
            ]}
          />
        </div>
      </div>
      
      <div className="mt-4 border-l-2 border-chart-3 bg-secondary/50 p-4">
        <p className="font-mono text-xs leading-relaxed text-foreground">
          <strong className="text-chart-3">IAS 29 Impact:</strong> Turkey designated hyperinflationary economy since 2022. 
          Revenue growth inflated by restatement (+58% in 2022), but underlying volume growth solid at +12% CAGR. 
          EBITDA margins compressed to 12.0% from COVID peak of 12.8% due to input cost pressures and FX volatility. 
          Expect margin stabilization at 12.0% through 2026E with operational efficiencies offsetting inflation.
        </p>
      </div>
    </SectionContainer>
  );
}
