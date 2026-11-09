/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  description?: string;
  error?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  enableHaptics?: boolean;
  id?: string;
}

export function Checkbox({
  checked: controlledChecked,
  defaultChecked = false,
  indeterminate = false,
  onChange,
  label,
  description,
  error,
  disabled = false,
  size = 'md',
  className,
  enableHaptics = true,
  id
}: CheckboxProps) {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;
  const inputId = id || React.useId();

  const handleToggle = () => {
    if (disabled) return;
    if (enableHaptics) haptics.light();
    const next = !isChecked;
    if (controlledChecked === undefined) {
      setInternalChecked(next);
    }
    onChange?.(next);
  };

  const boxSizes = {
    sm: 'w-4 h-4 rounded-md',
    md: 'w-5 h-5 rounded-lg',
    lg: 'w-6 h-6 rounded-lg'
  };

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16
  };

  return (
    <div className={cn('inline-flex flex-col select-none', className)}>
      <label
        htmlFor={inputId}
        onClick={(e) => {
          e.preventDefault();
          handleToggle();
        }}
        className={cn(
          'inline-flex items-start gap-3 cursor-pointer group',
          disabled && 'opacity-40 cursor-not-allowed pointer-events-none'
        )}
      >
        {/* Caja del Checkbox */}
        <div
          role="checkbox"
          id={inputId}
          aria-checked={indeterminate ? 'mixed' : isChecked}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              handleToggle();
            }
          }}
          className={cn(
            'relative shrink-0 mt-0.5 flex items-center justify-center transition-all duration-200 border',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120524]',
            boxSizes[size],
            isChecked || indeterminate
              ? 'bg-[#FBBF24] border-[#FBBF24] text-[#120524] shadow-md shadow-[#FBBF24]/20'
              : 'bg-[#120524] border-[#9EA2E2]/30 text-transparent group-hover:border-[#FBBF24]/60'
          )}
        >
          {indeterminate ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              <Minus size={iconSizes[size]} strokeWidth={3} />
            </motion.div>
          ) : isChecked ? (
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            >
              <Check size={iconSizes[size]} strokeWidth={3} />
            </motion.div>
          ) : null}
        </div>

        {/* Textos: Label y Descripción */}
        {(label || description) && (
          <div className="flex flex-col text-left">
            {label && (
              <span className="text-xs sm:text-sm font-medium text-[#FFF6DF] group-hover:text-white transition-colors">
                {label}
              </span>
            )}
            {description && (
              <span className="text-[11px] sm:text-xs text-[#9EA2E2]/70 leading-normal mt-0.5">
                {description}
              </span>
            )}
          </div>
        )}
      </label>

      {error && (
        <span className="text-[11px] font-mono text-rose-400 mt-1 pl-8">
          {error}
        </span>
      )}
    </div>
  );
}
