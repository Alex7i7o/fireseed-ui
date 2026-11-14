/* Developed by FireSeed - Fueling Innovation */
import { ChatBubble } from '../components/ChatBubble';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { Sparkles } from 'lucide-react';

const codigoChatBubble = `import { ChatBubble } from 'fireseed-ui';

export function DemoBurbujas() {
  return (
    <div className="space-y-4 max-w-md w-full">
      {/* 1. Mensaje del Usuario */}
      <ChatBubble
        text="Hola, ¿tienen camillas libres para hoy?"
        sender="user"
        senderName="Lucía Méndez"
        timestamp="15:30"
        status="read"
      />

      {/* 2. Respuesta de la IA con Auditoría de Tools y Acciones */}
      <ChatBubble
        text="¡Hola Lucía! Revisé el sistema y tenemos 1 camilla disponible en Reformer a las 18:00 hs."
        sender="bot"
        senderName="Recepcionista IA"
        timestamp="15:30"
        toolsExecuted={['consultar_agenda_hoy', 'validar_cupo_camillas']}
        actions={[
          { label: 'Reservar a las 18:00 hs', onClick: () => alert('Turno seleccionado'), variant: 'gold' },
          { label: 'Ver otros días', onClick: () => alert('Buscando días...') }
        ]}
      />

      {/* 3. Intervención Humana (Dueña / Administradora) */}
      <ChatBubble
        text="Hola Lucía, te saluda Valeria. Confirmame y te guardo la camilla 3."
        sender="human"
        senderName="Valeria (Dueña)"
        timestamp="15:32"
      />
    </div>
  );
}`;

export function ChatBubbleDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          ÁTOMO • BURBUJA DE MENSAJE ATÓMICA
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          ChatBubble
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Átomo base para renderizar cualquier mensaje en un flujo conversacional. Soporta tres roles semánticos (<code>user</code>, <code>bot</code>, <code>human</code>), trazabilidad de herramientas de IA ejecutadas (<code>toolsExecuted</code>), estados de entrega (doble tilde) y pastillas de respuesta rápida interactuables.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Auditoría de Agentes de IA en Vivo
          </p>
          <p>
            Al pasarle el prop <code>toolsExecuted</code> (ej: <code>['consultar_agenda', 'bloquear_cupo']</code>), la burbuja renderiza automáticamente micro-badges técnicos con icono de rayo ⚡, permitiendo que la dueña o supervisora vea con total transparencia qué funciones ejecutó el modelo de lenguaje detrás de escena.
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Variantes de Burbuja y Roles"
          description="Observá la distinción visual entre cliente, IA con badges de tools y administradora humana:"
          code={codigoChatBubble}
          filename="ChatBubbleDemo.tsx"
          previewClassName="p-4 sm:p-8 flex justify-center bg-[#0B0217]"
        >
          <div className="space-y-4 max-w-md w-full">
            <ChatBubble
              text="Hola, ¿tienen camillas libres para hoy?"
              sender="user"
              senderName="Lucía Méndez"
              timestamp="15:30"
              status="read"
            />
            <ChatBubble
              text="¡Hola Lucía! Revisé el sistema y tenemos 1 camilla disponible en Reformer a las 18:00 hs."
              sender="bot"
              senderName="Recepcionista IA"
              timestamp="15:30"
              toolsExecuted={['consultar_agenda_hoy', 'validar_cupo_camillas']}
              actions={[
                { label: 'Reservar 18:00 hs', onClick: () => alert('Turno seleccionado'), variant: 'gold' },
                { label: 'Ver otros días', onClick: () => alert('Buscando días...') }
              ]}
            />
            <ChatBubble
              text="Hola Lucía, te saluda Valeria. Confirmame y te guardo la camilla 3."
              sender="human"
              senderName="Valeria (Dueña)"
              timestamp="15:32"
            />
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
                <td className="p-3 font-mono text-[#FBBF24]">text</td>
                <td className="p-3 font-mono text-[#9EA2E2]">ReactNode</td>
                <td className="p-3 font-mono">Requerido</td>
                <td className="p-3">Texto o contenido del mensaje.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">sender</td>
                <td className="p-3 font-mono text-[#9EA2E2]">'user' | 'bot' | 'human'</td>
                <td className="p-3 font-mono">'user'</td>
                <td className="p-3">Rol del emisor. Define la alineación (derecha/izquierda) y el estilo cromático.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">toolsExecuted</td>
                <td className="p-3 font-mono text-[#9EA2E2]">string[]</td>
                <td className="p-3 font-mono">undefined</td>
                <td className="p-3">Lista de nombres de funciones o tools ejecutadas por el agente de IA (ej: ['reservar_turno']).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">status</td>
                <td className="p-3 font-mono text-[#9EA2E2]">'sending' | 'sent' | 'delivered' | 'read'</td>
                <td className="p-3 font-mono">undefined</td>
                <td className="p-3">Estado de entrega con tildes de confirmación de lectura estilo WhatsApp.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">actions</td>
                <td className="p-3 font-mono text-[#9EA2E2]">ChatActionPill[]</td>
                <td className="p-3 font-mono">undefined</td>
                <td className="p-3">Botones interactivos o sugerencias renderizadas al pie de la burbuja.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">variant</td>
                <td className="p-3 font-mono text-[#9EA2E2]">'default' | 'whatsapp' | 'glow'</td>
                <td className="p-3 font-mono">'default'</td>
                <td className="p-3">Esquema visual: FireSeed oficial, verde WhatsApp o resplandor neón.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
