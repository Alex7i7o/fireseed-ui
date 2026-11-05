/* Developed by FireSeed - Fueling Innovation */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';
import { type ButtonProps } from '../Button';

export interface FeedbackButtonProps extends Omit<ButtonProps, 'onClick'> {
  initialText: React.ReactNode;
  successText?: string;
  successIcon?: React.ReactNode;
  status?: 'idle' | 'loading' | 'success';
  successDurationMs?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<unknown> | void;
}

export function FeedbackButton({
  children,
  initialText,
  successText = 'Completado',
  successIcon,
  className,
  variant = 'solid',
  size = 'md',
  status: externalStatus,
  successDurationMs = 2000,
  enableHaptics = true,
  disabled,
  onClick,
  ...props
}: FeedbackButtonProps) {
  const [internalStatus, setInternalStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const status = externalStatus !== undefined ? externalStatus : internalStatus;

  React.useEffect(() => {
    if (status === 'success' && enableHaptics) {
      haptics.success();
    }
  }, [status, enableHaptics]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (status !== 'idle' || disabled) {
      e.preventDefault();
      return;
    }

    if (enableHaptics) {
      haptics.light();
    }

    if (onClick) {
      if (externalStatus === undefined) setInternalStatus('loading');
      try {
        const result = onClick(e);
        if (result instanceof Promise) {
          await result;
        }
        if (externalStatus === undefined) {
          setInternalStatus('success');
          setTimeout(() => {
            setInternalStatus('idle');
          }, successDurationMs);
        }
      } catch (err) {
        if (enableHaptics) {
          haptics.error();
        }
        if (externalStatus === undefined) setInternalStatus('idle');
        throw err;
      }
    }
  };

  const variants: Record<string, string> = {
    solid: 'bg-accent-main text-primary-main hover:brightness-105 active:brightness-95 shadow-sm font-semibold',
    glow: 'bg-accent-main border border-black/20 text-primary-main glow-bottom font-semibold',
    inset: 'inset-shadow-sm inset-shadow-black/70 bg-primary-main bg-gradient-to-t from-white/10 to-transparent text-white border border-white/10',
    outline: 'border border-primary-main/20 bg-transparent text-foreground hover:bg-primary-main/5 dark:border-white/20 dark:text-white',
    ghost: 'bg-transparent text-foreground hover:bg-black/5 dark:text-white',
    destructive: 'bg-rose-500 text-white hover:bg-rose-600 shadow-sm'
  };

  const sizes: Record<string, string> = {
    sm: 'min-h-[36px] h-9 px-3 text-xs',
    md: 'min-h-[44px] h-11 px-5 text-sm',
    lg: 'min-h-[48px] h-12 px-7 text-base'
  };

  return (
    <motion.button
      layout
      disabled={disabled || status !== 'idle'}
      onClick={handleClick}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn(
        'relative inline-flex items-center justify-center font-medium rounded-xl select-none transition-colors overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-main disabled:opacity-75 disabled:pointer-events-none cursor-pointer',
        variants[variant] || variants.solid,
        sizes[size] || sizes.md,
        className
      )}
      {...props}
    >
      <AnimatePresence mode="wait" initial={false}>
        {status === 'idle' && (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
            className="flex items-center justify-center gap-2"
          >
            {initialText || children}
          </motion.span>
        )}

        {status === 'loading' && (
          <motion.span
            key="loading"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Loader2 className="h-5 w-5 animate-spin" />
          </motion.span>
        )}

        {status === 'success' && (
          <motion.span
            key="success"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
            className="flex items-center justify-center gap-1.5 font-bold"
          >
            {successIcon || <Check className="w-4 h-4 stroke-[3]" />}
            <span>{successText}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
