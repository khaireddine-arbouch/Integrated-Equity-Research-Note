import { SectionContainer } from '../section-container';
import { PeerComparisonBar } from '../charts/peer-comparison-bar';
import { ValuationHeatmap } from '../charts/valuation-heatmap';
import { formatCurrency, formatPercent, formatMultiple } from '@/lib/formatters';

const dcfScenarios = [
  { scenario: 'Bear', revenue_cagr: 4.5, ebitda_margin: 11.2, terminal_growth: 2.0, equity_value: 42500, price_target: 1420, upside: 12.3 },
  { scenario: 'Base', revenue_cagr: 6.2, ebitda_margin: 12.0, terminal_growth: 2.5, equity_value: 52400, price_target: 1750, upside: 38.4 },
  { scenario: 'Bull', revenue_cagr: 8.1, ebitda_margin: 12.8, terminal_growth: 3.0, equity_value: 64800, price_target: 2160, upside: 70.8 },
];

const peerMultiples = [
  { company: 'Ford Otosan', ev_sales: 0.42, ev_ebitda: 3.5, pe: 5.8 },
  { company: 'Tofas', ev_sales: 0.38, ev_ebitda: 3.2, pe: 6.2 },
  { company: 'Oyak Renault', ev_sales: 0.35, ev_ebitda: 3.0, pe: 5.5 },
  { company: 'Karsan', ev_sales: 0.28, ev_ebitda: 2.8, pe: 7.1 },
  { company: 'Anadolu Isuzu', ev_sales: 0.33, ev_ebitda: 3.1, pe: 6.4 },
  { company: 'Median', ev_sales: 0.35, ev_ebitda: 3.1, pe: 6.2 },
];

const heatmapData = [
  { wacc: 11.5, terminalGrowth: 2.0, value: 1420 },
  { wacc: 11.5, terminalGrowth: 2.5, value: 1580 },
  { wacc: 11.5, terminalGrowth: 3.0, value: 1760 },
  { wacc: 11.0, terminalGrowth: 2.0, value: 1580 },
  { wacc: 11.0, terminalGrowth: 2.5, value: 1750 },
  { wacc: 11.0, terminalGrowth: 3.0, value: 1940 },
  { wacc: 10.5, terminalGrowth: 2.0, value: 1760 },
  { wacc: 10.5, terminalGrowth: 2.5, value: 1950 },
  { wacc: 10.5, terminalGrowth: 3.0, value: 2160 },
  { wacc: 10.0, terminalGrowth: 2.0, value: 1980 },
  { wacc: 10.0, terminalGrowth: 2.5, value: 2190 },
  { wacc: 10.0, terminalGrowth: 3.0, value: 2420 },
];

const fcfProjection = [
  { year: '2024E', fcf: 4500 },
  { year: '2025E', fcf: 4860 },
  { year: '2026E', fcf: 5120 },
  { year: '2027E', fcf: 5380 },
  { year: '2028E', fcf: 5650 },
];

export function ValuationSection() {
  return (
    <SectionContainer title="Valuation & DCF Analysis">
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {dcfScenarios.map((scenario) => (
          <div 
            key={scenario.scenario}
            className={`border p-4 ${
              scenario.scenario === 'Base' 
                ? 'border-primary bg-primary/10' 
                : 'border-border bg-card'
            }`}
          >
            <div className="mb-3 flex items-baseline justify-between">
              <span className={`font-mono text-lg font-bold ${
                scenario.scenario === 'Base' ? 'text-primary' : 'text-foreground'
              }`}>
                {scenario.scenario.toUpperCase()}
              </span>
              <span className="font-mono text-xs text-muted-foreground">SCENARIO</span>
            </div>
            <div className="space-y-2 border-t border-border pt-3">
              <div className="flex justify-between">
                <span className="font-mono text-xs text-muted-foreground">Revenue CAGR</span>
                <span className="font-mono text-xs font-semibold text-foreground">{scenario.revenue_cagr}%</span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-xs text-muted-foreground">EBITDA Margin</span>
                <span className="font-mono text-xs font-semibold text-foreground">{scenario.ebitda_margin}%</span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-xs text-muted-foreground">Terminal g</span>
                <span className="font-mono text-xs font-semibold text-foreground">{scenario.terminal_growth}%</span>
              </div>
              <div className="flex justify-between border-t border-border pt-2">
                <span className="font-mono text-xs font-bold text-foreground">Price Target</span>
                <span className={`font-mono text-base font-bold ${
                  scenario.scenario === 'Base' ? 'text-primary' : 'text-foreground'
                }`}>
                  {formatCurrency(scenario.price_target, 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-xs text-muted-foreground">Upside</span>
                <span className="font-mono text-sm font-bold text-success">{formatPercent(scenario.upside)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="border border-border bg-card p-4">
          <h3 className="mb-3 font-mono text-xs font-semibold text-foreground">
            DCF Sensitivity: WACC vs Terminal Growth
          </h3>
          <ValuationHeatmap data={heatmapData} />
          <p className="mt-3 font-mono text-xs text-muted-foreground">
            Base case: WACC 11.0%, Terminal g 2.5% → TP ₺1,750
          </p>
        </div>

        <div className="space-y-6">
          <div className="border border-border bg-card p-4">
            <h3 className="mb-3 font-mono text-xs font-semibold text-foreground">
              Peer Multiples: EV/EBITDA
            </h3>
            <PeerComparisonBar 
              data={peerMultiples}
              dataKey="ev_ebitda"
              xKey="company"
              highlightIndex={0}
            />
          </div>

          <div className="border border-border bg-card p-4">
            <h3 className="mb-3 font-mono text-xs font-semibold text-foreground">
              FCF Projection (₺M)
            </h3>
            <div className="space-y-2">
              {fcfProjection.map((item) => (
                <div key={item.year} className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{item.year}</span>
                  <div className="flex flex-1 items-center gap-2 px-4">
                    <div className="h-6 bg-success transition-all" style={{ width: `${(item.fcf / 6000) * 100}%` }} />
                    <span className="font-mono text-xs font-semibold text-foreground">
                      ₺{item.fcf.toFixed(0)}M
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 border-t border-border pt-3 font-mono text-xs text-muted-foreground">
              FCF CAGR 2024-28E: 5.8% | FCF Yield (2024E): 11.7%
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 border-l-2 border-primary bg-secondary/50 p-4">
        <p className="font-mono text-xs leading-relaxed text-foreground">
          <strong className="text-primary">Valuation Summary:</strong> Base case DCF yields ₺1,750 TP (+38% upside). 
          Premium to peer median (3.5x vs 3.1x EV/EBITDA) justified by superior ROIC (21.5% vs peer avg 16%), 
          stronger FCF generation, and export diversification. Key risks to valuation: sustained TRY depreciation beyond 
          35 TRY/USD, auto sector slowdown in Europe (40% of exports), inability to pass through input costs.
        </p>
      </div>
    </SectionContainer>
  );
}
