/* Developed by FireSeed - Fueling Innovation */
import { FeedbackButton } from '../components/FeedbackButton';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { Sparkles } from 'lucide-react';

const codigoFeedback = `import { FeedbackButton } from 'fireseed-ui';

export default function GuardarDatos() {
  const handleSave = async () => {
    // Simular llamada a API o base de datos
    await new Promise((res) => setTimeout(res, 1500));
  };

  return (
    <FeedbackButton
      initialText="Guardar Cambios"
      loadingText="Guardando..."
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
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          MOLÉCULA • ACCIÓN CON ESTADO ASÍNCRONO
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          FeedbackButton
        </h1>

        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Botón interactivo con máquina de estados asíncrona (Idle → Loading → Success). Preserva automáticamente su ancho durante la carga para evitar compresiones en botones contiguos y efectúa transiciones suaves sin saltos bruscos.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      {/* 2. FILOSOFÍA DE ARQUITECTURA */}
      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Ancho Bloqueado & Transición Elástica
          </p>
          <p>
            Al pulsar el botón, <code className="font-mono text-[#FBBF24]">preserveWidth</code> bloquea reactivamente las dimensiones calculadas para que el spinner o el texto de carga no encojan el botón ni desplacen los elementos vecinos.
          </p>
        </div>
      </Callout>

      {/* 3. PLAYGROUND INTERACTIVO */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <p className="text-xs text-[#9EA2E2]/70">
          Haz clic en cualquiera de los botones para ver la transición fluida de guardado sin desfasajes de layout:
        </p>

        <ComponentPlayground
          title="Botones con Feedback Asíncrono"
          description="Observá cómo cada botón mantiene su estabilidad geométrica durante la carga:"
          code={codigoFeedback}
          filename="FeedbackButtonDemo.tsx"
          previewClassName="py-12 px-6 flex flex-wrap items-center justify-center gap-4"
        >
          <FeedbackButton
            initialText="Guardar Registro"
            loadingText="Guardando..."
            successText="¡Registro Guardado!"
            variant="solid"
            onClick={handleDemoAction}
          />
          <FeedbackButton
            initialText="Eliminar Cuenta"
            loadingText="Eliminando..."
            successText="Eliminado"
            variant="destructive"
            onClick={handleDemoAction}
          />
          <FeedbackButton
            initialText="Procesar Pago"
            loadingText="Procesando..."
            successText="¡Pago Aprobado!"
            variant="glow"
            onClick={handleDemoAction}
          />
        </ComponentPlayground>
      </div>

      {/* 4. TABLA DE PROPS */}
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
                <td className="py-3 px-4 font-mono text-[#FBBF24]">initialText</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">React.ReactNode</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Texto o contenido visible en estado Idle (inactivo).</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">loadingText</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">string</td>
                <td className="py-3 px-4 font-mono text-white/50">initialText</td>
                <td className="py-3 px-4 text-white/80">Texto que acompaña al spinner durante la ejecución asíncrona.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">successText</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">string</td>
                <td className="py-3 px-4 font-mono text-white/50">'Completado'</td>
                <td className="py-3 px-4 text-white/80">Texto mostrado con la tilde de éxito.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">preserveWidth</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">boolean</td>
                <td className="py-3 px-4 font-mono text-white/50">true</td>
                <td className="py-3 px-4 text-white/80">Bloquea el ancho para evitar achicamientos bruscos.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">onClick</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">() =&gt; Promise&lt;unknown&gt; | void</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Función ejecutada al pulsar el botón.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
