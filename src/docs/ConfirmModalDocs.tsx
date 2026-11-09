/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { ConfirmModal } from '../components/ConfirmModal';
import { Button } from '../components/Button';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { AlertTriangle } from 'lucide-react';

const codigoConfirm = `import { useState } from 'react';
import { ConfirmModal, Button } from 'fireseed-ui';

export default function ConfirmacionDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEliminar = async () => {
    // Simular operación asíncrona segura
    await new Promise((res) => setTimeout(res, 1200));
  };

  return (
    <>
      <Button variant="destructive" onClick={() => setIsOpen(true)}>
        Dar de Baja Alumno
      </Button>

      <ConfirmModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleEliminar}
        title="¿Dar de baja alumno?"
        message="Esta acción cancelará todos los turnos futuros reservados. Esta operación no se puede deshacer."
        confirmText="Sí, dar de baja"
        cancelText="Volver atrás"
        isDestructive={true}
      />
    </>
  );
}`;

export function ConfirmModalDocs() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDemoConfirm = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          MOLÉCULA • DIÁLOGO DE SEGURIDAD OPERATIVA
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          ConfirmModal
        </h1>

        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Diálogo accesible de confirmación para acciones críticas o irreversibles. Integra de forma nativa FeedbackButton para gestionar estados de carga asíncrona, vibración táctil háptica y disposición en grilla balanceada.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      {/* 2. FILOSOFÍA DE ARQUITECTURA */}
      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-400" /> Seguridad Operativa con Háptica
          </p>
          <p>
            Al abrirse en modo destructivo (<code className="font-mono text-[#FBBF24]">isDestructive=true</code>), el modal dispara automáticamente un patrón háptico de advertencia en teléfonos móviles para que el operador reconozca físicamente el riesgo antes de confirmar.
          </p>
        </div>
      </Callout>

      {/* 3. DEMOSTRACIÓN INTERACTIVA */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <p className="text-xs text-[#9EA2E2]/70">
          Haz clic en el botón para abrir el diálogo y probar la confirmación asíncrona con FeedbackButton:
        </p>

        <ComponentPlayground
          title="Diálogo de Confirmación Destructivo"
          description="Al pulsar confirmar, el botón entra en estado de carga asíncrona y luego cierra el diálogo:"
          code={codigoConfirm}
          filename="ConfirmModalDemo.tsx"
          previewClassName="py-12"
        >
          <Button variant="destructive" onClick={() => setIsOpen(true)}>
            Probar Diálogo de Confirmación
          </Button>

          <ConfirmModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onConfirm={handleDemoConfirm}
            title="¿Confirmar Cancelación?"
            message="¿Estás seguro de que deseas cancelar la clase de Pilates Reformer? Se liberará la camilla inmediatamente."
            confirmText="Confirmar Cancelación"
            isDestructive={true}
          />
        </ComponentPlayground>
      </div>

      {/* 4. TABLA DE API / PROPS */}
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
                <td className="py-3 px-4 font-mono text-[#FBBF24]">isOpen</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">boolean</td>
                <td className="py-3 px-4 font-mono text-white/50">false</td>
                <td className="py-3 px-4 text-white/80">Estado de apertura del diálogo modal.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">onClose</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">() =&gt; void</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Callback al solicitar el cierre (backdrop o cancelar).</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">onConfirm</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">() =&gt; Promise&lt;unknown&gt; | void</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Función ejecutada por FeedbackButton. Puede ser asíncrona.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">isDestructive</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">boolean</td>
                <td className="py-3 px-4 font-mono text-white/50">false</td>
                <td className="py-3 px-4 text-white/80">Aplica estilo carmesí de peligro y háptica de advertencia.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
