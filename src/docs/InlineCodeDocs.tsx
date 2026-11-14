import { Inlinecode } from '../components/InlineCode/InlineCode';
import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';

const codigoEjemploInline = `import { Inlinecode } from 'fireseed-ui';

export function TextoTecnico() {
  return (
    <p>
      Para instalar el paquete, ejecuta <Inlinecode variant="terminal">npm install</Inlinecode> en tu consola.
    </p>
  );
}`;

export function InlineCodeDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          InlineCode <span className="text-sm font-mono font-normal text-accent bg-accent/10 px-2 py-0.5 rounded-md border border-accent/20 ml-2">v1.0.0</span>
        </h1>
        <p className="text-lg text-white/60">
          Componente para mostrar pequeños fragmentos de código o comandos directamente dentro de párrafos de texto.
        </p>
      </div>

      <hr className="border-white/5" />

      {/* 2. FILOSOFÍA DE ARQUITECTURA */}
      <Callout variant='glow'>
        <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
          💡 Arquitectura Basada en Legos
        </h3>
        <p className="text-sm leading-relaxed">
          Pensado para documentaciones técnicas, este componente aplica una tipografía <code className="font-mono text-xs">monoespaciada</code> que respeta la altura de línea de su padre, evitando desacomodar el texto que lo rodea.
        </p>
      </Callout>

      {/* 3. EJEMPLO DE USO COMPLETO */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Instalación y Configuración
        </h2>
        <p className="text-sm text-white/60">
          Úsalo para resaltar variables, nombres de archivos o comandos de terminal:
        </p>

        <CodeBlock
          code={codigoEjemploInline}
          language="tsx"
          filename="TextoTecnico.tsx"
        />
        
        <div className="mt-4 p-6 border border-white/5 rounded-xl bg-black/20">
          <p className="text-white/80">
            Para instalar el paquete, ejecuta <Inlinecode variant="terminal">npm install</Inlinecode> en tu consola. O modifica <Inlinecode variant="solid">App.tsx</Inlinecode>.
          </p>
        </div>
      </div>

      {/* 4. TABLA DE API / PROPS */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          API Reference
        </h2>
        
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-white/40 font-mono">{'<InlineCode /> Props'}</h3>
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
                  <td className="p-3 text-accent font-semibold">variant</td>
                  <td className="p-3 text-purple-400">'solid' | 'terminal'</td>
                  <td className="p-3">'solid'</td>
                  <td className="p-3 text-white/60 font-sans">Estilo de renderizado, 'terminal' simula una consola clásica.</td>
                </tr>
                <tr>
                  <td className="p-3 text-accent font-semibold">size</td>
                  <td className="p-3 text-purple-400">'sm' | 'md' | 'lg'</td>
                  <td className="p-3">'md'</td>
                  <td className="p-3 text-white/60 font-sans">Ajuste opcional de tamaño.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

