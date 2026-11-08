/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Code2 } from 'lucide-react';
import { cn } from '../utils/cn';
import { haptics } from '../utils/haptics';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';

export interface ComponentPlaygroundProps {
  title?: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  className?: string;
  previewClassName?: string;
  filename?: string;
}

export function ComponentPlayground({
  title,
  description,
  code,
  children,
  className,
  previewClassName,
  filename = 'Ejemplo.tsx'
}: ComponentPlaygroundProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className={cn('space-y-3', className)}>
      {(title || description) && (
        <div className="space-y-1">
          {title && (
            <h3 className="text-lg font-bold tracking-tight text-[#FFF6DF] flex items-center gap-2">
              {title}
            </h3>
          )}
          {description && <p className="text-xs text-[#9EA2E2]/70">{description}</p>}
        </div>
      )}

      <div
        className={cn(
          'rounded-2xl border border-[#9EA2E2]/20 bg-[#0d041a]/95 backdrop-blur-xl shadow-2xl transition-all duration-300',
          tab === 'code' ? 'overflow-hidden' : 'overflow-visible'
        )}
      >
        {/* Header con tabs */}
        <div className="flex items-center justify-between border-b border-[#9EA2E2]/15 px-4 py-2.5 bg-[#140628] rounded-t-2xl">
          <div className="flex items-center gap-1 bg-[#120524] p-1 rounded-xl border border-[#9EA2E2]/20">
            <button
              onClick={() => {
                haptics.light();
                setTab('preview');
              }}
              className={cn(
                'relative flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer',
                tab === 'preview' ? 'text-[#120524]' : 'text-[#9EA2E2] hover:text-[#FFF6DF]'
              )}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Vista Previa</span>
              {tab === 'preview' && (
                <motion.div
                  layoutId={`active-tab-${title || 'playground'}`}
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  className="absolute inset-0 bg-[#FBBF24] rounded-lg -z-10 shadow-sm"
                />
              )}
            </button>

            <button
              onClick={() => {
                haptics.light();
                setTab('code');
              }}
              className={cn(
                'relative flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer',
                tab === 'code' ? 'text-[#120524]' : 'text-[#9EA2E2] hover:text-[#FFF6DF]'
              )}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Código</span>
              {tab === 'code' && (
                <motion.div
                  layoutId={`active-tab-${title || 'playground'}`}
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  className="absolute inset-0 bg-[#FBBF24] rounded-lg -z-10 shadow-sm"
                />
              )}
            </button>
          </div>

          <span className="text-[11px] font-mono text-[#9EA2E2]/60 hidden sm:inline">
            {tab === 'preview' ? 'Componente Interactivo' : filename}
          </span>
        </div>

        {/* Contenido según Tab */}
        <div className="relative">
          {tab === 'preview' ? (
            <div
              className={cn(
                'preview-checkers min-h-[220px] p-6 sm:p-10 flex flex-wrap items-center justify-center gap-4 rounded-b-2xl overflow-visible',
                previewClassName
              )}
            >
              {children}
            </div>
          ) : (
            <div className="p-0">
              <CodeBlock
                code={code}
                language="tsx"
                filename={filename}
                className="border-0 rounded-t-none shadow-none"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
