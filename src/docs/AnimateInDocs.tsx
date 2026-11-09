/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { AnimateIn } from '../components/AnimateIn';
import { Callout } from '../components/Callout';
import { Button } from '../components/Button';
import { ComponentPlayground } from './ComponentPlayground';
import { RotateCcw, Sparkles, Flame } from 'lucide-react';
import { haptics } from '../utils/haptics';

const codigoEjemploAnimateIn = `import { AnimateIn } from 'fireseed-ui';

export function MiTarjetaAnimada() {
  return (
    <AnimateIn variant="glow" size="md">
      <div className="p-6 text-center space-y-2">
        <h3 className="text-lg font-bold text-white">¡Aparición Fluida!</h3>
        <p className="text-xs text-white/70">
          Transición gobernada por física de resortes elásticos en GPU.
        </p>
      </div>
    </AnimateIn>
  );
}`;

export function AnimateInDocs() {
  const [animKey, setAnimKey] = useState(0);
  const [variant, setVariant] = useState<'solid' | 'glow' | 'inset'>('glow');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');

  const handleReplay = () => {
    haptics.light();
    setAnimKey((prev) => prev + 1);
  };

  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          ORGANISMO • CONTENEDOR DE ENTRADA ANIMADA
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          AnimateIn
        </h1>

        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Envoltorio animado para transiciones de entrada fluidas (fade & slide vertical) aceleradas por hardware. Ideal para la aparición progresiva de tarjetas, modales o secciones completas sin escribir animaciones repetitivas.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      {/* 2. FILOSOFÍA DE ARQUITECTURA */}
      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Resorte Elástico Zero-Configuración
          </p>
          <p>
            <code className="font-mono text-[#FBBF24]">AnimateIn</code> encapsula un <code className="font-mono text-[#FBBF24]">motion.div</code> pre-calibrado con parámetros de tensión y fricción óptimos (stiffness: 400, damping: 25) para que tus interfaces se sientan vivas y reactivas sin causar mareo visual ni penalizar el rendimiento del navegador.
          </p>
        </div>
      </Callout>

      {/* 3. PLAYGROUND INTERACTIVO CON BOTÓN DE RE-EJECUCIÓN */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
              Demostración Interactiva en Tiempo Real
            </h2>
            <p className="text-xs text-[#9EA2E2]/70">
              Pulsá el botón para re-ejecutar la animación de entrada al instante sin recargar la página:
            </p>
          </div>

          <Button
            variant="glow"
            onClick={handleReplay}
            className="flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-[#120524]" />
            <span>Re-ejecutar Animación</span>
          </Button>
        </div>

        {/* Controles de Personalización */}
        <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl bg-[#241142]/40 border border-[#9EA2E2]/15 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[#9EA2E2] font-semibold">Variante:</span>
            {(['solid', 'glow', 'inset'] as const).map((v) => (
              <button
                key={v}
                onClick={() => {
                  setVariant(v);
                  handleReplay();
                }}
                className={`px-2.5 py-1 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer ${
                  variant === v
                    ? 'bg-[#FBBF24] text-[#120524]'
                    : 'text-[#9EA2E2] hover:text-[#FFF6DF] bg-white/5'
                }`}
              >
                {v.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#9EA2E2] font-semibold">Tamaño:</span>
            {(['sm', 'md', 'lg'] as const).map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSize(s);
                  handleReplay();
                }}
                className={`px-2.5 py-1 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer ${
                  size === s
                    ? 'bg-[#FBBF24] text-[#120524]'
                    : 'text-[#9EA2E2] hover:text-[#FFF6DF] bg-white/5'
                }`}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Contenedor Animado */}
        <ComponentPlayground
          title="Vista Previa de Entrada"
          description="Observá la física de desaceleración y el resplandor perimetral:"
          code={codigoEjemploAnimateIn}
          filename="AnimateInDemo.tsx"
          previewClassName="py-12 flex-col gap-4"
        >
          <AnimateIn
            key={`anim-${animKey}-${variant}-${size}`}
            variant={variant}
            size={size}
            className="w-full max-w-md text-center p-6 space-y-3"
          >
            <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FBBF24]/20 border border-[#FBBF24]/30 flex items-center justify-center text-[#FBBF24]">
              <Flame className="w-6 h-6 animate-pulse" />
            </div>
            <h4 className="text-xl font-bold font-['PosteramaCustom',sans-serif] text-[#FFF6DF]">
              Transición de Entrada Activa
            </h4>
            <p className="text-xs text-[#FFF6DF]/70 leading-relaxed">
              Animación ejecutada #{animKey + 1}. Este bloque entra con un desplazamiento suave en el eje Y y un desvanecimiento simultáneo con renderizado acelerado por GPU.
            </p>
          </AnimateIn>
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
                <td className="py-3 px-4 text-white/80">Estilo visual y resplandor perimetral del contenedor.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">size</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">'sm' | 'md' | 'lg'</td>
                <td className="py-3 px-4 font-mono text-white/50">'md'</td>
                <td className="py-3 px-4 text-white/80">Controla el espaciado interior (padding) del contenedor animado.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">children</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">React.ReactNode</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Elementos React o componentes que serán animados al montar.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">triggerKey</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">unknown</td>
                <td className="py-3 px-4 font-mono text-white/50">undefined</td>
                <td className="py-3 px-4 text-white/80">Valor de estado o clave reactiva que dispara nuevamente la animación al cambiar sin recargar la página.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
