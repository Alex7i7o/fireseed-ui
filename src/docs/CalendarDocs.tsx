/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Calendar } from '../components/Calendar';
import type { CalendarEvent, DateRange } from '../components/Calendar';
import { Callout } from '../components/Callout';
import { Badge } from '../components/Badge';
import { Inlinecode } from '../components/InlineCode/InlineCode';
import { ComponentPlayground } from './ComponentPlayground';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';
import { Calendar as CalendarIcon, Sparkles, Flame, Layers } from 'lucide-react';

const codigoSingle = `import { useState } from 'react';
import { Calendar } from 'fireseed-ui';

export function DemoFecha() {
  const [fecha, setFecha] = useState<Date | null>(new Date());

  return (
    <div className="flex flex-col items-center gap-4">
      <Calendar
        mode="single"
        selected={fecha}
        onSelect={setFecha}
        locale="es"
      />
      <p className="text-xs text-white/70">
        Fecha elegida: <span className="font-bold text-[#FBBF24]">{fecha?.toLocaleDateString('es-AR')}</span>
      </p>
    </div>
  );
}`;

const codigoRange = `import { useState } from 'react';
import { Calendar, DateRange } from 'fireseed-ui';

export function DemoRango() {
  const [rango, setRango] = useState<DateRange>({
    start: new Date(),
    end: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
  });

  return (
    <Calendar
      mode="range"
      selectedRange={rango}
      onSelectRange={setRango}
      locale="es"
    />
  );
}`;

const codigoEventos = `import { useState } from 'react';
import { Calendar, CalendarEvent } from 'fireseed-ui';

const EVENTOS_AGENDA: CalendarEvent[] = [
  { date: '2026-11-12', title: 'Pilates Reformer Intensivo', color: '#FBBF24' },
  { date: '2026-11-15', title: 'Evaluación Postural Inicial', color: '#10B981' },
  { date: '2026-11-20', title: 'Entrenamiento Funcional Pro', color: '#EC4899' },
  { date: '2026-11-25', title: 'Taller de Biomecánica', color: '#8B5CF6' }
];

export function DemoEventos() {
  const [selected, setSelected] = useState<Date | null>(new Date(2026, 10, 12));

  return (
    <Calendar
      mode="single"
      selected={selected}
      onSelect={setSelected}
      events={EVENTOS_AGENDA}
    />
  );
}`;

