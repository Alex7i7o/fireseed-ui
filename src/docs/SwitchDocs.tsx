/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Switch } from '../components/Switch';
import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';

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
          <span className="text-sm font-mono font-normal text-accent bg-accent/10 px-2 py-0.5 rounded-md border border-accent/20">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Interruptor deslizable con animación física de resorte (Framer Motion spring), accesibilidad de teclado
          (<code>role="switch"</code>) y feedback háptico táctil.
        </p>
      </div>

      <hr className="border-white/5" />

      <Callout variant="glow" title="Física Táctil">
        El interruptor reacciona con un resorte elástico (stiffness: 500, damping: 30) imitando la tensión
        mecánica real de un conmutador físico de precisión, con vibración ligera al conmutar.
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <CodeBlock code={codigoSwitch} language="tsx" filename="SwitchDemo.tsx" />

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

