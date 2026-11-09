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

  // Posicionamiento geométrico exacto 1:1 con el thumb del input nativo
  // El centro del thumb recorre desde 10px hasta 100% - 10px
  const thumbPosition = `calc(10px + ${(percentage / 100)} * (100% - 20px))`;
  const trackWidth = percentage === 0 ? '0%' : thumbPosition;

  return (
    <div className={cn('flex flex-col gap-2 w-full select-none', className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between text-xs font-semibold">
          {label && (
            <span className="uppercase tracking-wider text-[#9EA2E2]">{label}</span>
          )}
          {showValue && (
            <span className="font-mono text-[#FBBF24] font-bold bg-[#241142] px-2 py-0.5 rounded-md border border-[#FBBF24]/30">
              {formatValue(value)}
            </span>
          )}
        </div>
      )}

      <div className="relative flex items-center w-full h-7 group">
        {/* Barra de Fondo */}
        <div className="absolute w-full h-2 rounded-full bg-[#120524] border border-[#9EA2E2]/25 overflow-hidden">
          {/* Barra Activa Iluminada (Sin retardo de transición para respuesta táctil instantánea a 120 FPS) */}
          <div
            className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#FBBF24]"
            style={{ width: trackWidth }}
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
            'absolute w-full h-full opacity-0 cursor-pointer z-20',
            disabled && 'cursor-not-allowed pointer-events-none'
          )}
        />

        {/* Thumb Visual Estilizado (Bloqueado al centro del cursor en tiempo real) */}
        <div
          className={cn(
            'absolute top-1/2 -translate-y-1/2 w-5 h-5 -ml-2.5 rounded-full pointer-events-none shadow-md z-10',
            'bg-[#FBBF24] border-2 border-[#120524] shadow-[#FBBF24]/50',
            'transition-transform duration-100 group-hover:scale-125 group-active:scale-110'
          )}
          style={{ left: thumbPosition }}
        />
      </div>
    </div>
  );
}
