/* Developed by FireSeed - Fueling Innovation */
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface SidebarProps extends HTMLMotionProps<'aside'> {
  variant?: 'solid' | 'glow' | 'inset';
  size?: 'sm' | 'md' | 'lg';
}

export function Sidebar({
  children,
  className,
  variant = 'solid',
  size = 'md',
  ...props
}: SidebarProps) {
  const baseStyles =
    'sticky top-16 h-[calc(100vh-4rem)] shrink-0 overflow-y-auto p-4 sm:p-5 border-r border-white/10 bg-primary-main/75 backdrop-blur-2xl transition-all duration-300 custom-scrollbar text-cream-silk';

  const variants: Record<string, string> = {
    solid: 'text-cream-silk',
    glow: 'border-r border-accent-main/30 text-cream-silk shadow-[0_0_25px_rgba(251,191,36,0.1)]',
    inset: 'bg-primary-main/90 text-cream-silk'
  };

  const sizes: Record<string, string> = {
    sm: 'w-60',
    md: 'w-68',
    lg: 'w-76'
  };

  return (
    <motion.aside
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.aside>
  );
}
