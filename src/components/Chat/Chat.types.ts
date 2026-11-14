/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import type { ChatActionPill, ChatSenderRole } from '../ChatBubble';

export interface ChatMessage {
  id: string;
  text: React.ReactNode;
  sender: ChatSenderRole;
  senderName?: string;
  timestamp?: string;
  status?: 'sending' | 'sent' | 'delivered' | 'read';
  toolsExecuted?: string[];
  actions?: ChatActionPill[];
}

export type ChatStatus = 'online' | 'typing' | 'paused_human' | 'offline';

export interface ChatViewProps {
  /** Lista de mensajes a renderizar */
  messages: ChatMessage[];
  /** Título del chat (ej: "Asistente Virtual" o nombre del cliente) */
  title: string;
  /** Subtítulo o número de teléfono / rol */
  subtitle?: string;
  /** Estado de conectividad / IA */
  status?: ChatStatus;
  /** Avatar del interlocutor */
  avatar?: React.ReactNode;
  /** Indicador si la IA está escribiendo */
  isTyping?: boolean;
  /** Texto personalizado para el indicador de escritura */
  typingLabel?: string;
  /** Sugerencias rápidas mostradas sobre el input */
  quickPrompts?: string[];
  /** Callback al enviar un mensaje */
  onSendMessage?: (text: string) => void;
  /** Callback opcional al pausar/reanudar la IA (para intervención humana) */
  onTogglePauseAI?: () => void;
  /** Si la IA está actualmente pausada para atención humana */
  isAIPaused?: boolean;
  /** Callback opcional para cerrar el chat (en vistas modal o drawer) */
  onClose?: () => void;
  /** Callback opcional para exportar o copiar la conversación */
  onCopyChat?: () => void;
  /** Placeholder para el campo de texto */
  inputPlaceholder?: string;
  /** Altura del contenedor (por defecto '100%' o adaptable a pantalla) */
  className?: string;
  /** Variante visual de las burbujas */
  bubbleVariant?: 'default' | 'whatsapp' | 'glow';
}

export interface ChatWidgetProps extends Omit<ChatViewProps, 'onClose'> {
  /** Posición de la burbuja flotante */
  position?: 'bottom-right' | 'bottom-left';
  /** Si el widget inicia abierto */
  defaultOpen?: boolean;
  /** Estado controlado de apertura */
  isOpen?: boolean;
  /** Callback al cambiar estado de apertura */
  onOpenChange?: (open: boolean) => void;
  /** Número de mensajes no leídos para mostrar en el badge del botón flotante */
  badgeCount?: number;
  /** Icono personalizado para el botón lanzador */
  triggerIcon?: React.ReactNode;
  /** Texto tooltip del botón lanzador */
  triggerLabel?: string;
}
