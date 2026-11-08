/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Modal } from '../components/Modal';
import { Button } from '../components/Button';
import { Callout } from '../components/Callout';

const codigoModal = `import { useState } from 'react';
import { Modal, Button } from 'fireseed-ui';

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Detalles de la Reserva"
        description="Información sincronizada en tiempo real"
      >
        <p className="text-sm text-white/80">
          En escritorio se muestra como un diálogo flotante centrado. En celular (&lt; 640px)
          se transforma automáticamente en un Bottom Sheet nativo deslizable desde abajo.
        </p>
        <div className="mt-6 flex justify-end">
          <Button variant="solid" onClick={() => setIsOpen(false)}>
            Entendido
          </Button>
        </div>
      </Modal>
    </>
  );
}`;

export function ModalDocs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          Modal / Dialog{' '}
          <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Diálogo accesible híbrido: modal centrado en PC y <em>Bottom Sheet</em> en teléfonos móviles con
          tirador táctil, scroll-locking en el body y renderizado vía Portal.
        </p>
      </div>

      <hr className="border-white/5" />

      <Callout variant="glow" title="Diseño Mobile-First Verdadero">
        Bajo los principios modernos de ergonomía táctil, en pantallas móviles abrir un modal rígido centrado
        resulta incómodo para el alcance natural del pulgar. FireSeed UI detecta dinámicamente el viewport y lo renderiza anclado
        a la base de la pantalla con soporte para zona segura (<code>env(safe-area-inset-bottom)</code>).
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>ModalDemo.tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">{codigoModal}</pre>
        </div>

        {/* DEMO INTERACTIVA */}
        <div className="mt-6 space-y-4 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Demostración en Vivo</h3>
          <div>
            <Button variant="glow" onClick={() => setIsOpen(true)}>
              Abrir Modal Responsivo
            </Button>
          </div>

          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="Ventana Modal FireSeed"
            description="Componente desacoplado de alta fidelidad"
          >
            <div className="space-y-4 text-sm text-white/80">
              <p>
                Este modal está montado en un Portal directamente en el <code>document.body</code> para evitar
                problemas de superposición (z-index) y tiene compensación de ancho de scrollbar para evitar saltos.
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-accent-main">
                Prueba redimensionar la ventana o inspeccionar en vista de dispositivo móvil para ver cómo se transforma en Bottom Sheet.
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Cancelar
                </Button>
                <Button variant="solid" onClick={() => setIsOpen(false)}>
                  Aceptar
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      </div>

      {/* PROPS */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">API Reference</h2>
        <div className="overflow-x-auto rounded-xl border border-white/5 bg-black/20">
          <table className="w-full text-left border-collapse text-sm text-white/70">
            <thead className="bg-white/5 font-semibold text-white border-b border-white/5">
              <tr>
                <th className="p-4">Propiedad</th>
                <th className="p-4">Tipo</th>
                <th className="p-4">Por Defecto</th>
                <th className="p-4">Descripción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono text-xs">
              <tr>
                <td className="p-4 text-accent-main font-semibold">isOpen</td>
                <td className="p-4 text-purple-400">boolean</td>
                <td className="p-4 text-white/40">Requerido</td>
                <td className="p-4 text-white/60 font-sans">Controla la visibilidad del modal.</td>
              </tr>
              <tr>
                <td className="p-4 text-accent-main font-semibold">onClose</td>
                <td className="p-4 text-purple-400">() =&gt; void</td>
                <td className="p-4 text-white/40">Requerido</td>
                <td className="p-4 text-white/60 font-sans">Callback al presionar el backdrop, botón cerrar o tirador.</td>
              </tr>
              <tr>
                <td className="p-4 text-accent-main font-semibold">title</td>
                <td className="p-4 text-purple-400">string</td>
                <td className="p-4 text-white/40">-</td>
                <td className="p-4 text-white/60 font-sans">Título en la cabecera.</td>
              </tr>
              <tr>
                <td className="p-4 text-accent-main font-semibold">showCloseButton</td>
                <td className="p-4 text-purple-400">boolean</td>
                <td className="p-4 text-white/40">true</td>
                <td className="p-4 text-white/60 font-sans">Muestra u oculta la cruz de cerrar.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
