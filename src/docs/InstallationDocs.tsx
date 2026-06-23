import { Inlinecode } from "../components/InlineCode/InlineCode";

export function InstallationDocs() {
  return (
    <div className="max-w-4xl space-y-10 pb-16">
      
      {/* 1. CABECERA */}
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Instalación
        </h1>
        <p className="text-lg text-white/60">
          Aprendé a configurar fireseed-ui en tu proyecto de React con Tailwind CSS v4 y Framer Motion en menos de dos minutos.
        </p>
      </div>

      <hr className="border-white/5" />

      {/* 2. PASO 1: TERMINAL */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-main/10 text-xs font-mono text-accent-main border border-accent-main/20">1</span>
          Instalar dependencias
        </h2>
        <p className="text-sm text-white/60">
          Ejecutá el siguiente comando en la terminal de tu proyecto para instalar la librería y sus motores de animación:
        </p>
        
        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>Terminal</span>
          </div>
          <pre className="p-4 overflow-x-auto text-accent-main">
{`npm install fireseed-ui framer-motion`}
          </pre>
        </div>
      </div>

      {/* 3. PASO 2: CONFIGURACIÓN CSS */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-main/10 text-xs font-mono text-accent-main border border-accent-main/20">2</span>
          Configurar tu Theme
        </h2>
        <p className="text-sm text-white/60">
          Asegurate de registrar las variables de color globales y las utilidades de resplandor en tu archivo de estilos principal 
          (ej: <Inlinecode variant="solid">src/theme.css</Inlinecode>):
        </p>

        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>src/theme.css</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">
{`@import "tailwindcss";

@theme {
  --color-primary-main: #110021;
  --color-accent-main: #fdcc04;
}

/* Las utilidades de resplandor de fireseed-ui */
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

      {/* 4. PASO 4: EJEMPLO DE USO */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-main/10 text-xs font-mono text-accent-main border border-accent-main/20">3</span>
          ¡Listo para rockear!
        </h2>
        <p className="text-sm text-white/60">
          Ya podés importar y usar los componentes atómicos en cualquier parte de tu aplicación de forma modular:
        </p>

        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>src/App.tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">
{`import { Button } from 'fireseed-ui';

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#110021]">
      <Button variant="glow">
        Mi Primer Botón Estrella
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