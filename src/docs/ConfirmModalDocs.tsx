/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { ConfirmModal } from '../components/ConfirmModal';
import { Button } from '../components/Button';
import { Callout } from '../components/Callout';

const codigoConfirm = `import { useState } from 'react';
import { ConfirmModal, Button } from 'fireseed-ui';

export default function ConfirmacionDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEliminar = async () => {
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
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          ConfirmModal{' '}
          <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Diálogo preconfigurado de confirmación con patrón de cancelación y acción asíncrona segura con
          FeedbackButton integrado.
        </p>
      </div>

      <hr className="border-white/5" />

      <Callout variant="glow" title="Seguridad Operativa con Háptica">
        Al abrirse en modo destructivo (<code>isDestructive=true</code>), el modal dispara un patrón háptico
        de advertencia en dispositivos móviles para alertar al operador antes de ejecutar una eliminación irreversible.
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>ConfirmModalDemo.tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">{codigoConfirm}</pre>
        </div>

        <div className="mt-6 space-y-4 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Demostración en Vivo</h3>
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
        </div>
      </div>
    </div>
  );
}
