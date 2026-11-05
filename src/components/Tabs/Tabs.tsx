/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
}

export interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  enableHaptics?: boolean;
}

export function Tabs({
  items,
  activeId,
  onChange,
  className,
  enableHaptics = true
}: TabsProps) {
  const handleTabClick = (id: string) => {
    if (enableHaptics && id !== activeId) {
      haptics.light();
    }
    onChange(id);
  };

  return (
    <div
      className={cn(
        'inline-flex items-center p-1 rounded-2xl bg-black/40 border border-white/10 select-none overflow-x-auto max-w-full',
        className
      )}
      role="tablist"
    >
      {items.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              'relative z-10 flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-colors min-h-[38px] whitespace-nowrap focus:outline-none',
              isActive ? 'text-primary-main' : 'text-white/60 hover:text-white'
            )}
          >
            {tab.icon && <span className="shrink-0">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                className={cn(
                  'text-[10px] px-1.5 py-0.5 rounded-full font-mono',
                  isActive ? 'bg-primary-main/20 text-primary-main' : 'bg-white/10 text-white/60'
                )}
              >
                {tab.badge}
              </span>
            )}

            {isActive && (
              <motion.div
                layoutId="active-tab-pill"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                className="absolute inset-0 bg-accent-main rounded-xl -z-10 shadow-sm"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
