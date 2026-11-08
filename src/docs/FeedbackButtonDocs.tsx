/* Developed by FireSeed - Fueling Innovation */
import { FeedbackButton } from '../components/FeedbackButton';
import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';

const codigoFeedback = `import { FeedbackButton } from 'fireseed-ui';

export default function GuardarDatos() {
  const handleSave = async () => {
    // Simulación de petición de red
    await new Promise((res) => setTimeout(res, 1500));
  };

  return (
    <FeedbackButton
      initialText="Guardar Cambios"
      successText="¡Guardado con Éxito!"
      variant="solid"
      onClick={handleSave}
    />
  );
}`;

export function FeedbackButtonDocs() {
  const handleDemoAction = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          FeedbackButton{' '}
          <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Botón interactivo con máquina de estados asíncrona (Idle → Loading → Success). Incluye animación de
          resorte y confirmación con vibración háptica al finalizar.
        </p>
      </div>

      <hr className="border-white/5" />

      <Callout variant="glow" title="Microinteracción de Clase Mundial">
        Elimina la necesidad de mostrar spinners externos o estados de guardado desordenados. Al hacer clic, el botón
        bloquea pulsaciones dobles, muestra un spinner centrado y transiciona fluidamente a una tilde de confirmación
        verde antes de regresar a su estado original.
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <CodeBlock code={codigoFeedback} language="tsx" filename="FeedbackButtonDemo.tsx" />

        {/* SHOWCASE INTERACTIVO */}
        <div className="mt-6 space-y-4 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Pruébalo en Vivo (Hacé click para ver la transición)
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <FeedbackButton
              initialText="Guardar Registro"
              successText="¡Listo!"
              variant="solid"
              onClick={handleDemoAction}
            />
            <FeedbackButton
              initialText="Eliminar Cuenta"
              successText="Eliminado"
              variant="destructive"
              onClick={handleDemoAction}
            />
            <FeedbackButton
              initialText="Procesar Pago"
              successText="Aprobado"
              variant="glow"
              onClick={handleDemoAction}
            />
          </div>
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
                <td className="p-4 text-accent-main font-semibold">initialText</td>
                <td className="p-4 text-purple-400">React.ReactNode</td>
                <td className="p-4 text-white/40">Requerido</td>
                <td className="p-4 text-white/60 font-sans">Texto o contenido visible en estado idle.</td>
              </tr>
              <tr>
                <td className="p-4 text-accent-main font-semibold">successText</td>
                <td className="p-4 text-purple-400">string</td>
                <td className="p-4 text-white/40">'Completado'</td>
                <td className="p-4 text-white/60 font-sans">Texto que se muestra tras resolver la acción.</td>
              </tr>
              <tr>
                <td className="p-4 text-accent-main font-semibold">onClick</td>
                <td className="p-4 text-purple-400">() =&gt; Promise&lt;unknown&gt;</td>
                <td className="p-4 text-white/40">-</td>
                <td className="p-4 text-white/60 font-sans">Función asíncrona que desencadena los estados.</td>
              </tr>
              <tr>
                <td className="p-4 text-accent-main font-semibold">status</td>
                <td className="p-4 text-purple-400">'idle' | 'loading' | 'success'</td>
                <td className="p-4 text-white/40">undefined</td>
                <td className="p-4 text-white/60 font-sans">Modo controlado para controlar el estado externamente.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
