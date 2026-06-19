// src/docs/SidebarDocs.tsx
import React from 'react';

// 🌟 Al guardar el código de ejemplo acá afuera como un string puro, 
// evitamos al 100% que interfiera con el renderizado de React.
const codigoEjemploLayout = `import { useState } from 'react';
import { Sidebar, SidebarMenu } from 'fireseed-ui';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export function DocsLayout({ children }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#110021]">
      {/* 💻 Versión Escritorio */}
      <Sidebar variant="solid" size="md" className="hidden md:block">
        <SidebarMenu 
          sections={menuData} 
          currentPath={location.pathname} 
          linkComponent={Link} 
        />
      </Sidebar>

      {/* 📱 Versión Mobile (Drawer Desplegable) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsOpen(false)} 
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden" 
            />
            <motion.div 
              initial={{ x: '-100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '-100%' }} 
              className="fixed bottom-0 top-0 left-0 z-50 w-72 bg-[#110021] p-6 border-r border-white/5 md:hidden"
            >
              <SidebarMenu 
                sections={menuData} 
                currentPath={location.pathname} 
                linkComponent={Link} 
                onClick={() => setTimeout(() => setIsOpen(false), 350)} 
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}`;

export function SidebarDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Sidebar <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20 ml-2">v1.1.0 (Mobile First)</span>
        </h1>
        <p className="text-lg text-white/60">
          Un contenedor lateral de navegación premium, totalmente agnóstico, responsivo y potenciado con físicas líquidas de Framer Motion.
        </p>
      </div>

      <hr className="border-white/5" />

      {/* 2. FILOSOFÍA DE ARQUITECTURA */}
      <div className="space-y-4 rounded-xl bg-accent-main/5 border border-accent-main/10 p-4">
        <h3 className="text-sm font-bold text-accent-main uppercase tracking-wider flex items-center gap-2">
          💡 Arquitectura Basada en Legos
        </h3>
        <p className="text-sm text-white/70 leading-relaxed">
          Este componente está dividido en tres niveles atómicos: El contenedor estructural (<code className="text-accent-main font-mono text-xs">Sidebar</code>), el iterador inteligente (<code className="text-accent-main font-mono text-xs">SidebarMenu</code>) y el enlace animado individual (<code className="text-accent-main font-mono text-xs">SidebarLink</code>). Esto permite total reutilización en cualquier framework de React.
        </p>
      </div>

      {/* 3. EJEMPLO DE USO COMPLETO */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Instalación y Configuración
        </h2>
        <p className="text-sm text-white/60">
          Así es como integrás el ecosistema del Sidebar completo en tu archivo de Layout global para habilitar el comportamiento de escritorio y el menú desplegable en celulares:
        </p>

        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>src/layouts/DocsLayout.tsx</span>
          </div>
          {/* Inyectamos de forma segura la constante de texto limpia */}
          <pre className="p-4 overflow-x-auto text-white/80 text-xs leading-relaxed">
            {codigoEjemploLayout}
          </pre>
        </div>
      </div>

      {/* 4. TABLA DE API / PROPS */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          API Reference
        </h2>
        
        {/* Props de Sidebar */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-white/40 font-mono">{'<Sidebar /> Props'}</h3>
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black/20">
            <table className="w-full border-collapse text-left text-sm text-white/70">
              <thead className="bg-white/5 font-semibold text-white border-b border-white/5">
                <tr>
                  <th className="p-3">Prop</th>
                  <th className="p-3">Tipo</th>
                  <th className="p-3">Default</th>
                  <th className="p-3">Descripción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono text-xs">
                <tr>
                  <td className="p-3 text-accent-main font-semibold">variant</td>
                  <td className="p-3 text-purple-400">'solid' | 'glass'</td>
                  <td className="p-3">'solid'</td>
                  <td className="p-3 text-white/60 font-sans">Define el fondo: opaco oscuro o traslúcido con blur de fondo.</td>
                </tr>
                <tr>
                  <td className="p-3 text-accent-main font-semibold">size</td>
                  <td className="p-3 text-purple-400">'sm' | 'md' | 'lg'</td>
                  <td className="p-3">'md'</td>
                  <td className="p-3 text-white/60 font-sans">Ancho de la barra lateral (w-56, w-64 o w-72).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Props de SidebarMenu */}
        <div className="space-y-2 pt-2">
          <h3 className="text-sm font-semibold text-white/40 font-mono">{'<SidebarMenu /> Props'}</h3>
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black/20">
            <table className="w-full border-collapse text-left text-sm text-white/70">
              <thead className="bg-white/5 font-semibold text-white border-b border-white/5">
                <tr>
                  <th className="p-3">Prop</th>
                  <th className="p-3">Tipo</th>
                  <th className="p-3">Requerido</th>
                  <th className="p-3">Descripción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono text-xs">
                <tr>
                  <td className="p-3 text-accent-main font-semibold">sections</td>
                  <td className="p-3 text-purple-400">MenuSection[]</td>
                  <td className="p-3 text-red-400">sí</td>
                  <td className="p-3 text-white/60 font-sans">El array estructurado de categorías y links que se va a renderizar.</td>
                </tr>
                <tr>
                  <td className="p-3 text-accent-main font-semibold">currentPath</td>
                  <td className="p-3 text-purple-400">string</td>
                  <td className="p-3 text-red-400">sí</td>
                  <td className="p-3 text-white/60 font-sans">La URL activa del navegador para calcular cuál botón iluminar.</td>
                </tr>
                <tr>
                  <td className="p-3 text-accent-main font-semibold">linkComponent</td>
                  <td className="p-3 text-purple-400">React.ElementType</td>
                  <td className="p-3 text-white/40">no</td>
                  <td className="p-3 text-white/60 font-sans">El componente de enrutamiento nativo del framework utilizado (ej: Link).</td>
                </tr>
                <tr>
                  <td className="p-3 text-accent-main font-semibold">onClick</td>
                  <td className="p-3 text-purple-400">{'() => void'}</td>
                  <td className="p-3 text-white/40">no</td>
                  <td className="p-3 text-white/60 font-sans">Callback opcional útil para aplicar delays de cierre en entornos móviles.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}