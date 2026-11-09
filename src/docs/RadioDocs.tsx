/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Radio, RadioGroup } from '../components/Radio';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { CircleDot } from 'lucide-react';

const codigoRadio = `import { useState } from 'react';
import { RadioGroup, Radio } from 'fireseed-ui';

export function DemoRadio() {
  const [plan, setPlan] = useState('pro');

  return (
    <RadioGroup
      value={plan}
      onChange={setPlan}
      label="Seleccionar Plan de Membresía"
    >
      <Radio
        value="basic"
        label="Plan Básico"
        description="2 clases semanales de Pilates Reformer."
      />
      <Radio
        value="pro"
        label="Plan Ilimitado Pro"
        description="Acceso libre a camillas, yoga y funcional."
      />
      <Radio
        value="custom"
        label="Pase Personalizado"
        description="Clases privadas individuales con instructor."
      />
    </RadioGroup>
  );
}`;

export function RadioDocs() {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [billing, setBilling] = useState('monthly');

  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          ÁTOMO • OPCIONES EXCLUYENTES
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Radio & RadioGroup
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Conjunto de botones de opción circular mutuamente excluyentes con pastilla interna elástica de resorte, soporte para orientación horizontal/vertical y sincronización reactiva por Context.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <CircleDot className="w-4 h-4" /> Context-Driven Architecture
          </p>
          <p>
            <code className="font-mono text-[#FBBF24]">RadioGroup</code> comparte el valor activo, el nombre del grupo y los disparadores hápticos hacia los componentes hijos <code className="font-mono text-[#FBBF24]">Radio</code> automáticamente sin tener que pasar props individuales repetitivas.
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Grupo de Opciones"
          description="Seleccioná un plan para observar la micro-animación del punto dorado:"
          code={codigoRadio}
          filename="RadioDemo.tsx"
          previewClassName="flex-col items-start gap-6 p-8 max-w-md mx-auto"
        >
          <RadioGroup
            value={selectedPlan}
            onChange={setSelectedPlan}
            label="Plan de Membresía"
          >
            <Radio
              value="basic"
              label="Pase Básico (8 Clases/mes)"
              description="Ideal para 2 estímulos semanales."
            />
            <Radio
              value="pro"
              label="Pase Ilimitado Gold"
              description="Acceso completo a camillas Reformer y Clases Funcionales."
            />
            <Radio
              value="vip"
              label="Sesiones One-on-One VIP"
              description="Profesor exclusivo para rehabilitación postural."
            />
          </RadioGroup>

          <RadioGroup
            value={billing}
            onChange={setBilling}
            orientation="horizontal"
            label="Frecuencia de Facturación"
          >
            <Radio value="monthly" label="Mensual" />
            <Radio value="annual" label="Anual (-20% OFF)" />
          </RadioGroup>
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
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">string</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Valor seleccionado en el RadioGroup.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">orientation</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">'vertical' | 'horizontal'</td>
                <td className="py-3 px-4 font-mono text-white/50">'vertical'</td>
                <td className="py-3 px-4 text-white/80">Disposición de las opciones en columna o en fila.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">onChange</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">(val: string) =&gt; void</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Callback emitido al seleccionar una nueva opción.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
