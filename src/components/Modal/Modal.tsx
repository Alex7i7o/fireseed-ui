/* Developed by FireSeed - Fueling Innovation */
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  showCloseButton?: boolean;
}

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } else {
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [query]);

  return matches;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
  showCloseButton = true
}: ModalProps) {
  const isMobile = useMediaQuery('(max-width: 640px)');

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (isOpen) {
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
  }, [isOpen]);

  const springConfig = { type: 'spring' as const, bounce: 0, duration: 0.35 };

  const content = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col sm:items-center justify-end sm:justify-center pointer-events-none">
          {/* Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
            onClick={onClose}
          />

          {/* Modal / Bottom Sheet Box */}
          <motion.div
            initial={isMobile ? { y: '100%', opacity: 1 } : { scale: 0.95, opacity: 0 }}
            animate={isMobile ? { y: 0, opacity: 1 } : { scale: 1, opacity: 1 }}
            exit={isMobile ? { y: '100%', opacity: 1 } : { scale: 0.95, opacity: 0 }}
            transition={springConfig}
            className={cn(
              'relative z-50 w-full bg-[#180a2b] border border-white/10 text-white shadow-2xl flex flex-col pointer-events-auto overflow-hidden',
              isMobile
                ? 'mt-auto rounded-t-[32px] pb-[calc(1rem+env(safe-area-inset-bottom))] max-h-[90dvh]'
                : 'max-w-lg rounded-2xl sm:w-[90%] m-4 max-h-[88vh]',
              className
            )}
          >
            {/* Grabber handle for touch on mobile */}
            {isMobile && (
              <div
                className="flex w-full items-center justify-center pt-3 pb-1 shrink-0 cursor-pointer"
                onClick={onClose}
              >
                <div className="h-1.5 w-12 rounded-full bg-white/20" />
              </div>
            )}

            {(title || showCloseButton) && (
              <div
                className={cn(
                  'flex items-center justify-between border-b border-white/10 px-6 py-4 shrink-0',
                  isMobile ? 'pt-2' : ''
                )}
              >
                <div className="pr-3">
                  {title && <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">{title}</h2>}
                  {description && <p className="text-xs text-white/60 mt-0.5">{description}</p>}
                </div>
                {showCloseButton && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 ml-auto"
                    aria-label="Cerrar modal"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            )}

            <div className="p-6 overflow-y-auto flex-1 min-h-0 custom-scrollbar overscroll-contain">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return typeof document !== 'undefined' ? createPortal(content, document.body) : null;
}
