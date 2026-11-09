/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Stepper } from '../components/Stepper';
import { Button } from '../components/Button';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { ListOrdered, ArrowRight } from 'lucide-react';

const codigoStepper = `import { useState } from 'react';
import { Stepper, Button } from 'fireseed-ui';

export function DemoProceso() {
  const [paso, setPaso] = useState(1);

  return (
    <div className="space-y-6">
      <Stepper
        currentStep={paso}
        onStepClick={setPaso}
        steps={[
          { title: 'Elegir Disciplina', description: 'Pilates o Funcional' },
          { title: 'Seleccionar Horario', description: 'Día y Camilla' },
          { title: 'Confirmar Abono', description: 'Pago de cuota' }
        ]}
      />
      <Button onClick={() => setPaso((p) => Math.min(2, p + 1))}>
        Siguiente Paso
      </Button>
    </div>
  );
}`;

export function StepperDocs() {
  const [currentStep, setCurrentStep] = useState(1);

  const stepsData = [
    { title: 'Evaluación', description: 'Historial clínico y postura' },
    { title: 'Asignación', description: 'Camilla Reformer y nivel' },
    { title: 'Membresía', description: 'Confirmación y pago' },
    { title: 'Bienvenida', description: 'Primer turno programado' }
  ];

  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          MOLÉCULA • SEGUIMIENTO SECUENCIAL DE PASOS
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Stepper & Timeline
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Indicador visual de progreso secuencial para asistentes (wizards) de onboarding, funnels de reserva y seguimiento de estados, con barras de progreso animadas y soporte de navegación interactiva por clics.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <ListOrdered className="w-4 h-4" /> Feedback de Progreso sin Fricción
          </p>
          <p>
            Muestra claramente las etapas completadas con tilde dorada, el paso actual iluminado con halo perimetral y los pasos pendientes en opacidad tenue para reducir la ansiedad del usuario en procesos de varios pasos.
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Flujo de Registro de Alumno"
          description="Avanza o retrocede de etapa o pulsa directamente sobre cualquier paso:"
          code={codigoStepper}
          filename="StepperDemo.tsx"
          previewClassName="flex-col gap-8 p-8"
        >
          <Stepper
            currentStep={currentStep}
            onStepClick={setCurrentStep}
            steps={stepsData}
          />

          <div className="flex items-center justify-between w-full max-w-md pt-4 border-t border-[#9EA2E2]/15">
            <Button
              variant="outline"
              size="sm"
              disabled={currentStep === 0}
              onClick={() => setCurrentStep((p) => Math.max(0, p - 1))}
            >
              Paso Anterior
            </Button>

            <span className="text-xs font-mono text-[#9EA2E2]">
              Paso {currentStep + 1} de {stepsData.length}
            </span>

            <Button
              variant="glow"
              size="sm"
              disabled={currentStep === stepsData.length - 1}
              onClick={() => setCurrentStep((p) => Math.min(stepsData.length - 1, p + 1))}
              className="flex items-center gap-1"
            >
              <span>Avanzar</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#120524]" />
            </Button>
          </div>
        </ComponentPlayground>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Referencia de Propiedades (API)
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-[#9EA2E2]/20 bg-[#0d041a]/95">
          <table className="w-full text-left text-xs text-[#FFF6DF]">
            <thead className="border-b border-[#9EA2E2]/20 bg-[#120524] text-[#FBBF24] font-mono uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Prop</th>
                <th className="py-3 px-4">Tipo</th>
                <th className="py-3 px-4">Por Defecto</th>
                <th className="py-3 px-4">Descripción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#9EA2E2]/10 font-sans">
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">currentStep</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">number</td>
                <td className="py-3 px-4 font-mono text-white/50">0</td>
                <td className="py-3 px-4 text-white/80">Índice del paso activo (comenzando en 0).</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">steps</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">StepItem[]</td>
                <td className="py-3 px-4 font-mono text-white/50">[]</td>
                <td className="py-3 px-4 text-white/80">Lista de pasos con title, description e icono opcional.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">onStepClick</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">(step: number) =&gt; void</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Habilita hacer clic en cualquier etapa para saltar a ella.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
