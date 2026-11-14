/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { MultiSelect } from '../components/MultiSelect';
import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';

const codigoMulti = `import { useState } from 'react';
import { MultiSelect } from 'fireseed-ui';

interface Profesor {
  id: string;
  nombre: string;
  especialidad: string;
}

export default function AsignarProfesores() {
  const [selected, setSelected] = useState<string[]>(['1']);

  const profesores: Profesor[] = [
    { id: '1', nombre: 'Débora Silvestri', especialidad: 'Pilates Reformer' },
    { id: '2', nombre: 'Micaela Gómez', especialidad: 'Postural' },
    { id: '3', nombre: 'Carla Benítez', especialidad: 'Flexibilidad' }
  ];

  return (
    <MultiSelect<Profesor>
      label="Asignar Profesores a la Clase"
      items={profesores}
      selectedValues={selected}
      onChange={setSelected}
      getValue={(p) => p.id}
      getLabel={(p) => \`\${p.nombre} (\${p.especialidad})\`}
      placeholder="Buscar profesores..."
    />
  );
}`;

export function MultiSelectDocs() {
  const [selected, setSelected] = useState<string[]>(['1', '2']);

  const items = [
    { id: '1', nombre: 'Débora Silvestri', especialidad: 'Pilates Reformer' },
    { id: '2', nombre: 'Micaela Gómez', especialidad: 'Postural' },
    { id: '3', nombre: 'Carla Benítez', especialidad: 'Flexibilidad' },
    { id: '4', nombre: 'Agustín Rivas', especialidad: 'Funcional' }
  ];

  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          MultiSelect (Combobox){' '}
          <span className="text-sm font-mono font-normal text-accent bg-accent/10 px-2 py-0.5 rounded-md border border-accent/20">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Selector múltiple genérico con búsqueda en tiempo real, etiquetas en chips descartables, dropdown
          flotante y click-outside.
        </p>
      </div>

      <hr className="border-white/5" />

      <Callout variant="glow" title="100% Desacoplado del Origen de Datos">
        Diseñado sin acoplamiento a servicios de red ni estructuras fijas: este componente
        es completamente agnóstico a cualquier tipo de dato mediante genéricos de TypeScript (<code>&lt;T&gt;</code>)
        y funciones extractoras de etiqueta/valor (<code>getLabel</code> / <code>getValue</code>).
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <CodeBlock code={codigoMulti} language="tsx" filename="MultiSelectDemo.tsx" />

        <div className="mt-6 space-y-4 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm max-w-lg">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Demostración Interactiva</h3>
          <MultiSelect
            label="Seleccionar Miembros del Equipo"
            items={items}
            selectedValues={selected}
            onChange={setSelected}
            getValue={(item) => item.id}
            getLabel={(item) => `${item.nombre} — ${item.especialidad}`}
          />
        </div>
      </div>
    </div>
  );
}

