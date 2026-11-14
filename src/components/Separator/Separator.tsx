/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { cn } from '../../utils/cn';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  label?: React.ReactNode;
  gradient?: boolean;
}

export function Separator({
  orientation = 'horizontal',
  label,
  gradient = true,
  className,
  ...props
}: SeparatorProps) {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          'inline-block w-px self-stretch min-h-[1em]',
          gradient
            ? 'bg-gradient-to-b from-transparent via-white/15 to-transparent'
            : 'bg-white/10',
          className
        )}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={cn('flex items-center my-4 w-full select-none', className)}
        {...props}
      >
        <div
          className={cn(
            'flex-1 h-px',
            gradient
              ? 'bg-gradient-to-r from-transparent to-white/15'
              : 'bg-white/10'
          )}
        />
        <span className="px-3 text-xs font-mono font-medium text-muted/80 uppercase tracking-wider">
          {label}
        </span>
        <div
          className={cn(
            'flex-1 h-px',
            gradient
              ? 'bg-gradient-to-l from-transparent to-white/15'
              : 'bg-white/10'
          )}
        />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn(
        'w-full h-px my-4',
        gradient
          ? 'bg-gradient-to-r from-transparent via-white/15 to-transparent'
          : 'bg-white/10',
        className
      )}
      {...props}
    />
  );
}

