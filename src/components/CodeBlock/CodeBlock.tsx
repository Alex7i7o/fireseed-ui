/* Developed by FireSeed - Fueling Innovation */
import { useState, useMemo } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';

import { Copy, Check, Download, Terminal, FileCode2 } from 'lucide-react';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export interface CodeBlockProps {
  code: string;
  language?: 'tsx' | 'typescript' | 'javascript' | 'css' | 'bash' | 'json';
  filename?: string;
  allowDownload?: boolean;
  downloadFilename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language = 'tsx',
  filename,
  allowDownload = false,
  downloadFilename,
  showLineNumbers = false,
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const highlightedHtml = useMemo(() => {
    const lang = language === 'tsx' ? 'tsx' : language;
    const grammar = Prism.languages[lang] || Prism.languages.javascript || Prism.languages.markup;
    try {
      return Prism.highlight(code.trim(), grammar, lang);
    } catch {
      return code.trim();
    }
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      haptics.success();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleDownload = () => {
    haptics.light();
    const fileName = downloadFilename || filename || `fireseed-${language}.${language === 'tsx' ? 'tsx' : language}`;
    const blob = new Blob([code.trim()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const isTerminal = language === 'bash';

  return (
    <div
      className={cn(
        'group rounded-2xl overflow-hidden border border-white/10 bg-primary shadow-2xl transition-all duration-300 font-mono text-xs sm:text-sm',
        className
      )}
    >
      {/* Header estilo IDE / Mac Tab */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-card border-b border-white/10 select-none">
        <div className="flex items-center gap-2.5 truncate">
          {/* Semáforo IDE */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>

          <div className="flex items-center gap-1.5 ml-1 truncate text-muted/80">
            {isTerminal ? (
              <Terminal className="w-3.5 h-3.5 text-accent shrink-0" />
            ) : (
              <FileCode2 className="w-3.5 h-3.5 text-muted shrink-0" />
            )}
            <span className="text-[11px] sm:text-xs font-semibold truncate text-foreground font-mono">
              {filename || (isTerminal ? 'Terminal' : `${language.toUpperCase()}`)}
            </span>
          </div>
        </div>

        {/* Acciones: Copiar y Descargar */}
        <div className="flex items-center gap-1.5 shrink-0">
          {allowDownload && (
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary hover:bg-card border border-white/15 text-foreground text-xs transition-all active:scale-95 cursor-pointer"
              title="Descargar archivo"
            >
              <Download className="w-3.5 h-3.5 text-accent" />
              <span className="hidden sm:inline font-sans text-[11px]">Descargar</span>
            </button>
          )}

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary hover:bg-card border border-white/15 text-foreground text-xs transition-all active:scale-95 cursor-pointer"
            title="Copiar al portapapeles"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                <span className="text-emerald-400 font-semibold font-sans text-[11px]">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-muted" />
                <span className="hidden sm:inline font-sans text-[11px]">Copiar</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Contenedor de Código con Highlighting Prism */}
      <div className="relative overflow-x-auto p-4 sm:p-5 text-foreground leading-relaxed custom-scrollbar">
        <pre
          className={cn(
            'font-mono text-xs sm:text-[13px] leading-relaxed',
            showLineNumbers && 'line-numbers'
          )}
        >
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        </pre>
      </div>
    </div>
  );
}

