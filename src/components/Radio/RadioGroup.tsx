/* Developed by FireSeed - Fueling Innovation */
import React, { createContext, useContext } from 'react';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

interface RadioGroupContextType {
  name: string;
  value?: string;
  onChange?: (val: string) => void;
  disabled?: boolean;
  enableHaptics?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextType | null>(null);

export function useRadioGroup() {
  return useContext(RadioGroupContext);
}

export interface RadioGroupProps {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
  orientation?: 'vertical' | 'horizontal';
  disabled?: boolean;
  enableHaptics?: boolean;
  children: React.ReactNode;
  className?: string;
  label?: string;
}

export function RadioGroup({
  name: propName,
  value: controlledValue,
  defaultValue,
  onChange,
  orientation = 'vertical',
  disabled = false,
  enableHaptics = true,
  children,
  className,
  label
}: RadioGroupProps) {
  const generatedName = React.useId();
  const name = propName || generatedName;
  const [internalValue, setInternalValue] = React.useState(defaultValue);

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (val: string) => {
    if (disabled) return;
    if (enableHaptics) haptics.light();
    if (controlledValue === undefined) {
      setInternalValue(val);
    }
    onChange?.(val);
  };

  return (
    <RadioGroupContext.Provider
      value={{ name, value, onChange: handleChange, disabled, enableHaptics }}
    >
      <div
        role="radiogroup"
        aria-label={label}
        className={cn('flex flex-col gap-2', className)}
      >
        {label && (
          <span className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
            {label}
          </span>
        )}
        <div
          className={cn(
            'flex gap-3',
            orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap'
          )}
        >
          {children}
        </div>
      </div>
    </RadioGroupContext.Provider>
  );
}

