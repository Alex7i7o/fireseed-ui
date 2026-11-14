/* Developed by FireSeed - Fueling Innovation */
import React, { useRef, useEffect } from 'react';
import { Send, Paperclip, Loader2, Sparkles } from 'lucide-react';

export interface ChatInputProps {
  /** Valor actual del texto */
  value: string;
  /** Callback al cambiar el texto */
  onChange: (value: string) => void;
  /** Callback al enviar mensaje */
  onSend: () => void;
  /** Texto del placeholder */
  placeholder?: string;
  /** Si el input está deshabilitado */
  disabled?: boolean;
  /** Indicador de carga (ej: IA procesando) */
  isLoading?: boolean;
  /** Callback opcional para adjuntar archivos */
  onAttach?: () => void;
  /** Sugerencias rápidas que aparecen en un carrusel sobre la barra */
  quickPrompts?: string[];
  /** Callback al hacer clic en una sugerencia rápida */
  onSelectPrompt?: (prompt: string) => void;
  /** Permitir múltiples líneas (auto-resize) */
  multiline?: boolean;
  /** Clases CSS adicionales */
  className?: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  value,
  onChange,
  onSend,
  placeholder = 'Escribe un mensaje...',
  disabled = false,
  isLoading = false,
  onAttach,
  quickPrompts,
  onSelectPrompt,
  multiline = true,
  className = ''
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize de la altura del textarea para no romper en mobile
  useEffect(() => {
    if (multiline && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollH = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.min(scrollH, 120)}px`;
    }
  }, [value, multiline]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !disabled && !isLoading) {
        onSend();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !disabled && !isLoading) {
      onSend();
    }
  };

  return (
    <div className={`w-full bg-[#120524]/90 border-t border-[#9EA2E2]/20 p-2.5 sm:p-3 backdrop-blur-md ${className}`}>
      {/* Sugerencias Rápidas / Quick Prompts superiores */}
      {quickPrompts && quickPrompts.length > 0 && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-1 hide-scrollbar">
          {quickPrompts.map((prompt, i) => (
            <button
              key={i}
              type="button"
              disabled={disabled || isLoading}
              onClick={() => (onSelectPrompt ? onSelectPrompt(prompt) : onChange(prompt))}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium bg-[#241142] text-[#9EA2E2] hover:text-[#FFF6DF] hover:border-[#FBBF24]/50 border border-[#9EA2E2]/20 whitespace-nowrap transition-all shrink-0 cursor-pointer disabled:opacity-50"
            >
              <Sparkles className="w-2.5 h-2.5 text-[#FBBF24]" />
              <span>{prompt}</span>
            </button>
          ))}
        </div>
      )}

      {/* Formulario de Entrada */}
      <form onSubmit={handleSubmit} className="flex items-end gap-2">
        {onAttach && (
          <button
            type="button"
            onClick={onAttach}
            disabled={disabled || isLoading}
            className="p-2 sm:p-2.5 rounded-xl text-[#9EA2E2] hover:text-[#FFF6DF] hover:bg-[#241142] transition-colors shrink-0 disabled:opacity-50 cursor-pointer"
            aria-label="Adjuntar archivo"
            title="Adjuntar archivo"
          >
            <Paperclip className="w-4 h-4" />
          </button>
        )}

        <div className="flex-1 min-w-0 relative rounded-xl bg-[#241142]/60 border border-[#9EA2E2]/25 focus-within:border-[#FBBF24]/60 focus-within:ring-1 focus-within:ring-[#FBBF24]/30 transition-all">
          {multiline ? (
            <textarea
              ref={textareaRef}
              rows={1}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={disabled || isLoading}
              placeholder={placeholder}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-[#FFF6DF] placeholder-[#9EA2E2]/50 bg-transparent resize-none focus:outline-none max-h-32 leading-relaxed custom-scrollbar"
            />
          ) : (
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={disabled || isLoading}
              placeholder={placeholder}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-[#FFF6DF] placeholder-[#9EA2E2]/50 bg-transparent focus:outline-none leading-relaxed"
            />
          )}
        </div>

        {/* Botón Enviar */}
        <button
          type="submit"
          disabled={!value.trim() || disabled || isLoading}
          className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-[#FBBF24] to-[#E67E22] text-[#120524] font-bold hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] disabled:opacity-40 disabled:hover:shadow-none transition-all shrink-0 cursor-pointer disabled:cursor-not-allowed"
          aria-label="Enviar mensaje"
          title="Enviar mensaje (Enter)"
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
        </button>
      </form>
    </div>
  );
};
