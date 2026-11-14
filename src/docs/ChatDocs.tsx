/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { 
  ChatView, 
  ChatWidget, 
  ChatBubble, 
  ChatInput, 
  TypingIndicator,
  Button, 
  Callout 
} from '../components';
import type { ChatMessage } from '../components';
import { ComponentPlayground } from './ComponentPlayground';
import { Sparkles } from 'lucide-react';

const initialDemoMessages: ChatMessage[] = [
  {
    id: '1',
    text: '¡Hola! Quisiera consultar los horarios disponibles para Pilates Reformer esta semana.',
    sender: 'user',
    senderName: 'Camila Rossi',
    timestamp: '18:30',
    status: 'read'
  },
  {
    id: '2',
    text: '¡Hola Camila! ✦ Qué lindo saludarte. Tenemos camillas disponibles en los siguientes turnos de nivel Inicial/Intermedio:',
    sender: 'bot',
    senderName: 'Asistente IA FireSeed',
    timestamp: '18:31',
    toolsExecuted: ['consultar_disponibilidad_reformer', 'validar_cupo_camillas'],
    actions: [
      { label: 'Martes 10:00 hs', onClick: () => {}, variant: 'gold' },
      { label: 'Jueves 18:30 hs', onClick: () => {}, variant: 'solid' },
      { label: 'Viernes 09:00 hs', onClick: () => {} }
    ]
  },
  {
    id: '3',
    text: 'Me queda perfecto el Jueves 18:30 hs.',
    sender: 'user',
    senderName: 'Camila Rossi',
    timestamp: '18:32',
    status: 'read'
  },
  {
    id: '4',
    text: '¡Listo Camila! Tu turno para el Jueves a las 18:30 hs quedó pre-reservado con éxito. Te enviamos la solicitud de seña de $5.000 por WhatsApp.',
    sender: 'bot',
    senderName: 'Asistente IA FireSeed',
    timestamp: '18:32',
    toolsExecuted: ['bloquear_camilla_reserva', 'generar_link_pago_seña']
  }
];

const codigoChatView = `import { useState } from 'react';
import { ChatView, ChatMessage } from 'fireseed-ui';

export function DemoChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: '¡Hola! Quisiera consultar turnos disponibles.',
      sender: 'user',
      timestamp: '18:30',
      status: 'read'
    },
    {
      id: '2',
      text: '¡Hola! Tenemos turnos disponibles el Jueves 18:30 hs.',
      sender: 'bot',
      timestamp: '18:31',
      toolsExecuted: ['consultar_disponibilidad'],
      actions: [{ label: 'Reservar Turno', onClick: () => alert('Turno seleccionado') }]
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (text: string) => {
    // 1. Agregar mensaje del usuario
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: 'Ahora',
      status: 'sent'
    };
    setMessages(prev => [...prev, userMsg]);

    // 2. Simular respuesta de IA
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: 'Comprendido. Ejecuté la acción con éxito.',
          sender: 'bot',
          timestamp: 'Ahora',
          toolsExecuted: ['motor_ia_fireseed']
        }
      ]);
    }, 1200);
  };

  return (
    <div className="h-[520px] w-full max-w-lg mx-auto">
      <ChatView
        title="Recepcionista IA"
        subtitle="+54 9 11 4567-8901"
        status="online"
        messages={messages}
        isTyping={isTyping}
        onSendMessage={handleSend}
        quickPrompts={['Consultar turnos', 'Precios de planes', 'Hablar con humano']}
      />
    </div>
  );
}`;

const codigoChatWidget = `import { ChatWidget } from 'fireseed-ui';

export function DemoWidget() {
  return (
    <ChatWidget
      title="Asistente FireSeed"
      subtitle="En línea 24/7"
      status="online"
      position="bottom-right"
      badgeCount={1}
      messages={messages}
      onSendMessage={(text) => console.log('Enviado:', text)}
      quickPrompts={['¿Cómo funciona?', 'Precios y Planes', 'Pedir llamada']}
    />
  );
}`;

