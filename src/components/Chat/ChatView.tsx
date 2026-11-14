/* Developed by FireSeed - Fueling Innovation */
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Sparkles, 
  ChevronDown, 
  PauseCircle, 
  PlayCircle, 
  Copy, 
  X 
} from 'lucide-react';
import { ChatBubble } from '../ChatBubble';
import { ChatInput } from '../ChatInput';
import { TypingIndicator } from '../TypingIndicator';
import type { ChatViewProps } from './Chat.types';

export const ChatView: React.FC<ChatViewProps> = ({
  messages,
  title,
  subtitle,
  status = 'online',
  avatar,
  isTyping = false,
  typingLabel = 'Asistente IA pensando...',
  quickPrompts,
  onSendMessage,
  onTogglePauseAI,
  isAIPaused = false,
  onClose,
  onCopyChat,
  inputPlaceholder = 'Escribe un mensaje...',
  className = '',
  bubbleVariant = 'default'
}) => {
  const [inputText, setInputText] = useState('');
  const [showScrollBottom, setShowScrollBottom] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isNearBottomRef = useRef(true);

  // Detección de scroll del usuario
  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const isAtBottom = scrollHeight - scrollTop - clientHeight < 100;
    isNearBottomRef.current = isAtBottom;
    setShowScrollBottom(!isAtBottom);
  };

  const scrollToBottom = (smooth = true) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: smooth ? 'smooth' : 'auto'
      });
      isNearBottomRef.current = true;
      setShowScrollBottom(false);
    }
  };

  // Scroll inteligente al recibir nuevos mensajes
  useEffect(() => {
    if (isNearBottomRef.current) {
      scrollToBottom(true);
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (inputText.trim()) {
      onSendMessage?.(inputText.trim());
      setInputText('');
      // Forzar scroll al final al enviar mensaje propio
      setTimeout(() => scrollToBottom(true), 60);
    }
  };

  const renderStatusBadge = () => {
    if (isAIPaused || status === 'paused_human') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-400">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          <span>Atención Humana</span>
        </span>
      );
    }
    if (status === 'typing' || isTyping) {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FBBF24]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse" />
          <span>Escribiendo...</span>
        </span>
      );
    }
    if (status === 'online') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>En línea</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#9EA2E2]/60">
        <span className="w-1.5 h-1.5 rounded-full bg-[#9EA2E2]/40" />
        <span>Desconectado</span>
      </span>
    );
  };

  return (
    <div
      className={`flex flex-col h-full w-full bg-[#120524] text-[#FFF6DF] overflow-hidden border border-[#9EA2E2]/20 rounded-2xl shadow-xl relative ${className}`}
    >
      {/* ======================================================== */}
      {/* 1. HEADER DEL CHAT                                       */}
      {/* ======================================================== */}
      <header className="px-3.5 sm:px-4 py-3 bg-[#241142]/80 border-b border-[#9EA2E2]/20 flex items-center justify-between gap-3 shrink-0 backdrop-blur-md z-10">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          {/* Avatar */}
          <div className="relative shrink-0">
            {avatar ? (
              avatar
            ) : (
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#241142] to-[#120524] border border-[#FBBF24]/40 flex items-center justify-center text-[#FBBF24] shadow-sm font-bold text-sm">
                <Sparkles className="w-4 h-4 text-[#FBBF24]" />
              </div>
            )}
            <span
              className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[#120524] ${
                isAIPaused ? 'bg-rose-500' : status === 'offline' ? 'bg-slate-500' : 'bg-emerald-400'
              }`}
            />
          </div>

          {/* Información */}
          <div className="min-w-0">
            <h3 className="font-bold text-xs sm:text-sm text-[#FFF6DF] truncate flex items-center gap-1.5">
              <span>{title}</span>
            </h3>
            <div className="flex items-center gap-2 truncate">
              {renderStatusBadge()}
              {subtitle && <span className="text-[10px] text-[#9EA2E2]/60 truncate font-mono">({subtitle})</span>}
            </div>
          </div>
        </div>

        {/* Acciones del Header */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {onTogglePauseAI && (
            <button
              type="button"
              onClick={onTogglePauseAI}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                isAIPaused
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25'
                  : 'bg-amber-500/15 text-amber-300 border-amber-500/30 hover:bg-amber-500/25'
              }`}
              title={isAIPaused ? 'Reanudar Asistente de IA' : 'Pausar IA para hablarle vos directamente'}
            >
              {isAIPaused ? (
                <>
                  <PlayCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Reanudar IA</span>
                </>
              ) : (
                <>
                  <PauseCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Pausar IA</span>
                </>
              )}
            </button>
          )}

          {onCopyChat && (
            <button
              type="button"
              onClick={onCopyChat}
              className="p-2 rounded-xl text-[#9EA2E2] hover:text-[#FFF6DF] hover:bg-[#241142] transition-colors cursor-pointer"
              title="Copiar conversación"
              aria-label="Copiar conversación"
            >
              <Copy className="w-4 h-4" />
            </button>
          )}

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-[#9EA2E2] hover:text-[#FFF6DF] hover:bg-[#241142] transition-colors cursor-pointer"
              title="Cerrar chat"
              aria-label="Cerrar chat"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. ÁREA DE MENSAJES (SCROLL INTELIGENTE)                  */}
      {/* ======================================================== */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3.5 custom-scrollbar relative bg-[#120524]"
      >
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#9EA2E2]/60 space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#241142]/60 border border-[#9EA2E2]/20 flex items-center justify-center text-[#FBBF24]">
              <Bot className="w-6 h-6" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#FFF6DF]">Iniciá una nueva conversación</p>
            <p className="text-xs max-w-xs leading-relaxed">
              El motor de IA y el historial en tiempo real aparecerán aquí.
            </p>
          </div>
        ) : (
          messages.map((msg) => (
            <ChatBubble
              key={msg.id}
              text={msg.text}
              sender={msg.sender}
              senderName={msg.senderName}
              timestamp={msg.timestamp}
              status={msg.status}
              toolsExecuted={msg.toolsExecuted}
              actions={msg.actions}
              variant={bubbleVariant}
            />
          ))
        )}

        {/* Indicador de escritura animado */}
        {isTyping && (
          <div className="pt-1">
            <TypingIndicator label={typingLabel} variant="primary" />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Botón flotante para volver al fondo */}
      <AnimatePresence>
        {showScrollBottom && (
          <motion.button
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            type="button"
            onClick={() => scrollToBottom(true)}
            className="absolute bottom-18 right-4 bg-[#241142]/95 text-[#FFF6DF] hover:text-[#FBBF24] border border-[#9EA2E2]/30 px-3 py-1.5 rounded-full text-xs font-bold shadow-xl backdrop-blur-md flex items-center gap-1.5 z-20 cursor-pointer transition-all"
            aria-label="Ir a mensajes recientes"
          >
            <ChevronDown className="w-3.5 h-3.5" />
            <span>Ir al final</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* 3. BARRA INFERIOR DE ENTRADA                             */}
      {/* ======================================================== */}
      <ChatInput
        value={inputText}
        onChange={setInputText}
        onSend={handleSend}
        placeholder={inputPlaceholder}
        disabled={isTyping}
        isLoading={isTyping}
        quickPrompts={quickPrompts}
        onSelectPrompt={(p) => {
          onSendMessage?.(p);
          setTimeout(() => scrollToBottom(true), 60);
        }}
      />
    </div>
  );
};
