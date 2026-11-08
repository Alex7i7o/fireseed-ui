/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'solid' | 'glow' | 'inset' | 'outline' | 'ghost' | 'destructive' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  enableHaptics?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'solid',
      size = 'md',
      isLoading = false,
      enableHaptics = true,
      leftIcon,
      rightIcon,
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-main disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none whitespace-nowrap shrink-0';

    const variants: Record<string, string> = {
      solid: 'bg-accent-main text-primary-main hover:brightness-105 active:brightness-95 shadow-sm font-semibold',
      glow: 'bg-accent-main border border-black/20 text-primary-main glow-bottom font-semibold',
      inset: 'inset-shadow-sm inset-shadow-black/70 bg-primary-main bg-gradient-to-t from-white/10 to-transparent text-white border border-white/10 hover:border-white/20',
      outline: 'border border-primary-main/20 bg-transparent text-foreground hover:bg-primary-main/5 dark:border-white/20 dark:text-white dark:hover:bg-white/5',
      ghost: 'bg-transparent text-foreground hover:bg-black/5 dark:text-white dark:hover:bg-white/10',
      destructive: 'bg-rose-500 text-white hover:bg-rose-600 active:bg-rose-700 shadow-sm',
      link: 'text-accent-main underline-offset-4 hover:underline p-0 h-auto'
    };

    const sizes: Record<string, string> = {
      sm: 'min-h-[36px] h-9 px-3 py-1.5 text-xs gap-1.5',
      md: 'min-h-[44px] h-11 px-5 py-2.5 text-sm gap-2',
      lg: 'min-h-[48px] h-12 px-7 py-3 text-base gap-2.5',
      icon: 'min-h-[44px] min-w-[44px] h-11 w-11 p-0'
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (enableHaptics && !disabled && !isLoading) {
        haptics.light();
      }
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <motion.button
        ref={ref}
        disabled={disabled || isLoading}
        whileHover={disabled || isLoading ? undefined : { scale: 1.015 }}
        whileTap={disabled || isLoading ? undefined : { scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        onClick={handleClick}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 opacity-80"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Cargando...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
