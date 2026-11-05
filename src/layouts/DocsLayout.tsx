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
    <div className="relative min-h-screen text-white bg-[#080210] selection:bg-accent-main selection:text-black">
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
                className="fixed bottom-0 top-0 left-0 z-50 w-[85vw] max-w-[320px] bg-[#0d041a] p-5 border-r border-white/10 overflow-y-auto md:hidden shadow-2xl flex flex-col"
              >
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent-main via-amber-400 to-amber-600 flex items-center justify-center font-black text-black text-xs shadow-[0_0_12px_rgba(253,204,4,0.3)]">
                      FS
                    </div>
                    <span className="font-bold text-white text-base">FireSeed UI</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-white/50 hover:text-white hover:bg-white/10 min-w-[40px] min-h-[40px] flex items-center justify-center transition-colors"
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
          </motion.div>
        </main>
      </div>
    </div>
  );
}
