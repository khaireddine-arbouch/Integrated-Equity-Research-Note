import Image from 'next/image';

export function DashboardHeader() {
  return (
    <div className="border-b border-border bg-card px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/Ford_logo_flat.svg.png"
              alt="Ford Motor Company logo"
              width={80}
              height={80}
              priority
              className="h-10 w-auto"
            />
            <div>
              <h1 className="font-mono text-sm font-semibold tracking-wider text-foreground">
                FORD OTOSAN
              </h1>
              <p className="font-mono text-xs text-muted-foreground">
                FROTO.IS | BIST 100
              </p>
            </div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-2xl font-bold text-foreground">
              ₺1,265
            </span>
            <span className="font-mono text-sm text-success">+2.4%</span>
          </div>
        </div>
        <div className="text-right">
          <p className="font-mono text-xs text-muted-foreground">
            Prepared by
          </p>
          <p className="font-mono text-sm font-semibold text-foreground">
            Soltanbibi Alimova
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
