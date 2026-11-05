/* Developed by FireSeed - Fueling Innovation */
import type { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface CalloutProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'info' | 'success' | 'warning' | 'error' | 'glow';
  icon?: ReactNode;
  title?: string;
  children?: ReactNode;
}

export function Callout({
  children,
  className,
  variant = 'default',
  icon,
  title,
  ...props
}: CalloutProps) {
  const baseStyles = 'rounded-xl p-4 border transition-colors flex gap-3 text-sm';

  const variants: Record<string, string> = {
    default: 'bg-white/5 border-white/10 text-white/90',
    info: 'bg-blue-500/10 border-blue-500/25 text-blue-200',
    success: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-200',
    warning: 'bg-amber-500/10 border-amber-500/25 text-amber-200',
    error: 'bg-rose-500/10 border-rose-500/25 text-rose-200',
    glow: 'bg-accent-main/10 border-accent-main/30 text-white glow-md'
  };

  const defaultIcons: Record<string, string> = {
    default: '💡',
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '🚨',
    glow: '✨'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <div className="shrink-0 select-none text-base mt-0.5">{icon || defaultIcons[variant]}</div>
      <div className="flex-1 space-y-1">
        {title && <h4 className="font-semibold text-white tracking-tight">{title}</h4>}
        <div className="leading-relaxed opacity-90">{children}</div>
      </div>
    </motion.div>
  );
}
