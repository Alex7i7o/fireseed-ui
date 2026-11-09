/* Developed by FireSeed - Fueling Innovation */
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export interface DropdownMenuItem {
  id?: string;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  destructive?: boolean;
  disabled?: boolean;
  divider?: boolean;
  onClick?: () => void;
}

export interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: DropdownMenuItem[];
  align?: 'left' | 'right';
  className?: string;
  enableHaptics?: boolean;
}

export function DropdownMenu({
  trigger,
  items,
  align = 'right',
  className,
  enableHaptics = true
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleItemClick = (item: DropdownMenuItem) => {
    if (item.disabled) return;
    if (enableHaptics) {
      if (item.destructive) haptics.warning();
      else haptics.light();
    }
    item.onClick?.();
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={cn('relative inline-flex items-center select-none', className)}>
      {/* Gatillador */}
      <div
        onClick={() => {
          if (enableHaptics) haptics.light();
          setIsOpen((prev) => !prev);
        }}
        className="cursor-pointer inline-flex items-center"
      >
        {trigger}
      </div>

      {/* Menú Desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={cn(
              'absolute top-full mt-1.5 z-50 min-w-[200px] p-1.5 rounded-2xl shadow-2xl',
              'bg-[#120524]/95 border border-[#9EA2E2]/20 backdrop-blur-xl text-[#FFF6DF]',
              align === 'right' ? 'right-0' : 'left-0'
            )}
          >
            {items.map((item, idx) => (
              <React.Fragment key={item.id || idx}>
                {item.divider && (
                  <div className="h-px my-1 bg-[#9EA2E2]/15 mx-1" />
                )}
                <button
                  type="button"
                  disabled={item.disabled}
                  onClick={() => handleItemClick(item)}
                  className={cn(
                    'w-full flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer text-left',
                    item.destructive
                      ? 'text-rose-400 hover:bg-rose-500/15 hover:text-rose-300'
                      : 'text-[#FFF6DF] hover:bg-white/10 hover:text-white',
                    item.disabled && 'opacity-35 cursor-not-allowed pointer-events-none'
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon && <span className="w-4 h-4 shrink-0">{item.icon}</span>}
                    <span>{item.label}</span>
                  </div>

                  {item.shortcut && (
                    <kbd className="font-mono text-[10px] bg-[#241142] text-[#9EA2E2] px-1.5 py-0.5 rounded border border-[#9EA2E2]/20">
                      {item.shortcut}
                    </kbd>
                  )}
                </button>
              </React.Fragment>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
