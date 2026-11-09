/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export interface StepItem {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface StepperProps {
  steps: StepItem[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  enableHaptics?: boolean;
}

export function Stepper({
  steps,
  currentStep,
  onStepClick,
  orientation = 'horizontal',
  className,
  enableHaptics = true
}: StepperProps) {
  const isVertical = orientation === 'vertical';

  const handleStep = (idx: number) => {
    if (!onStepClick) return;
    if (enableHaptics) haptics.light();
    onStepClick(idx);
  };

  return (
    <div
      className={cn(
        'w-full select-none',
        isVertical ? 'flex flex-col gap-4' : 'flex items-center justify-between',
        className
      )}
    >
      {steps.map((step, idx) => {
        const isCompleted = idx < currentStep;
        const isCurrent = idx === currentStep;
        const isLast = idx === steps.length - 1;

        return (
          <React.Fragment key={idx}>
            <div
              onClick={() => handleStep(idx)}
              className={cn(
                'flex items-center gap-3',
                onStepClick && 'cursor-pointer group'
              )}
            >
              {/* Círculo del Paso */}
              <div
                className={cn(
                  'w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-all duration-200 border',
                  isCompleted &&
                    'bg-accent-main border-accent-main text-primary-main shadow-md shadow-accent-main/20',
                  isCurrent &&
                    'bg-primary-surface border-accent-main text-accent-main ring-2 ring-accent-main/30 shadow-lg shadow-accent-main/30 animate-pulse',
                  !isCompleted &&
                    !isCurrent &&
                    'bg-primary-main border-white/15 text-tech-periwinkle/60'
                )}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4 stroke-[3]" />
                ) : step.icon ? (
                  step.icon
                ) : (
                  idx + 1
                )}
              </div>

              {/* Título y Descripción */}
              <div className="flex flex-col text-left">
                <span
                  className={cn(
                    'text-xs sm:text-sm font-semibold transition-colors',
                    isCurrent ? 'text-accent-main' : isCompleted ? 'text-cream-silk' : 'text-tech-periwinkle/60'
                  )}
                >
                  {step.title}
                </span>
                {step.description && (
                  <span className="text-[11px] text-tech-periwinkle/60 font-normal leading-tight">
                    {step.description}
                  </span>
                )}
              </div>
            </div>

            {/* Barra conectora horizontal */}
            {!isLast && !isVertical && (
              <div className="flex-1 mx-3 h-0.5 bg-white/10 relative overflow-hidden rounded-full">
                <div
                  className="h-full bg-accent-main transition-all duration-300"
                  style={{ width: isCompleted ? '100%' : '0%' }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
