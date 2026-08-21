import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Callout } from '../components/Callout';

const codigoEjemploCard = `import { Card, Button } from 'fireseed-ui';

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
}`;

export function CardDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Card <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20 ml-2">v1.0.0</span>
        </h1>
        <p className="text-lg text-white/60">
          Un contenedor flexible y modular diseñado para agrupar contenido, estructurar dashboards o armar grillas de productos con soporte para resplandores sutiles auto-calculados.
        </p>
      </div>

      <hr className="border-white/5" />

      {/* 2. FILOSOFÍA DE ARQUITECTURA */}
      <Callout variant='glow'>
        <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
          💡 Arquitectura Basada en Legos
        </h3>
        <p className="text-sm leading-relaxed">
          Las tarjetas son los contenedores primarios de cualquier aplicación moderna. Esta implementación proporciona las cajas base sobre las cuales puedes inyectar cualquier tipo de contenido o componente hijo, desligando la estructura externa de la lógica interna de la tarjeta.
        </p>
      </Callout>

      {/* 3. EJEMPLO DE USO COMPLETO */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Instalación y Configuración
        </h2>
        <p className="text-sm text-white/60">
          Controlá la estética y profundidad del contenedor usando la propiedad <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-accent-main text-xs">variant</code>.
        </p>

        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm leading-relaxed text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>EjemploGrid.tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">
            {codigoEjemploCard}
          </pre>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm">
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

      {/* 4. TABLA DE API / PROPS */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          API Reference
        </h2>
        
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-white/40 font-mono">{'<Card /> Props'}</h3>
          <div className="overflow-x-auto rounded-xl border border-white/5 bg-black/20">
            <table className="w-full text-left border-collapse text-sm text-white/70">
              <thead className="bg-white/5 font-semibold text-white border-b border-white/5">
                <tr>
                  <th className="p-4">Propiedad</th>
                  <th className="p-4">Tipo</th>
                  <th className="p-4">Por Defecto</th>
                  <th className="p-4">Descripción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono text-xs">
                <tr>
                  <td className="p-4 font-mono text-accent-main font-semibold">variant</td>
                  <td className="p-4 text-purple-400">'solid' | 'glow' | 'glass'</td>
                  <td className="p-4 text-white/40">'solid'</td>
                  <td className="p-4 text-white/60 font-sans">Determina el color de fondo y si la tarjeta emite un resplandor difuminado trasero.</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-accent-main font-semibold">size</td>
                  <td className="p-4 text-purple-400">'sm' | 'md' | 'lg'</td>
                  <td className="p-4 text-white/40">'md'</td>
                  <td className="p-4 text-white/60 font-sans">Modifica los radios de curvatura estructurales por defecto del contenedor.</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-accent-main font-semibold">...props</td>
                  <td className="p-4 text-purple-400">HTMLMotionProps&lt;'div'&gt;</td>
                  <td className="p-4 text-white/40">-</td>
                  <td className="p-4 text-white/60 font-sans">Hereda todas las propiedades nativas de una caja contenedora de React.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}