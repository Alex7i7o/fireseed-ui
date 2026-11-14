/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { motion } from 'framer-motion';

export interface TypingIndicatorProps {
  /** Texto opcional que acompaña a la animación (ej: "Asistente escribiendo...") */
  label?: string;
  /** Variante de color: 'primary' (dorado solar), 'periwinkle' o 'emerald' */
  variant?: 'primary' | 'periwinkle' | 'emerald';
  /** Clases adicionales de Tailwind */
  className?: string;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  label = 'Escribiendo...',
  variant = 'primary',
  className = ''
}) => {
  const dotColor = {
    primary: 'bg-[#FBBF24]',
    periwinkle: 'bg-[#9EA2E2]',
    emerald: 'bg-emerald-400'
  }[variant];

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#241142]/70 border border-[#9EA2E2]/20 backdrop-blur-xs text-xs text-[#FFF6DF]/80 shadow-2xs ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-1.5 py-0.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${dotColor}`}
            animate={{
              y: [0, -4, 0],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.18,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
      {label && <span className="text-[11px] font-medium tracking-wide text-[#9EA2E2]">{label}</span>}
    </div>
  );
};
