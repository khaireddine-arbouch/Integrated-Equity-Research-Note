'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface PeerComparisonBarProps {
  data: any[];
  dataKey: string;
  xKey: string;
  highlightIndex?: number;
}

export function PeerComparisonBar({ data, dataKey, xKey, highlightIndex = 0 }: PeerComparisonBarProps) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 80, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0 0)" strokeWidth={0.5} />
        <XAxis 
          type="number"
          stroke="oklch(0.65 0 0)" 
          style={{ fontSize: '11px', fontFamily: 'monospace' }}
          tickLine={false}
        />
        <YAxis 
          type="category"
          dataKey={xKey} 
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
        <Bar dataKey={dataKey} radius={[0, 2, 2, 0]}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={index === highlightIndex ? 'oklch(0.6 0.2 250)' : 'oklch(0.25 0 0)'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
