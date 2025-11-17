import { ReactNode } from 'react';

interface SectionContainerProps {
  title: string;
  children: ReactNode;
}

export function SectionContainer({ title, children }: SectionContainerProps) {
  return (
    <div className="border-b border-border bg-card p-6">
      <h2 className="mb-6 font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </h2>
      {children}
    </div>
  );
}
