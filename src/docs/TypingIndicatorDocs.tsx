/* Developed by FireSeed - Fueling Innovation */
import { TypingIndicator } from '../components/TypingIndicator';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { Sparkles } from 'lucide-react';

const codigoTyping = `import { TypingIndicator } from 'fireseed-ui';

export function DemoTyping() {
  return (
    <div className="space-y-4">
      {/* Variante Oro Solar (Oficial FireSeed) */}
      <TypingIndicator label="Asistente de IA pensando..." variant="primary" />

      {/* Variante Periwinkle Técnico */}
      <TypingIndicator label="Escribiendo respuesta..." variant="periwinkle" />

      {/* Variante Esmeralda (WhatsApp en vivo) */}
      <TypingIndicator label="WhatsApp en línea..." variant="emerald" />

      {/* Solo los puntos sin texto */}
      <TypingIndicator label="" variant="primary" />
    </div>
  );
}`;

export function TypingIndicatorDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          ÁTOMO • INDICADOR DE ACTIVIDAD FLUIDO
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          TypingIndicator
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Átomo de feedback visual que comunica que el agente de inteligencia artificial o la contraparte humana está redactando una respuesta. Cuenta con 3 puntos con animación de rebote sinusoidal interpolada vía Framer Motion y soporte de etiquetas personalizables.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Reducción de la Latencia Percibida
          </p>
          <p>
            Al conectar modelos de lenguaje grandes (LLMs) o agentes con LangGraph que ejecutan herramientas previas (como verificar disponibilidad o consultar la base de datos), el indicador mantiene la atención del usuario activa y evita que abandone la sesión.
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Variantes Cromáticas del Indicador"
          description="Observá la animación suave de onda en cada una de las variantes semánticas:"
          code={codigoTyping}
          filename="TypingIndicatorDemo.tsx"
          previewClassName="p-6 sm:p-10 flex flex-col items-center justify-center gap-4 bg-[#0B0217]"
        >
          <div className="flex flex-col gap-3.5">
            <TypingIndicator label="Asistente de IA pensando..." variant="primary" />
            <TypingIndicator label="Escribiendo respuesta..." variant="periwinkle" />
            <TypingIndicator label="WhatsApp en vivo..." variant="emerald" />
            <div className="pt-2">
              <span className="text-[11px] text-[#9EA2E2]/70 block mb-1">Sin texto (solo píldora de puntos):</span>
              <TypingIndicator label="" variant="primary" />
            </div>
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
                <td className="p-3 font-mono text-[#FBBF24]">label</td>
                <td className="p-3 font-mono text-[#9EA2E2]">string</td>
                <td className="p-3 font-mono">'Escribiendo...'</td>
                <td className="p-3">Texto que acompaña a los puntos animados (dejar vacío si solo se quieren los puntos).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">variant</td>
                <td className="p-3 font-mono text-[#9EA2E2]">'primary' | 'periwinkle' | 'emerald'</td>
                <td className="p-3 font-mono">'primary'</td>
                <td className="p-3">Color de los puntos: Oro Solar (#FBBF24), Lavanda Periwinkle (#9EA2E2) o Verde Esmeralda (#34D399).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">className</td>
                <td className="p-3 font-mono text-[#9EA2E2]">string</td>
                <td className="p-3 font-mono">''</td>
                <td className="p-3">Clases utilitarias adicionales de Tailwind.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
