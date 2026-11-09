/* Developed by FireSeed - Fueling Innovation */
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface AnimateInProps extends HTMLMotionProps<'div'> {
  variant?: 'solid' | 'glow' | 'inset';
  size?: 'sm' | 'md' | 'lg';
  triggerKey?: unknown;
}

export function AnimateIn({
  children,
  className,
  variant = 'solid',
  size = 'md',
  triggerKey,
  ...props
}: AnimateInProps) {
  const baseStyles = 'rounded-2xl transition-all duration-300';

  const variants = {
    solid: 'bg-primary-surface text-white border border-white/10 shadow-lg',
    glow: 'bg-primary-surface border border-accent-main/40 text-white shadow-[0_0_30px_rgba(251,191,36,0.15)]',
    inset: 'inset-shadow-sm inset-shadow-black/70 bg-primary-main bg-gradient-to-t from-white/5 to-transparent text-white border border-white/10'
  };

  const sizes = {
    sm: 'p-4 text-sm',
    md: 'p-6 text-base',
    lg: 'p-8 text-lg'
  };

  const defaultAnimation: HTMLMotionProps<'div'> = {
    initial: { opacity: 0, y: 14, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { type: 'spring', stiffness: 350, damping: 25 }
  };

  return (
    <motion.div
      key={triggerKey !== undefined ? String(triggerKey) : undefined}
      {...defaultAnimation}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
