/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { SidebarMenu } from '../components/Sidebar/SidebarMenu';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { Flame } from 'lucide-react';
import type { MenuSection } from '../doc-router/docsMenu';

const mockMenuSections: MenuSection[] = [
  {
    title: 'Operaciones',
    items: [
      { label: 'Panel General', href: '/demo/dashboard' },
      { label: 'Agenda & Clases', href: '/demo/agenda' },
      { label: 'Alumnos Activos', href: '/demo/alumnos' }
    ]
  },
  {
    title: 'Administración',
    items: [
      { label: 'Planes & Tarifas', href: '/demo/planes' },
      { label: 'Instructores', href: '/demo/instructores' },
      { label: 'Liquidaciones', href: '/demo/finanzas' }
    ]
  },
  {
    title: 'Configuración',
    items: [
      { label: 'Seguridad & Roles', href: '/demo/seguridad' },
      { label: 'Preferencias UI', href: '/demo/ajustes' }
    ]
  }
];

const codigoEjemploSidebar = `import { useState } from 'react';
import { Sidebar, SidebarMenu } from 'fireseed-ui';

export function LayoutApp({ children }) {
  const [currentPath, setCurrentPath] = useState('/dashboard');

  return (
    <div className="flex h-screen bg-[#110021]">
      <Sidebar variant="solid" size="md">
        <SidebarMenu
          sections={menuSections}
          currentPath={currentPath}
          onClick={() => {}}
        />
      </Sidebar>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}`;

