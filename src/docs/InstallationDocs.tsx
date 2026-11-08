/* Developed by FireSeed - Fueling Innovation */
import { Inlinecode } from "../components/InlineCode/InlineCode";
import { StepBadge } from "../components/StepBadge";

export function InstallationDocs() {
  return (
    <div className="max-w-4xl space-y-10 pb-20 text-[#FFF6DF]">
      
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          GUÍA DE INTEGRACIÓN • MOTOR PLUG & PLAY
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Instalación & Despliegue
        </h1>
        
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Integrá el motor modular de <strong>fireseed-ui</strong> en tu stack de React con Tailwind CSS v4 en menos de 2 minutos.
          Sin configuraciones crípticas: instalás, importás y ensamblás tus legos con estética de lujo preconfigurada.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      {/* 2. PASO 1: TERMINAL */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#FFF6DF] flex items-center gap-3 font-['PosteramaCustom',sans-serif]">
          <StepBadge variant="glow">1</StepBadge>
          Instalar dependencias del motor
        </h2>
        <p className="text-sm text-[#FFF6DF]/70">
          Ejecutá el siguiente comando en la raíz de tu proyecto para descargar la librería y sus motores de animación gestual:
        </p>
        
        <div className="overflow-hidden rounded-2xl bg-[#120524] border border-[#9EA2E2]/25 font-mono text-sm shadow-xl">
          <div className="flex items-center justify-between bg-[#241142]/60 px-4 py-2 border-b border-[#9EA2E2]/20 text-xs text-[#9EA2E2]">
            <span>Terminal (npm / pnpm / bun)</span>
            <span className="text-[#FBBF24] text-[11px]">Core Package</span>
          </div>
          <pre className="p-4 overflow-x-auto text-[#FBBF24]">
{`npm install fireseed-ui framer-motion`}
          </pre>
        </div>
      </div>

      {/* 3. PASO 2: CONFIGURACIÓN CSS */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#FFF6DF] flex items-center gap-3 font-['PosteramaCustom',sans-serif]">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FBBF24]/10 text-xs font-mono text-[#FBBF24] border border-[#FBBF24]/30">2</span>
          Configurar Tokens en tu Hoja de Estilos
        </h2>
        <p className="text-sm text-[#FFF6DF]/70">
          Registrá los colores maestros de FireSeed en tu archivo CSS principal (ej: <Inlinecode variant="solid">src/theme.css</Inlinecode> o <Inlinecode variant="solid">src/index.css</Inlinecode>):
        </p>

        <div className="overflow-hidden rounded-2xl bg-[#120524] border border-[#9EA2E2]/25 font-mono text-sm shadow-xl">
          <div className="flex items-center justify-between bg-[#241142]/60 px-4 py-2 border-b border-[#9EA2E2]/20 text-xs text-[#9EA2E2]">
            <span>src/theme.css</span>
            <span className="text-[#FFF6DF]/50">Tailwind CSS v4</span>
          </div>
          <pre className="p-4 overflow-x-auto text-[#FFF6DF]/80 text-xs leading-relaxed">
{`@import "tailwindcss";

@theme {
  --color-primary-main: #120524; /* Midnight Violet */
  --color-accent-main: #FBBF24;  /* Solar Gold */
  --color-royal-aubergine: #241142;
  --color-periwinkle-tech: #9EA2E2;
  --color-silk-cream: #FFF6DF;
}

/* Efectos de resplandor atómicos */
@utility glow-bottom {
  position: relative;
  z-index: 0;
}
@utility glow-bottom::before {
  content: "";
  position: absolute;
  top: 2px; bottom: -8px; left: 2px; right: 2px;
  background: inherit;
  filter: blur(12px);
  opacity: 0.45;
  z-index: -10;
  border-radius: inherit;
  transition: all 0.3s;
}`}
          </pre>
        </div>
      </div>

      {/* 4. PASO 3: EJEMPLO DE USO */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#FFF6DF] flex items-center gap-3 font-['PosteramaCustom',sans-serif]">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FBBF24]/10 text-xs font-mono text-[#FBBF24] border border-[#FBBF24]/30">3</span>
          ¡Listo para ensamblar!
        </h2>
        <p className="text-sm text-[#FFF6DF]/70">
          Importá y utilizá los componentes atómicos en cualquier pantalla de tu software. Cero fricción, 100% tipado con TypeScript:
        </p>

        <div className="overflow-hidden rounded-2xl bg-[#120524] border border-[#9EA2E2]/25 font-mono text-sm shadow-xl">
          <div className="flex items-center justify-between bg-[#241142]/60 px-4 py-2 border-b border-[#9EA2E2]/20 text-xs text-[#9EA2E2]">
            <span>src/App.tsx</span>
            <span className="text-[#FBBF24]">React + TypeScript</span>
          </div>
          <pre className="p-4 overflow-x-auto text-[#FFF6DF]/80 text-xs leading-relaxed">
{`import { Button, StatCard, Badge } from 'fireseed-ui';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#120524] text-[#FFF6DF] p-6 space-y-6">
      <Badge variant="glow">Engineered by FireSeed™</Badge>
      
      <StatCard 
        label="Horas Liberadas al Año"
        value="+240 hs"
        description="Automatización de turnos y cobros sin fricción manual"
      />

      <Button variant="glow" onClick={() => alert("¡Motor activado!")}>
        Desplegar Motor Plug & Play
      </Button>
    </div>
  );
}`}
          </pre>
        </div>
      </div>

    </div>
  );
}
