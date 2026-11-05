/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  className?: string;
  enableHaptics?: boolean;
}

export function Switch({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  className,
  enableHaptics = true
}: SwitchProps) {
  const toggle = () => {
    if (disabled) return;
    if (enableHaptics) {
      haptics.light();
    }
    onChange(!checked);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      className={cn(
        'flex items-center justify-between gap-4 select-none',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        className
      )}
      onClick={toggle}
    >
      {(label || description) && (
        <div className="flex-1 pr-2">
          {label && <p className="text-sm font-semibold text-white">{label}</p>}
          {description && <p className="text-xs text-white/60">{description}</p>}
        </div>
      )}

      <div
        role="switch"
        aria-checked={checked}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        className={cn(
          'relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-main',
          checked ? 'bg-accent-main' : 'bg-white/20'
        )}
      >
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className={cn(
            'pointer-events-none inline-block h-6 w-6 rounded-full shadow-lg ring-0 transition-colors',
            checked ? 'bg-primary-main ml-5' : 'bg-white ml-0'
          )}
        />
      </div>
    </div>
  );
}
