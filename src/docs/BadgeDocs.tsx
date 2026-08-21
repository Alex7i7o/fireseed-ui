import { Badge } from '../components/Badge/Badge';
import { Callout } from '../components/Callout';

const codigoEjemploBadge = `import { Badge } from 'fireseed-ui';

export function Estados() {
  return (
    <div className="flex gap-2">
      <Badge variant="solid">Default</Badge>
      <Badge variant="success">Completado</Badge>
      <Badge variant="warning">Pendiente</Badge>
      <Badge variant="error">Fallido</Badge>
    </div>
  );
}`;

export function BadgeDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Badge <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20 ml-2">v1.0.0</span>
        </h1>
        <p className="text-lg text-white/60">
          Etiquetas pequeñas para resaltar estados o información clave en la interfaz.
        </p>
      </div>

      <hr className="border-white/5" />

      {/* 2. FILOSOFÍA DE ARQUITECTURA */}
      <Callout variant='glow'>
        <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
          💡 Arquitectura Basada en Legos
        </h3>
        <p className="text-sm leading-relaxed">
          Un elemento atómico minimalista, diseñado para ser embebido en tablas, tarjetas o listas sin romper el ritmo vertical, con animaciones sutiles de hover incluidas.
        </p>
      </Callout>

      {/* 3. EJEMPLO DE USO COMPLETO */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Instalación y Configuración
        </h2>
        <p className="text-sm text-white/60">
          Uso básico del componente Badge para indicar estados:
        </p>

        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>Ejemplo de uso</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/80 text-xs leading-relaxed">
            {codigoEjemploBadge}
          </pre>
        </div>
        
        <div className="mt-4 flex gap-4 p-6 border border-white/5 rounded-xl bg-black/20">
          <Badge variant="solid">Solid</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
        </div>
      </div>

      {/* 4. TABLA DE API / PROPS */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          API Reference
        </h2>
        
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-white/40 font-mono">{'<Badge /> Props'}</h3>
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
                  <td className="p-3 text-purple-400">'solid' | 'success' | 'warning' | 'error'</td>
                  <td className="p-3">'solid'</td>
                  <td className="p-3 text-white/60 font-sans">El color semántico de la etiqueta.</td>
                </tr>
                <tr>
                  <td className="p-3 text-accent-main font-semibold">size</td>
                  <td className="p-3 text-purple-400">'sm' | 'md' | 'lg'</td>
                  <td className="p-3">'md'</td>
                  <td className="p-3 text-white/60 font-sans">Tamaño de la fuente y espaciado interno.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
