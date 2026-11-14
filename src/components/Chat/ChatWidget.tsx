/* Developed by FireSeed - Fueling Innovation */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import { ChatView } from './ChatView';
import type { ChatWidgetProps } from './Chat.types';

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  position = 'bottom-right',
  defaultOpen = false,
  isOpen: controlledOpen,
  onOpenChange,
  badgeCount = 0,
  triggerIcon,
  triggerLabel = 'Abrir chat de soporte',
  ...chatProps
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const handleToggle = (nextState: boolean) => {
    if (controlledOpen === undefined) {
      setInternalOpen(nextState);
    }
    onOpenChange?.(nextState);
  };

  const posClasses = position === 'bottom-right' ? 'right-4 sm:right-6' : 'left-4 sm:left-6';

  return (
    <div className="relative font-sans">
      {/* ======================================================== */}
      {/* 1. VENTANA FLOTANTE (ADAPTABLE A FULLSCREEN EN MOBILE)    */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            className={`fixed z-50 inset-0 sm:inset-auto sm:bottom-22 ${posClasses} sm:w-[400px] sm:h-[580px] sm:max-h-[85vh] sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden bg-[#120524]`}
          >
            <ChatView
              {...chatProps}
              onClose={() => handleToggle(false)}
              className="h-full border-0 sm:border sm:border-[#9EA2E2]/25 sm:rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* 2. BOTÓN DISPARADOR FLOTANTE                             */}
      {/* ======================================================== */}
      <div className={`fixed bottom-4 sm:bottom-6 ${posClasses} z-50`}>
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleToggle(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-r from-[#FBBF24] to-[#E67E22] text-[#120524] shadow-[0_0_25px_rgba(251,191,36,0.35)] flex items-center justify-center cursor-pointer transition-shadow hover:shadow-[0_0_35px_rgba(251,191,36,0.55)]"
          aria-label={triggerLabel}
          title={triggerLabel}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-6 h-6 stroke-[2.5]" />
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {triggerIcon || <MessageSquare className="w-6 h-6 stroke-[2.5]" />}
              </motion.span>
            )}
          </AnimatePresence>

          {/* Badge de mensajes no leídos */}
          {!isOpen && badgeCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 px-1.5 py-0.5 min-w-[20px] h-5 rounded-full bg-rose-600 text-white text-[10px] font-extrabold flex items-center justify-center border-2 border-[#120524] shadow-md"
            >
              {badgeCount > 99 ? '99+' : badgeCount}
            </motion.span>
          )}
        </motion.button>
      </div>
    </div>
  );
};