export function SidebarDocs() {
  const [currentPath, setCurrentPath] = useState('/demo/dashboard');
  const [sidebarVariant, setSidebarVariant] = useState<'solid' | 'glow' | 'inset'>('solid');

  // Componente de enlace simulado para la demo interactiva
  const MockLink = ({ to, children, className, onClick }: any) => (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        setCurrentPath(to);
        onClick?.();
      }}
      className={className}
    >
      {children}
    </button>
  );

  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          ORGANISMO • NAVEGACIÓN Y ESTRUCTURA DE APLICACIÓN
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Sidebar
        </h1>

        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Barra lateral de navegación ergonómica y modular para paneles administrativos y aplicaciones móviles. Incluye buscador en tiempo real de módulos, secciones desplegables tipo acordeón y resortes de transición en la selección activa.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      {/* 2. FILOSOFÍA DE ARQUITECTURA */}
      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <Flame className="w-4 h-4" /> Arquitectura en 3 Niveles Desacoplados
          </p>
          <p>
            El sistema se divide en tres piezas complementarias: el contenedor base (<code className="font-mono text-[#FBBF24]">Sidebar</code>), el orquestador con filtro reactivo (<code className="font-mono text-[#FBBF24]">SidebarMenu</code>) y los items con pastilla de resorte (<code className="font-mono text-[#FBBF24]">SidebarLink</code>).
          </p>
          <p className="text-[#9EA2E2]">
            Funciona tanto en modo fijo en escritorio como en contenedor deslizable tipo Drawer en celulares, cerrándose de forma inteligente tras cada selección.
          </p>
        </div>
      </Callout>

      {/* 3. DEMOSTRACIÓN INTERACTIVA EN VIVO */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
              Demostración Interactiva en Vivo
            </h2>
            <p className="text-xs text-[#9EA2E2]/70">
              Probá hacer clic en los items, buscar un módulo en el filtro o abrir/cerrar secciones:
            </p>
          </div>

          {/* Selector de Variante */}
          <div className="flex items-center gap-1.5 bg-[#120524] p-1.5 rounded-xl border border-[#9EA2E2]/20">
            {(['solid', 'glow', 'inset'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setSidebarVariant(v)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                  sidebarVariant === v
                    ? 'bg-[#FBBF24] text-[#120524] shadow-sm'
                    : 'text-[#9EA2E2] hover:text-[#FFF6DF] hover:bg-white/5'
                }`}
              >
                {v.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <ComponentPlayground
          title="Sidebar Integrado en Contenedor de Aplicación"
          description="Simulación interactiva de una barra lateral gobernada por estado de ruta:"
          code={codigoEjemploSidebar}
          filename="AppSidebarDemo.tsx"
          previewClassName="p-0 overflow-hidden"
        >
          <div className="w-full flex h-[480px] bg-[#0d041a] border border-[#9EA2E2]/20 rounded-xl overflow-hidden shadow-2xl">
            {/* Sidebar Embebido */}
            <div className="w-64 sm:w-72 shrink-0 border-r border-[#9EA2E2]/15 bg-[#120524]/90 p-3 sm:p-4 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-2 mb-4 px-2">
                <span className="w-3 h-3 rounded-full bg-[#FBBF24] animate-pulse" />
                <span className="font-['PosteramaCustom',sans-serif] font-bold text-sm text-[#FFF6DF] tracking-tight">
                  Studio Admin
                </span>
              </div>

              <SidebarMenu
                sections={mockMenuSections}
                currentPath={currentPath}
                linkComponent={MockLink}
                defaultCollapsed={false}
              />
            </div>

            {/* Vista Principal Simulada */}
            <div className="flex-1 p-6 flex flex-col justify-between bg-[#140628]/40 overflow-y-auto">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#9EA2E2]/15">
                  <div className="text-xs text-[#9EA2E2]/70 font-mono">
                    Ruta activa: <span className="text-[#FBBF24] font-bold">{currentPath}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Sincronizado
                  </span>
                </div>

                <h3 className="text-xl font-bold font-['PosteramaCustom',sans-serif] text-[#FFF6DF]">
                  {mockMenuSections.flatMap((s) => s.items).find((i) => i.href === currentPath)?.label || 'Módulo'}
                </h3>

                <p className="text-xs text-[#FFF6DF]/70 leading-relaxed">
                  El contenido central responde en tiempo real a los clics del usuario en la barra lateral. En pantallas de teléfono móvil, el componente se oculta automáticamente y se despliega como Drawer deslizable mediante un botón de menú tipo hamburguesa.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#241142]/40 border border-[#9EA2E2]/15 text-xs text-[#9EA2E2] flex items-center justify-between">
                <span>Variante aplicada: <strong className="text-[#FBBF24]">{sidebarVariant}</strong></span>
                <span className="text-[11px] font-mono text-white/40">Framer Motion Active</span>
              </div>
            </div>
          </div>
        </ComponentPlayground>
      </div>

      {/* 4. TABLA DE API / PROPS */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Referencia de Propiedades (API)
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-[#9EA2E2]/20 bg-[#0d041a]/95">
          <table className="w-full text-left text-xs text-[#FFF6DF]">
            <thead className="border-b border-[#9EA2E2]/20 bg-[#120524] text-[#FBBF24] font-mono uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Prop</th>
                <th className="py-3 px-4">Tipo</th>
                <th className="py-3 px-4">Por Defecto</th>
                <th className="py-3 px-4">Descripción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#9EA2E2]/10 font-sans">
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">variant</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">'solid' | 'glow' | 'inset'</td>
                <td className="py-3 px-4 font-mono text-white/50">'solid'</td>
                <td className="py-3 px-4 text-white/80">Estilo cromático y resplandor lateral del contenedor.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">size</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">'sm' | 'md' | 'lg'</td>
                <td className="py-3 px-4 font-mono text-white/50">'md'</td>
                <td className="py-3 px-4 text-white/80">Ancho estructural del contenedor (w-60, w-68, w-76).</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">sections</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">MenuSection[]</td>
                <td className="py-3 px-4 font-mono text-white/50">[]</td>
                <td className="py-3 px-4 text-white/80">Estructura de secciones y enlaces jerárquicos a renderizar.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">currentPath</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">string</td>
                <td className="py-3 px-4 font-mono text-white/50">''</td>
                <td className="py-3 px-4 text-white/80">Ruta URL activa para proyectar la pastilla iluminada de selección.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">defaultCollapsed</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">boolean</td>
                <td className="py-3 px-4 font-mono text-white/50">true</td>
                <td className="py-3 px-4 text-white/80">Si es true, mantiene cerrados todos los toggles excepto el activo.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
