/* Developed by FireSeed - Fueling Innovation */
import { Breadcrumb } from '../components/Breadcrumb';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { Home, Layers, Calendar } from 'lucide-react';

const codigoBreadcrumb = `import { Breadcrumb } from 'fireseed-ui';
import { Home, Calendar } from 'lucide-react';

export function DemoRuta() {
  return (
    <Breadcrumb
      items={[
        { label: 'Inicio', icon: <Home className="w-3.5 h-3.5" />, href: '/' },
        { label: 'Administración', href: '/admin' },
        { label: 'Agenda & Clases', icon: <Calendar className="w-3.5 h-3.5" /> }
      ]}
    />
  );
}`;

export function BreadcrumbDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          MOLÉCULA • NAVEGACIÓN JERÁRQUICA
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Breadcrumb
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Rastro de migas de pan accesible (WAI-ARIA) para ubicar al usuario dentro de la jerarquía de la aplicación, con soporte para iconos, separadores personalizados y estado activo destacado.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <Layers className="w-4 h-4" /> Orientación Espacial Instantánea
          </p>
          <p>
            Permite que el usuario regrese a niveles superiores de la aplicación con un solo clic, marcando automáticamente el último ítem con <code className="font-mono text-[#FBBF24]">aria-current="page"</code> y color oro solar.
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Rastro de Navegación de Estudio"
          description="Ejemplo de jerarquía de rutas dentro de un panel de gestión:"
          code={codigoBreadcrumb}
          filename="BreadcrumbDemo.tsx"
          previewClassName="py-12 px-6 flex-col gap-6"
        >
          <Breadcrumb
            items={[
              { label: 'Inicio', icon: <Home className="w-3.5 h-3.5" />, onClick: () => alert('Ir a Inicio') },
              { label: 'Gestión de Alumnos', onClick: () => alert('Ir a Alumnos') },
              { label: 'Ficha Médica & Pilates', icon: <Calendar className="w-3.5 h-3.5" /> }
            ]}
          />
        </ComponentPlayground>
      </div>

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
                <td className="py-3 px-4 font-mono text-[#FBBF24]">items</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">BreadcrumbItem[]</td>
                <td className="py-3 px-4 font-mono text-white/50">[]</td>
                <td className="py-3 px-4 text-white/80">Lista ordenada de eslabones de la ruta.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">separator</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">React.ReactNode</td>
                <td className="py-3 px-4 font-mono text-white/50">&lt;ChevronRight /&gt;</td>
                <td className="py-3 px-4 text-white/80">Elemento visual colocado entre cada eslabón.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
