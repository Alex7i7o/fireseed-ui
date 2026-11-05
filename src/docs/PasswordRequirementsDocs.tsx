/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { PasswordRequirements } from '../components/PasswordRequirements';
import { InputField } from '../components/InputField';
import { Callout } from '../components/Callout';

const codigoPwd = `import { useState } from 'react';
import { InputField, PasswordRequirements } from 'fireseed-ui';

export default function RegistroPassword() {
  const [pwd, setPwd] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <div className="space-y-3 max-w-sm">
      <InputField
        label="Nueva Contraseña"
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />

      <InputField
        label="Confirmar Contraseña"
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />

      <PasswordRequirements
        password={pwd}
        passwordConfirm={confirm}
        showConfirm={true}
      />
    </div>
  );
}`;

export function PasswordRequirementsDocs() {
  const [pwd, setPwd] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          PasswordRequirements{' '}
          <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Validador interactivo en tiempo real de reglas de fortaleza de contraseñas con confirmación y
          animación elástica de altura.
        </p>
      </div>

      <hr className="border-white/5" />

      <Callout variant="glow" title="Feedback Inmediato">
        Elimina la frustración de que el usuario envíe un formulario para recién enterarse de qué regla falló.
        A medida que se tipea, cada requisito (mínimo 8 caracteres, mayúsculas, números, caracteres especiales y coincidencia)
        se ilumina instantáneamente en verde.
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>PasswordDemo.tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">{codigoPwd}</pre>
        </div>

        <div className="mt-6 space-y-4 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm max-w-md">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Pruébalo en Vivo</h3>

          <InputField
            label="Escribe una contraseña"
            type="password"
            placeholder="Probá escribiendo: FireSeed2026!"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />

          <InputField
            label="Repite la contraseña"
            type="password"
            placeholder="Repite la misma..."
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <PasswordRequirements password={pwd} passwordConfirm={confirm} showConfirm={true} />
        </div>
      </div>
    </div>
  );
}
