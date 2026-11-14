/* Developed by FireSeed - Fueling Innovation */
import React, { useEffect, useState, useRef, useId } from 'react';
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
  const titleId = useId();
  const descId = useId();
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  // Bloqueo de scroll y gestión de foco al abrir/cerrar
  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (isOpen) {
      previousActiveElementRef.current = document.activeElement as HTMLElement;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';

      // Poner foco dentro del modal
      setTimeout(() => {
        if (modalRef.current) {
          const focusable = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length > 0) {
            focusable[0].focus();
          } else {
            modalRef.current.focus();
          }
        }
      }, 50);
    } else {
      document.body.style.paddingRight = '0px';
      document.body.style.overflow = 'unset';
      if (previousActiveElementRef.current) {
        previousActiveElementRef.current.focus();
      }
    }

    return () => {
      document.body.style.paddingRight = '0px';
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Accesibilidad WAI-ARIA: Soporte de tecla Escape y Trampa de Foco (Focus Trap)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const firstElement = focusables[0];
        const lastElement = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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
            aria-hidden="true"
          />

          {/* Modal / Bottom Sheet Box con Roles WAI-ARIA */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            aria-describedby={description ? descId : undefined}
            tabIndex={-1}
            initial={isMobile ? { y: '100%', opacity: 1 } : { scale: 0.95, opacity: 0 }}
            animate={isMobile ? { y: 0, opacity: 1 } : { scale: 1, opacity: 1 }}
            exit={isMobile ? { y: '100%', opacity: 1 } : { scale: 0.95, opacity: 0 }}
            transition={springConfig}
            className={cn(
              'relative z-50 w-full bg-card border border-border text-foreground shadow-2xl flex flex-col pointer-events-auto overflow-hidden outline-none',
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
                aria-hidden="true"
              >
                <div className="h-1.5 w-12 rounded-full bg-white/20" />
              </div>
            )}

            {(title || showCloseButton) && (
              <div
                className={cn(
                  'flex items-center justify-between border-b border-border px-6 py-4 shrink-0',
                  isMobile ? 'pt-2' : ''
                )}
              >
                <div className="pr-3">
                  {title && (
                    <h2 id={titleId} className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p id={descId} className="text-xs text-muted mt-0.5">
                      {description}
                    </p>
                  )}
                </div>
                {showCloseButton && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full p-2 text-muted hover:text-foreground hover:bg-white/10 transition-colors active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 ml-auto cursor-pointer"
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
