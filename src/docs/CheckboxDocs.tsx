/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Checkbox } from '../components/Checkbox';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { CheckSquare } from 'lucide-react';

const codigoCheckbox = `import { useState } from 'react';
import { Checkbox } from 'fireseed-ui';

export function DemoCheckbox() {
  const [checked, setChecked] = useState(true);
  const [indet, setIndet] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Checkbox
        checked={checked}
        onChange={setChecked}
        label="Acepto los términos de servicio"
        description="Recibirás notificaciones de tus clases agendadas."
      />
      <Checkbox
        indeterminate={indet}
        onChange={() => setIndet(!indet)}
        label="Seleccionar todos los alumnos"
      />
    </div>
  );
}`;

export function CheckboxDocs() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);

  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          ÁTOMO • SELECCIÓN BOOLEANA
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Checkbox
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Casilla de verificación interactiva y accesible con tilde animada mediante resortes de Framer Motion, soporte para estado indeterminado, etiquetas descriptivas y respuesta háptica táctil en dispositivos móviles.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <CheckSquare className="w-4 h-4" /> Accesibilidad WAI-ARIA y Estados Mixtos
          </p>
          <p>
            Cumple con el estándar WAI-ARIA para casillas con <code className="font-mono text-[#FBBF24]">role="checkbox"</code> y soporte para <code className="font-mono text-[#FBBF24]">aria-checked="mixed"</code> ideal para tablas con selección masiva de elementos.
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Casillas con Estados"
          description="Pulsá sobre cualquiera de las opciones para alternar el estado:"
          code={codigoCheckbox}
          filename="CheckboxDemo.tsx"
          previewClassName="flex-col items-start gap-4 p-8 max-w-md mx-auto"
        >
          <Checkbox
            checked={checked1}
            onChange={setChecked1}
            label="Recordatorio de Clases por WhatsApp"
            description="Te enviaremos un aviso 2 horas antes de cada sesión de Pilates."
          />
          <Checkbox
            checked={checked2}
            onChange={setChecked2}
            label="Abono de Cuota Mensual Automática"
            description="Débito automático al primer día hábil del mes."
          />
          <Checkbox
            indeterminate={indeterminate}
            onChange={() => setIndeterminate(!indeterminate)}
            label="Selección Parcial de Lista (Indeterminado)"
            description="Representa selección mixta en tablas o filtros complejos."
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
                <td className="py-3 px-4 font-mono text-[#FBBF24]">checked</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">boolean</td>
                <td className="py-3 px-4 font-mono text-white/50">false</td>
                <td className="py-3 px-4 text-white/80">Estado marcado o desmarcado.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">indeterminate</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">boolean</td>
                <td className="py-3 px-4 font-mono text-white/50">false</td>
                <td className="py-3 px-4 text-white/80">Muestra el icono de guion para selecciones mixtas.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">onChange</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">(checked: boolean) =&gt; void</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Callback al hacer click o pulsar la barra espaciadora.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">label / description</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">React.ReactNode</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Texto principal y subtítulo explicativo accesible.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
