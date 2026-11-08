/* Developed by FireSeed - Fueling Innovation */
import { Badge } from '../components/Badge';
import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';

const codigoEjemploBadge = `import { Badge } from 'fireseed-ui';

export function Estados() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="solid">Sólido</Badge>
      <Badge variant="secondary">Secundario</Badge>
      <Badge variant="outline">Contorno</Badge>
      <Badge variant="success" dot>En Línea</Badge>
      <Badge variant="warning" dot>Cupos Limitados</Badge>
      <Badge variant="error" dot>Clase Cancelada</Badge>
      <Badge variant="glow">Nivel Oro</Badge>
    </div>
  );
}`;

export function BadgeDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          Badge{' '}
          <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20">
            v2.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Etiquetas atómicas minimalistas para estados, tags y chips con soporte opcional de indicador luminoso (dot).
        </p>
      </div>

      <hr className="border-white/5" />

      {/* 2. FILOSOFÍA */}
      <Callout variant="glow" title="Diseño Semántico Limpio">
        Ideal para mostrar el estado de una reserva (Confirmada, En Espera, Cancelada), la disciplina o el tipo
        de membresía sin ocupar espacio innecesario ni recargar la interfaz.
      </Callout>

      {/* 3. EJEMPLO */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <CodeBlock code={codigoEjemploBadge} language="tsx" filename="BadgeDemo.tsx" />

        <div className="mt-4 flex flex-wrap gap-3 p-6 border border-white/5 rounded-xl bg-black/20">
          <Badge variant="solid">Sólido</Badge>
          <Badge variant="secondary">Secundario</Badge>
          <Badge variant="outline">Contorno</Badge>
          <Badge variant="success" dot>
            Confirmado
          </Badge>
          <Badge variant="warning" dot>
            Lista de Espera
          </Badge>
          <Badge variant="error" dot>
            Ausente
          </Badge>
          <Badge variant="glow">Plan VIP</Badge>
        </div>
      </div>
    </div>
  );
}
