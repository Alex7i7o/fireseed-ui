/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { useRadioGroup } from './RadioGroup';

export interface RadioProps {
  value: string;
  label?: React.ReactNode;
  description?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
}

export function Radio({
  value,
  label,
  description,
  disabled: propDisabled,
  className,
  id
}: RadioProps) {
  const group = useRadioGroup();
  const inputId = id || React.useId();

  const isChecked = group?.value === value;
  const isDisabled = propDisabled || group?.disabled || false;

  const handleClick = () => {
    if (isDisabled) return;
    group?.onChange?.(value);
  };

  return (
    <label
      htmlFor={inputId}
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      className={cn(
        'inline-flex items-start gap-3 select-none cursor-pointer group',
        isDisabled && 'opacity-40 cursor-not-allowed pointer-events-none',
        className
      )}
    >
      {/* Círculo Exterior */}
      <div
        role="radio"
        id={inputId}
        aria-checked={isChecked}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            handleClick();
          }
        }}
        className={cn(
          'relative shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center border transition-all duration-200',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120524]',
          isChecked
            ? 'border-[#FBBF24] bg-[#120524] shadow-md shadow-[#FBBF24]/20'
            : 'border-[#9EA2E2]/30 bg-[#120524] group-hover:border-[#FBBF24]/60'
        )}
      >
        {/* Punto Interior Animado */}
        {isChecked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="w-2.5 h-2.5 rounded-full bg-[#FBBF24] shadow-sm shadow-[#FBBF24]/50"
          />
        )}
      </div>

      {/* Textos */}
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
  );
}
