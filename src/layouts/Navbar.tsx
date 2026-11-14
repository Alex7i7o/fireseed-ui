/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Search, Copy, Check, Menu, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { haptics } from '../utils/haptics';
import isotypeF3Capas from '../assets/brand/01_Isotipo/Isotipo_F_3Capas_Oficial_Dark.svg';

export interface NavbarProps {
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
}

export function Navbar({ onOpenSearch, onOpenMobileMenu }: NavbarProps) {
  const [copied, setCopied] = useState(false);

  // En cualquier entorno (local 5173 o producción), la web raíz es /
  const mainSiteUrl = '/';

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
    <header className="sticky top-0 z-40 w-full border-b border-[#9EA2E2]/15 bg-[#120524]/85 backdrop-blur-xl transition-colors">
      <div className="flex h-16 items-center justify-between px-4 sm:px-8 max-w-7xl mx-auto">
        {/* Izquierda: Logo y Branding Oficial FireSeed */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenMobileMenu}
            className="md:hidden p-2 rounded-xl text-[#9EA2E2] hover:text-[#FFF6DF] hover:bg-white/5 active:scale-95 transition-all min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
            aria-label="Abrir menú"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link to="/docs/overview" className="flex items-center gap-3 group shrink-0">
            {/* Isotipo Oficial: F de 3 Capas */}
            <div className="relative flex items-center justify-center shrink-0">
              <img
                src={isotypeF3Capas}
                alt="FireSeed Isotipo Oficial F de 3 Capas"
                className="w-8 h-8 object-contain drop-shadow-[0_0_14px_rgba(251,191,36,0.45)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Logotipo Oficial Tipográfico con Posterama */}
            <div className="flex items-baseline gap-1.5 shrink-0">
              <span className="font-['PosteramaCustom',sans-serif] font-extrabold tracking-wider text-[#FFF6DF] text-xl">
                FIRE<span className="text-[#FBBF24]">SEED</span>
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#120524] bg-gradient-to-r from-[#FBBF24] to-[#E67E22] px-1.5 py-0.5 rounded shadow-sm">
                UI
              </span>
            </div>
          </Link>
        </div>

        {/* Centro: Buscador estilo Raycast / Vercel */}
        <div className="hidden sm:flex items-center flex-1 max-w-md mx-6">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 text-xs text-[#9EA2E2]/70 bg-[#241142]/40 hover:bg-[#241142]/70 border border-[#9EA2E2]/20 hover:border-[#FBBF24]/40 rounded-xl transition-all cursor-pointer shadow-inner group"
          >
            <div className="flex items-center gap-2.5">
              <Search className="w-4 h-4 text-[#9EA2E2]/50 group-hover:text-[#FBBF24] transition-colors" />
              <span>Buscar componentes...</span>
            </div>
            <kbd className="flex items-center gap-0.5 px-2 py-0.5 font-mono text-[10px] text-[#9EA2E2] bg-[#120524] rounded-md border border-[#9EA2E2]/25 shadow-sm">
              <span>⌘</span>
              <span>K</span>
            </kbd>
          </button>
        </div>

        {/* Derecha: Acciones rápidas (Volver a la Web, Copiar npm, GitHub) */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Botón hacia la Web Corporativa (fireseed.tech) */}
          <a
            href={mainSiteUrl}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold text-[#FFF6DF] bg-gradient-to-r from-[#FBBF24]/15 to-[#E67E22]/15 hover:from-[#FBBF24]/25 hover:to-[#E67E22]/25 border border-[#FBBF24]/40 transition-all cursor-pointer shadow-2xs group"
            title="Ir a la web principal de FireSeed"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#FBBF24] group-hover:-translate-x-0.5 transition-transform" />
            <span className="font-['PosteramaCustom',sans-serif] text-[10px] sm:text-xs tracking-wider">
              FIRE<span className="text-[#FBBF24]">SEED</span>.TECH
            </span>
          </a>

          {/* Mobile search trigger */}
          <button
            onClick={onOpenSearch}
            className="sm:hidden p-2 rounded-xl text-[#9EA2E2] hover:text-[#FFF6DF] hover:bg-white/5 min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
            aria-label="Buscar"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Botón rápido para copiar comando de instalación */}
          <button
            onClick={copyInstall}
            className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-xl bg-[#241142]/40 hover:bg-[#241142]/70 border border-[#9EA2E2]/20 hover:border-[#FBBF24]/40 text-[#FFF6DF] transition-all active:scale-95 cursor-pointer"
            title="Copiar npm install fireseed-ui"
          >
            <span className="text-[#FBBF24] select-none">$</span>
            <span>npm i fireseed-ui</span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-[#9EA2E2]/60" />
            )}
          </button>

          {/* Enlace GitHub */}
          <a
            href="https://github.com/Alex7i7o/fireseed-ui"
            target="_blank"
            rel="noreferrer"
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-[#9EA2E2] hover:text-[#FFF6DF] hover:bg-white/5 border border-transparent hover:border-[#9EA2E2]/20 transition-all flex items-center gap-2 text-xs font-medium"
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
