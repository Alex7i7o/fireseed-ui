/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'glow' | 'inset' | 'elevated' | 'ghost';
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, variant = 'default', hoverEffect = false, ...props }, ref) => {
    const baseStyles = 'rounded-2xl border transition-all overflow-hidden';

    const variants: Record<string, string> = {
      default: 'bg-white/5 border-white/10 text-white backdrop-blur-sm',
      glow: 'bg-white/5 border-accent-main/30 text-white glow-md',
      inset: 'inset-shadow-sm inset-shadow-black/70 bg-primary-main/90 border-white/10 text-white',
      elevated: 'bg-white/10 border-white/15 text-white shadow-xl',
      ghost: 'bg-transparent border-transparent text-white'
    };

    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -3, transition: { duration: 0.2 } } : undefined}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = 'Card';

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl font-bold leading-none tracking-tight text-white', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-white/60 leading-relaxed', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0 text-white/80', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0 border-t border-white/5 mt-4', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';
