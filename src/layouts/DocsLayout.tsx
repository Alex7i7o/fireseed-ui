/* Developed by FireSeed - Fueling Innovation */
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar, SidebarMenu } from '../components/Sidebar';
import { docsMenu } from '../doc-router/docsMenu';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { CommandMenu } from '../components/CommandMenu';
import { DocNavigation } from '../docs/DocNavigation';
import { X } from 'lucide-react';
import isotypeF3Capas from '../assets/brand/01_Isotipo/Isotipo_F_3Capas_Oficial_Dark.svg';
import selloEngineered from '../assets/brand/04_Sellos_Subrayados/sello_oficial_engineered_by_fireseed.svg';

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  // 🔄 Desplazamiento automático al inicio al cambiar de ruta
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      mainRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen text-[#FFF6DF] bg-[#0D041A] selection:bg-[#FBBF24] selection:text-[#120524]">
      {/* 🌟 Capas de Iluminación Ambiental y Malla de Ingeniería */}
      <div className="ambient-glow" />
      <div className="blueprint-grid" />

      {/* 🚀 Navbar Superior Unificado (Desktop & Mobile) */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* ⌘K Buscador Global Modal */}
      <CommandMenu isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <div className="relative z-10 flex max-w-7xl mx-auto">
        {/* 💻 SIDEBAR PARA ESCRITORIO (Solo visible en md y superiores) */}
        <div className="hidden md:block shrink-0">
          <Sidebar variant="solid" size="md">
            <SidebarMenu
              sections={docsMenu}
              currentPath={location.pathname}
              linkComponent={Link}
              autoScrollActive={true}
            />
          </Sidebar>
        </div>

        {/* 📱 MENU DRAWER PARA MOBILE */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md md:hidden"
              />

              {/* Drawer */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                className="fixed bottom-0 top-0 left-0 z-50 w-[85vw] max-w-[320px] bg-[#120524] p-5 border-r border-[#9EA2E2]/20 overflow-y-auto md:hidden shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#9EA2E2]/15">
                    <div className="flex items-center gap-2.5 shrink-0">
                      <img
                        src={isotypeF3Capas}
                        alt="FireSeed Isotipo Oficial F de 3 Capas"
                        className="w-7 h-7 object-contain drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]"
                      />
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-['PosteramaCustom',sans-serif] font-extrabold tracking-wider text-[#FFF6DF] text-base">
                          FIRE<span className="text-[#FBBF24]">SEED</span>
                        </span>
                        <span className="text-[10px] font-mono font-bold tracking-widest text-[#120524] bg-gradient-to-r from-[#FBBF24] to-[#E67E22] px-1.5 py-0.5 rounded shadow-sm">
                          UI
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-xl text-[#9EA2E2] hover:text-[#FFF6DF] hover:bg-white/5 min-w-[40px] min-h-[40px] flex items-center justify-center transition-colors"
                      aria-label="Cerrar menú"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <SidebarMenu
                    sections={docsMenu}
                    currentPath={location.pathname}
                    linkComponent={Link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    defaultCollapsed={true}
                    autoScrollActive={true}
                  />
                </div>

                {/* Sello Oficial al pie del menú móvil */}
                <div className="pt-6 mt-6 border-t border-[#9EA2E2]/15 flex justify-center">
                  <img
                    src={selloEngineered}
                    alt="Engineered by FireSeed"
                    className="w-48 h-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* 📄 CONTENIDO CENTRAL */}
        <main
          ref={mainRef}
          className="flex-1 px-3.5 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-10 overflow-y-auto min-w-0"
        >
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-4xl mx-auto w-full"
          >
            {children}
            <DocNavigation />

            {/* 🛡️ Footer Oficial con Sello de Ingeniería y Garantía Modular */}
            <footer className="mt-16 pt-10 pb-6 border-t border-[#9EA2E2]/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#9EA2E2]/70">
              <div className="flex items-center gap-4">
                <img
                  src={selloEngineered}
                  alt="Powered by Motor Modular FireSeed Engine™"
                  className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="text-center sm:text-right space-y-1">
                <p className="font-mono text-[#FFF6DF]">
                  FireSeed UI v0.1.0 • Motor Modular Plug & Play
                </p>
                <p className="text-[11px] text-[#9EA2E2]/50">
                  Arquitectura Microkernel de 3 Capas • Terminaciones de Lujo
                </p>
              </div>
            </footer>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
