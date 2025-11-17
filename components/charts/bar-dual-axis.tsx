'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarDualAxisProps {
  data: any[];
  bars: { key: string; color: string; name: string }[];
  xKey: string;
}

export function BarDualAxis({ data, bars, xKey }: BarDualAxisProps) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0 0)" strokeWidth={0.5} />
        <XAxis 
          dataKey={xKey} 
          stroke="oklch(0.65 0 0)" 
          style={{ fontSize: '11px', fontFamily: 'monospace' }}
          tickLine={false}
        />
        <YAxis 
          stroke="oklch(0.65 0 0)" 
          style={{ fontSize: '11px', fontFamily: 'monospace' }}
          tickLine={false}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'oklch(0.1 0 0)', 
            border: '1px solid oklch(0.22 0 0)',
            borderRadius: '2px',
            fontFamily: 'monospace',
            fontSize: '11px'
          }}
        />
        <Legend 
          wrapperStyle={{ fontSize: '11px', fontFamily: 'monospace' }}
        />
        {bars.map(bar => (
          <Bar 
            key={bar.key}
            dataKey={bar.key} 
            fill={bar.color}
            name={bar.name}
            radius={[0, 0, 0, 0]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
