import { StepBadge } from '../components/StepBadge/StepBadge';
import { Callout } from '../components/Callout';

const codigoEjemploStep = `import { StepBadge } from 'fireseed-ui';

export function ListaPasos() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <StepBadge variant="solid">1</StepBadge>
        <p>Abre la terminal</p>
      </div>
      <div className="flex items-center gap-3">
        <StepBadge variant="glow">2</StepBadge>
        <p>Instala dependencias</p>
      </div>
      <div className="flex items-center gap-3">
        <StepBadge variant="inset">3</StepBadge>
        <p>Inicia el servidor</p>
      </div>
    </div>
  );
}`;

export function StepBadgeDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          StepBadge <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20 ml-2">v1.0.0</span>
        </h1>
        <p className="text-lg text-white/60">
          Indicadores circulares numéricos, perfectos para listas de pasos, tutoriales o instrucciones secuenciales.
        </p>
      </div>

      <hr className="border-white/5" />

      {/* 2. FILOSOFÍA DE ARQUITECTURA */}
      <Callout variant='glow'>
        <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
          💡 Arquitectura Basada en Legos
        </h3>
        <p className="text-sm leading-relaxed">
          Este componente atómico fuerza proporciones de un círculo perfecto, garantizando que el número siempre esté centrado, sin importar si usas variantes de resplandor o botones opacos.
        </p>
      </Callout>

      {/* 3. EJEMPLO DE USO COMPLETO */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Instalación y Configuración
        </h2>
        <p className="text-sm text-white/60">
          Crea guías interactivas con facilidad combinando StepBadges:
        </p>

        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>Ejemplo de uso</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/80 text-xs leading-relaxed">
            {codigoEjemploStep}
          </pre>
        </div>
        
        <div className="mt-4 p-6 border border-white/5 rounded-xl bg-black/20 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-white/80">
            <StepBadge variant="solid">1</StepBadge>
            <p>Abre la terminal</p>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <StepBadge variant="glow">2</StepBadge>
            <p>Instala dependencias</p>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <StepBadge variant="inset">3</StepBadge>
            <p>Inicia el servidor</p>
          </div>
        </div>
      </div>

      {/* 4. TABLA DE API / PROPS */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          API Reference
        </h2>
        
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-white/40 font-mono">{'<StepBadge /> Props'}</h3>
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black/20">
            <table className="w-full border-collapse text-left text-sm text-white/70">
              <thead className="bg-white/5 font-semibold text-white border-b border-white/5">
                <tr>
                  <th className="p-3">Prop</th>
                  <th className="p-3">Tipo</th>
                  <th className="p-3">Default</th>
                  <th className="p-3">Descripción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono text-xs">
                <tr>
                  <td className="p-3 text-accent-main font-semibold">variant</td>
                  <td className="p-3 text-purple-400">'solid' | 'glow' | 'inset'</td>
                  <td className="p-3">'solid'</td>
                  <td className="p-3 text-white/60 font-sans">El diseño visual del círculo indicador.</td>
                </tr>
                <tr>
                  <td className="p-3 text-accent-main font-semibold">size</td>
                  <td className="p-3 text-purple-400">'sm' | 'md' | 'lg'</td>
                  <td className="p-3">'md'</td>
                  <td className="p-3 text-white/60 font-sans">El diámetro del contenedor circular.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
