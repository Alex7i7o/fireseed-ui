/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Tabs } from '../components/Tabs';
import { Callout } from '../components/Callout';
import { Calendar, Users, Settings } from 'lucide-react';

const codigoTabs = `import { useState } from 'react';
import { Tabs } from 'fireseed-ui';
import { Calendar, Users, Settings } from 'lucide-react';

export default function PestañasDemo() {
  const [activeTab, setActiveTab] = useState('agenda');

  return (
    <Tabs
      activeId={activeTab}
      onChange={setActiveTab}
      items={[
        { id: 'agenda', label: 'Agenda', icon: <Calendar className="w-4 h-4" /> },
        { id: 'alumnos', label: 'Alumnas', icon: <Users className="w-4 h-4" />, badge: 42 },
        { id: 'ajustes', label: 'Configuración', icon: <Settings className="w-4 h-4" /> }
      ]}
    />
  );
}`;

export function TabsDocs() {
  const [activeTab, setActiveTab] = useState('agenda');

  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          Tabs (Pestañas Flotantes){' '}
          <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Control segmentado de pestañas con indicador activo deslizante mediante resortes físicos de Framer
          Motion (<code>layoutId</code> compartido).
        </p>
      </div>

      <hr className="border-white/5" />

      <Callout variant="glow" title="Efecto Pastilla Deslizante">
        A diferencia de pestañas convencionales que parpadean o se redibujan, el fondo dorado de la pestaña activa
        se desliza suavemente de un botón a otro como una pastilla elástica, ofreciendo una experiencia fluida y de alta gama.
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>TabsDemo.tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">{codigoTabs}</pre>
        </div>

        <div className="mt-6 space-y-4 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Pruébalo en Vivo</h3>
          <div>
            <Tabs
              activeId={activeTab}
              onChange={setActiveTab}
              items={[
                { id: 'agenda', label: 'Agenda Semanal', icon: <Calendar className="w-4 h-4" /> },
                { id: 'alumnos', label: 'Pacientes / Alumnas', icon: <Users className="w-4 h-4" />, badge: 12 },
                { id: 'ajustes', label: 'Reglas de Negocio', icon: <Settings className="w-4 h-4" /> }
              ]}
            />
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-sm text-white/70">
            Pestaña activa actual: <span className="text-accent-main font-bold font-mono">{activeTab}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
