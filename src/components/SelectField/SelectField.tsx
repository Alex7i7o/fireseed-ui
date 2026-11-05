/* Developed by FireSeed - Fueling Innovation */
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectFieldProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
  className?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  enableHaptics?: boolean;
  onChange?: (value: string) => void;
}

export function SelectField({
  label,
  options = [],
  value: controlledValue,
  defaultValue = '',
  placeholder = 'Seleccionar...',
  error,
  helperText,
  containerClassName,
  className,
  disabled = false,
  name,
  id,
  enableHaptics = true,
  onChange
}: SelectFieldProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedValue = controlledValue !== undefined ? controlledValue : internalValue;
  const selectedOption = options.find((opt) => opt.value === selectedValue);

  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  // Cerrar al hacer click afuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cerrar con Escape
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelect = (val: string, isDisabled?: boolean) => {
    if (isDisabled || disabled) return;
    if (enableHaptics) {
      haptics.light();
    }
    if (controlledValue === undefined) {
      setInternalValue(val);
    }
    onChange?.(val);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (disabled) return;
    if (enableHaptics) {
      haptics.light();
    }
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={cn('relative w-full space-y-1.5', containerClassName)} ref={containerRef}>
      {label && (
        <label
          htmlFor={selectId}
          className="block text-xs font-semibold uppercase tracking-wider text-white/80 select-none"
        >
          {label}
        </label>
      )}

      {/* Input Gatillador */}
      <div
        id={selectId}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        tabIndex={disabled ? -1 : 0}
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown();
          }
        }}
        className={cn(
          'w-full min-h-[44px] h-11 rounded-2xl border px-4 py-2.5 flex items-center justify-between text-sm transition-all cursor-pointer select-none outline-none',
          'bg-[#0d041a] text-white',
          isOpen
            ? 'border-accent-main ring-2 ring-accent-main/30 shadow-[0_0_20px_rgba(253,204,4,0.15)]'
            : 'border-white/10 hover:border-white/20',
          error ? 'border-rose-500/80 ring-rose-500/30' : '',
          disabled ? 'opacity-50 cursor-not-allowed' : '',
          className
        )}
      >
        <span className={cn('truncate', !selectedOption ? 'text-white/40' : 'text-white font-medium')}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="text-white/50 shrink-0 ml-2"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Input oculto para compatibilidad con formularios HTML nativos */}
      {name && <input type="hidden" name={name} value={selectedValue} />}

      {/* Menú Desplegable Personalizado (Estilo Glassmorphism Redondeado de Lujo) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ type: 'spring', duration: 0.22, bounce: 0 }}
            className="absolute z-50 w-full mt-2 p-1.5 rounded-2xl border border-white/15 bg-[#120526]/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden space-y-0.5"
            role="listbox"
          >
            {options.map((opt) => {
              const isSelected = opt.value === selectedValue;
              return (
                <div
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(opt.value, opt.disabled)}
                  className={cn(
                    'flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-all cursor-pointer select-none',
                    opt.disabled
                      ? 'opacity-40 cursor-not-allowed text-white/30'
                      : isSelected
                      ? 'bg-accent-main/15 text-accent-main font-semibold'
                      : 'text-zinc-200 hover:bg-white/10 hover:text-white'
                  )}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && <Check className="w-4 h-4 text-accent-main shrink-0 stroke-[2.5]" />}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p className="text-xs font-medium text-rose-400 mt-1">{error}</p>}
      {!error && helperText && <p className="text-xs text-white/40 mt-1">{helperText}</p>}
    </div>
  );
}
