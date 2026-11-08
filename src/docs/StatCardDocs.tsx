/* Developed by FireSeed - Fueling Innovation */
import { StatCard } from '../components/StatCard';
import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';
import { DollarSign, Users, CalendarCheck } from 'lucide-react';

const codigoStat = `import { StatCard } from 'fireseed-ui';
import { DollarSign, Users } from 'lucide-react';

export default function DashboardMetricas() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <StatCard
        title="Ingresos del Mes"
        value="$ 1.450.000"
        change="+18.4%"
        trend="up"
        icon={<DollarSign className="w-5 h-5" />}
      />

      <StatCard
        title="Alumnas Activas"
        value="128"
        change="-2.1%"
        trend="down"
        icon={<Users className="w-5 h-5" />}
      />
    </div>
  );
}`;

export function StatCardDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          StatCard (Métricas){' '}
          <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Tarjeta analítica para paneles de control (dashboards) con indicador de tendencia porcentual, icono
          destacado y elevación al hover.
        </p>
      </div>

      <hr className="border-white/5" />

      <Callout variant="glow" title="Diseñada para Dashboards Ejecutivos">
        Permite mostrar de un vistazo los indicadores clave de rendimiento (KPIs) con códigos de color
        estandarizados (verde para crecimiento, rojo para descensos, gris para neutral).
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <CodeBlock code={codigoStat} language="tsx" filename="StatCardDemo.tsx" />

        <div className="mt-6 space-y-4 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Tarjetas en Vivo</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard
              title="Facturación Mensual"
              value="$ 2.180.000"
              change="+24.5%"
              trend="up"
              icon={<DollarSign className="w-5 h-5" />}
            />
            <StatCard
              title="Alumnas Activas"
              value="142"
              change="+8"
              trend="up"
              icon={<Users className="w-5 h-5" />}
            />
            <StatCard
              title="Asistencia Promedio"
              value="94.2%"
              change="-1.2%"
              trend="down"
              icon={<CalendarCheck className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
