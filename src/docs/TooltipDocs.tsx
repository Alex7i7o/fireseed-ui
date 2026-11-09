/* Developed by FireSeed - Fueling Innovation */
import { Tooltip } from '../components/Tooltip';
import { Button } from '../components/Button';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { MessageSquare, Info, ShieldCheck, Download } from 'lucide-react';

const codigoTooltip = `import { Tooltip, Button } from 'fireseed-ui';

export function DemoTooltip() {
  return (
    <div className="flex gap-4">
      <Tooltip content="Guarda los cambios en el servidor" position="top">
        <Button variant="solid">Guardar</Button>
      </Tooltip>

      <Tooltip content="Descargar reporte en formato PDF" position="bottom">
        <Button variant="outline">Descargar</Button>
      </Tooltip>
    </div>
  );
}`;

export function TooltipDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          ÁTOMO • INFORMACIÓN CONTEXTUAL FLOTANTE
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Tooltip
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Micro-globo informativo contextual que se despliega al pasar el cursor o hacer foco en un elemento, con soporte para posicionamiento en 4 direcciones, retardo configurable y animación de resorte.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4" /> Micro-interacción No Invasiva
          </p>
          <p>
            El tooltip utiliza un retardo calibrado de 150ms para evitar parpadeos molestos al mover el cursor rápidamente por la interfaz, cerrándose instantáneamente al perder el foco.
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Direcciones y Elementos Gatilladores"
          description="Pasa el mouse sobre cualquiera de los botones para desplegar el tooltip:"
          code={codigoTooltip}
          filename="TooltipDemo.tsx"
          previewClassName="flex-wrap gap-6 py-16"
        >
          <Tooltip content="Información desplegada hacia arriba" position="top">
            <Button variant="solid" className="flex items-center gap-1.5">
              <Info className="w-4 h-4" /> Arriba (Top)
            </Button>
          </Tooltip>

          <Tooltip content="Configuración y políticas de seguridad" position="bottom">
            <Button variant="glow" className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Abajo (Bottom)
            </Button>
          </Tooltip>

          <Tooltip content="Descargar planilla de asistencia" position="left">
            <Button variant="outline" className="flex items-center gap-1.5">
              <Download className="w-4 h-4" /> Izquierda (Left)
            </Button>
          </Tooltip>

          <Tooltip content="Opciones avanzadas del sistema" position="right">
            <Button variant="inset" className="flex items-center gap-1.5">
              Derecha (Right)
            </Button>
          </Tooltip>
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
                <td className="py-3 px-4 font-mono text-[#FBBF24]">content</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">React.ReactNode</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Contenido o texto mostrado dentro del globo flotante.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">position</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">'top' | 'bottom' | 'left' | 'right'</td>
                <td className="py-3 px-4 font-mono text-white/50">'top'</td>
                <td className="py-3 px-4 text-white/80">Dirección donde se desplegará el tooltip.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">delay</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">number</td>
                <td className="py-3 px-4 font-mono text-white/50">150</td>
                <td className="py-3 px-4 text-white/80">Milisegundos de espera antes de abrirse tras el mouseEnter.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