export function ChatDocs() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialDemoMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [isAIPaused, setIsAIPaused] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [demoInput, setDemoInput] = useState('');

  const handleSendMessage = (text: string) => {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      senderName: 'Vos',
      timestamp: 'Ahora',
      status: 'sending'
    };

    setMessages((prev) => [...prev, userMsg]);

    // Actualizar a 'sent' y luego 'read'
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) => (m.id === userMsg.id ? { ...m, status: 'read' } : m))
      );
    }, 300);

    // Si la IA no está pausada, responder automáticamente
    if (!isAIPaused) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botResponse: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: `Recibí tu consulta: "${text}". Consulté el motor de FireSeed y verifiqué la información en tiempo real.`,
          sender: 'bot',
          senderName: 'Asistente IA FireSeed',
          timestamp: 'Ahora',
          toolsExecuted: ['motor_analisis_nlp', 'verificar_politicas_estudio'],
          actions: [
            {
              label: 'Ver confirmación',
              onClick: () => alert('Confirmación generada con éxito'),
              variant: 'gold'
            }
          ]
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1100);
    }
  };

  const handleToggleAIPause = () => {
    const nextState = !isAIPaused;
    setIsAIPaused(nextState);
    if (nextState) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: 'Atención transferida a la administración humana. La IA no responderá automáticamente en este chat.',
          sender: 'human',
          senderName: 'Administradora (Manual)',
          timestamp: 'Ahora'
        }
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: 'Asistente IA reanudado. Responderá consultas y reservas de forma autónoma.',
          sender: 'bot',
          senderName: 'Asistente IA FireSeed',
          timestamp: 'Ahora'
        }
      ]);
    }
  };

  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      {/* ======================================================== */}
      {/* ENCABEZADO                                               */}
      {/* ======================================================== */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          ORGANISMO & MOLÉCULAS • CHAT NATIVE & CHATBOT WIDGET
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Chat & Mensajería IA
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Suite modular de mensajería en tiempo real diseñada bajo el estándar <strong>Native-First</strong>.
          Permite supervisar chats de WhatsApp en vivo (estilo CRM de Violett), desplegar asistentes de IA autónomos y renderizar widgets de soporte flotantes con adaptación 100% responsive.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      {/* CALLOUT DE VALOR */}
      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Doble Modo de Uso: CRM Completo o Chatbot Flotante
          </p>
          <p>
            <strong>1. Modo Pantalla Completa / CRM:</strong> Ideal para paneles de control administrativos donde la dueña o recepcionista supervisa a la IA, pausa el bot para intervenir humanamente y audita los tools ejecutados en cada mensaje.
          </p>
          <p>
            <strong>2. Modo Chatbot Flotante (Widget):</strong> Botón fijo en la esquina inferior con badge de mensajes no leídos que despliega una ventana flotante en escritorio y se transforma en una vista nativa de pantalla completa en celulares.
          </p>
        </div>
      </Callout>

      {/* ======================================================== */}
      {/* DEMO EN VIVO: MODO EMBEBIDO / CRM                        */}
      {/* ======================================================== */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
            1. Vista CRM / WhatsApp en Vivo
          </h2>
          <span className="text-xs text-[#9EA2E2]/70 font-mono">
            {messages.length} mensajes en memoria
          </span>
        </div>

        <ComponentPlayground
          title="Consola de Chat Interactiva"
          description="Escribí un mensaje o pulsá las sugerencias rápidas para ver la interacción con la IA, los checks de estado y las tools ejecutadas:"
          code={codigoChatView}
          filename="LiveChatDemo.tsx"
          previewClassName="p-2 sm:p-6 bg-[#0B0217] flex justify-center items-center"
        >
          <div className="w-full max-w-xl h-[560px]">
            <ChatView
              title="Camila Rossi"
              subtitle="+54 9 11 4567-8901"
              status={isTyping ? 'typing' : isAIPaused ? 'paused_human' : 'online'}
              messages={messages}
              isTyping={isTyping}
              isAIPaused={isAIPaused}
              onTogglePauseAI={handleToggleAIPause}
              onSendMessage={handleSendMessage}
              onCopyChat={() => alert('¡Historial copiado al portapapeles!')}
              quickPrompts={[
                'Consultar turnos',
                'Precios de clases',
                'Cambiar mi reserva',
                'Quiero hablar con la dueña'
              ]}
              inputPlaceholder="Escribí como clienta o administradora..."
            />
          </div>
        </ComponentPlayground>
      </div>

      {/* ======================================================== */}
      {/* DEMO EN VIVO: MODO WIDGET FLOTANTE                       */}
      {/* ======================================================== */}
      <div className="space-y-4 pt-6">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          2. Chatbot Flotante (`ChatWidget`)
        </h2>
        <p className="text-sm text-[#FFF6DF]/75">
          Probalo en vivo haciendo clic en el botón amarillo flotante en la esquina inferior derecha de esta pantalla:
        </p>

        <ComponentPlayground
          title="Widget Flotante para Sitios Web"
          description="Botón flotante con conteo de no leídos que abre la ventana emergente con física de resortes:"
          code={codigoChatWidget}
          filename="ChatWidgetDemo.tsx"
        >
          <div className="p-6 text-center space-y-4">
            <p className="text-xs text-[#9EA2E2]">
              Hacé clic en el siguiente botón para alternar el widget flotante:
            </p>
            <Button
              variant="solid"
              onClick={() => setIsWidgetOpen(!isWidgetOpen)}
            >
              {isWidgetOpen ? 'Cerrar Chatbot Flotante' : 'Abrir Chatbot Flotante'}
            </Button>
          </div>
        </ComponentPlayground>

        {/* Instancia activa del ChatWidget en la página */}
        <ChatWidget
          title="Asistente FireSeed"
          subtitle="Atención en vivo"
          status={isTyping ? 'typing' : 'online'}
          isOpen={isWidgetOpen}
          onOpenChange={setIsWidgetOpen}
          badgeCount={1}
          messages={messages}
          isTyping={isTyping}
          onSendMessage={handleSendMessage}
          quickPrompts={['¿Cómo funciona?', 'Ver turnos', 'Contactar ventas']}
        />
      </div>

      {/* ======================================================== */}
      {/* ÁTOMOS INDIVIDUALES                                      */}
      {/* ======================================================== */}
      <div className="space-y-6 pt-6">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          3. Componentes Atómicos Reutilizables
        </h2>
        <p className="text-sm text-[#FFF6DF]/75">
          Podés usar cada pieza de forma aislada para armar flujos conversacionales a medida:
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Átomo: ChatBubble */}
          <div className="p-5 rounded-2xl bg-[#241142]/40 border border-[#9EA2E2]/20 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FBBF24]"></span>
              <h3 className="text-sm font-bold text-[#FFF6DF] font-mono">ChatBubble</h3>
            </div>
            <p className="text-xs text-[#9EA2E2]">
              Burbuja con badges de tools de IA, doble tilde de lectura y sugerencias en pastillas:
            </p>
            <div className="space-y-3 pt-2">
              <ChatBubble
                text="Consulta de prueba desde el cliente."
                sender="user"
                timestamp="14:02"
                status="read"
              />
              <ChatBubble
                text="Respuesta autónoma con tools de IA."
                sender="bot"
                timestamp="14:02"
                toolsExecuted={['reservar_turno', 'validar_horario']}
                actions={[{ label: 'Ver cupos', onClick: () => {}, variant: 'gold' }]}
              />
            </div>
          </div>

          {/* Átomo: TypingIndicator */}
          <div className="p-5 rounded-2xl bg-[#241142]/40 border border-[#9EA2E2]/20 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FBBF24]"></span>
              <h3 className="text-sm font-bold text-[#FFF6DF] font-mono">TypingIndicator</h3>
            </div>
            <p className="text-xs text-[#9EA2E2]">
              Tres puntos flotantes con animación suave de onda para dar feedback de actividad:
            </p>
            <div className="pt-4 flex flex-col gap-3">
              <TypingIndicator label="Asistente de IA pensando..." variant="primary" />
              <TypingIndicator label="Escribiendo respuesta..." variant="periwinkle" />
              <TypingIndicator label="WhatsApp en vivo..." variant="emerald" />
            </div>
          </div>
        </div>

        {/* Átomo: ChatInput */}
        <div className="p-5 rounded-2xl bg-[#241142]/40 border border-[#9EA2E2]/20 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FBBF24]"></span>
            <h3 className="text-sm font-bold text-[#FFF6DF] font-mono">ChatInput</h3>
          </div>
          <p className="text-xs text-[#9EA2E2]">
            Barra inferior mobile-first con soporte para múltiples líneas, quick prompts y envío con Enter:
          </p>
          <div className="rounded-xl overflow-hidden border border-[#9EA2E2]/25">
            <ChatInput
              value={demoInput}
              onChange={setDemoInput}
              onSend={() => {
                alert(`Mensaje enviado: "${demoInput}"`);
                setDemoInput('');
              }}
              quickPrompts={['Sugerencia 1', 'Sugerencia 2', 'Sugerencia 3']}
              placeholder="Probá escribir aquí..."
            />
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* REFERENCIA DE PROPIEDADES (API)                          */}
      {/* ======================================================== */}
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
                <td className="p-3 font-mono text-[#FBBF24]">messages</td>
                <td className="p-3 font-mono text-[#9EA2E2]">ChatMessage[]</td>
                <td className="p-3 font-mono">[]</td>
                <td className="p-3">Array de objetos con id, text, sender, timestamp, toolsExecuted y status.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">title</td>
                <td className="p-3 font-mono text-[#9EA2E2]">string</td>
                <td className="p-3 font-mono">Requerido</td>
                <td className="p-3">Nombre del contacto, estudio o bot en la cabecera del chat.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">subtitle</td>
                <td className="p-3 font-mono text-[#9EA2E2]">string</td>
                <td className="p-3 font-mono">undefined</td>
                <td className="p-3">Número de teléfono, estado o rol detectado en la cabecera.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">status</td>
                <td className="p-3 font-mono text-[#9EA2E2]">'online' | 'typing' | 'paused_human' | 'offline'</td>
                <td className="p-3 font-mono">'online'</td>
                <td className="p-3">Estado del interlocutor e indicador luminoso en el avatar.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">isTyping</td>
                <td className="p-3 font-mono text-[#9EA2E2]">boolean</td>
                <td className="p-3 font-mono">false</td>
                <td className="p-3">Muestra el componente TypingIndicator en la parte inferior del historial.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">onSendMessage</td>
                <td className="p-3 font-mono text-[#9EA2E2]">(text: string) =&gt; void</td>
                <td className="p-3 font-mono">undefined</td>
                <td className="p-3">Callback que se dispara al pulsar Enviar o presionar la tecla Enter.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">onTogglePauseAI</td>
                <td className="p-3 font-mono text-[#9EA2E2]">() =&gt; void</td>
                <td className="p-3 font-mono">undefined</td>
                <td className="p-3">Habilita el botón de alternancia entre asistente IA y atención humana manual.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">quickPrompts</td>
                <td className="p-3 font-mono text-[#9EA2E2]">string[]</td>
                <td className="p-3 font-mono">undefined</td>
                <td className="p-3">Carrusel de sugerencias rápidas en forma de píldoras sobre la barra de entrada.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[#FBBF24]">badgeCount (Widget)</td>
                <td className="p-3 font-mono text-[#9EA2E2]">number</td>
                <td className="p-3 font-mono">0</td>
                <td className="p-3">Muestra el globo numérico de notificaciones sobre el botón flotante.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
