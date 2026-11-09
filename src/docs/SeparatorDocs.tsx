/* Developed by FireSeed - Fueling Innovation */
import { Separator } from '../components/Separator';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { Split } from 'lucide-react';

const codigoSeparator = `import { Separator, Button } from 'fireseed-ui';

export function DemoSeparador() {
  return (
    <div className="w-full space-y-4">
      <p>Contenido superior</p>
      
      {/* Separador simple con gradiente */}
      <Separator />

      {/* Separador con etiqueta central */}
      <Separator label="O continuar con" />

      <div className="flex items-center gap-4">
        <span>Opción A</span>
        <Separator orientation="vertical" />
        <span>Opción B</span>
      </div>
    </div>
  );
}`;

export function SeparatorDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          ÁTOMO • DELIMITADOR ESTRUCTURAL
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Separator
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Línea divisoria de alta definición con desvanecimiento en gradiente translúcido en los extremos, soporte para etiquetas o badges centrales y orientación horizontal o vertical.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <Split className="w-4 h-4" /> Jerarquía Visual sin Ruido
          </p>
          <p>
            Los separadores comunes de 1px sólido generan cortes duros que saturan la vista. El <code className="font-mono text-[#FBBF24]">Separator</code> de FireSeed aplica un degradado suave de opacidad cero en los bordes hacia el centro, aportando elegancia y orden.
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Variantes y Orientaciones"
          description="Observá la separación limpia entre bloques de contenido:"
          code={codigoSeparator}
          filename="SeparatorDemo.tsx"
          previewClassName="flex-col gap-6 p-8 max-w-md mx-auto"
        >
          <div className="w-full space-y-4 text-center">
            <div className="p-3 bg-[#241142]/40 rounded-xl text-xs text-[#FFF6DF]/80">
              Módulo de Autenticación Principal
            </div>

            <Separator />

            <div className="p-3 bg-[#241142]/40 rounded-xl text-xs text-[#FFF6DF]/80">
              Sección Intermedia
            </div>

            <Separator label="O vincular cuenta" />

            <div className="flex items-center justify-center gap-4 h-10 bg-[#140628] rounded-xl px-4 border border-[#9EA2E2]/15 text-xs">
              <span className="text-[#FBBF24] font-semibold">Google SSO</span>
              <Separator orientation="vertical" />
              <span className="text-[#9EA2E2]">Apple ID</span>
              <Separator orientation="vertical" />
              <span className="text-[#FFF6DF]">Email Directo</span>
            </div>
          </div>
        </ComponentPlayground>
      </div>

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
                <td className="py-3 px-4 font-mono text-[#FBBF24]">orientation</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">'horizontal' | 'vertical'</td>
                <td className="py-3 px-4 font-mono text-white/50">'horizontal'</td>
                <td className="py-3 px-4 text-white/80">Dirección de la línea divisoria.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">label</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">React.ReactNode</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Texto o badge central intercalado en el separador.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">gradient</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">boolean</td>
                <td className="py-3 px-4 font-mono text-white/50">true</td>
                <td className="py-3 px-4 text-white/80">Aplica desvanecimiento translúcido en los extremos.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
