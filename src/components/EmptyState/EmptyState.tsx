/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { Inbox } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  icon,
  action,
  className
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border border-dashed border-white/15 bg-white/5 space-y-4 max-w-lg mx-auto',
        className
      )}
    >
      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent shadow-inner">
        {icon || <Inbox className="w-7 h-7 stroke-[1.5]" />}
      </div>

      <div className="space-y-1.5 max-w-sm">
        <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
        <p className="text-sm text-white/60 leading-relaxed">{description}</p>
      </div>

      {action && <div className="pt-2">{action}</div>}
    </div>
  );
}

