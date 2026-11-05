/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Button } from '../components/Button';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { Send, Trash2, ArrowRight } from 'lucide-react';

const codigoEjemploButton = `import { Button } from 'fireseed-ui';
import { Trash2, ArrowRight } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="solid">Sólido</Button>
      <Button variant="glow">Resplandor</Button>
      <Button variant="inset">Inset</Button>
      <Button variant="outline">Contorno</Button>
      <Button variant="ghost">Fantasma</Button>
      <Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />}>
        Eliminar
      </Button>
      <Button variant="solid" rightIcon={<ArrowRight className="w-4 h-4" />}>
        Siguiente
      </Button>
      <Button
        variant="solid"
        isLoading={loading}
        onClick={() => setLoading(!loading)}
      >
        Probar Loading
      </Button>
    </div>
  );
}`;

export function ButtonDocs() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-12 pb-16 text-white">
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold text-accent-main bg-accent-main/15 px-2 py-0.5 rounded border border-accent-main/30">
            Átomo
          </span>
          <span className="text-xs text-zinc-500 font-mono">Interactive Button Component</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white">
          Button
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Botón atómico modular con física táctil de resortes (Framer Motion), área mínima táctil accesible
          para móviles (44px), microvibración háptica integrada y estados de carga.
        </p>
      </div>

      <hr className="border-white/10" />

      {/* 2. FILOSOFÍA DE ARQUITECTURA */}
      <Callout variant="glow" title="Arquitectura de Legos & Estándar Nativo">
        Este componente unifica las mejores prácticas de la Metodología FireSeed: cero márgenes duros externos,
        resortes físicos de 400ms estilo Apple, áreas ergonómicas para dedos en pantallas táctiles y vibraciones hápticas
        sutiles en dispositivos compatibles con degradación elegante.
      </Callout>

      {/* 3. PLAYGROUND INTERACTIVO */}
      <ComponentPlayground
        title="Playground Interactivo"
        description="Alterna entre la vista previa y el código fuente. Copia el snippet directamente."
        code={codigoEjemploButton}
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="solid">Sólido</Button>
          <Button variant="glow">Resplandor</Button>
          <Button variant="inset">Inset</Button>
          <Button variant="outline">Contorno</Button>
          <Button variant="ghost">Fantasma</Button>
          <Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />}>
            Eliminar
          </Button>
          <Button variant="solid" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Siguiente
          </Button>
          <Button
            variant="solid"
            isLoading={loading}
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 2000);
            }}
          >
            Probar Loading
          </Button>
        </div>
      </ComponentPlayground>

      {/* TAMAÑOS */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white tracking-tight">Escala de Tamaños (Touch Targets)</h2>
        <div className="p-6 rounded-2xl border border-white/10 bg-[#0d041a] flex flex-wrap items-center gap-4">
          <Button size="sm">Small (36px)</Button>
          <Button size="md">Medium (44px Apple Touch)</Button>
          <Button size="lg">Large (48px)</Button>
          <Button size="icon" aria-label="Icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* 4. TABLA DE API / PROPS */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white tracking-tight">API Reference</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0d041a]">
          <table className="w-full text-left border-collapse text-sm text-zinc-300">
            <thead className="bg-white/[0.04] font-semibold text-white border-b border-white/10">
              <tr>
                <th className="p-4">Propiedad</th>
                <th className="p-4">Tipo</th>
                <th className="p-4">Por Defecto</th>
                <th className="p-4">Descripción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 font-mono text-xs">
              <tr>
                <td className="p-4 text-accent-main font-semibold">variant</td>
                <td className="p-4 text-purple-400">
                  'solid' | 'glow' | 'inset' | 'outline' | 'ghost' | 'destructive' | 'link'
                </td>
                <td className="p-4 text-zinc-400">'solid'</td>
                <td className="p-4 text-zinc-400 font-sans">
                  Estilo visual semántico adaptable al tema.
                </td>
              </tr>
              <tr>
                <td className="p-4 text-accent-main font-semibold">size</td>
                <td className="p-4 text-purple-400">'sm' | 'md' | 'lg' | 'icon'</td>
                <td className="p-4 text-zinc-400">'md'</td>
                <td className="p-4 text-zinc-400 font-sans">
                  Escala y área táctil accesible (mínimo 44px en md/lg).
                </td>
              </tr>
              <tr>
                <td className="p-4 text-accent-main font-semibold">isLoading</td>
                <td className="p-4 text-purple-400">boolean</td>
                <td className="p-4 text-zinc-400">false</td>
                <td className="p-4 text-zinc-400 font-sans">
                  Reemplaza el contenido con un spinner de carga y deshabilita clics.
                </td>
              </tr>
              <tr>
                <td className="p-4 text-accent-main font-semibold">enableHaptics</td>
                <td className="p-4 text-purple-400">boolean</td>
                <td className="p-4 text-zinc-400">true</td>
                <td className="p-4 text-zinc-400 font-sans">
                  Dispara vibración háptica ligera en dispositivos móviles compatibles.
                </td>
              </tr>
              <tr>
                <td className="p-4 text-accent-main font-semibold">leftIcon / rightIcon</td>
                <td className="p-4 text-purple-400">React.ReactNode</td>
                <td className="p-4 text-zinc-400">-</td>
                <td className="p-4 text-zinc-400 font-sans">Iconos decorativos laterales.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
