/* Developed by FireSeed - Fueling Innovation */
import React, { useState, useRef, useEffect } from 'react';
import { X, Check, Search, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export interface MultiSelectOption {
  value: string;
  label: string;
  description?: string;
}

export interface MultiSelectProps<T = MultiSelectOption> {
  items: T[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  getValue?: (item: T) => string;
  getLabel?: (item: T) => string;
  placeholder?: string;
  label?: string;
  error?: string;
  className?: string;
  enableHaptics?: boolean;
}

export function MultiSelect<T = MultiSelectOption>({
  items,
  selectedValues = [],
  onChange,
  getValue = (item: any) => item.value,
  getLabel = (item: any) => item.label,
  placeholder = 'Buscar y seleccionar...',
  label,
  error,
  className,
  enableHaptics = true
}: MultiSelectProps<T>) {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredItems = items.filter((item) =>
    getLabel(item).toLowerCase().includes(search.toLowerCase())
  );

  const toggleItem = (val: string) => {
    if (enableHaptics) {
      haptics.light();
    }
    if (selectedValues.includes(val)) {
      onChange(selectedValues.filter((x) => x !== val));
    } else {
      onChange([...selectedValues, val]);
    }
  };

  const removeItem = (e: React.MouseEvent, val: string) => {
    e.stopPropagation();
    if (enableHaptics) {
      haptics.light();
    }
    onChange(selectedValues.filter((x) => x !== val));
  };

  return (
    <div className={cn('relative w-full space-y-1.5', className)} ref={wrapperRef}>
      {label && (
        <label className="block text-xs font-semibold uppercase tracking-wider text-white/80">
          {label}
        </label>
      )}

      <div
        className={cn(
          'min-h-[44px] w-full p-2 rounded-xl border bg-black/40 text-sm cursor-text flex flex-wrap gap-1.5 items-center transition-all focus-within:ring-2 focus-within:ring-accent/50 focus-within:border-accent',
          error ? 'border-rose-500/80' : 'border-white/10 hover:border-white/20'
        )}
        onClick={() => {
          setIsOpen(true);
          inputRef.current?.focus();
        }}
      >
        {selectedValues.map((val) => {
          const item = items.find((i) => getValue(i) === val);
          if (!item) return null;
          return (
            <span
              key={val}
              className="bg-accent/15 text-accent border border-accent/20 px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 select-none"
            >
              <span>{getLabel(item)}</span>
              <button
                type="button"
                onClick={(e) => removeItem(e, val)}
                className="hover:text-rose-400 p-0.5 rounded transition-colors focus:outline-none"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          );
        })}

        <div className="flex-1 flex items-center min-w-[140px]">
          <input
            ref={inputRef}
            type="text"
            placeholder={selectedValues.length === 0 ? placeholder : ''}
            className="w-full outline-none text-sm bg-transparent text-white placeholder:text-white/30 px-1"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
          />
        </div>

        <ChevronDown className="w-4 h-4 text-white/40 shrink-0 ml-auto mr-1" />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1.5 max-h-60 overflow-y-auto bg-[#180a2b] border border-white/15 rounded-xl shadow-2xl custom-scrollbar overscroll-contain">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => {
              const val = getValue(item);
              const isSelected = selectedValues.includes(val);
              return (
                <div
                  key={val}
                  className={cn(
                    'p-3 px-4 text-sm cursor-pointer hover:bg-white/10 flex items-center justify-between transition-colors text-white/90',
                    isSelected ? 'bg-white/5 font-semibold text-accent' : ''
                  )}
                  onClick={() => {
                    toggleItem(val);
                    setSearch('');
                  }}
                >
                  <span>{getLabel(item)}</span>
                  {isSelected && <Check className="w-4 h-4 text-accent" />}
                </div>
              );
            })
          ) : (
            <div className="p-4 text-sm text-white/40 text-center flex flex-col items-center gap-1">
              <Search className="w-4 h-4 opacity-50 mb-1" />
              <span>No se encontraron resultados</span>
            </div>
          )}
        </div>
      )}

      {error && <p className="text-xs font-medium text-rose-400 mt-1">{error}</p>}
    </div>
  );
}

