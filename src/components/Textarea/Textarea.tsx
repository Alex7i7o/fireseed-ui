/* Developed by FireSeed - Fueling Innovation */
import React, { useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  autoResize?: boolean;
  showCount?: boolean;
  maxLength?: number;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      hint,
      autoResize = false,
      showCount = false,
      maxLength,
      className,
      value,
      defaultValue,
      onChange,
      id,
      rows = 3,
      disabled,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLTextAreaElement | null>(null);
    const textareaId = id || React.useId();

    const setMergedRef = (el: HTMLTextAreaElement | null) => {
      internalRef.current = el;
      if (typeof ref === 'function') {
        ref(el);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = el;
      }
    };

    // Auto-resize dinámico si está habilitado
    useEffect(() => {
      if (autoResize && internalRef.current) {
        internalRef.current.style.height = 'auto';
        internalRef.current.style.height = `${internalRef.current.scrollHeight}px`;
      }
    }, [value, autoResize]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (autoResize && internalRef.current) {
        internalRef.current.style.height = 'auto';
        internalRef.current.style.height = `${internalRef.current.scrollHeight}px`;
      }
      onChange?.(e);
    };

    const currentLength =
      typeof value === 'string'
        ? value.length
        : typeof defaultValue === 'string'
        ? defaultValue.length
        : 0;

    return (
      <div className="flex flex-col gap-1.5 w-full select-none text-left">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-xs font-semibold uppercase tracking-wider text-tech-periwinkle"
          >
            {label}
          </label>
        )}

        <div className="relative w-full">
          <textarea
            id={textareaId}
            ref={setMergedRef}
            rows={rows}
            maxLength={maxLength}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            disabled={disabled}
            aria-invalid={!!error}
            className={cn(
              'w-full px-4 py-3 rounded-xl text-sm font-sans transition-all duration-200 outline-none resize-y',
              'bg-primary-main text-cream-silk border border-white/15 placeholder:text-tech-periwinkle/40',
              'focus:border-accent-main focus:ring-2 focus:ring-accent-main/30 focus:shadow-lg focus:shadow-accent-main/10',
              disabled && 'opacity-40 cursor-not-allowed bg-black/40',
              error && 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/30',
              className
            )}
            {...props}
          />
        </div>

        {/* Footer con Error / Hint y Contador */}
        <div className="flex items-center justify-between text-[11px] font-mono mt-0.5 px-1">
          <div>
            {error ? (
              <span className="text-rose-400 font-medium">{error}</span>
            ) : hint ? (
              <span className="text-tech-periwinkle/60">{hint}</span>
            ) : null}
          </div>

          {showCount && maxLength && (
            <span
              className={cn(
                'text-tech-periwinkle/60 ml-auto',
                currentLength >= maxLength && 'text-rose-400 font-bold'
              )}
            >
              {currentLength} / {maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
