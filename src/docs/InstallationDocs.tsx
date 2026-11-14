/* Developed by FireSeed - Fueling Innovation */
import { Inlinecode } from "../components/InlineCode/InlineCode";
import { StepBadge } from "../components/StepBadge";
import { Callout } from "../components/Callout";
import { CodeBlock } from "../components/CodeBlock/CodeBlock";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const codigoTerminal = `npm install fireseed-ui framer-motion lucide-react`;

const codigoThemeCSS = `@import "tailwindcss";

@theme {
  /* ============================================================
     VARIABLES GLOBALES DE FIRESEED UI (CSS NATIVO)
     ============================================================ */
  --color-primary: #120524; /* Fondo principal de tarjetas y modales */
  --color-accent: #FBBF24;  /* Color de acción para botones primarios y acentos */
  --color-card: #241142;
  --color-muted: #9EA2E2;
  --color-silk-cream: #FFF6DF;
}

/* Efectos de resplandor óptico (Glow Utilities) */
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
}

@utility glow-md {
  position: relative;
  z-index: 0;
}
@utility glow-md::before {
  content: "";
  position: absolute;
  inset: 0;
  background: inherit;
  filter: blur(8px);
  opacity: 0.3;
  z-index: -10;
  border-radius: inherit;
  transition: all 0.3s;
}`;

const codigoPrimerUso = `import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from 'fireseed-ui';

export default function MiApp() {
  return (
    <div className="min-h-screen bg-[#120524] text-[#FFF6DF] flex items-center justify-center p-6">
      <Card hoverEffect className="max-w-sm space-y-4 p-6 bg-[#241142]/60 border border-[#9EA2E2]/25">
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Mi Primer Componente</CardTitle>
          <Badge variant="glow">Activo</Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-[#9EA2E2]">
            ¡Tu entorno ya está configurado y funcionando!
          </p>
          <Button variant="glow" className="w-full">
            Probar Botón con Glow
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}`;

export function InstallationDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          GUÍA RÁPIDA • INSTALACIÓN PASO A PASO
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Instalación
        </h1>
        
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Configurá <strong>fireseed-ui</strong> en tu proyecto de React con TypeScript y Tailwind CSS en menos de 2 minutos. Todo el proceso está guiado paso a paso para que no tengas dudas ni fricciones.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      {/* 2. PASO 1: INSTALAR DEPENDENCIAS */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <StepBadge variant="glow">1</StepBadge>
          <div>
            <h2 className="text-xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
              Instalar Dependencias en tu Terminal
            </h2>
            <p className="text-xs text-[#9EA2E2]/70">
              Instala la librería junto a Framer Motion (para físicas táctiles elásticas) y Lucide React (para iconografía).
            </p>
          </div>
        </div>

        <CodeBlock
          code={codigoTerminal}
          language="bash"
          filename="Terminal (npm / pnpm / yarn / bun)"
        />
      </div>

      {/* 3. PASO 2: CONFIGURACIÓN CSS (THEME.CSS) */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <StepBadge variant="glow">2</StepBadge>
          <div>
            <h2 className="text-xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
              Registrar los Colores y Efectos en tu CSS
            </h2>
            <p className="text-xs text-[#9EA2E2]/70">
              ¿Por qué es necesario este paso? Los componentes consumen variables CSS para que puedas cambiar los colores fácilmente.
            </p>
          </div>
        </div>

        <Callout variant="glow">
          <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
            <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> ¿Cómo funciona la hoja de temas?
            </p>
            <p>
              La librería utiliza <strong>Tailwind CSS v4</strong> con la directiva <Inlinecode variant="solid">@theme</Inlinecode>. 
              Si declarás estas variables en tu archivo CSS principal (por ejemplo <Inlinecode variant="solid">src/theme.css</Inlinecode> o <Inlinecode variant="solid">src/index.css</Inlinecode>), todos los componentes adoptarán automáticamente los fondos oscuros profundos y los botones de alta visibilidad.
            </p>
            <p className="text-[#9EA2E2]">
              <strong>¿Querés usar tus propios colores de marca?</strong> Podés cambiar <Inlinecode variant="solid">--color-accent</Inlinecode> por el color que quieras (azul, verde, rojo, etc.) o sobrescribir cualquier color directamente en cada componente usando <Inlinecode variant="solid">className="bg-..."</Inlinecode>.
            </p>
          </div>
        </Callout>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-[#9EA2E2]/80">
            <span>Podés copiar el código a continuación o descargarlo listo con un clic:</span>
          </div>

          <CodeBlock
            code={codigoThemeCSS}
            language="css"
            filename="src/theme.css"
            allowDownload={true}
            downloadFilename="theme.css"
          />
        </div>
      </div>

      {/* 4. PASO 3: IMPORTAR Y USAR */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <StepBadge variant="glow">3</StepBadge>
          <div>
            <h2 className="text-xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
              Importar y Probar tu Primer Componente
            </h2>
            <p className="text-xs text-[#9EA2E2]/70">
              Importá los componentes atómicos en cualquier pantalla o vista de tu aplicación:
            </p>
          </div>
        </div>

        <CodeBlock
          code={codigoPrimerUso}
          language="tsx"
          filename="src/App.tsx"
        />
      </div>

      {/* 5. PRÓXIMO PASO: IR A LA GUÍA DE USO */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#241142] to-[#120524] border border-[#FBBF24]/30 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-[#FBBF24] uppercase">¿Listo para personalizar?</span>
          <h3 className="text-lg font-bold text-[#FFF6DF]">Aprende a cambiar colores con Tailwind y Props</h3>
          <p className="text-xs text-[#9EA2E2]/80 max-w-lg">
            Mirá la nueva guía interactiva donde mostramos ejemplos prácticos de cómo cambiar colores sobre la marcha usando <Inlinecode variant="solid">className</Inlinecode>.
          </p>
        </div>

        <Link
          to="/docs/usage"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-[#FBBF24] hover:bg-[#FBBF24]/90 text-[#120524] shadow-lg transition-all shrink-0 cursor-pointer"
        >
          Ver Guía de Uso & Personalización
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}

