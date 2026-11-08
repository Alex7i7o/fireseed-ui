/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card } from '../Card';
import { cn } from '../../utils/cn';

export interface StatCardProps {
  title: string;
  value: string | number;
  change?: string | number;
  trend?: 'up' | 'down' | 'neutral';
  changePeriod?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  trend = 'neutral',
  changePeriod = 'vs mes anterior',
  icon,
  className
}: StatCardProps) {
  const trendColors: Record<string, string> = {
    up: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
    down: 'text-rose-400 bg-rose-500/15 border-rose-500/30',
    neutral: 'text-white/60 bg-white/10 border-white/10'
  };

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;

  return (
    <Card hoverEffect className={cn('p-6 space-y-3 relative overflow-hidden', className)}>
      <div className="flex items-center justify-between text-white/60">
        <span className="text-xs font-semibold uppercase tracking-wider">{title}</span>
        {icon && <div className="p-2 rounded-xl bg-white/5 text-accent-main shrink-0">{icon}</div>}
      </div>

      <div className="space-y-1">
        <h3 className="text-3xl font-extrabold tracking-tight text-white">{value}</h3>
      </div>

      {change !== undefined && (
        <div className="space-y-1.5 pt-1 text-xs">
          <div className="flex items-center gap-1.5">
            <span
              className={cn(
                'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-semibold border whitespace-nowrap shrink-0 text-[11px]',
                trendColors[trend]
              )}
            >
              <TrendIcon className="w-3 h-3 stroke-[2.5]" />
              <span>{change}</span>
            </span>
          </div>
          {changePeriod && (
            <p className="text-white/50 text-xs leading-snug line-clamp-2">{changePeriod}</p>
          )}
        </div>
      )}
    </Card>
  );
}
