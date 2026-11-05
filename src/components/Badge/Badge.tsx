/* Developed by FireSeed - Fueling Innovation */
import type { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface BadgeProps extends HTMLMotionProps<'span'> {
  variant?: 'solid' | 'secondary' | 'outline' | 'success' | 'warning' | 'error' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  children?: ReactNode;
}

export function Badge({
  children,
  className,
  variant = 'solid',
  size = 'md',
  dot = false,
  ...props
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center gap-1.5 font-medium rounded-full transition-colors select-none';

  const variants: Record<string, string> = {
    solid: 'bg-accent-main/20 text-accent-main border border-accent-main/30',
    secondary: 'bg-white/10 text-white/90 border border-white/10',
    outline: 'bg-transparent text-white/80 border border-white/20',
    success: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
    warning: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
    error: 'bg-rose-500/15 text-rose-400 border border-rose-500/30',
    glow: 'bg-accent-main text-primary-main glow-bottom font-semibold shadow-sm'
  };

  const dotColors: Record<string, string> = {
    solid: 'bg-accent-main',
    secondary: 'bg-white/60',
    outline: 'bg-white/60',
    success: 'bg-emerald-400 animate-pulse',
    warning: 'bg-amber-400 animate-pulse',
    error: 'bg-rose-400 animate-pulse',
    glow: 'bg-primary-main'
  };

  const sizes: Record<string, string> = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs',
    lg: 'px-3.5 py-1.5 text-sm'
  };

  return (
    <motion.span
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', dotColors[variant])} />}
      {children}
    </motion.span>
  );
}
