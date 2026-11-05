/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { SelectField } from '../components/SelectField';
import { Callout } from '../components/Callout';

const codigoSelect = `import { useState } from 'react';
import { SelectField } from 'fireseed-ui';

export default function SelectDemo() {
  const [rol, setRol] = useState('');

  return (
    <SelectField
      label="Rol de Usuario"
      value={rol}
      onChange={(e) => setRol(e.target.value)}
      placeholder="Elegir rol..."
      options={[
        { value: 'admin', label: 'Administrador' },
        { value: 'profesor', label: 'Profesor / Instructor' },
        { value: 'cliente', label: 'Cliente / Alumno' }
      ]}
    />
  );
}`;

export function SelectFieldDocs() {
  const [val, setVal] = useState('pilates');

  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          SelectField{' '}
          <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Selector desplegable nativo estilizado con chevron decorativo, manejo de opciones tipadas y
          soporte para estados de validación.
        </p>
      </div>

      <hr className="border-white/5" />

      <Callout variant="glow" title="Ventaja del Select Nativo">
        A diferencia de librerías que reinventan selectores en JavaScript y rompen el teclado nativo o los pickers
        de rueda de iOS/Android, SelectField aprovecha el comportamiento nativo del sistema operativo garantizando
        100% de compatibilidad con lectores de pantalla y autocompletado del navegador.
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>SelectDemo.tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">{codigoSelect}</pre>
        </div>

        <div className="mt-6 space-y-4 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm max-w-md">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Selector en Vivo</h3>
          <SelectField
            label="Disciplina Seleccionada"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            options={[
              { value: 'pilates', label: 'Pilates Reformer' },
              { value: 'funcional', label: 'Entrenamiento Funcional' },
              { value: 'yoga', label: 'Hatha Yoga' }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
