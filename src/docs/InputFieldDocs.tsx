/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { InputField, Textarea } from '../components/InputField';
import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';
import { Search, Mail, Lock } from 'lucide-react';

const codigoInput = `import { InputField, Textarea } from 'fireseed-ui';
import { Mail, Lock } from 'lucide-react';

export default function FormularioDemo() {
  return (
    <div className="space-y-4 max-w-md">
      <InputField
        label="Correo Electrónico"
        type="email"
        placeholder="ejemplo@fireseed.com"
        leftIcon={<Mail className="w-4 h-4" />}
      />

      <InputField
        label="Contraseña"
        type="password"
        error="La contraseña debe tener al menos 8 caracteres"
        leftIcon={<Lock className="w-4 h-4" />}
      />

      <Textarea
        label="Comentarios u Observaciones"
        rows={3}
        placeholder="Escribe aquí tu mensaje..."
      />
    </div>
  );
}`;

export function InputFieldDocs() {
  const [email, setEmail] = useState('');
  const [errorExample, setErrorExample] = useState('Este campo es obligatorio');

  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          InputField & Textarea{' '}
          <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Campos de entrada de texto estandarizados con soporte para etiquetas, iconos prefijo/sufijo, mensajes
          de error con estado accesible (<code>aria-invalid</code>) y textos de ayuda.
        </p>
      </div>

      <hr className="border-white/5" />

      <Callout variant="glow" title="Accesibilidad y Ergonomía Táctil">
        Ambos componentes aseguran una altura mínima de 44px para evitar errores al tocar en dispositivos
        móviles, previenen el auto-zoom indeseado del navegador móvil configurando un font-size adecuado (14-16px) y conectan
        semánticamente la etiqueta con el input mediante identificadores dinámicos.
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <CodeBlock code={codigoInput} language="tsx" filename="InputsDemo.tsx" />

        {/* DEMO INTERACTIVA */}
        <div className="mt-6 space-y-6 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm max-w-xl">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Campos en Vivo</h3>

          <InputField
            label="Búsqueda con Icono"
            placeholder="Buscar por nombre, DNI o teléfono..."
            leftIcon={<Search className="w-4 h-4" />}
            helperText="Presiona Enter para filtrar resultados"
          />

          <InputField
            label="Email con Validación"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="usuario@dominio.com"
            leftIcon={<Mail className="w-4 h-4" />}
          />

          <InputField
            label="Campo con Error"
            value="12345"
            error={errorExample}
            onChange={(e) => setErrorExample(e.target.value ? '' : 'Este campo es obligatorio')}
            leftIcon={<Lock className="w-4 h-4" />}
          />

          <Textarea
            label="Área de Texto Multilínea"
            rows={3}
            placeholder="Describa el motivo de la consulta..."
          />
        </div>
      </div>
    </div>
  );
}
