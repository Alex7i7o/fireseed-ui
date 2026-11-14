/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { ChatInput } from '../components/ChatInput';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { Smartphone } from 'lucide-react';

const codigoChatInput = `import { useState } from 'react';
import { ChatInput } from 'fireseed-ui';

export function DemoInput() {
  const [mensaje, setMensaje] = useState('');

  const handleSend = () => {
    alert(\`Mensaje enviado: "\${mensaje}"\`);
    setMensaje('');
  };

  return (
    <div className="max-w-lg w-full rounded-2xl overflow-hidden border border-[#9EA2E2]/25">
      <ChatInput
        value={mensaje}
        onChange={setMensaje}
        onSend={handleSend}
        placeholder="Escribí tu consulta..."
        quickPrompts={[
          '¿Cuáles son los horarios?',
          'Precios de las clases',
          'Quiero hablar con la dueña'
        ]}
        onAttach={() => alert('Abrir selector de archivos')}
      />
    </div>
  );
}`;

export function ChatInputDocs() {
  const [mensaje, setMensaje] = useState('');
  const [ultimoEnviado, setUltimoEnviado] = useState<string | null>(null);

  const handleSend = () => {
    setUltimoEnviado(mensaje);
    setMensaje('');
  };

  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          ÁTOMO • BARRA DE ENTRADA MOBILE-NATIVE
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          ChatInput
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Barra inferior de entrada de texto diseñada para celulares y escritorios. Incluye auto-expansión vertical sin romper la vista, envío con tecla <code>Enter</code> (y salto de línea con <code>Shift+Enter</code>), carrusel superior de <strong>Quick Prompts</strong> y botón para adjuntar comprobantes o archivos.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <Smartphone className="w-4 h-4" /> Optimización Native-First para Teclados Móviles
          </p>
          <p>
            Al tocar el campo de texto en iOS o Android, la altura se expande de forma controlada hasta 120px con scroll interno y sin desfasar el teclado virtual. El carrusel de Quick Prompts superior permite que clientes reserven o pregunten con un solo toque sin tener que escribir.
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Barra de Entrada de Mensaje"
          description="Escribí un texto o seleccioná uno de los Quick Prompts para probar el envío:"
          code={codigoChatInput}
          filename="ChatInputDemo.tsx"
          previewClassName="p-4 sm:p-8 flex flex-col items-center justify-center bg-[#0B0217]"
        >
          <div className="max-w-lg w-full space-y-3">
            <div className="rounded-2xl overflow-hidden border border-[#9EA2E2]/25 shadow-xl">
              <ChatInput
                value={mensaje}
                onChange={setMensaje}
                onSend={handleSend}
                placeholder="Escribí tu consulta aquí..."
                quickPrompts={[
                  '¿Cuáles son los horarios?',
                  'Precios de las clases',
                  'Quiero hablar con la dueña'
                ]}
                onSelectPrompt={(p) => setMensaje(p)}
                onAttach={() => alert('Selector de adjuntos clickeado')}
              />
            </div>

            {ultimoEnviado && (
              <p className="text-xs text-emerald-400 font-mono text-center">
                ✓ Último mensaje enviado: "{ultimoEnviado}"
              </p>
            )}
          </div>
        </ComponentPlayground>
      </div>

      {/* Referencia de Props */}
      <div className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Referencia de Propiedades (API)
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[#9EA2E2]/20 bg-[#120524]/60">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#241142] text-[#FBBF24] uppercase tracking-wider font-mono text-[10px]">
              <tr>
                <th className="p-3">Propiedad</th>
                <th className="p-3">Tipo</th>
                <th className="p-3">Por Defecto</th>
                <th className="p-3">Descripción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#9EA2E2]/15 text-[#FFF6DF]/85">
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">value</td>
                <td className="p-3 font-mono text-[#9EA2E2]">string</td>
                <td className="p-3 font-mono">Requerido</td>
                <td className="p-3">Valor de texto controlado.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">onChange</td>
                <td className="p-3 font-mono text-[#9EA2E2]">(val: string) =&gt; void</td>
                <td className="p-3 font-mono">Requerido</td>
                <td className="p-3">Callback disparado en cada pulsación de tecla.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">onSend</td>
                <td className="p-3 font-mono text-[#9EA2E2]">() =&gt; void</td>
                <td className="p-3 font-mono">Requerido</td>
                <td className="p-3">Callback al presionar Enter o el botón de envío.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">quickPrompts</td>
                <td className="p-3 font-mono text-[#9EA2E2]">string[]</td>
                <td className="p-3 font-mono">undefined</td>
                <td className="p-3">Chips horizontales desplazables con preguntas o comandos frecuentes.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">isLoading</td>
                <td className="p-3 font-mono text-[#9EA2E2]">boolean</td>
                <td className="p-3 font-mono">false</td>
                <td className="p-3">Reemplaza el icono de enviar por un spinner de carga y deshabilita la entrada.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">onAttach</td>
                <td className="p-3 font-mono text-[#9EA2E2]">() =&gt; void</td>
                <td className="p-3 font-mono">undefined</td>
                <td className="p-3">Muestra el botón de clip para adjuntar fotos o comprobantes de pago.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
