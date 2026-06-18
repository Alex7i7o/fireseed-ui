// src/docs/CardDocs.tsx
import { Card } from '../components/Card'; // Asumiendo que tenés tu componente Card modularizado
import { Button } from '../components/Button'; // Para meter adentro de los ejemplos si querés

export function CardDocs() {
  return (
    <div className="max-w-4xl space-y-10 pb-16">
      
      {/* 1. CABECERA */}
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Card
        </h1>
        <p className="text-lg text-white/60">
          Un contenedor flexible y modular diseñado para agrupar contenido, estructurar dashboards o armar grillas de productos con soporte para resplandores sutiles auto-calculados.
        </p>
      </div>

      <hr className="border-white/5" />

      {/* 2. EJEMPLOS EN VIVO */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Variantes de Tarjetas</h2>
        <p className="text-sm text-white/60">
          Controlá la estética y profundidad del contenedor usando la propiedad <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-accent-main text-xs">variant</code>.
        </p>

        {/* Simulamos una grilla responsive donde metés tus tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm">
          
          {/* Tarjeta Sólida Estándar */}
          <div className="space-y-2">
            <Card variant="solid" className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-white">Tarjeta Sólida</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odit explicabo dicta sint earum.
              </p>
              <Button size="sm" variant="inset">Ver más</Button>
            </Card>
            <p className="text-center text-xs text-white/40 font-mono">variant="solid"</p>
          </div>

          {/* Tarjeta con Resplandor (Glow Sutil) */}
          <div className="space-y-2">
            <Card variant="glow" className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-accent-main">Tarjeta Glow</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odit explicabo dicta sint earum.
              </p>
              <Button size="sm" variant="solid">Acción</Button>
            </Card>
            <p className="text-center text-xs text-white/40 font-mono">variant="glow"</p>
          </div>

        </div>
      </div>

      {/* 3. CÓDIGO DE EJEMPLO */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white">Uso Básico</h3>
        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm leading-relaxed text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>EjemploGrid.tsx</span>
            <button className="hover:text-white transition-colors">Copiar</button>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">
{`import { Card, Button } from 'fireseed-ui';

export default function TarjetaEjemplo() {
  return (
    <Card variant="glow" size="md" className="p-6">
      <h3 className="text-xl font-bold text-white">Título de Card</h3>
      <p className="text-white/70 my-4">
        Contenido interno de la tarjeta configurado dinámicamente.
      </p>
      <Button variant="solid">Aceptar</Button>
    </Card>
  );
}`}
          </pre>
        </div>
      </div>

      {/* 4. TABLA DE PROPIEDADES (API) */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Referencia de Props (API)</h3>
        <div className="overflow-x-auto rounded-xl border border-white/5 bg-white/[0.01]">
          <table className="w-full text-left border-collapse text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02] text-xs font-semibold uppercase tracking-wider text-white/50">
                <th className="p-4">Propiedad</th>
                <th className="p-4">Tipo</th>
                <th className="p-4">Por Defecto</th>
                <th className="p-4">Descripción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="p-4 font-mono text-accent-main font-semibold">variant</td>
                <td className="p-4 font-mono text-xs text-white/60">'solid' | 'glow' | 'glass'</td>
                <td className="p-4 font-mono text-xs text-white/40">'solid'</td>
                <td className="p-4">Determina el color de fondo y si la tarjeta emite un resplandor difuminado trasero (<code className="text-xs text-accent-main">glow-md</code>).</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-accent-main font-semibold">size</td>
                <td className="p-4 font-mono text-xs text-white/60">'sm' | 'md' | 'lg'</td>
                <td className="p-4 font-mono text-xs text-white/40">'md'</td>
                <td className="p-4">Modifica los radios de curvatura (<code className="text-xs text-accent-main">rounded-*</code>) y las proporciones estructurales por defecto del contenedor.</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-accent-main font-semibold">...props</td>
                <td className="p-4 font-mono text-xs text-white/60">HTMLMotionProps&lt;'div'&gt;</td>
                <td className="p-4 text-xs text-white/40">-</td>
                <td className="p-4">Hereda todas las propiedades nativas de una caja contenedora de React y las transiciones físicas de Framer Motion.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}