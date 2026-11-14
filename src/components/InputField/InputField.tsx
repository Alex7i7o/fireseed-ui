/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { cn } from '../../utils/cn';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className,
      containerClassName,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className={cn('w-full space-y-1.5', containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold uppercase tracking-wider text-white/80"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 flex items-center pointer-events-none text-white/40">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            className={cn(
              'w-full min-h-[44px] h-11 rounded-xl border bg-black/30 px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 transition-all outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent disabled:opacity-50 disabled:cursor-not-allowed',
              error
                ? 'border-rose-500/80 focus:ring-rose-500/30 focus:border-rose-500'
                : 'border-white/10 hover:border-white/20',
              leftIcon ? 'pl-10' : '',
              rightIcon ? 'pr-10' : '',
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3.5 flex items-center pointer-events-none text-white/40">
              {rightIcon}
            </div>
          )}
        </div>

        {error && <p className="text-xs font-medium text-rose-400 mt-1">{error}</p>}
        {!error && helperText && <p className="text-xs text-white/40 mt-1">{helperText}</p>}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export { Textarea, type TextareaProps } from '../Textarea';

