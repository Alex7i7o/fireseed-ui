/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Search, Copy, Check, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { haptics } from '../utils/haptics';

export interface NavbarProps {
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
}

export function Navbar({ onOpenSearch, onOpenMobileMenu }: NavbarProps) {
  const [copied, setCopied] = useState(false);

  const copyInstall = async () => {
    try {
      await navigator.clipboard.writeText('npm install fireseed-ui');
      haptics.success();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#080210]/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-4 sm:px-8 max-w-7xl mx-auto">
        {/* Izquierda: Logo y Branding */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenMobileMenu}
            className="md:hidden p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 active:scale-95 transition-all"
            aria-label="Abrir menú"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link to="/docs/overview" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent-main via-amber-400 to-amber-600 flex items-center justify-center font-black text-black text-sm shadow-[0_0_15px_rgba(253,204,4,0.4)] group-hover:scale-105 transition-transform">
              FS
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-extrabold tracking-tight text-white text-lg sm:text-xl">
                FireSeed
              </span>
              <span className="text-xs font-mono font-semibold text-accent-main bg-accent-main/15 px-1.5 py-0.5 rounded border border-accent-main/30">
                UI
              </span>
            </div>
          </Link>
        </div>

        {/* Centro: Buscador estilo Raycast / Vercel */}
        <div className="hidden sm:flex items-center flex-1 max-w-md mx-6">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 text-xs text-white/50 bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 rounded-xl transition-all cursor-pointer shadow-inner group"
          >
            <div className="flex items-center gap-2.5">
              <Search className="w-4 h-4 text-white/40 group-hover:text-accent-main transition-colors" />
              <span>Buscar componentes...</span>
            </div>
            <kbd className="flex items-center gap-0.5 px-2 py-0.5 font-mono text-[10px] text-white/60 bg-white/10 rounded-md border border-white/10 shadow-sm">
              <span>⌘</span>
              <span>K</span>
            </kbd>
          </button>
        </div>

        {/* Derecha: Acciones rápidas (Copiar npm, GitHub) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile search trigger */}
          <button
            onClick={onOpenSearch}
            className="sm:hidden p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5"
            aria-label="Buscar"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Botón rápido para copiar comando de instalación */}
          <button
            onClick={copyInstall}
            className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white/80 transition-all active:scale-95 cursor-pointer"
            title="Copiar npm install fireseed-ui"
          >
            <span className="text-accent-main select-none">$</span>
            <span>npm i fireseed-ui</span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-white/40" />
            )}
          </button>

          {/* Enlace GitHub */}
          <a
            href="https://github.com/Alex7i7o/fireseed-ui"
            target="_blank"
            rel="noreferrer"
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-white/70 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex items-center gap-2 text-xs font-medium"
            title="Ver repositorio en GitHub"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
