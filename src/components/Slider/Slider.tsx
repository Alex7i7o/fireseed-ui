/* Developed by FireSeed - Fueling Innovation */
import React, { useRef } from 'react';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export interface SliderProps {
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  showValue?: boolean;
  formatValue?: (val: number) => string;
  disabled?: boolean;
  enableHaptics?: boolean;
  className?: string;
}

export function Slider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  showValue = true,
  formatValue = (v) => `${v}`,
  disabled = false,
  enableHaptics = true,
  className
}: SliderProps) {
  const lastHapticValue = useRef(value);

  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextVal = Number(e.target.value);
    if (enableHaptics && Math.abs(nextVal - lastHapticValue.current) >= step * 2) {
      haptics.light();
      lastHapticValue.current = nextVal;
    }
    onChange(nextVal);
  };

  return (
    <div className={cn('flex flex-col gap-2 w-full select-none', className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between text-xs font-semibold">
          {label && (
            <span className="uppercase tracking-wider text-muted font-medium">{label}</span>
          )}
          {showValue && (
            <span className="font-mono text-accent font-bold bg-card px-2.5 py-0.5 rounded-lg border border-accent/30 shadow-sm">
              {formatValue(value)}
            </span>
          )}
        </div>
      )}

      <div className="relative flex items-center w-full h-8 group">
        {/* Barra de Fondo */}
        <div className="relative w-full h-2 rounded-full bg-primary border border-white/15 overflow-hidden">
          {/* Barra Activa Iluminada (Sincronizada 1:1 exactamente con el centro del thumb) */}
          <div
            className="h-full bg-gradient-to-r from-accent/40 via-accent/80 to-accent rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Input Range Nativo Transparente */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          className={cn(
            'absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20',
            disabled && 'cursor-not-allowed pointer-events-none'
          )}
        />

        {/* Thumb Visual Estilizado (Alineado exactamente al porcentaje del track) */}
        <div
          className={cn(
            'absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full pointer-events-none shadow-[0_0_12px_rgba(251,191,36,0.6)] z-10',
            'bg-accent border-2 border-primary',
            'transition-transform duration-100 group-hover:scale-125 group-active:scale-110'
          )}
          style={{ left: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

