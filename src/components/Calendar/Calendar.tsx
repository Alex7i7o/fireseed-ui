/* Developed by FireSeed - Fueling Innovation */
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, RotateCcw } from 'lucide-react';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export type CalendarSelectionMode = 'single' | 'range' | 'multiple';

export interface CalendarEvent {
  date: Date | string; // Date o 'YYYY-MM-DD'
  title?: string;
  color?: string; // hex (ej: '#FBBF24', '#10B981', '#EC4899')
}

export interface DateRange {
  start?: Date | null;
  end?: Date | null;
}

export interface CalendarProps {
  mode?: CalendarSelectionMode;
  
  // Single selection
  selected?: Date | null;
  onSelect?: (date: Date) => void;

  // Range selection
  selectedRange?: DateRange;
  onSelectRange?: (range: DateRange) => void;

  // Multiple selection
  selectedDates?: Date[];
  onSelectMultiple?: (dates: Date[]) => void;

  // Restricciones
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: ((date: Date) => boolean) | Date[];

  // Eventos / Indicadores
  events?: CalendarEvent[];

  // Configuración
  initialMonth?: Date;
  currentMonth?: Date;
  onMonthChange?: (month: Date) => void;
  locale?: 'es' | 'en';
  showTodayButton?: boolean;
  enableHaptics?: boolean;
  className?: string;
}

// Nombres localizados
const MONTH_NAMES_ES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const MONTH_NAMES_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const WEEKDAYS_ES = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];
const WEEKDAYS_EN = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

