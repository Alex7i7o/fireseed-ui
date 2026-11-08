/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { SelectField } from '../components/SelectField';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';

const codigoSelect = `import { useState } from 'react';
import { SelectField } from 'fireseed-ui';

export default function SelectDemo() {
  const [rol, setRol] = useState('profesor');

  return (
    <SelectField
      label="Rol de Usuario"
      value={rol}
      onChange={setRol}
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
    <div className="space-y-12 pb-16 text-white">
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold text-accent-main bg-accent-main/15 px-2 py-0.5 rounded border border-accent-main/30">
            Átomo
          </span>
          <span className="text-xs text-zinc-500 font-mono">Custom Dropdown Menu</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white">
          SelectField
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Selector desplegable estilizado con esquinas redondeadas, animaciones elásticas de resorte,
          indicador de tilde dorada en la opción activa y detección de click-outside.
        </p>
      </div>

      <hr className="border-white/10" />

      {/* 2. FILOSOFÍA */}
      <Callout variant="glow" title="Diseño Glassmorphism Redondeado">
        A diferencia de los selectores nativos del navegador que despliegan ventanas rígidas del sistema operativo con
        bordes rectos de 90° y colores desalineados, SelectField despliega un menú flotante con esquinas redondeadas
        (<code>rounded-2xl</code>), desenfoque de fondo y paleta integrada.
      </Callout>

      {/* 3. PLAYGROUND INTERACTIVO */}
      <ComponentPlayground
        title="Demostración Interactiva"
        description="Haz clic en el selector para desplegar el menú de opciones redondeado con microanimación."
        code={codigoSelect}
      >
        <div className="w-full max-w-sm">
          <SelectField
            label="Disciplina Seleccionada"
            value={val}
            onChange={setVal}
            options={[
              { value: 'pilates', label: 'Pilates Reformer' },
              { value: 'funcional', label: 'Entrenamiento Funcional' },
              { value: 'yoga', label: 'Hatha Yoga' },
              { value: 'postural', label: 'Reeducación Postural (RPG)' }
            ]}
          />
        </div>
      </ComponentPlayground>
    </div>
  );
}
