/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { cn } from '../../utils/cn';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rounded' | 'card';
  width?: string | number;
  height?: string | number;
}

export function Skeleton({
  className,
  variant = 'rounded',
  width,
  height,
  style,
  ...props
}: SkeletonProps) {
  const variants: Record<string, string> = {
    text: 'h-4 w-full rounded',
    circular: 'rounded-full aspect-square',
    rounded: 'rounded-xl',
    card: 'rounded-2xl h-48 w-full'
  };

  const customStyle: React.CSSProperties = {
    ...style,
    ...(width !== undefined ? { width } : {}),
    ...(height !== undefined ? { height } : {})
  };

  return (
    <div
      style={customStyle}
      className={cn(
        'relative overflow-hidden bg-white/10 animate-pulse',
        variants[variant],
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
