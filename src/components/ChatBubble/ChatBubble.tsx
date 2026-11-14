/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { motion } from 'framer-motion';
import { Check, CheckCheck, Bot, User, Sparkles } from 'lucide-react';

export type ChatSenderRole = 'user' | 'bot' | 'human';

export interface ChatActionPill {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  variant?: 'solid' | 'outline' | 'gold';
}

export interface ChatBubbleProps {
  /** Contenido del mensaje (texto o nodo React) */
  text: React.ReactNode;
  /** Rol de quien emite el mensaje */
  sender?: ChatSenderRole;
  /** Nombre a mostrar en el encabezado de la burbuja */
  senderName?: string;
  /** Marca de tiempo (ej: "18:45" o "Hoy 11:20") */
  timestamp?: string;
  /** Estado de entrega del mensaje */
  status?: 'sending' | 'sent' | 'delivered' | 'read';
  /** Herramientas / Tools de IA ejecutadas asociadas al mensaje (ej: ['consultar_turnos']) */
  toolsExecuted?: string[];
  /** Avatar opcional del remitente */
  avatar?: React.ReactNode;
  /** Acciones o sugerencias rápidas interactuables debajo del mensaje */
  actions?: ChatActionPill[];
  /** Variante estética */
  variant?: 'default' | 'whatsapp' | 'glow';
  /** Clases CSS adicionales */
  className?: string;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  text,
  sender = 'user',
  senderName,
  timestamp,
  status,
  toolsExecuted,
  avatar,
  actions,
  variant = 'default',
  className = ''
}) => {
  const isUser = sender === 'user';
  const isHuman = sender === 'human';

  // Configuración de estilo de la burbuja según rol y variante
  const getBubbleStyle = () => {
    if (variant === 'whatsapp') {
      if (isUser) {
        return 'bg-emerald-700/80 text-white rounded-tr-xs border border-emerald-500/30';
      }
      return 'bg-[#241142] text-[#FFF6DF] rounded-tl-xs border border-[#9EA2E2]/20';
    }

    if (variant === 'glow') {
      if (isUser) {
        return 'bg-gradient-to-r from-[#FBBF24] to-[#E67E22] text-[#120524] font-medium rounded-tr-xs shadow-[0_0_20px_rgba(251,191,36,0.25)]';
      }
      return 'bg-[#241142]/90 text-[#FFF6DF] rounded-tl-xs border border-[#9EA2E2]/30 shadow-[0_0_25px_rgba(36,17,66,0.6)] backdrop-blur-md';
    }

    // Default: FireSeed Midnight & Periwinkle theme
    if (isUser) {
      return 'bg-gradient-to-r from-[#FBBF24] to-[#E67E22] text-[#120524] font-medium rounded-tr-xs shadow-xs';
    }
    if (isHuman) {
      return 'bg-indigo-950/80 text-[#FFF6DF] rounded-tl-xs border border-indigo-400/30 shadow-xs';
    }
    // Bot / IA
    return 'bg-[#241142]/90 text-[#FFF6DF] rounded-tl-xs border border-[#9EA2E2]/25 shadow-xs backdrop-blur-sm';
  };

  const defaultSenderLabel = () => {
    if (senderName) return senderName;
    if (isUser) return 'Vos';
    if (isHuman) return 'Administrador (Humano)';
    return 'Asistente IA';
  };

  const renderStatus = () => {
    if (!status) return null;
    if (status === 'sending') {
      return <span className="w-2.5 h-2.5 rounded-full border border-current border-t-transparent animate-spin inline-block ml-1 opacity-70" />;
    }
    if (status === 'sent') {
      return <Check className="w-3.5 h-3.5 inline-block ml-1 opacity-75" />;
    }
    if (status === 'delivered') {
      return <CheckCheck className="w-3.5 h-3.5 inline-block ml-1 opacity-75" />;
    }
    // read
    return <CheckCheck className="w-3.5 h-3.5 inline-block ml-1 text-[#FBBF24] opacity-100" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} ${className}`}
    >
      <div className={`flex items-end gap-2 max-w-[90%] sm:max-w-[78%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Avatar opcional */}
        {avatar && <div className="shrink-0 mb-1">{avatar}</div>}

        {/* Burbuja Principal */}
        <div className={`relative px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed transition-all ${getBubbleStyle()}`}>
          {/* Header de la burbuja (remitente y timestamp) */}
          <div className="flex items-center justify-between gap-3 mb-1 text-[11px] font-semibold opacity-85">
            <span className="flex items-center gap-1.5 truncate">
              {!isUser && (
                isHuman ? (
                  <User className="w-3 h-3 text-indigo-300 shrink-0" />
                ) : (
                  <Sparkles className="w-3 h-3 text-[#FBBF24] shrink-0" />
                )
              )}
              {isUser && <Bot className="hidden" />}
              <span className="truncate">{defaultSenderLabel()}</span>
            </span>
            {timestamp && <span className="text-[10px] opacity-75 shrink-0 font-mono">{timestamp}</span>}
          </div>

          {/* Cuerpo del Mensaje */}
          <div className="whitespace-pre-wrap break-words">{text}</div>

          {/* Tools de IA Ejecutadas (Audit trail en tiempo real) */}
          {toolsExecuted && toolsExecuted.length > 0 && (
            <div className="mt-2.5 pt-2 border-t border-current/15 flex flex-wrap gap-1.5">
              {toolsExecuted.map((tool, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-black/25 text-[#FFF6DF]/90 border border-white/10 flex items-center gap-1 shadow-2xs"
                  title={`Herramienta ejecutada por el agente de IA: ${tool}`}
                >
                  <span className="text-[#FBBF24]">⚡</span>
                  <span>{tool}</span>
                </span>
              ))}
            </div>
          )}

          {/* Check de estado abajo a la derecha si es mensaje de usuario */}
          {isUser && status && (
            <div className="text-right mt-1 -mb-1 text-[10px] flex items-center justify-end">
              {renderStatus()}
            </div>
          )}
        </div>
      </div>

      {/* Acciones o sugerencias rápidas interactuables */}
      {actions && actions.length > 0 && (
        <div className={`mt-2 flex flex-wrap gap-1.5 ${isUser ? 'justify-end' : 'justify-start'} pl-2 sm:pl-3`}>
          {actions.map((act, i) => (
            <button
              key={i}
              type="button"
              onClick={act.onClick}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                act.variant === 'gold'
                  ? 'bg-[#FBBF24] text-[#120524] hover:bg-[#F59E0B] shadow-2xs'
                  : act.variant === 'solid'
                  ? 'bg-[#241142] text-[#FFF6DF] hover:bg-[#150726] border border-[#9EA2E2]/25'
                  : 'bg-[#120524]/60 text-[#9EA2E2] hover:text-[#FFF6DF] hover:border-[#FBBF24]/50 border border-[#9EA2E2]/20 backdrop-blur-xs'
              }`}
            >
              {act.icon && <span className="w-3.5 h-3.5">{act.icon}</span>}
              <span>{act.label}</span>
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
};
