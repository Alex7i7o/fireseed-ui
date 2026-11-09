/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Slider } from '../components/Slider';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { Sliders } from 'lucide-react';

const codigoSlider = `import { useState } from 'react';
import { Slider } from 'fireseed-ui';

export function DemoSlider() {
  const [intensidad, setIntensidad] = useState(70);

  return (
    <Slider
      label="Intensidad de Resorte Reformer"
      min={10}
      max={100}
      step={5}
      value={intensidad}
      onChange={setIntensidad}
      formatValue={(v) => \`\${v}%\`}
    />
  );
}`;

export function SliderDocs() {
  const [val1, setVal1] = useState(65);
  const [val2, setVal2] = useState(4);

  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          ÁTOMO • CONTROL DE RANGO NUMÉRICO
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Slider
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Barra deslizante de selección de valores continuos o discretos con track iluminado en degradado púrpura/oro, thumb con escala interactiva, formateo dinámico de valor y vibración háptica al deslizar.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <Sliders className="w-4 h-4" /> Tactilidad Digital & Aceleración GPU
          </p>
          <p>
            Al arrastrar la barra en un dispositivo móvil con pantalla táctil, el Slider produce pulsos hápticos ligeros en cada escalón para que el usuario sienta físicamente el ajuste de parámetros.
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Controles de Rango"
          description="Arrastra la barra para cambiar los valores en vivo:"
          code={codigoSlider}
          filename="SliderDemo.tsx"
          previewClassName="flex-col gap-8 p-8 max-w-md mx-auto"
        >
          <Slider
            label="Nivel de Resistencia (Muelles)"
            min={0}
            max={100}
            step={5}
            value={val1}
            onChange={setVal1}
            formatValue={(v) => `${v}% Potencia`}
          />

          <Slider
            label="Capacidad Máxima de Alumnos por Turno"
            min={1}
            max={12}
            step={1}
            value={val2}
            onChange={setVal2}
            formatValue={(v) => `${v} Alumnos`}
          />
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
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">number</td>
                <td className="py-3 px-4 font-mono text-white/50">0</td>
                <td className="py-3 px-4 text-white/80">Valor numérico actual.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">min / max</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">number</td>
                <td className="py-3 px-4 font-mono text-white/50">0 / 100</td>
                <td className="py-3 px-4 text-white/80">Límites inferior y superior del rango.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">formatValue</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">(v: number) =&gt; string</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Función para formatear la etiqueta del valor (ej: "15%", "$100").</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
