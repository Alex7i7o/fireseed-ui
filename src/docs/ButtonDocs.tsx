// src/docs/ButtonDocs.tsx
import { Button } from '../components'; // O la ruta donde tengas tu componente Button

export function ButtonDocs() {
  return (
    <div className="max-w-4xl space-y-10 pb-16">
      
      {/* 1. CABECERA */}
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Button
        </h1>
        <p className="text-lg text-white/60">
          Un botón interactivo modular con soporte nativo para animaciones fluidas, efectos tridimensionales e inyección de resplandores (glows).
        </p>
      </div>

      <hr className="border-white/5" />

      {/* 2. EJEMPLOS EN VIVO */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Variantes del Botón</h2>
        <p className="text-sm text-white/60">
          Podés usar la propiedad <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-accent-main text-xs">variant</code> para cambiar la física y el estilo del componente.
        </p>

        {/* El contenedor donde se lucen tus componentes */}
        <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/5 bg-white/2 p-8 backdrop-blur-sm">
          
          {/* Sólido */}
          <div className="flex flex-col items-center gap-2">
            <Button variant="solid">Botón Principal</Button>
            <span className="text-xs text-white/40 font-mono">variant="solid"</span>
          </div>

          {/* Tu resplandor estrella */}
          <div className="flex flex-col items-center gap-2">
            <Button variant="glow">Botón Estrella</Button>
            <span className="text-xs text-white/40 font-mono">variant="glow"</span>
          </div>

          {/* El calado interno */}
          <div className="flex flex-col items-center gap-2">
            <Button variant="inset">Botón Hundido</Button>
            <span className="text-xs text-white/40 font-mono">variant="inset"</span>
          </div>

        </div>
      </div>

      {/* 3. CÓDIGO DE EJEMPLO */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white">Uso Básico</h3>
        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm leading-relaxed text-white/80">
          {/* Barra superior estética del bloque de código */}
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>App.tsx</span>
            <button className="hover:text-white transition-colors">Copiar</button>
          </div>
          {/* El código de muestra */}
          <pre className="p-4 overflow-x-auto text-white/70">
{`import { Button } from 'fireseed-ui';

export default function App() {
  return (
    <div className="flex gap-4">
      <Button variant="solid">Principal</Button>
      <Button variant="glow">Con Resplandor</Button>
      <Button variant="inset">Efecto Calado</Button>
    </div>
  );
}`}
          </pre>
        </div>
      </div>

      {/* 4. TABLA DE PROPIEDADES (API) */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Referencia de Props (API)</h3>
        <div className="overflow-x-auto rounded-xl border border-white/5 bg-white/1">
          <table className="w-full text-left border-collapse text-sm text-white/70">
            <thead>
              <tr className="border-b border-white/5 bg-white/2 text-xs font-semibold uppercase tracking-wider text-white/50">
                <th className="p-4">Propiedad</th>
                <th className="p-4">Tipo</th>
                <th className="p-4">Por Defecto</th>
                <th className="p-4">Descripción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="p-4 font-mono text-accent-main font-semibold">variant</td>
                <td className="p-4 font-mono text-xs text-white/60">'solid' | 'glow' | 'inset'</td>
                <td className="p-4 font-mono text-xs text-white/40">'solid'</td>
                <td className="p-4">Define el estilo visual, bordes y el tipo de sombreado del botón.</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-accent-main font-semibold">size</td>
                <td className="p-4 font-mono text-xs text-white/60">'sm' | 'md' | 'lg'</td>
                <td className="p-4 font-mono text-xs text-white/40">'md'</td>
                <td className="p-4">Controla los paddings y el tamaño del texto del botón.</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-accent-main font-semibold">...props</td>
                <td className="p-4 font-mono text-xs text-white/60">HTMLMotionProps&lt;'button'&gt;</td>
                <td className="p-4 text-xs text-white/40">-</td>
                <td className="p-4">Soporta cualquier propiedad nativa de un botón de React y animaciones de Framer Motion.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}