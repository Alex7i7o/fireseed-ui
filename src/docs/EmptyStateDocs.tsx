/* Developed by FireSeed - Fueling Innovation */
import { EmptyState } from '../components/EmptyState';
import { Button } from '../components/Button';
import { Callout } from '../components/Callout';
import { CalendarX, Plus } from 'lucide-react';

const codigoEmpty = `import { EmptyState, Button } from 'fireseed-ui';
import { CalendarX, Plus } from 'lucide-react';

export default function SinTurnos() {
  return (
    <EmptyState
      icon={<CalendarX className="w-7 h-7 text-accent-main" />}
      title="No tienes turnos agendados"
      description="Explora las clases disponibles de esta semana y reserva tu camilla de Pilates Reformer."
      action={
        <Button variant="solid" leftIcon={<Plus className="w-4 h-4" />}>
          Reservar Primer Turno
        </Button>
      }
    />
  );
}`;

export function EmptyStateDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          EmptyState{' '}
          <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Contenedor visual para listas vacías, filtros sin resultados o estados iniciales con llamada a la acción (CTA).
        </p>
      </div>

      <hr className="border-white/5" />

      <Callout variant="glow" title="Diseño Orientado a la Acción">
        Una pantalla vacía sin contexto confunde al usuario. EmptyState guía con un ícono claro, un mensaje
        amistoso y un botón directo para resolver el estado (ej: "Crear primer alumno", "Agendar clase").
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>EmptyStateDemo.tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">{codigoEmpty}</pre>
        </div>

        <div className="mt-6 space-y-4 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Estado Vacío en Vivo</h3>
          <EmptyState
            icon={<CalendarX className="w-7 h-7" />}
            title="No hay clases programadas hoy"
            description="Todos los cupos de hoy fueron completados o no se habilitaron horarios para esta fecha."
            action={
              <Button variant="solid" leftIcon={<Plus className="w-4 h-4" />}>
                Crear Nuevo Horario
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
}
