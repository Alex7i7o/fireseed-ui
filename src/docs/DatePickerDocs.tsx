/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { DatePicker } from '../components/DatePicker';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { CalendarRange } from 'lucide-react';

const codigoDatePicker = `import { useState } from 'react';
import { DatePicker } from 'fireseed-ui';

export function DemoDatePicker() {
  const [fechaTurno, setFechaTurno] = useState<Date | null>(new Date());

  return (
    <DatePicker
      label="Fecha del Turno de Pilates"
      value={fechaTurno}
      onChange={setFechaTurno}
      placeholder="Elegir día de la sesión..."
      minDate={new Date()}
    />
  );
}`;

export function DatePickerDocs() {
  const [fecha, setFecha] = useState<Date | null>(new Date());

  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          MOLÉCULA • SELECTOR DESPLEGABLE DE FECHAS
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          DatePicker
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Campo de formulario desacoplado que despliega un popover flotante con la cuadrícula de Calendar, formateo localizado de fecha, botón para limpiar selección y detección de clic exterior.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <CalendarRange className="w-4 h-4" /> Composición Atómica Limpia
          </p>
          <p>
            <code className="font-mono text-[#FBBF24]">DatePicker</code> reutiliza internamente el átomo <code className="font-mono text-[#FBBF24]">Calendar</code>, heredando su navegación por meses, físicas elásticas y respuesta háptica sin duplicar lógica de fechas.
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Selector de Fecha con Popover"
          description="Hacé clic en el input para desplegar el calendario interactivo:"
          code={codigoDatePicker}
          filename="DatePickerDemo.tsx"
          previewClassName="p-8 min-h-[580px] items-start justify-center pb-20"
        >
          <div className="w-full max-w-xs">
            <DatePicker
              label="Fecha de Reserva"
              value={fecha}
              onChange={setFecha}
              placeholder="Selecciona una fecha..."
            />
          </div>
        </ComponentPlayground>
      </div>

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
                <td className="py-3 px-4 font-mono text-[#FBBF24]">value</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">Date | null</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Fecha seleccionada activa.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">onChange</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">(date: Date) =&gt; void</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Función ejecutada al confirmar una fecha en el calendario.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">minDate / maxDate</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">Date</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Restricciones de rango de días seleccionables.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
