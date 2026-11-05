/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Eye, Code2 } from 'lucide-react';
import { cn } from '../utils/cn';
import { haptics } from '../utils/haptics';

export interface ComponentPlaygroundProps {
  title?: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  className?: string;
}

export function ComponentPlayground({
  title,
  description,
  code,
  children,
  className
}: ComponentPlaygroundProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      haptics.success();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className={cn('space-y-3', className)}>
      {(title || description) && (
        <div className="space-y-1">
          {title && (
            <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
              {title}
            </h3>
          )}
          {description && <p className="text-xs text-white/50">{description}</p>}
        </div>
      )}

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d041a]/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
        {/* Header con tabs y botón de copiado */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-white/[0.02]">
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5">
            <button
              onClick={() => {
                haptics.light();
                setTab('preview');
              }}
              className={cn(
                'relative flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg transition-colors',
                tab === 'preview' ? 'text-primary-main' : 'text-white/60 hover:text-white'
              )}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Vista Previa</span>
              {tab === 'preview' && (
                <motion.div
                  layoutId={`active-tab-${title || 'playground'}`}
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  className="absolute inset-0 bg-accent-main rounded-lg -z-10 shadow-sm"
                />
              )}
            </button>

            <button
              onClick={() => {
                haptics.light();
                setTab('code');
              }}
              className={cn(
                'relative flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg transition-colors',
                tab === 'code' ? 'text-primary-main' : 'text-white/60 hover:text-white'
              )}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Código</span>
              {tab === 'code' && (
                <motion.div
                  layoutId={`active-tab-${title || 'playground'}`}
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  className="absolute inset-0 bg-accent-main rounded-lg -z-10 shadow-sm"
                />
              )}
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-white/60 hover:text-white rounded-lg border border-white/5 hover:border-white/15 bg-white/[0.03] transition-all active:scale-95 cursor-pointer"
            title="Copiar código al portapapeles"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                <span className="text-emerald-400 font-semibold">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>

        {/* Contenido según Tab */}
        <div className="relative">
          {tab === 'preview' ? (
            <div className="preview-checkers min-h-[220px] p-6 sm:p-10 flex flex-wrap items-center justify-center gap-4">
              {children}
            </div>
          ) : (
            <div className="overflow-x-auto p-4 sm:p-5 bg-black/50 font-mono text-xs sm:text-sm leading-relaxed text-zinc-300">
              <pre className="text-white/80">{code}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