// Helpers puros de fechas (sin librerías pesadas)
function isSameDay(d1?: Date | null, d2?: Date | null): boolean {
  if (!d1 || !d2) return false;
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

function normalizeDate(d: Date | string): Date {
  if (typeof d === 'string') {
    const [y, m, day] = d.split('-').map(Number);
    return new Date(y, m - 1, day);
  }
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function isDateInRange(date: Date, start?: Date | null, end?: Date | null): boolean {
  if (!start || !end) return false;
  const t = date.getTime();
  const s = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
  const e = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime();
  return t >= Math.min(s, e) && t <= Math.max(s, e);
}

export function Calendar({
  mode = 'single',
  selected,
  onSelect,
  selectedRange,
  onSelectRange,
  selectedDates = [],
  onSelectMultiple,
  minDate,
  maxDate,
  disabledDates,
  events = [],
  initialMonth,
  currentMonth: controlledMonth,
  onMonthChange,
  locale = 'es',
  showTodayButton = true,
  enableHaptics = true,
  className
}: CalendarProps) {
  const today = useMemo(() => new Date(), []);
  const [internalMonth, setInternalMonth] = useState<Date>(() => {
    return initialMonth || selected || today;
  });
  const [direction, setDirection] = useState<-1 | 1>(1);

  const viewMonth = controlledMonth || internalMonth;
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();

  const monthNames = locale === 'es' ? MONTH_NAMES_ES : MONTH_NAMES_EN;
  const weekdays = locale === 'es' ? WEEKDAYS_ES : WEEKDAYS_EN;

  // Navegación de mes
  const handlePrevMonth = () => {
    if (enableHaptics) haptics.light();
    setDirection(-1);
    const newDate = new Date(year, month - 1, 1);
    if (!controlledMonth) setInternalMonth(newDate);
    onMonthChange?.(newDate);
  };

  const handleNextMonth = () => {
    if (enableHaptics) haptics.light();
    setDirection(1);
    const newDate = new Date(year, month + 1, 1);
    if (!controlledMonth) setInternalMonth(newDate);
    onMonthChange?.(newDate);
  };

  const handleGoToday = () => {
    if (enableHaptics) haptics.light();
    const newDate = new Date(today.getFullYear(), today.getMonth(), 1);
    if (!controlledMonth) setInternalMonth(newDate);
    onMonthChange?.(newDate);
  };

  // Construir la grilla de 7 columnas
  const gridDays = useMemo(() => {
    const firstDayIndex = new Date(year, month, 1).getDay();
    // Ajustar para que la semana empiece en Lunes (0: Lu, 6: Do)
    const startOffset = (firstDayIndex + 6) % 7;

    const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const days: Array<{
      date: Date;
      isCurrentMonth: boolean;
      dayNumber: number;
    }> = [];

    // Días del mes anterior
    for (let i = startOffset - 1; i >= 0; i--) {
      const d = daysInPrevMonth - i;
      days.push({
        date: new Date(year, month - 1, d),
        isCurrentMonth: false,
        dayNumber: d
      });
    }

    // Días del mes actual
    for (let d = 1; d <= daysInCurrentMonth; d++) {
      days.push({
        date: new Date(year, month, d),
        isCurrentMonth: true,
        dayNumber: d
      });
    }

    // Días del mes siguiente para completar múltiplos de 7 (hasta 35 o 42 celdas)
    const remaining = (7 - (days.length % 7)) % 7;
    for (let d = 1; d <= remaining; d++) {
      days.push({
        date: new Date(year, month + 1, d),
        isCurrentMonth: false,
        dayNumber: d
      });
    }

    return days;
  }, [year, month]);

  // Mapa de eventos agrupados por fecha 'YYYY-MM-DD'
  const eventMap = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    events.forEach((ev) => {
      const d = normalizeDate(ev.date);
      const key = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
      const existing = map.get(key) || [];
      existing.push(ev);
      map.set(key, existing);
    });
    return map;
  }, [events]);

  // Verificar si una fecha está deshabilitada
  const isDateDisabled = (date: Date): boolean => {
    if (minDate && date < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) {
      return true;
    }
    if (maxDate && date > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())) {
      return true;
    }
    if (typeof disabledDates === 'function') {
      return disabledDates(date);
    }
    if (Array.isArray(disabledDates)) {
      return disabledDates.some((d) => isSameDay(d, date));
    }
    return false;
  };

  // Manejo de clic en día según el modo
  const handleDayClick = (date: Date) => {
    if (isDateDisabled(date)) {
      if (enableHaptics) haptics.warning();
      return;
    }

    if (enableHaptics) haptics.light();

    // Si el día clicado es de otro mes, navegar a ese mes suavemente
    if (date.getMonth() !== month) {
      const newMonth = new Date(date.getFullYear(), date.getMonth(), 1);
      if (!controlledMonth) setInternalMonth(newMonth);
      onMonthChange?.(newMonth);
    }

    if (mode === 'single') {
      onSelect?.(date);
    } else if (mode === 'range') {
      if (!selectedRange?.start || (selectedRange.start && selectedRange.end)) {
        // Iniciar nuevo rango
        onSelectRange?.({ start: date, end: null });
      } else {
        // Finalizar rango
        if (date < selectedRange.start) {
          onSelectRange?.({ start: date, end: selectedRange.start });
        } else {
          onSelectRange?.({ start: selectedRange.start, end: date });
        }
      }
    } else if (mode === 'multiple') {
      const exists = selectedDates.some((d) => isSameDay(d, date));
      const nextDates = exists
        ? selectedDates.filter((d) => !isSameDay(d, date))
        : [...selectedDates, date];
      onSelectMultiple?.(nextDates);
    }
  };

  return (
    <div
      className={cn(
        'w-full max-w-[350px] sm:max-w-[370px] select-none rounded-2xl p-4 sm:p-5',
        'bg-primary-main/95 border border-primary-light/20 shadow-2xl backdrop-blur-xl',
        'font-sans text-cream-silk',
        className
      )}
    >
      {/* 1. CABECERA: Mes / Año y Navegadores */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-accent-main" />
          <h2 className="text-base sm:text-lg font-bold font-['PosteramaCustom',sans-serif] tracking-tight text-cream-silk">
            {monthNames[month]} <span className="text-tech-periwinkle font-mono">{year}</span>
          </h2>
        </div>

        <div className="flex items-center gap-1.5">
          {showTodayButton && (
            <button
              type="button"
              onClick={handleGoToday}
              title="Ir a hoy"
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg bg-primary-surface text-accent-main border border-accent-main/30 hover:bg-accent-main hover:text-primary-main transition-all cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span className="hidden sm:inline">Hoy</span>
            </button>
          )}

          <button
            type="button"
            onClick={handlePrevMonth}
            aria-label="Mes anterior"
            className="p-1.5 rounded-lg text-tech-periwinkle hover:text-cream-silk hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNextMonth}
            aria-label="Mes siguiente"
            className="p-1.5 rounded-lg text-tech-periwinkle hover:text-cream-silk hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 2. DÍAS DE LA SEMANA */}
      <div className="grid grid-cols-7 mb-2 text-center">
        {weekdays.map((day, idx) => (
          <div
            key={day}
            className={cn(
              'text-[11px] sm:text-xs font-mono font-semibold py-1 uppercase tracking-wider',
              idx >= 5 ? 'text-accent-main/70' : 'text-tech-periwinkle/70'
            )}
          >
            {day}
          </div>
        ))}
      </div>

      {/* 3. GRILLA DE DÍAS ANIMADA */}
      <div className="relative overflow-hidden min-h-[290px] p-1">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={`${year}-${month}`}
            custom={direction}
            initial={{ opacity: 0, x: direction * 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 20 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="grid grid-cols-7 gap-1 sm:gap-1.5 p-0.5"
          >
            {gridDays.map(({ date, isCurrentMonth, dayNumber }) => {
              const disabled = isDateDisabled(date);
              const isTodayDate = isSameDay(date, today);

              // Single mode check
              const isSingleSelected = mode === 'single' && isSameDay(date, selected);

              // Range mode check
              const isRangeStart = mode === 'range' && isSameDay(date, selectedRange?.start);
              const isRangeEnd = mode === 'range' && isSameDay(date, selectedRange?.end);
              const inRange =
                mode === 'range' &&
                isDateInRange(date, selectedRange?.start, selectedRange?.end);

              // Multiple mode check
              const isMultipleSelected =
                mode === 'multiple' && selectedDates.some((d) => isSameDay(d, date));

              const isSelected = isSingleSelected || isRangeStart || isRangeEnd || isMultipleSelected;

              // Eventos del día
              const key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
              const dayEvents = eventMap.get(key) || [];

              return (
                <div key={date.toISOString()} className="relative flex items-center justify-center">
                  {/* Relleno de fondo continuo para rango */}
                  {inRange && !isRangeStart && !isRangeEnd && (
                    <div className="absolute inset-x-0 h-9 sm:h-10 bg-accent-main/15 z-0" />
                  )}
                  {isRangeStart && selectedRange?.end && !isSameDay(selectedRange.start, selectedRange.end) && (
                    <div className="absolute right-0 w-1/2 h-9 sm:h-10 bg-accent-main/15 z-0" />
                  )}
                  {isRangeEnd && selectedRange?.start && !isSameDay(selectedRange.start, selectedRange.end) && (
                    <div className="absolute left-0 w-1/2 h-9 sm:h-10 bg-accent-main/15 z-0" />
                  )}

                  <button
                    type="button"
                    onClick={() => handleDayClick(date)}
                    disabled={disabled}
                    className={cn(
                      'relative z-10 w-9 h-9 sm:w-10 sm:h-10 flex flex-col items-center justify-center rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150',
                      // Ergonomía táctil para mobile
                      'min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px]',
                      // Estados según mes y selección
                      !isCurrentMonth && 'text-tech-periwinkle/30',
                      isCurrentMonth && !isSelected && 'text-cream-silk hover:bg-white/10',
                      disabled && 'opacity-20 cursor-not-allowed line-through hover:bg-transparent',
                      // Selección activa
                      isSelected && [
                        'bg-accent-main text-primary-main font-bold shadow-lg shadow-accent-main/30',
                        'scale-100 active:scale-95'
                      ],
                      // Hoy (borde sutil si no está seleccionado)
                      isTodayDate && !isSelected && 'border border-accent-main/60 font-bold text-accent-main'
                    )}
                  >
                    <span>{dayNumber}</span>

                    {/* Indicadores de Eventos */}
                    {dayEvents.length > 0 && (
                      <div className="absolute bottom-1 flex items-center gap-0.5">
                        {dayEvents.slice(0, 3).map((ev, i) => (
                          <span
                            key={i}
                            className={cn(
                              'w-1 h-1 rounded-full',
                              isSelected ? 'bg-primary-main' : 'bg-accent-main'
                            )}
                            style={{
                              backgroundColor: isSelected ? 'var(--color-primary-main, #120524)' : (ev.color || 'var(--color-accent-main, #FBBF24)')
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
