import { DashboardHeader } from '@/components/dashboard-header';
import { OverviewSection } from '@/components/sections/overview-section';
import { FinancialsSection } from '@/components/sections/financials-section';
import { ValuationSection } from '@/components/sections/valuation-section';
import { StrategySection } from '@/components/sections/strategy-section';
import { MacroSection } from '@/components/sections/macro-section';

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="mx-auto max-w-[1920px]">
        <OverviewSection />
        <FinancialsSection />
        <ValuationSection />
        <StrategySection />
        <MacroSection />
      </main>
      <footer className="border-t border-border bg-card px-6 py-4">
        <p className="font-mono text-xs text-muted-foreground text-center">
          FORD OTOSAN (FROTO.IS) | Institutional Equity Research Dashboard | 
          For Professional Investors Only | Data as of {new Date().toLocaleDateString('en-US')}
        </p>
      </footer>
    </div>
  );
}
