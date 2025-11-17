'use client';

interface ValuationHeatmapProps {
  data: { wacc: number; terminalGrowth: number; value: number }[];
}

export function ValuationHeatmap({ data }: ValuationHeatmapProps) {
  const waccLevels = Array.from(new Set(data.map(d => d.wacc))).sort((a, b) => b - a);
  const growthLevels = Array.from(new Set(data.map(d => d.terminalGrowth))).sort();
  
  const getValue = (wacc: number, growth: number) => {
    const item = data.find(d => d.wacc === wacc && d.terminalGrowth === growth);
    return item ? item.value : 0;
  };

  const getColor = (value: number) => {
    if (value >= 2000) return 'bg-success/80';
    if (value >= 1800) return 'bg-success/60';
    if (value >= 1600) return 'bg-chart-3/60';
    if (value >= 1400) return 'bg-destructive/60';
    return 'bg-destructive/80';
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse font-mono text-xs">
        <thead>
          <tr>
            <th className="border border-border bg-secondary p-2 text-left text-muted-foreground">
              WACC / g
            </th>
            {growthLevels.map(growth => (
              <th key={growth} className="border border-border bg-secondary p-2 text-center text-muted-foreground">
                {growth.toFixed(1)}%
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {waccLevels.map(wacc => (
            <tr key={wacc}>
              <td className="border border-border bg-secondary p-2 font-semibold text-foreground">
                {wacc.toFixed(1)}%
              </td>
              {growthLevels.map(growth => {
                const value = getValue(wacc, growth);
                return (
                  <td 
                    key={`${wacc}-${growth}`} 
                    className={`border border-border p-2 text-center font-semibold transition-colors ${getColor(value)}`}
                  >
                    ₺{value.toFixed(0)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
