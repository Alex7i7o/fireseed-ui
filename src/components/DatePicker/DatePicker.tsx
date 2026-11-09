/* Developed by FireSeed - Fueling Innovation */
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, X } from 'lucide-react';
import { Calendar } from '../Calendar';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export interface DatePickerProps {
  value?: Date | null;
  defaultValue?: Date | null;
  onChange?: (date: Date) => void;
  label?: string;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  error?: string;
  className?: string;
  enableHaptics?: boolean;
}

export function DatePicker({
  value: controlledValue,
  defaultValue = null,
  onChange,
  label,
  placeholder = 'Seleccionar fecha...',
  minDate,
  maxDate,
  disabled = false,
  error,
  className,
  enableHaptics = true
}: DatePickerProps) {
  const [internalValue, setInternalValue] = useState<Date | null>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedDate = controlledValue !== undefined ? controlledValue : internalValue;

  // Cerrar al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectDate = (date: Date) => {
    if (enableHaptics) haptics.light();
    if (controlledValue === undefined) {
      setInternalValue(date);
    }
    onChange?.(date);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (enableHaptics) haptics.light();
    if (controlledValue === undefined) {
      setInternalValue(null);
    }
  };

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('es-AR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    : '';

  return (
    <div ref={containerRef} className={cn('relative flex flex-col gap-1.5 w-full select-none', className)}>
      {label && (
        <label className="text-xs font-semibold uppercase tracking-wider text-[#9EA2E2]">
          {label}
        </label>
      )}

      {/* Input Gatillador */}
      <div
        onClick={() => {
          if (!disabled) {
            if (enableHaptics) haptics.light();
            setIsOpen((prev) => !prev);
          }
        }}
        className={cn(
          'flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-sm transition-all cursor-pointer',
          'bg-[#120524] text-[#FFF6DF] border-[#9EA2E2]/25',
          'hover:border-[#FBBF24]/50 focus:border-[#FBBF24]',
          isOpen && 'border-[#FBBF24] ring-2 ring-[#FBBF24]/30',
          disabled && 'opacity-40 cursor-not-allowed pointer-events-none',
          error && 'border-rose-500'
        )}
      >
        <div className="flex items-center gap-2.5">
          <CalendarIcon className="w-4 h-4 text-[#FBBF24] shrink-0" />
          <span className={cn(selectedDate ? 'text-[#FFF6DF] font-medium' : 'text-[#9EA2E2]/40')}>
            {selectedDate ? formattedDate : placeholder}
          </span>
        </div>

        {selectedDate && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="p-1 rounded-md text-[#9EA2E2]/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {error && <span className="text-[11px] font-mono text-rose-400 mt-0.5">{error}</span>}

      {/* Popover Flotante con Calendar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="absolute top-full left-0 z-50 mt-2 shadow-2xl"
          >
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleSelectDate}
              minDate={minDate}
              maxDate={maxDate}
              locale="es"
              className="border border-[#FBBF24]/30 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
