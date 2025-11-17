import { SectionContainer } from '../section-container';

const initiatives = [
  { title: 'Capacity Expansion', target: '475k units by 2026', status: 'On Track', progress: 75 },
  { title: 'EV Platform Development', target: 'First EV model 2025', status: 'In Progress', progress: 60 },
  { title: 'Export Diversification', target: '18 new markets by 2025', status: 'Ahead', progress: 85 },
  { title: 'Digital Manufacturing', target: 'Industry 4.0 rollout', status: 'On Track', progress: 70 },
];

const esgMetrics = [
  { metric: 'CO₂ Reduction', value: '-15%', target: 'vs 2020 baseline', grade: 'A-' },
  { metric: 'Renewable Energy', value: '42%', target: 'of total consumption', grade: 'B+' },
  { metric: 'Gender Diversity', value: '28%', target: 'management roles', grade: 'B' },
  { metric: 'Safety (LTIFR)', value: '0.8', target: 'industry-leading', grade: 'A' },
];

export function StrategySection() {
  return (
    <SectionContainer title="Strategic Initiatives & ESG">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="border border-border bg-card p-4">
          <h3 className="mb-4 font-mono text-xs font-semibold text-foreground">
            Key Strategic Initiatives (2024-26)
          </h3>
          <div className="space-y-4">
            {initiatives.map((init) => (
              <div key={init.title} className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs font-semibold text-foreground">
                    {init.title}
                  </span>
                  <span className={`font-mono text-xs ${
                    init.status === 'Ahead' ? 'text-success' : 
                    init.status === 'On Track' ? 'text-primary' : 
                    'text-chart-3'
                  }`}>
                    {init.status}
                  </span>
                </div>
                <p className="font-mono text-xs text-muted-foreground">{init.target}</p>
                <div className="h-2 bg-secondary">
                  <div 
                    className="h-full bg-primary transition-all"
                    style={{ width: `${init.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-border bg-card p-4">
          <h3 className="mb-4 font-mono text-xs font-semibold text-foreground">
            ESG Performance Scorecard
          </h3>
          <div className="space-y-4">
            {esgMetrics.map((metric) => (
              <div key={metric.metric} className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex-1">
                  <p className="font-mono text-xs font-semibold text-foreground">{metric.metric}</p>
                  <p className="font-mono text-xs text-muted-foreground">{metric.target}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-lg font-bold text-foreground">{metric.value}</p>
                  <span className={`inline-block rounded px-2 py-1 font-mono text-xs font-bold ${
                    metric.grade.startsWith('A') ? 'bg-success/20 text-success' :
                    metric.grade.startsWith('B') ? 'bg-primary/20 text-primary' :
                    'bg-chart-3/20 text-chart-3'
                  }`}>
                    {metric.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="border border-border bg-secondary/50 p-4">
          <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
            Capacity Expansion
          </h4>
          <p className="font-mono text-xs leading-relaxed text-foreground">
            Kocaeli plant expansion adding 75k units capacity by Q3 2025. Total capacity reaching 475k units by 2026. 
            CapEx ₺3.25B in 2024E, primarily for new production lines and EV infrastructure.
          </p>
        </div>
        <div className="border border-border bg-secondary/50 p-4">
          <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
            Export Growth Strategy
          </h4>
          <p className="font-mono text-xs leading-relaxed text-foreground">
            Diversifying beyond EU (currently 40% of exports). Targeting Middle East, North Africa, and Caucasus regions. 
            Export volume CAGR +18% (2020-24), outpacing domestic market growth (+6% CAGR).
          </p>
        </div>
        <div className="border border-border bg-secondary/50 p-4">
          <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
            EV Transition Roadmap
          </h4>
          <p className="font-mono text-xs leading-relaxed text-foreground">
            First fully electric model launch targeted for H2 2025 (Transit Custom EV). Investing ₺1.2B in EV platform 
            development and battery assembly. Expect EVs to represent 15% of production by 2028.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
