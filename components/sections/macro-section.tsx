import { SectionContainer } from '../section-container';
import { LineChartMulti } from '../charts/line-chart-multi';

const macroData = [
  { Year: '2019', Inflation: 15.2, USD_TRY: 5.68 },
  { Year: '2020', Inflation: 12.3, USD_TRY: 7.43 },
  { Year: '2021', Inflation: 36.1, USD_TRY: 13.32 },
  { Year: '2022', Inflation: 72.3, USD_TRY: 18.69 },
  { Year: '2023', Inflation: 64.8, USD_TRY: 29.47 },
  { Year: '2024E', Inflation: 52.0, USD_TRY: 32.50 },
  { Year: '2025E', Inflation: 28.0, USD_TRY: 34.80 },
];

const risks = [
  { risk: 'FX Volatility', severity: 'High', impact: 'Margin compression if unable to pass through costs', probability: 'Likely' },
  { risk: 'EU Auto Slowdown', severity: 'Medium', impact: 'Export revenue decline (40% of sales)', probability: 'Possible' },
  { risk: 'Input Cost Inflation', severity: 'Medium', impact: 'Gross margin pressure 50-100bps', probability: 'Likely' },
  { risk: 'Regulatory Changes', severity: 'Low', impact: 'EV transition timeline acceleration', probability: 'Unlikely' },
  { risk: 'Domestic Demand Shock', severity: 'Low', impact: 'Volume decline (domestic 35% of sales)', probability: 'Unlikely' },
];

export function MacroSection() {
  return (
    <SectionContainer title="Macroeconomic Context & Risk Assessment">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="border border-border bg-card p-4">
          <h3 className="mb-3 font-mono text-xs font-semibold text-foreground">
            Turkey: Inflation & USD/TRY
          </h3>
          <LineChartMulti 
            data={macroData}
            xKey="Year"
            lines={[
              { key: 'Inflation', color: 'oklch(0.55 0.22 15)', name: 'Inflation (%)' },
              { key: 'USD_TRY', color: 'oklch(0.7 0.15 50)', name: 'USD/TRY' },
            ]}
          />
          <div className="mt-4 space-y-2 border-t border-border pt-3">
            <div className="flex justify-between">
              <span className="font-mono text-xs text-muted-foreground">Current CPI (2024E)</span>
              <span className="font-mono text-xs font-bold text-destructive">52.0%</span>
            </div>
            <div className="flex justify-between">
              <span className="font-mono text-xs text-muted-foreground">USD/TRY (2024E)</span>
              <span className="font-mono text-xs font-bold text-foreground">₺32.50</span>
            </div>
            <div className="flex justify-between">
              <span className="font-mono text-xs text-muted-foreground">GDP Growth (2024E)</span>
              <span className="font-mono text-xs font-bold text-success">3.2%</span>
            </div>
          </div>
        </div>

        <div className="border border-border bg-card p-4">
          <h3 className="mb-4 font-mono text-xs font-semibold text-foreground">
            Risk Matrix
          </h3>
          <div className="space-y-3">
            {risks.map((risk) => (
              <div 
                key={risk.risk}
                className={`border-l-2 p-3 ${
                  risk.severity === 'High' ? 'border-destructive bg-destructive/10' :
                  risk.severity === 'Medium' ? 'border-chart-3 bg-chart-3/10' :
                  'border-muted bg-muted/20'
                }`}
              >
                <div className="mb-1 flex items-baseline justify-between">
                  <span className="font-mono text-xs font-bold text-foreground">{risk.risk}</span>
                  <span className={`font-mono text-xs font-bold ${
                    risk.severity === 'High' ? 'text-destructive' :
                    risk.severity === 'Medium' ? 'text-chart-3' :
                    'text-muted-foreground'
                  }`}>
                    {risk.severity.toUpperCase()}
                  </span>
                </div>
                <p className="font-mono text-xs text-muted-foreground">{risk.impact}</p>
                <p className="mt-1 font-mono text-xs text-foreground">
                  Probability: <span className="font-semibold">{risk.probability}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 border-l-2 border-destructive bg-secondary/50 p-4">
        <p className="font-mono text-xs leading-relaxed text-foreground">
          <strong className="text-destructive">Hyperinflation Context:</strong> Turkey's CPI peaked at 85.5% in Oct 2022, 
          triggering IAS 29 hyperinflation accounting. Central Bank policy shift to orthodox tightening in mid-2023 
          (rates 50%) moderating inflation to 52% by end-2024E. Key risks: sustained FX depreciation (TRY weakened 470% 
          vs USD since 2018), potential re-acceleration of inflation if policy reversal, and passthrough to input costs 
          (steel, aluminum, electronics). Ford Otosan's natural hedge through exports (65% of revenue) and pricing power 
          in commercial vehicles mitigates but doesn't eliminate FX risk.
        </p>
      </div>
    </SectionContainer>
  );
}
