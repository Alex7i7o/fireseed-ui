/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Drawer } from '../components/Drawer';
import { Button } from '../components/Button';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { PanelRightClose } from 'lucide-react';

const codigoDrawer = `import { useState } from 'react';
import { Drawer, Button } from 'fireseed-ui';

export function DemoDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir Panel Lateral</Button>

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Ficha del Alumno"
        description="Detalle de suscripción y clases pendientes"
        position="right"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-xs text-white/70">
            Contenido complementario que se desliza desde el lateral sin perder el contexto de la pantalla principal.
          </p>
        </div>
      </Drawer>
    </>
  );
}`;

export function DrawerDocs() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'right' | 'left'>('right');

  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          ORGANISMO • PANEL LATERAL DESLIZABLE
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Drawer
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Panel superpuesto deslizable desde el lateral de la pantalla (derecha o izquierda) con backdrop desenfocado, bloqueo de scroll en el body, física de resortes elásticos y montaje vía Portal.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <PanelRightClose className="w-4 h-4" /> Contextualización sin Salir de Vista
          </p>
          <p>
            Ideal para formularios de creación rápida, filtros avanzados de agenda, detalles de alumnos o carritos de compra donde el usuario necesita consultar o editar datos sin perder su ubicación actual.
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Panel Lateral Deslizable"
          description="Elegí la posición y haz clic en abrir para ver la entrada fluida:"
          code={codigoDrawer}
          filename="DrawerDemo.tsx"
          previewClassName="py-12 gap-4 flex-col"
        >
          <div className="flex items-center gap-2 bg-[#120524] p-1 rounded-xl border border-[#9EA2E2]/20">
            <button
              onClick={() => setPosition('left')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                position === 'left' ? 'bg-[#FBBF24] text-[#120524]' : 'text-[#9EA2E2]'
              }`}
            >
              Desde la Izquierda
            </button>
            <button
              onClick={() => setPosition('right')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                position === 'right' ? 'bg-[#FBBF24] text-[#120524]' : 'text-[#9EA2E2]'
              }`}
            >
              Desde la Derecha
            </button>
          </div>

          <Button variant="solid" onClick={() => setIsOpen(true)}>
            Abrir Drawer ({position === 'right' ? 'Derecha' : 'Izquierda'})
          </Button>

          <Drawer
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="Detalles de Asistencia"
            description="Historial clínico y clases de Pilates"
            position={position}
            size="md"
          >
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-[#241142]/40 border border-[#9EA2E2]/20 space-y-2">
                <span className="text-[10px] uppercase font-mono font-bold text-[#FBBF24]">
                  Alumno Titular
                </span>
                <h4 className="text-base font-bold text-white">Débora Silvestri</h4>
                <p className="text-xs text-[#9EA2E2]">Plan Ilimitado Reformer • Cuota al Día</p>
              </div>

              <div className="space-y-2">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-[#9EA2E2]">
                  Próximos Turnos Agendados
                </h5>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs">
                  <p className="font-semibold text-white">Lunes 18:00hs — Camilla 03</p>
                  <p className="text-[11px] text-[#9EA2E2]/60">Prof. Débora Silvestri</p>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs">
                  <p className="font-semibold text-white">Miércoles 18:00hs — Camilla 03</p>
                  <p className="text-[11px] text-[#9EA2E2]/60">Prof. Débora Silvestri</p>
                </div>
              </div>

              <Button
                variant="glow"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Cerrar Panel
              </Button>
            </div>
          </Drawer>
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
                <td className="py-3 px-4 font-mono text-[#FBBF24]">isOpen</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">boolean</td>
                <td className="py-3 px-4 font-mono text-white/50">false</td>
                <td className="py-3 px-4 text-white/80">Estado de apertura del panel.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">position</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">'left' | 'right'</td>
                <td className="py-3 px-4 font-mono text-white/50">'right'</td>
                <td className="py-3 px-4 text-white/80">Lateral de la pantalla por el que se desliza el panel.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">size</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">'sm' | 'md' | 'lg' | 'xl'</td>
                <td className="py-3 px-4 font-mono text-white/50">'md'</td>
                <td className="py-3 px-4 text-white/80">Ancho máximo del panel deslizable.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
