/* Developed by FireSeed - Fueling Innovation */
import React, { useState } from 'react';
import { User } from 'lucide-react';
import { cn } from '../../utils/cn';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';
export type AvatarShape = 'circle' | 'rounded';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus;
  fallback?: React.ReactNode;
}

export function Avatar({
  src,
  alt = 'Avatar',
  name,
  size = 'md',
  shape = 'circle',
  status,
  fallback,
  className,
  ...props
}: AvatarProps) {
  const [hasError, setHasError] = useState(false);

  // Generar iniciales a partir del nombre
  const getInitials = (str?: string) => {
    if (!str) return '';
    const parts = str.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const initials = getInitials(name);

  const sizeClasses: Record<AvatarSize, { box: string; text: string; icon: number; status: string }> = {
    xs: { box: 'w-6 h-6', text: 'text-[10px]', icon: 12, status: 'w-1.5 h-1.5 ring-1' },
    sm: { box: 'w-8 h-8', text: 'text-xs', icon: 14, status: 'w-2 h-2 ring-1.5' },
    md: { box: 'w-10 h-10', text: 'text-sm', icon: 18, status: 'w-2.5 h-2.5 ring-2' },
    lg: { box: 'w-12 h-12', text: 'text-base', icon: 22, status: 'w-3 h-3 ring-2' },
    xl: { box: 'w-16 h-16', text: 'text-lg', icon: 28, status: 'w-4 h-4 ring-2' }
  };

  const statusColors: Record<AvatarStatus, string> = {
    online: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]',
    offline: 'bg-zinc-500',
    busy: 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]',
    away: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]'
  };

  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-2xl';

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center shrink-0 select-none overflow-visible',
        sizeClasses[size].box,
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'relative w-full h-full overflow-hidden flex items-center justify-center font-bold tracking-tight',
          'bg-gradient-to-br from-[#241142] to-[#120524] text-[#FBBF24] border border-[#9EA2E2]/20 shadow-inner',
          shapeClass
        )}
      >
        {src && !hasError ? (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover"
          />
        ) : initials ? (
          <span className={cn('font-mono font-bold', sizeClasses[size].text)}>
            {initials}
          </span>
        ) : fallback ? (
          fallback
        ) : (
          <User size={sizeClasses[size].icon} className="text-[#9EA2E2]/70" />
        )}
      </div>

      {/* Indicador de Status */}
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 rounded-full ring-[#120524]',
            sizeClasses[size].status,
            statusColors[status]
          )}
        />
      )}
    </div>
  );
}