export function CalendarDocs() {
  // Demo 1: Single
  const [singleDate, setSingleDate] = useState<Date | null>(new Date());

  // Demo 2: Range
  const today = new Date();
  const [range, setRange] = useState<DateRange>({
    start: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)
  });

  // Demo 3: Events
  const [eventDate, setEventDate] = useState<Date | null>(new Date(today.getFullYear(), today.getMonth(), 15));
  const sampleEvents: CalendarEvent[] = [
    {
      date: new Date(today.getFullYear(), today.getMonth(), 10),
      title: 'Pilates Reformer — 18:00hs',
      color: '#FBBF24'
    },
    {
      date: new Date(today.getFullYear(), today.getMonth(), 15),
      title: 'Reeducación Postural (RPG) — 10:00hs',
      color: '#10B981'
    },
    {
      date: new Date(today.getFullYear(), today.getMonth(), 15),
      title: 'Entrenamiento Funcional — 19:30hs',
      color: '#EC4899'
    },
    {
      date: new Date(today.getFullYear(), today.getMonth(), 22),
      title: 'Sesión Privada de Instructor — 16:00hs',
      color: '#8B5CF6'
    }
  ];

  // Eventos activos del día seleccionado
  const activeDayEvents = sampleEvents.filter(
    (ev) => {
      const d = ev.date instanceof Date ? ev.date : new Date(ev.date);
      return (
        eventDate &&
        d.getFullYear() === eventDate.getFullYear() &&
        d.getMonth() === eventDate.getMonth() &&
        d.getDate() === eventDate.getDate()
      );
    }
  );

  return (
    <div className="max-w-4xl space-y-12 pb-24 text-[#FFF6DF]">
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          MOLÉCULA • SELECTOR DE FECHAS & AGENDA
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Calendar
        </h1>

        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Cuadrícula mensual interactiva de alto rendimiento con selección de fecha individual, intervalos de rango, indicadores de eventos por puntos de color, transiciones de resorte elástico y respuesta háptica táctil en pantallas móviles.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      {/* 2. FILOSOFÍA DE ARQUITECTURA */}
      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <Layers className="w-4 h-4" /> 0% Dependencias Pesadas • Ergonomía Touch-First
          </p>
          <p>
            A diferencia de otras librerías que arrastran paquetes gigantescos como <Inlinecode>moment</Inlinecode> o componentes web rígidos, el <Inlinecode variant="solid">Calendar</Inlinecode> de FireSeed está construido 100% sobre las API nativas de fecha de JavaScript y animaciones aceleradas por GPU.
          </p>
          <p className="text-[#9EA2E2]">
            Todas las celdas de días garantizan un área táctil ergonómica superior a 40px para pulsación cómoda con el pulgar en celulares, sin saltos de layout ni bloqueos en el hilo principal.
          </p>
        </div>
      </Callout>

      {/* 3. DEMOSTRACIÓN INTERACTIVA 1: SELECCIÓN INDIVIDUAL */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif] flex items-center gap-2">
          <CalendarIcon className="w-6 h-6 text-[#FBBF24]" /> 01. Modo Individual (Single Date)
        </h2>
        <p className="text-xs text-[#9EA2E2]/70">
          Ideal para formularios de reservas, turnos individuales, selección de cumpleaños o fecha de inicio.
        </p>

        <ComponentPlayground
          title="Selector de Fecha Única"
          description="Seleccioná cualquier día o navegá entre meses con micro-transición animada:"
          code={codigoSingle}
          filename="SingleDateDemo.tsx"
          previewClassName="flex-col gap-4 py-8"
        >
          <Calendar
            mode="single"
            selected={singleDate}
            onSelect={setSingleDate}
            locale="es"
          />
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#241142]/80 border border-[#9EA2E2]/20 text-xs">
            <span className="text-[#9EA2E2]">Fecha seleccionada:</span>
            <span className="font-mono font-bold text-[#FBBF24]">
              {singleDate ? singleDate.toLocaleDateString('es-AR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Ninguna'}
            </span>
          </div>
        </ComponentPlayground>
      </div>

      {/* 4. DEMOSTRACIÓN INTERACTIVA 2: RANGO DE FECHAS */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif] flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-[#FBBF24]" /> 02. Modo Rango (Intervalo de Fechas)
        </h2>
        <p className="text-xs text-[#9EA2E2]/70">
          Ideal para períodos de facturación, rangos de estadísticas, filtros de reportes y paquetes de clases.
        </p>

        <ComponentPlayground
          title="Selector de Rango Continuo"
          description="Hacé clic en el primer día para definir el inicio y en el segundo para cerrar el intervalo:"
          code={codigoRange}
          filename="DateRangeDemo.tsx"
          previewClassName="flex-col gap-4 py-8"
        >
          <Calendar
            mode="range"
            selectedRange={range}
            onSelectRange={setRange}
            locale="es"
          />
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs bg-[#241142]/80 px-4 py-2 rounded-xl border border-[#9EA2E2]/20">
            <div>
              <span className="text-[#9EA2E2]">Desde: </span>
              <span className="font-mono font-bold text-[#FBBF24]">
                {range.start ? range.start.toLocaleDateString('es-AR') : '—'}
              </span>
            </div>
            <div className="text-[#9EA2E2] font-mono">→</div>
            <div>
              <span className="text-[#9EA2E2]">Hasta: </span>
              <span className="font-mono font-bold text-[#FBBF24]">
                {range.end ? range.end.toLocaleDateString('es-AR') : '—'}
              </span>
            </div>
          </div>
        </ComponentPlayground>
      </div>

      {/* 5. DEMOSTRACIÓN INTERACTIVA 3: EVENTOS Y TURNOS EN AGENDA */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif] flex items-center gap-2">
          <Flame className="w-6 h-6 text-[#FBBF24]" /> 03. Indicadores de Eventos y Clases
        </h2>
        <p className="text-xs text-[#9EA2E2]/70">
          Soporte nativo para marcar fechas con puntos luminosos de colores (`events`), perfecto para agendas de clases y reservas.
        </p>

        <ComponentPlayground
          title="Calendario con Indicadores de Actividad"
          description="Los días con eventos presentan puntos de colores. Hacé clic en el día 10 o 15 para inspeccionar las citas agendadas:"
          code={codigoEventos}
          filename="EventsCalendarDemo.tsx"
          previewClassName="flex-col gap-5 py-8"
        >
          <Calendar
            mode="single"
            selected={eventDate}
            onSelect={setEventDate}
            events={sampleEvents}
            locale="es"
          />

          <div className="w-full max-w-sm rounded-xl p-4 bg-[#140628] border border-[#9EA2E2]/20 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#FFF6DF] flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-[#FBBF24]" />
                Citas para el {eventDate?.toLocaleDateString('es-AR')}:
              </span>
              <Badge variant="solid">{activeDayEvents.length} eventos</Badge>
            </div>

            {activeDayEvents.length === 0 ? (
              <p className="text-xs text-[#9EA2E2]/50 italic">
                No hay clases ni sesiones programadas para esta fecha.
              </p>
            ) : (
              <div className="space-y-2">
                {activeDayEvents.map((ev, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-lg bg-black/40 border border-white/5 text-xs"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: ev.color || '#FBBF24' }}
                    />
                    <span className="text-[#FFF6DF] font-medium">{ev.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ComponentPlayground>
      </div>

      {/* 6. TABLA DE PROPS (API REFERENCE) */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Referencia de Propiedades (API)
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-[#9EA2E2]/20 bg-[#0d041a]/95">
          <table className="w-full text-left text-xs text-[#FFF6DF]">
            <thead className="border-b border-[#9EA2E2]/20 bg-[#120524] text-[#FBBF24] font-mono uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Prop</th>
                <th className="py-3 px-4">Tipo</th>
                <th className="py-3 px-4">Por Defecto</th>
                <th className="py-3 px-4">Descripción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#9EA2E2]/10 font-sans">
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">mode</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">'single' | 'range' | 'multiple'</td>
                <td className="py-3 px-4 font-mono text-white/50">'single'</td>
                <td className="py-3 px-4 text-white/80">Modo de interacción del calendario.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">selected</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">Date | null</td>
                <td className="py-3 px-4 font-mono text-white/50">undefined</td>
                <td className="py-3 px-4 text-white/80">Fecha activa en modo individual (<Inlinecode>mode="single"</Inlinecode>).</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">onSelect</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">(date: Date) =&gt; void</td>
                <td className="py-3 px-4 font-mono text-white/50">undefined</td>
                <td className="py-3 px-4 text-white/80">Callback emitido al pulsar sobre un día habilitado.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">selectedRange</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">DateRange ({`{ start, end }`})</td>
                <td className="py-3 px-4 font-mono text-white/50">undefined</td>
                <td className="py-3 px-4 text-white/80">Objeto con fechas de inicio y fin para el modo rango.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">events</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">CalendarEvent[]</td>
                <td className="py-3 px-4 font-mono text-white/50">[]</td>
                <td className="py-3 px-4 text-white/80">Array de fechas con eventos para renderizar puntos de colores indicadores.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">minDate / maxDate</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">Date</td>
                <td className="py-3 px-4 font-mono text-white/50">undefined</td>
                <td className="py-3 px-4 text-white/80">Límites temporales mínimo y máximo permitidos para interactuar.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">disabledDates</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">((d: Date) =&gt; boolean) | Date[]</td>
                <td className="py-3 px-4 font-mono text-white/50">undefined</td>
                <td className="py-3 px-4 text-white/80">Función predicado o lista de días específicos deshabilitados.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">locale</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">'es' | 'en'</td>
                <td className="py-3 px-4 font-mono text-white/50">'es'</td>
                <td className="py-3 px-4 text-white/80">Idioma de los meses y cabeceras de días semanales.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">enableHaptics</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">boolean</td>
                <td className="py-3 px-4 font-mono text-white/50">true</td>
                <td className="py-3 px-4 text-white/80">Activa micro-vibración táctil segura para dispositivos móviles.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 7. INSTALACIÓN Y EJEMPLO RÁPIDO */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Integración en tu Proyecto
        </h2>
        <CodeBlock
          code={`import { Calendar } from 'fireseed-ui';\n\n<Calendar\n  mode="single"\n  selected={miFecha}\n  onSelect={setMiFecha}\n  events={[\n    { date: '2026-11-15', title: 'Clase Pilates', color: '#FBBF24' }\n  ]}\n/>`}
          language="tsx"
          filename="App.tsx"
        />
      </div>
    </div>
  );
}
