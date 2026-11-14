/* Developed by FireSeed - Fueling Innovation */
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';
import { type ButtonProps } from '../Button';

export interface FeedbackButtonProps extends Omit<ButtonProps, 'onClick'> {
  initialText: React.ReactNode;
  loadingText?: string;
  successText?: string;
  successIcon?: React.ReactNode;
  status?: 'idle' | 'loading' | 'success';
  successDurationMs?: number;
  preserveWidth?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<unknown> | void;
}

export function FeedbackButton({
  children,
  initialText,
  loadingText,
  successText = 'Completado',
  successIcon,
  className,
  variant = 'solid',
  size = 'md',
  status: externalStatus,
  successDurationMs = 2000,
  preserveWidth = true,
  enableHaptics = true,
  disabled,
  onClick,
  style,
  ...props
}: FeedbackButtonProps) {
  const [internalStatus, setInternalStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [lockedWidth, setLockedWidth] = useState<number | undefined>(undefined);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const status = externalStatus !== undefined ? externalStatus : internalStatus;

  React.useEffect(() => {
    if (status === 'success' && enableHaptics) {
      haptics.success();
    }
    if (status === 'idle') {
      // Liberar ancho bloqueado suavemente
      const timer = setTimeout(() => setLockedWidth(undefined), 300);
      return () => clearTimeout(timer);
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

    // Bloquear el ancho actual para que NUNCA se achique abruptamente ni comprima elementos contiguos
    if (preserveWidth && buttonRef.current) {
      setLockedWidth(buttonRef.current.offsetWidth);
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
    solid: 'bg-accent text-primary hover:brightness-105 active:brightness-95 shadow-sm font-semibold',
    glow: 'bg-accent border border-black/20 text-primary glow-bottom font-semibold',
    inset: 'inset-shadow-sm inset-shadow-black/70 bg-primary bg-gradient-to-t from-white/10 to-transparent text-white border border-white/10',
    outline: 'border border-primary/20 bg-transparent text-foreground hover:bg-primary/5 dark:border-white/20 dark:text-white',
    ghost: 'bg-transparent text-foreground hover:bg-black/5 dark:text-white',
    destructive: 'bg-rose-500 text-white hover:bg-rose-600 shadow-sm font-semibold'
  };

  const sizes: Record<string, string> = {
    sm: 'min-h-[36px] h-9 px-3 text-xs',
    md: 'min-h-[44px] h-11 px-5 text-sm',
    lg: 'min-h-[48px] h-12 px-7 text-base'
  };

  return (
    <motion.button
      ref={buttonRef}
      disabled={disabled || status !== 'idle'}
      onClick={handleClick}
      style={{
        minWidth: lockedWidth ? `${lockedWidth}px` : undefined,
        ...style
      }}
      className={cn(
        'relative inline-flex items-center justify-center font-medium rounded-xl select-none overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-85 disabled:pointer-events-none cursor-pointer whitespace-nowrap shrink-0',
        // Transición elástica de ancho suave (evita saltos bruscos)
        'transition-[background-color,border-color,color,min-width,width,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex items-center justify-center gap-2"
          >
            {initialText || children}
          </motion.span>
        )}

        {status === 'loading' && (
          <motion.span
            key="loading"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex items-center justify-center gap-2"
          >
            <Loader2 className="h-4 w-4 animate-spin shrink-0 text-current" />
            <span>{loadingText || initialText || 'Cargando...'}</span>
          </motion.span>
        )}

        {status === 'success' && (
          <motion.span
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex items-center justify-center gap-1.5 font-bold"
          >
            {successIcon || <Check className="w-4 h-4 stroke-[3] shrink-0" />}
            <span>{successText}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

