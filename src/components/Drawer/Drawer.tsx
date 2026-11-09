/* Developed by FireSeed - Fueling Innovation */
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  position?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  showCloseButton?: boolean;
  className?: string;
  enableHaptics?: boolean;
}

export function Drawer({
  isOpen,
  onClose,
  title,
  description,
  position = 'right',
  size = 'md',
  children,
  showCloseButton = true,
  className,
  enableHaptics = true
}: DrawerProps) {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (isOpen) {
      if (enableHaptics) haptics.light();
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.paddingRight = '0px';
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.paddingRight = '0px';
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, enableHaptics]);

  const sizeClasses = {
    sm: 'max-w-xs',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-2xl'
  };

  const isRight = position === 'right';

  const drawerContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex pointer-events-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
          />

          {/* Panel Lateral */}
          <motion.div
            initial={{ x: isRight ? '100%' : '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRight ? '100%' : '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 350 }}
            className={cn(
              'relative z-50 w-full h-full bg-primary-main border-white/10 text-white shadow-2xl flex flex-col pointer-events-auto overflow-hidden custom-scrollbar',
              isRight ? 'ml-auto border-l' : 'mr-auto border-r',
              sizeClasses[size],
              className
            )}
          >
            {/* Cabecera */}
            {(title || showCloseButton) && (
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 shrink-0 bg-primary-surface">
                <div className="pr-3">
                  {title && (
                    <h2 className="text-lg font-bold font-['PosteramaCustom',sans-serif] tracking-tight text-cream-silk">
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p className="text-xs text-tech-periwinkle/80 mt-0.5">{description}</p>
                  )}
                </div>
                {showCloseButton && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full p-2 text-tech-periwinkle/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Cerrar panel"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            )}

            {/* Contenido scrolleable */}
            <div className="p-6 overflow-y-auto flex-1 min-h-0 custom-scrollbar">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return typeof document !== 'undefined' ? createPortal(drawerContent, document.body) : null;
}
