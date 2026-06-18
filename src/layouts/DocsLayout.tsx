// src/layouts/DocsLayout.tsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar, SidebarMenu } from '../components/Sidebar';
import { docsMenu } from '../doc-router/docsMenu';
import { motion, AnimatePresence } from 'framer-motion';

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white">
      
      {/* 📱 NAVBAR PARA MOBILE (Solo visible en pantallas chicas) */}
      <header className="sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b border-white/5 bg-[#110021]/80 px-4 backdrop-blur-md md:hidden">
        <h2 className="text-2xl font-bold tracking-wider">
          fireseed<span className="text-accent-main">.ui</span>
        </h2>
        {/* Botón Hamburguesa */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="rounded-lg p-2 hover:bg-white/5 text-accent-main"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <div className="flex">
        
        {/* 💻 SIDEBAR PARA ESCRITORIO (Le agregamos 'hidden md:block') */}
        <Sidebar variant="solid" size="md" className="hidden md:block">
          <div className="mb-8 px-3 py-2">
            <h2 className="text-3xl -ml-4 font-bold tracking-wider text-white">
              Fireseed<span className="text-accent-main">.ui</span>
            </h2>
          </div>
          <SidebarMenu sections={docsMenu} currentPath={location.pathname} linkComponent={Link} />
        </Sidebar>

        {/* 📱 MENU DESPLEGABLE (DRAWER) PARA MOBILE */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Fondo oscuro traslúcido (Backdrop) que cierra el menú al tocarlo */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
              />

              {/* Contenedor del panel que desliza desde la izquierda */}
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                className="fixed bottom-0 top-0 left-0 z-50 w-72 bg-[#110021] p-6 border-r border-white/5 overflow-y-auto md:hidden"
              >
                {/* Botón para cerrar */}
                <div className="flex justify-end mb-4">
                  <button onClick={() => setIsMobileMenuOpen(false)} className="text-white/40 hover:text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Reutilizamos el MISMO SidebarMenu de antes. ¡Un golazo! */}
                <SidebarMenu 
                  sections={docsMenu} 
                  currentPath={location.pathname} 
                  linkComponent={Link} 
                  // Cerramos el menú automáticamente al hacer click en un link
                  onClick={() => {
                    setTimeout(() => {
                      setIsMobileMenuOpen(false);
                    }, 350); // 0.35 segundos es el "sweet spot" para que el resorte termine fluido
                  }}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* CONTENIDO CENTRAL (Se adapta solo cambiando paddings) */}
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  );
}