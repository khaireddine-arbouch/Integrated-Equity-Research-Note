import { SectionContainer } from '../section-container';
import { formatCurrency, formatPercent, formatMultiple } from '@/lib/formatters';

export function OverviewSection() {
  return (
    <SectionContainer title="Investment Thesis & Overview">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="border border-primary bg-primary/10 p-6">
            <div className="mb-4 flex items-baseline justify-between">
              <span className="font-mono text-2xl font-bold text-primary">BUY</span>
              <span className="font-mono text-xs text-muted-foreground">RATING</span>
            </div>
            <div className="space-y-3 border-t border-primary/30 pt-4">
              <div className="flex justify-between">
                <span className="font-mono text-xs text-muted-foreground">Target Price</span>
                <span className="font-mono text-lg font-bold text-foreground">{formatCurrency(1750, 0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-xs text-muted-foreground">Current Price</span>
                <span className="font-mono text-sm text-foreground">{formatCurrency(1265, 0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-xs text-muted-foreground">Upside</span>
                <span className="font-mono text-lg font-bold text-success">{formatPercent(38.4)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <MetricCard label="Market Cap" value="₺38.5B" />
            <MetricCard label="EV/Sales" value="0.42x" />
            <MetricCard label="EV/EBITDA" value="3.5x" />
            <MetricCard label="P/E (2024E)" value="5.8x" />
            <MetricCard label="Revenue (2024E)" value="₺125.0B" />
            <MetricCard label="EBITDA Margin" value="12.0%" />
            <MetricCard label="ROE (2024E)" value="27.8%" />
            <MetricCard label="FCF Yield" value="11.7%" />
          </div>
          <div className="mt-4 border-l-2 border-primary bg-secondary/50 p-4">
            <p className="font-mono text-xs leading-relaxed text-foreground">
              <strong className="text-primary">Strong BUY:</strong> Ford Otosan remains our top pick in Turkish autos. 
              Capacity expansion to 475k units by 2026, robust export growth (+18% CAGR), and market-leading profitability 
              (ROIC 21.5%) drive our conviction. Trading at 0.42x EV/Sales vs peers at 0.35x median justified by superior margins. 
              IAS 29 hyperinflation accounting creates short-term noise but FCF generation remains robust.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-border bg-card p-3">
      <p className="font-mono text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 font-mono text-lg font-bold text-foreground">{value}</p>
    </div>
  );
}
