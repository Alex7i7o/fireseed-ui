/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

export function Breadcrumb({
  items,
  separator = <ChevronRight className="w-3.5 h-3.5 text-[#9EA2E2]/40" />,
  className
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center select-none', className)}>
      <ol className="flex items-center gap-1.5 flex-wrap text-xs font-medium">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li key={idx} className="inline-flex items-center gap-1.5">
              {idx > 0 && <span className="shrink-0">{separator}</span>}

              {isLast ? (
                <span
                  aria-current="page"
                  className="flex items-center gap-1.5 text-[#FBBF24] font-semibold"
                >
                  {item.icon && <span className="w-3.5 h-3.5 shrink-0">{item.icon}</span>}
                  <span>{item.label}</span>
                </span>
              ) : item.href ? (
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className="flex items-center gap-1.5 text-[#9EA2E2] hover:text-[#FFF6DF] transition-colors"
                >
                  {item.icon && <span className="w-3.5 h-3.5 shrink-0">{item.icon}</span>}
                  <span>{item.label}</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={item.onClick}
                  className="flex items-center gap-1.5 text-[#9EA2E2] hover:text-[#FFF6DF] transition-colors cursor-pointer"
                >
                  {item.icon && <span className="w-3.5 h-3.5 shrink-0">{item.icon}</span>}
                  <span>{item.label}</span>
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
