import { AnimateIn } from '../components/AnimateIn';
import { Callout } from '../components/Callout';

const codigoEjemploAnimateIn = `import { AnimateIn } from 'fireseed-ui';

export function MiComponente() {
  return (
    <AnimateIn variant="solid" size="md">
      <h1>¡Hola Mundo!</h1>
      <p>Este contenido aparecerá suavemente desde abajo.</p>
    </AnimateIn>
  );
}`;

export function AnimateInDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          AnimateIn <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20 ml-2">v1.0.0</span>
        </h1>
        <p className="text-lg text-white/60">
          Un contenedor animado para transiciones de entrada fluidas usando Framer Motion. Ideal para que el contenido aparezca suavemente al cargar la página.
        </p>
      </div>

      <hr className="border-white/5" />

      {/* 2. FILOSOFÍA DE ARQUITECTURA */}
      <Callout variant='glow'>
        <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
          💡 Arquitectura Basada en Legos
        </h3>
        <p className="text-sm leading-relaxed">
          Este componente envuelve tu contenido en un <code className="font-mono text-xs">motion.div</code> pre-configurado con animaciones de resorte fluidas (spring) para una aparición pulida sin tener que escribir propiedades de animación repetitivas.
        </p>
      </Callout>

      {/* 3. EJEMPLO DE USO COMPLETO */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Instalación y Configuración
        </h2>
        <p className="text-sm text-white/60">
          Así es como puedes usar AnimateIn para darle vida a tu contenido:
        </p>

        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>Ejemplo de uso</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/80 text-xs leading-relaxed">
            {codigoEjemploAnimateIn}
          </pre>
        </div>
        
        <div className="mt-4 p-6 border border-white/5 rounded-xl bg-black/20">
          <AnimateIn variant="solid" size="md">
            Contenido animado (refresca la página para ver la animación)
          </AnimateIn>
        </div>
      </div>

      {/* 4. TABLA DE API / PROPS */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          API Reference
        </h2>
        
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-white/40 font-mono">{'<AnimateIn /> Props'}</h3>
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
                  <td className="p-3 text-purple-400">'solid' | 'glow' | 'inset'</td>
                  <td className="p-3">'solid'</td>
                  <td className="p-3 text-white/60 font-sans">El estilo visual del contenedor.</td>
                </tr>
                <tr>
                  <td className="p-3 text-accent-main font-semibold">size</td>
                  <td className="p-3 text-purple-400">'sm' | 'md' | 'lg'</td>
                  <td className="p-3">'md'</td>
                  <td className="p-3 text-white/60 font-sans">Controla el padding del contenedor.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
