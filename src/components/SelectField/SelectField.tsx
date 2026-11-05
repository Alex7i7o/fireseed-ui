/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
}

export const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    {
      label,
      options,
      placeholder = 'Seleccionar...',
      error,
      helperText,
      className,
      containerClassName,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className={cn('w-full space-y-1.5', containerClassName)}>
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs font-semibold uppercase tracking-wider text-white/80"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            className={cn(
              'w-full min-h-[44px] h-11 rounded-xl border bg-black/40 px-3.5 py-2.5 pr-10 text-sm text-white appearance-none transition-all outline-none focus:ring-2 focus:ring-accent-main/50 focus:border-accent-main disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
              error
                ? 'border-rose-500/80 focus:ring-rose-500/30 focus:border-rose-500'
                : 'border-white/10 hover:border-white/20',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="bg-[#180a2b] text-white/40">
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                disabled={opt.disabled}
                className="bg-[#180a2b] text-white py-1.5"
              >
                {opt.label}
              </option>
            ))}
          </select>

          <div className="absolute right-3.5 flex items-center pointer-events-none text-white/40">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {error && <p className="text-xs font-medium text-rose-400 mt-1">{error}</p>}
        {!error && helperText && <p className="text-xs text-white/40 mt-1">{helperText}</p>}
      </div>
    );
  }
);

SelectField.displayName = 'SelectField';
