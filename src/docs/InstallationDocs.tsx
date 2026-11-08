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
          PRIMEROS PASOS • CONFIGURACIÓN EN REACT
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Instalación
        </h1>
        
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Integrá <strong>fireseed-ui</strong> en tu proyecto de React con TypeScript y Tailwind CSS v4 en tres pasos simples. Cada componente se exporta de forma modular con soporte completo para <em>tree-shaking</em>, por lo que tu aplicación solo incluirá en el paquete final las piezas que realmente importes.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      {/* 2. PASO 1: TERMINAL */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#FFF6DF] flex items-center gap-3 font-['PosteramaCustom',sans-serif]">
          <StepBadge variant="glow">1</StepBadge>
          Instalar el paquete y su motor de animaciones
        </h2>
        <p className="text-sm text-[#FFF6DF]/70">
          Ejecutá el siguiente comando en la raíz de tu proyecto para instalar la librería junto con <Inlinecode variant="solid">framer-motion</Inlinecode>, encargado de las físicas de resorte y transiciones de los componentes:
        </p>
        
        <div className="overflow-hidden rounded-2xl bg-[#120524] border border-[#9EA2E2]/25 font-mono text-sm shadow-xl">
          <div className="flex items-center justify-between bg-[#241142]/60 px-4 py-2 border-b border-[#9EA2E2]/20 text-xs text-[#9EA2E2]">
            <span>Terminal (npm / pnpm / bun)</span>
            <span className="text-[#FBBF24] text-[11px]">Dependencias</span>
          </div>
          <pre className="p-4 overflow-x-auto text-[#FBBF24]">
{`npm install fireseed-ui framer-motion`}
          </pre>
        </div>
      </div>

      {/* 3. PASO 2: CONFIGURACIÓN CSS */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#FFF6DF] flex items-center gap-3 font-['PosteramaCustom',sans-serif]">
          <StepBadge variant="glow">2</StepBadge>
          Declarar las variables en tu hoja de estilos
        </h2>
        <p className="text-sm text-[#FFF6DF]/70">
          Registrá las variables cromáticas y las utilidades de resplandor en tu archivo CSS principal (por ejemplo, <Inlinecode variant="solid">src/theme.css</Inlinecode> o <Inlinecode variant="solid">src/index.css</Inlinecode>):
        </p>

        <div className="overflow-hidden rounded-2xl bg-[#120524] border border-[#9EA2E2]/25 font-mono text-sm shadow-xl">
          <div className="flex items-center justify-between bg-[#241142]/60 px-4 py-2 border-b border-[#9EA2E2]/20 text-xs text-[#9EA2E2]">
            <span>src/theme.css</span>
            <span className="text-[#FFF6DF]/50">Tailwind CSS v4</span>
          </div>
          <pre className="p-4 overflow-x-auto text-[#FFF6DF]/80 text-xs leading-relaxed">
{`@import "tailwindcss";

@theme {
  --color-primary-main: #120524;
  --color-accent-main: #FBBF24;
  --color-royal-aubergine: #241142;
  --color-periwinkle-tech: #9EA2E2;
  --color-silk-cream: #FFF6DF;
}

/* Utilidades de iluminación para variantes glow */
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
          <StepBadge variant="glow">3</StepBadge>
          Importar y ensamblar componentes
        </h2>
        <p className="text-sm text-[#FFF6DF]/70">
          Importá los átomos, moléculas u organismos directamente desde <Inlinecode variant="solid">fireseed-ui</Inlinecode> con autocompletado completo de propiedades en TypeScript:
        </p>

        <div className="overflow-hidden rounded-2xl bg-[#120524] border border-[#9EA2E2]/25 font-mono text-sm shadow-xl">
          <div className="flex items-center justify-between bg-[#241142]/60 px-4 py-2 border-b border-[#9EA2E2]/20 text-xs text-[#9EA2E2]">
            <span>src/App.tsx</span>
            <span className="text-[#FBBF24]">React + TypeScript</span>
          </div>
          <pre className="p-4 overflow-x-auto text-[#FFF6DF]/80 text-xs leading-relaxed">
{`import { Card, CardHeader, CardTitle, CardContent, Button, Badge } from 'fireseed-ui';

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#120524] text-[#FFF6DF] p-6">
      <Card hoverEffect className="max-w-sm space-y-4">
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Módulo Listo</CardTitle>
          <Badge variant="glow">v0.1.0</Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-[#9EA2E2]">
            Tus componentes atómicos ya están configurados y listos para usar.
          </p>
          <Button variant="glow" className="w-full">
            Confirmar Acción
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}`}
          </pre>
        </div>
      </div>

    </div>
  );
}
