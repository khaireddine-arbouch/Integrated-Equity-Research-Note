'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartMultiProps {
  data: any[];
  lines: { key: string; color: string; name: string }[];
  xKey: string;
  yAxisLabel?: string;
}

export function LineChartMulti({ data, lines, xKey, yAxisLabel }: LineChartMultiProps) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
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
          label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: 'insideLeft', style: { fontSize: '10px', fill: 'oklch(0.65 0 0)' } } : undefined}
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
        {lines.map(line => (
          <Line 
            key={line.key}
            type="monotone" 
            dataKey={line.key} 
            stroke={line.color} 
            strokeWidth={2}
            dot={{ r: 3 }}
            name={line.name}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
