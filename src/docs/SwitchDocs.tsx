/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Switch } from '../components/Switch';
import { Callout } from '../components/Callout';

const codigoSwitch = `import { useState } from 'react';
import { Switch } from 'fireseed-ui';

export default function SwitchDemo() {
  const [notif, setNotif] = useState(true);

  return (
    <Switch
      checked={notif}
      onChange={setNotif}
      label="Notificaciones por WhatsApp"
      description="Enviar recordatorio automático 2 horas antes de la clase"
    />
  );
}`;

export function SwitchDocs() {
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(false);

  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          Switch (Toggle){' '}
          <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Interruptor tipo iOS con animación física de resorte (Framer Motion spring), accesibilidad de teclado
          (<code>role="switch"</code>) y feedback háptico táctil.
        </p>
      </div>

      <hr className="border-white/5" />

      <Callout variant="glow" title="Física Táctil">
        El interruptor reacciona con un resorte elástico (stiffness: 500, damping: 30) imitando la tensión
        mecánica real de los conmutadores de Apple, con vibración ligera al conmutar.
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>SwitchDemo.tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">{codigoSwitch}</pre>
        </div>

        <div className="mt-6 space-y-6 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm max-w-lg">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Interruptores en Vivo</h3>

          <Switch
            checked={state1}
            onChange={setState1}
            label="Recordatorios Automáticos"
            description="Avisar a las alumnas antes de cada clase programada"
          />

          <hr className="border-white/5" />

          <Switch
            checked={state2}
            onChange={setState2}
            label="Lista de Espera Activa"
            description="Permitir que otras clientas tomen el lugar si hay cancelación"
          />
        </div>
      </div>
    </div>
  );
}
