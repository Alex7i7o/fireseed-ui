/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export interface StarRatingProps {
  value: number;
  max?: number;
  onChange?: (rating: number) => void;
  readOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  enableHaptics?: boolean;
}

export function StarRating({
  value,
  max = 5,
  onChange,
  readOnly = false,
  size = 'md',
  className,
  enableHaptics = true
}: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const starSizes: Record<string, string> = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const handleSelect = (rating: number) => {
    if (readOnly || !onChange) return;
    if (enableHaptics) {
      haptics.light();
    }
    onChange(rating);
  };

  return (
    <div
      className={cn('inline-flex items-center gap-1.5 select-none', className)}
      onMouseLeave={() => !readOnly && setHoverValue(null)}
    >
      {Array.from({ length: max }, (_, index) => {
        const starNumber = index + 1;
        const isFilled = starNumber <= (hoverValue ?? value);

        if (readOnly) {
          return (
            <Star
              key={starNumber}
              className={cn(
                starSizes[size],
                isFilled ? 'text-amber-400 fill-amber-400' : 'text-white/20'
              )}
            />
          );
        }

        return (
          <motion.button
            key={starNumber}
            type="button"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSelect(starNumber)}
            onMouseEnter={() => setHoverValue(starNumber)}
            className="p-1 text-white/20 transition-colors focus:outline-none"
            aria-label={`Calificar con ${starNumber} estrellas`}
          >
            <Star
              className={cn(
                starSizes[size],
                'transition-colors',
                isFilled ? 'text-amber-400 fill-amber-400' : 'text-white/20 hover:text-amber-400/50'
              )}
            />
          </motion.button>
        );
      })}
    </div>
  );
}
