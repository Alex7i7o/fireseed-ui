/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Textarea } from '../components/Textarea';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { AlignLeft } from 'lucide-react';

const codigoTextarea = `import { useState } from 'react';
import { Textarea } from 'fireseed-ui';

export function DemoNotas() {
  const [nota, setNota] = useState('');

  return (
    <Textarea
      label="Observaciones Médicas o de Lesiones"
      placeholder="Ej: Dolor lumbar crónico en lumbares L4-L5, evitar hiperextensión..."
      value={nota}
      onChange={(e) => setNota(e.target.value)}
      autoResize={true}
      showCount={true}
      maxLength={250}
    />
  );
}`;

export function TextareaDocs() {
  const [texto, setTexto] = useState('Alumna presenta molestia en manguito rotador derecho al realizar tracción de brazos en reformer.');

  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          ÁTOMO • ENTRADA MULTILÍNEA
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Textarea
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Campo de entrada de texto multilínea autoajustable a la altura del contenido, con soporte para contador de caracteres máximos, etiquetas accesibles, estados de validación y anillo de foco en oro solar.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <AlignLeft className="w-4 h-4" /> Auto-Resize Fluido sin Saltos
          </p>
          <p>
            Al activar <code className="font-mono text-[#FBBF24]">autoResize={'{true}'}</code>, la caja se expande o contrae en tiempo real de acuerdo a la cantidad de renglones escritos por el usuario, eliminando molestas barras de scroll verticales innecesarias.
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Entrada Multilínea Dinámica"
          description="Escribe varias líneas para observar la expansión automática y el conteo de caracteres:"
          code={codigoTextarea}
          filename="TextareaDemo.tsx"
          previewClassName="p-8 max-w-lg mx-auto"
        >
          <Textarea
            label="Ficha de Evolución de Alumno"
            placeholder="Escribe comentarios de la clase..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            autoResize={true}
            showCount={true}
            maxLength={200}
            hint="Máximo 200 caracteres permitidos."
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
                <td className="py-3 px-4 font-mono text-[#FBBF24]">autoResize</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">boolean</td>
                <td className="py-3 px-4 font-mono text-white/50">false</td>
                <td className="py-3 px-4 text-white/80">Ajusta dinámicamente la altura según el texto escrito.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">showCount</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">boolean</td>
                <td className="py-3 px-4 font-mono text-white/50">false</td>
                <td className="py-3 px-4 text-white/80">Muestra el indicador de caracteres actuales / máximos.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">error</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">string</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Mensaje de error y borde perimetral carmesí.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
