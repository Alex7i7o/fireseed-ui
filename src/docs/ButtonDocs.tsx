import { Button } from '../components';
import { Callout } from '../components/Callout';

const codigoEjemploButton = `import { Button } from 'fireseed-ui';

export default function App() {
  return (
    <div className="flex gap-4">
      <Button variant="solid">Principal</Button>
      <Button variant="glow">Con Resplandor</Button>
      <Button variant="inset">Efecto Calado</Button>
    </div>
  );
}`;

export function ButtonDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Button <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20 ml-2">v1.0.0</span>
        </h1>
        <p className="text-lg text-white/60">
          Un botón interactivo modular con soporte nativo para animaciones fluidas, efectos tridimensionales e inyección de resplandores (glows).
        </p>
      </div>

      <hr className="border-white/5" />

      {/* 2. FILOSOFÍA DE ARQUITECTURA */}
      <Callout variant='glow'>
        <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
          💡 Arquitectura Basada en Legos
        </h3>
        <p className="text-sm leading-relaxed">
          Este componente envuelve un botón HTML nativo dentro de un entorno de física animada. Su sistema de variantes te permite cambiar radicalmente el aspecto (desde sólidos planos hasta bordes de neón) simplemente cambiando una palabra, manteniendo una superficie interactiva accesible.
        </p>
      </Callout>

      {/* 3. EJEMPLO DE USO COMPLETO */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Instalación y Configuración
        </h2>
        <p className="text-sm text-white/60">
          Puedes usar la propiedad <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-accent-main text-xs">variant</code> para cambiar la física y el estilo del componente.
        </p>

        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm leading-relaxed text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>App.tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">
            {codigoEjemploButton}
          </pre>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-2">
            <Button variant="solid">Botón Principal</Button>
            <span className="text-xs text-white/40 font-mono">variant="solid"</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="glow">Botón Estrella</Button>
            <span className="text-xs text-white/40 font-mono">variant="glow"</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="inset">Botón Hundido</Button>
            <span className="text-xs text-white/40 font-mono">variant="inset"</span>
          </div>
        </div>
      </div>

      {/* 4. TABLA DE API / PROPS */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          API Reference
        </h2>
        
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-white/40 font-mono">{'<Button /> Props'}</h3>
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
                  <td className="p-4 text-purple-400">'solid' | 'glow' | 'inset'</td>
                  <td className="p-4 text-white/40">'solid'</td>
                  <td className="p-4 text-white/60 font-sans">Define el estilo visual, bordes y el tipo de sombreado del botón.</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-accent-main font-semibold">size</td>
                  <td className="p-4 text-purple-400">'sm' | 'md' | 'lg'</td>
                  <td className="p-4 text-white/40">'md'</td>
                  <td className="p-4 text-white/60 font-sans">Controla los paddings y el tamaño del texto del botón.</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-accent-main font-semibold">...props</td>
                  <td className="p-4 text-purple-400">HTMLMotionProps&lt;'button'&gt;</td>
                  <td className="p-4 text-white/40">-</td>
                  <td className="p-4 text-white/60 font-sans">Soporta cualquier propiedad nativa de un botón de React y animaciones de Framer Motion.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}