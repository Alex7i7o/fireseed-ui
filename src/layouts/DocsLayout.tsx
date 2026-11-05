/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
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
        {/* 💻 SIDEBAR PARA ESCRITORIO */}
        <Sidebar variant="solid" size="md" className="hidden md:block">
          <SidebarMenu
            sections={docsMenu}
            currentPath={location.pathname}
            linkComponent={Link}
          />
        </Sidebar>

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
                className="fixed bottom-0 top-0 left-0 z-50 w-80 bg-[#0d041a] p-5 border-r border-white/10 overflow-y-auto md:hidden shadow-2xl flex flex-col"
              >
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-accent-main flex items-center justify-center font-black text-black text-xs">
                      FS
                    </div>
                    <span className="font-bold text-white text-base">FireSeed UI</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/5"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <SidebarMenu
                  sections={docsMenu}
                  currentPath={location.pathname}
                  linkComponent={Link}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* 📄 CONTENIDO CENTRAL */}
        <main className="flex-1 px-4 sm:px-8 lg:px-12 py-8 sm:py-12 overflow-y-auto min-w-0">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-4xl mx-auto"
          >
            {children}
            <DocNavigation />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
