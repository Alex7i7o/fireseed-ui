/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { cn } from '../../utils/cn';
import { type AvatarSize } from './Avatar';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  max?: number;
  size?: AvatarSize;
}

export function AvatarGroup({
  children,
  max,
  size = 'md',
  className,
  ...props
}: AvatarGroupProps) {
  const childrenArray = React.Children.toArray(children);
  const total = childrenArray.length;
  const showCount = max !== undefined && total > max;
  const visibleChildren = showCount ? childrenArray.slice(0, max) : childrenArray;
  const remaining = total - (max || 0);

  const sizeClasses: Record<AvatarSize, { box: string; text: string }> = {
    xs: { box: 'w-6 h-6', text: 'text-[9px]' },
    sm: { box: 'w-8 h-8', text: 'text-[11px]' },
    md: { box: 'w-10 h-10', text: 'text-xs' },
    lg: { box: 'w-12 h-12', text: 'text-sm' },
    xl: { box: 'w-16 h-16', text: 'text-base' }
  };

  return (
    <div
      className={cn('inline-flex items-center -space-x-2.5 overflow-visible', className)}
      {...props}
    >
      {visibleChildren.map((child, idx) => (
        <div key={idx} className="relative ring-2 ring-primary-main rounded-full transition-transform hover:z-20 hover:scale-105">
          {React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<any>, { size })
            : child}
        </div>
      ))}

      {showCount && remaining > 0 && (
        <div
          className={cn(
            'relative z-10 flex items-center justify-center font-mono font-bold rounded-full',
            'bg-primary-surface text-accent-main border border-accent-main/40 ring-2 ring-primary-main shadow-md',
            sizeClasses[size].box,
            sizeClasses[size].text
          )}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
}
