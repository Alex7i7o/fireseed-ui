/* Developed by FireSeed - Fueling Innovation */
import { DropdownMenu } from '../components/DropdownMenu';
import { Button } from '../components/Button';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { MoreVertical, Edit2, Copy, Trash2, UserPlus, ExternalLink } from 'lucide-react';

const codigoDropdown = `import { DropdownMenu, Button } from 'fireseed-ui';
import { MoreVertical, Edit2, Copy, Trash2 } from 'lucide-react';

export function DemoMenu() {
  return (
    <DropdownMenu
      trigger={
        <Button variant="outline" size="sm">
          Opciones <MoreVertical className="w-4 h-4 ml-1" />
        </Button>
      }
      items={[
        { label: 'Editar Alumno', icon: <Edit2 className="w-4 h-4" /> },
        { label: 'Duplicar Reserva', icon: <Copy className="w-4 h-4" />, shortcut: '⌘D' },
        { divider: true, label: '' },
        { label: 'Eliminar Turno', icon: <Trash2 className="w-4 h-4" />, destructive: true }
      ]}
    />
  );
}`;

export function DropdownMenuDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          MOLÉCULA • MENÚ DE ACCIONES FLOTANTE
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          DropdownMenu
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Menú desplegable contextual para listas, tablas y tarjetas de administración. Soporta atajos de teclado visuales (kbd), variantes destructivas con alerta háptica, divisores temáticos y cierre automático por clic exterior.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <MoreVertical className="w-4 h-4" /> Densidad de Información Eficiente
          </p>
          <p>
            Permite mantener interfaces limpias ocultando acciones secundarias o de riesgo en un menú compacto que se expande bajo demanda con animación elástica de resorte.
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Menú de Acciones en Tarjeta"
          description="Hacé clic en el botón de opciones para desplegar la lista de acciones:"
          code={codigoDropdown}
          filename="DropdownMenuDemo.tsx"
          previewClassName="p-12 min-h-[300px] items-start justify-center"
        >
          <div className="p-5 rounded-2xl bg-[#140628] border border-[#9EA2E2]/20 flex items-center justify-between gap-8 max-w-sm w-full">
            <div>
              <h4 className="text-sm font-bold text-[#FFF6DF]">Clase Pilates Reformer</h4>
              <p className="text-xs text-[#9EA2E2]/60">Lunes 18:00hs • Instructor: Débora</p>
            </div>

            <DropdownMenu
              trigger={
                <Button variant="ghost" size="sm" className="p-2 min-h-[36px] min-w-[36px]">
                  <MoreVertical className="w-4 h-4 text-[#FBBF24]" />
                </Button>
              }
              items={[
                { label: 'Editar Datos', icon: <Edit2 className="w-4 h-4" />, onClick: () => alert('Editar') },
                { label: 'Asignar Alumno', icon: <UserPlus className="w-4 h-4" />, shortcut: '⌘A' },
                { label: 'Duplicar Horario', icon: <Copy className="w-4 h-4" />, shortcut: '⌘D' },
                { divider: true, label: '' },
                { label: 'Ver Historial', icon: <ExternalLink className="w-4 h-4" /> },
                { label: 'Cancelar Clase', icon: <Trash2 className="w-4 h-4" />, destructive: true, onClick: () => alert('Cancelar') }
              ]}
            />
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
                <td className="py-3 px-4 font-mono text-[#FBBF24]">trigger</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">React.ReactNode</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Elemento visible sobre el cual se hace clic para abrir el menú.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">items</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">DropdownMenuItem[]</td>
                <td className="py-3 px-4 font-mono text-white/50">[]</td>
                <td className="py-3 px-4 text-white/80">Lista de elementos con label, icono, shortcut y callback.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">align</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">'left' | 'right'</td>
                <td className="py-3 px-4 font-mono text-white/50">'right'</td>
                <td className="py-3 px-4 text-white/80">Alineación del popover con respecto al trigger.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
