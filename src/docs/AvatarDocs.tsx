/* Developed by FireSeed - Fueling Innovation */
import { Avatar, AvatarGroup } from '../components/Avatar';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { UserCheck } from 'lucide-react';

const codigoAvatar = `import { Avatar, AvatarGroup } from 'fireseed-ui';

export function DemoAvatares() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex items-center gap-4">
        <Avatar name="Alex Agüero" size="lg" status="online" />
        <Avatar name="Débora Silvestri" size="md" status="busy" />
        <Avatar name="Micaela Gómez" size="sm" status="away" />
      </div>

      <AvatarGroup max={3} size="md">
        <Avatar name="Carla Benítez" />
        <Avatar name="Agustín Rivas" />
        <Avatar name="Franco Rossi" />
        <Avatar name="Lucía Paz" />
        <Avatar name="Martina López" />
      </AvatarGroup>
    </div>
  );
}`;

export function AvatarDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          ÁTOMO • IDENTIDAD DE USUARIO
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Avatar & AvatarGroup
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Componente de perfil de usuario con cálculo automático de iniciales fallback, indicador de status en tiempo real (online, offline, busy, away), geometría circular o squircle y apilado en grupo con contador residual.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <UserCheck className="w-4 h-4" /> Fallback Inteligente y Geometría Adaptativa
          </p>
          <p>
            Si la imagen remota falla o aún no fue cargada, el componente genera dinámicamente las iniciales en tipografía monoespaciada sobre un fondo en degradado FireSeed, evitando cualquier salto de contenido (CLS).
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Tamaños, Indicadores y Grupos"
          description="Explorá las variantes individuales y el apilado en grupos:"
          code={codigoAvatar}
          filename="AvatarDemo.tsx"
          previewClassName="flex-col gap-8 py-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <Avatar name="Alex Agüero" size="xl" status="online" />
              <span className="text-[11px] font-mono text-[#9EA2E2]/70">size="xl" (Online)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar name="Débora Silvestri" size="lg" status="busy" />
              <span className="text-[11px] font-mono text-[#9EA2E2]/70">size="lg" (Busy)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar name="Micaela Gómez" size="md" status="away" shape="rounded" />
              <span className="text-[11px] font-mono text-[#9EA2E2]/70">size="md" (Squircle)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar name="Carla Benítez" size="sm" status="offline" />
              <span className="text-[11px] font-mono text-[#9EA2E2]/70">size="sm" (Offline)</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 pt-4 border-t border-[#9EA2E2]/15 w-full">
            <span className="text-xs text-[#9EA2E2] font-semibold uppercase tracking-wider">
              Grupo de Instructores (AvatarGroup max=4)
            </span>
            <AvatarGroup max={4} size="lg">
              <Avatar name="Débora Silvestri" />
              <Avatar name="Micaela Gómez" />
              <Avatar name="Agustín Rivas" />
              <Avatar name="Franco Rossi" />
              <Avatar name="Lucía Paz" />
              <Avatar name="Martina López" />
            </AvatarGroup>
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
                <td className="py-3 px-4 font-mono text-[#FBBF24]">name</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">string</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Nombre completo para extraer automáticamente las iniciales.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">src</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">string</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">URL de la imagen de perfil.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">size</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">'xs' | 'sm' | 'md' | 'lg' | 'xl'</td>
                <td className="py-3 px-4 font-mono text-white/50">'md'</td>
                <td className="py-3 px-4 text-white/80">Dimensiones del contenedor (24px a 64px).</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">status</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">'online' | 'offline' | 'busy' | 'away'</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Punto de telemetría de estado del usuario con brillo.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
