import { Callout } from '../components/Callout';
import { Inlinecode } from '../components/InlineCode/InlineCode';

const codigoTema = `@theme {
    /* Colores principales */
    --color-primary-main: #110021;
    --color-accent-main: #fdcc04;
}

/* Sombras (Glows) */
@utility glow-xl {
    @apply relative z-0 before:absolute before:-inset-1 before:bg-inherit before:blur-xl before:opacity-40 before:-z-10 before:rounded-[inherit] transition-all duration-300;
}

@utility glow-md {
    @apply relative z-0 before:absolute before:inset-0 before:bg-inherit before:blur-md before:opacity-30 before:-z-10 before:rounded-[inherit] transition-all duration-300;
}

@utility glow-bottom {
    @apply relative z-0 before:absolute before:top-2 before:bottom-[-8px] before:left-2 before:right-2 before:bg-inherit before:blur-lg before:opacity-45 before:-z-10 before:rounded-[inherit] transition-all duration-300;
}`;

export function ThemeDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Temas (Theme) <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20 ml-2">Tailwind v4</span>
        </h1>
        <p className="text-lg text-white/60">
          Personaliza los colores principales y efectos lumínicos del sistema para adaptarlos a la identidad visual de tu marca usando CSS puro.
        </p>
      </div>

      <hr className="border-white/5" />

      {/* 2. FILOSOFÍA DE ARQUITECTURA */}
      <Callout variant='glow'>
        <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
          💡 Arquitectura Basada en Legos
        </h3>
        <p className="text-sm leading-relaxed">
          Fireseed-UI delega por completo la configuración visual en <strong>Tailwind CSS v4</strong>. Gracias a la nueva directiva <Inlinecode variant="solid">@theme</Inlinecode>, puedes cambiar el comportamiento de todos los componentes globales simplemente ajustando un archivo CSS nativo, sin necesidad de envolver tu app en un <Inlinecode variant="solid">ThemeProvider</Inlinecode> pesado de React.
        </p>
      </Callout>

      {/* 3. EJEMPLO DE USO COMPLETO */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Configuración Global
        </h2>
        <p className="text-sm text-white/60">
          En tu archivo <Inlinecode variant="solid">theme.css</Inlinecode> o <Inlinecode variant="solid">index.css</Inlinecode>, define los colores semánticos y los efectos visuales. Todos los componentes de la librería están mapeados internamente a estas variables:
        </p>

        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm leading-relaxed text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>src/theme.css</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">
            {codigoTema}
          </pre>
        </div>
      </div>

      {/* 4. TABLA DE VARIABLES / UTILITIES */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Variables y Utilidades Globales
        </h2>
        
        {/* Tabla Colores */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-white/40 font-mono">Paleta de Colores (@theme)</h3>
          <div className="overflow-x-auto rounded-xl border border-white/5 bg-black/20">
            <table className="w-full text-left border-collapse text-sm text-white/70">
              <thead className="bg-white/5 font-semibold text-white border-b border-white/5">
                <tr>
                  <th className="p-4">Variable</th>
                  <th className="p-4">Valor por Defecto</th>
                  <th className="p-4">Impacto en Componentes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono text-xs">
                <tr>
                  <td className="p-4 font-mono text-accent-main font-semibold">--color-primary-main</td>
                  <td className="p-4 text-white/40 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#110021] border border-white/20"></span>
                    #110021
                  </td>
                  <td className="p-4 text-white/60 font-sans">Color de fondo profundo para Cards, botones hundidos y modales.</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-accent-main font-semibold">--color-accent-main</td>
                  <td className="p-4 text-white/40 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#fdcc04] border border-white/20"></span>
                    #fdcc04
                  </td>
                  <td className="p-4 text-white/60 font-sans">Color principal de acción (botones primarios, badges destacados, focos).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabla Glows */}
        <div className="space-y-2 pt-4">
          <h3 className="text-sm font-semibold text-white/40 font-mono">Clases de Resplandor (@utility)</h3>
          <div className="overflow-x-auto rounded-xl border border-white/5 bg-black/20">
            <table className="w-full text-left border-collapse text-sm text-white/70">
              <thead className="bg-white/5 font-semibold text-white border-b border-white/5">
                <tr>
                  <th className="p-4">Utilidad</th>
                  <th className="p-4">Uso Sugerido</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono text-xs">
                <tr>
                  <td className="p-4 font-mono text-accent-main font-semibold">glow-xl</td>
                  <td className="p-4 text-white/60 font-sans">Glow intenso y amplio. Ideal para llamar fuertemente la atención en botones de Call to Action aislados.</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-accent-main font-semibold">glow-md</td>
                  <td className="p-4 text-white/60 font-sans">Glow difuso y sutil, ajustado de manera equidistante. Se usa en fondos de Tarjetas (Cards) o Contenedores de alerta.</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-accent-main font-semibold">glow-bottom</td>
                  <td className="p-4 text-white/60 font-sans">La luz se desplaza hacia abajo, simulando peso e iluminación superior.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
