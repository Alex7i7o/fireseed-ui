/* Developed by FireSeed - Fueling Innovation */
import { Callout } from '../components/Callout';
import { Inlinecode } from '../components/InlineCode/InlineCode';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';

const codigoThemeMaster = `@import "tailwindcss";

@theme {
  /* ============================================================
     VARIABLES SEMÁNTICAS DE FIRESEED UI (@theme)
     ============================================================ */
  --color-midnight-violet: #120524; /* Fondo principal de aplicaciones y modales */
  --color-royal-aubergine: #241142; /* Superficie elevada para Cards y Drawers */
  --color-periwinkle-tech: #9EA2E2; /* Bordes estructurales, líneas guía e íconos */
  --color-solar-gold: #FBBF24;      /* Acento primario de interacción y foco */
  --color-flame-amber: #E67E22;     /* Transiciones cálidas y estados activos */
  --color-silk-cream: #FFF6DF;      /* Texto principal de lectura descansada */

  /* Alias principales consumidos por los componentes atómicos */
  --color-primary-main: #120524;
  --color-accent-main: #FBBF24;

  /* Familias tipográficas */
  --font-display: "PosteramaCustom", sans-serif;
  --font-sans: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}

/* ============================================================
   CLASES DE SUPERFICIE Y ELEVACIÓN (.fs-surface-*)
   ============================================================ */
.fs-surface-gold {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 60%, #E67E22 100%);
  color: #120524;
}

.fs-surface-violet-card {
  background: linear-gradient(180deg, rgba(36, 17, 66, 0.6) 0%, rgba(18, 5, 36, 0.8) 100%);
  border: 1px solid rgba(158, 162, 226, 0.22);
}

/* ============================================================
   UTILIDADES DE RESPLANDOR (@utility)
   ============================================================ */
@utility glow-xl {
  @apply relative z-0 before:absolute before:-inset-1 before:bg-inherit before:blur-xl before:opacity-40 before:-z-10 before:rounded-[inherit] transition-all duration-300;
}

@utility glow-md {
  @apply relative z-0 before:absolute before:inset-0 before:bg-inherit before:blur-md before:opacity-30 before:-z-10 before:rounded-[inherit] transition-all duration-300;
}

@utility glow-bottom {
  @apply relative z-0 before:absolute before:top-2 before:bottom-[-8px] before:left-2 before:right-2 before:bg-inherit before:blur-lg before:opacity-45 before:-z-10 before:rounded-[inherit] transition-all duration-300;
}`;

interface ColorToken {
  name: string;
  cssVar: string;
  role: string;
  hex: string;
  usage: string;
}

const THEME_TOKENS: ColorToken[] = [
  {
    name: 'Primary / Midnight',
    cssVar: '--color-primary-main',
    role: 'Superficie Hundida & Modales',
    hex: '#120524',
    usage: 'Actúa como lienzo base en campos de entrada (variant="inset"), fondos de ventanas modales y contenedores de código.'
  },
  {
    name: 'Surface / Aubergine',
    cssVar: '--color-royal-aubergine',
    role: 'Elevación de Componentes',
    hex: '#241142',
    usage: 'Otorga volumen espacial a tarjetas modulares (Card), menús desplegables (SelectField / MultiSelect) y cajones laterales.'
  },
  {
    name: 'Border / Periwinkle',
    cssVar: '--color-periwinkle-tech',
    role: 'Trazos & Subtítulos',
    hex: '#9EA2E2',
    usage: 'Define los contornos sutiles de cada componente (al 20%-25% de opacidad), etiquetas descriptivas e indicadores secundarios.'
  },
  {
    name: 'Accent / Solar Gold',
    cssVar: '--color-accent-main',
    role: 'Interacción Primaria & Foco',
    hex: '#FBBF24',
    usage: 'Alimenta los botones principales, anillos de enfoque por teclado (focus-visible), interruptores activos y pestañas seleccionadas.'
  },
  {
    name: 'Active / Flame Amber',
    cssVar: '--color-flame-amber',
    role: 'Gradientes & Estados Hover',
    hex: '#E67E22',
    usage: 'Aporta profundidad cromática en gradientes de acción y transiciones de estado cuando el cursor o el tacto interactúan con un control.'
  },
  {
    name: 'Foreground / Silk Cream',
    cssVar: '--color-silk-cream',
    role: 'Tipografía & Lectura',
    hex: '#FFF6DF',
    usage: 'Color de texto predeterminado en toda la librería, calibrado para ofrecer alto contraste en modo oscuro sin generar deslumbramiento.'
  }
];

export function ThemeDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      
      {/* 1. CABECERA */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          DESIGN TOKENS • TAILWIND CSS V4
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Temas & Tokens CSS
        </h1>
        
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Todos los componentes de <strong>fireseed-ui</strong> consumen variables CSS nativas para definir sus fondos, bordes, tipografías y efectos de iluminación. Esto te permite adaptar la apariencia global de la librería desde una única hoja de estilos, sin sobrecargar el árbol de React con proveedores en tiempo de ejecución.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      {/* 2. FILOSOFÍA DE ARQUITECTURA DE ESTILOS */}
      <Callout variant="glow">
        <div className="space-y-2.5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#FBBF24] flex items-center gap-2 font-mono">
            <span>⚡</span> Cero Runtime de JavaScript para Estilos
          </h3>
          <p className="text-sm leading-relaxed text-[#FFF6DF]/85">
            En lugar de obligarte a envolver tu aplicación en un <Inlinecode variant="solid">&lt;ThemeProvider&gt;</Inlinecode> que recalcula estilos en cada renderizado, <strong>fireseed-ui</strong> delega la tematización directamente en el motor CSS del navegador mediante la directiva <Inlinecode variant="solid">@theme</Inlinecode> de <strong>Tailwind CSS v4</strong>. Si modificás una variable en tu archivo <Inlinecode variant="solid">theme.css</Inlinecode>, todos los átomos, moléculas y organismos se actualizan de forma instantánea.
          </p>
        </div>
      </Callout>

      {/* 3. TOKENS DE COLOR DE LA LIBRERÍA */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif] tracking-tight">
              Variables Cromáticas de los Componentes
            </h2>
            <p className="text-sm text-[#9EA2E2]/75">
              Así se conectan los tokens CSS con cada pieza interactiva del catálogo:
            </p>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono px-2.5 py-1 rounded bg-[#241142] border border-[#9EA2E2]/25 text-[#9EA2E2]">
            @theme tokens
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {THEME_TOKENS.map((token) => (
            <div 
              key={token.cssVar} 
              className="group p-5 rounded-2xl bg-[#241142]/60 border border-[#9EA2E2]/20 hover:border-[#FBBF24]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl shadow-lg border border-white/10 flex items-center justify-center font-mono text-xs font-bold"
                    style={{ 
                      backgroundColor: token.hex,
                      color: token.hex === '#FBBF24' || token.hex === '#FFF6DF' ? '#120524' : '#FFF6DF'
                    }}
                  >
                    UI
                  </div>
                  <span className="text-[11px] font-mono text-[#9EA2E2]/80 bg-[#120524]/60 px-2 py-0.5 rounded border border-[#9EA2E2]/15">
                    {token.hex}
                  </span>
                </div>

                <h3 className="font-bold text-base text-[#FFF6DF] group-hover:text-[#FBBF24] transition-colors">
                  {token.name}
                </h3>
                <p className="text-xs font-mono text-[#FBBF24] mb-2">{token.role}</p>
                <p className="text-xs text-[#FFF6DF]/70 leading-relaxed font-sans">{token.usage}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#9EA2E2]/10 flex items-center justify-between text-[11px] font-mono text-[#9EA2E2]/60">
                <span>Variable:</span>
                <span className="text-[#FFF6DF]">{token.cssVar}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. ESCALA TIPOGRÁFICA DE LOS COMPONENTES */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif] tracking-tight">
          Tokens Tipográficos
        </h2>
        <p className="text-sm text-[#FFF6DF]/70">
          La librería organiza los textos internos de sus componentes en tres variables tipográficas según su función en la interfaz:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#241142]/60 border border-[#9EA2E2]/20 space-y-3">
            <span className="text-xs font-mono text-[#FBBF24] uppercase tracking-wider block">01 // ENCABEZADOS</span>
            <div className="text-2xl font-extrabold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
              DISPLAY UI
            </div>
            <p className="text-xs text-[#FFF6DF]/65 leading-relaxed">
              Reservada para cabeceras de sección en <Inlinecode variant="solid">SidebarMenu</Inlinecode>, títulos principales y destacados modulares.
            </p>
            <div className="text-[11px] font-mono bg-[#120524]/70 p-2 rounded text-[#9EA2E2]/80">
              var(--font-display)
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#241142]/60 border border-[#9EA2E2]/20 space-y-3">
            <span className="text-xs font-mono text-[#FBBF24] uppercase tracking-wider block">02 // CONTROLES & TEXTO</span>
            <div className="text-2xl font-bold text-[#FFF6DF] font-sans">
              Interfaz Clara
            </div>
            <p className="text-xs text-[#FFF6DF]/65 leading-relaxed">
              Aplicada por defecto en botones, formularios, modales, pestañas y descripciones para máxima legibilidad en cualquier tamaño.
            </p>
            <div className="text-[11px] font-mono bg-[#120524]/70 p-2 rounded text-[#9EA2E2]/80">
              var(--font-sans)
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#241142]/60 border border-[#9EA2E2]/20 space-y-3">
            <span className="text-xs font-mono text-[#FBBF24] uppercase tracking-wider block">03 // DATOS & CÓDIGO</span>
            <div className="text-xl font-bold text-[#FBBF24] font-mono">
              60 FPS / v0.1.0
            </div>
            <p className="text-xs text-[#FFF6DF]/65 leading-relaxed">
              Utilizada en <Inlinecode variant="solid">InlineCode</Inlinecode>, contadores, atajos de teclado (<Inlinecode variant="solid">⌘K</Inlinecode>) y etiquetas técnicas.
            </p>
            <div className="text-[11px] font-mono bg-[#120524]/70 p-2 rounded text-[#9EA2E2]/80">
              var(--font-mono)
            </div>
          </div>
        </div>
      </div>

      {/* 5. UTILIDADES DE RESPLANDOR (@utility) */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif] tracking-tight">
          Utilidades de Iluminación (@utility)
        </h2>
        <p className="text-sm text-[#FFF6DF]/70">
          Componentes como <Inlinecode variant="solid">Button</Inlinecode>, <Inlinecode variant="solid">Badge</Inlinecode>, <Inlinecode variant="solid">Callout</Inlinecode> y <Inlinecode variant="solid">StepBadge</Inlinecode> incluyen la variante <Inlinecode variant="solid">variant="glow"</Inlinecode>, que proyecta una luz difusa heredando automáticamente el color del elemento mediante pseudo-elementos <Inlinecode variant="solid">::before</Inlinecode>:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-[#9EA2E2]/20 bg-[#120524]/80">
          <table className="w-full text-left border-collapse text-sm text-[#FFF6DF]/80">
            <thead className="bg-[#241142]/60 font-semibold text-[#FFF6DF] border-b border-[#9EA2E2]/20">
              <tr>
                <th className="p-4">Clase Utility</th>
                <th className="p-4">Comportamiento Óptico</th>
                <th className="p-4">Componentes que la utilizan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#9EA2E2]/10 font-mono text-xs">
              <tr>
                <td className="p-4 text-[#FBBF24] font-semibold">glow-bottom</td>
                <td className="p-4 text-[#FFF6DF]/70 font-sans">Desplaza el halo lumínico hacia el borde inferior (`bottom: -8px`), simulando elevación física sobre el lienzo.</td>
                <td className="p-4 text-[#9EA2E2] font-mono">Button, StepBadge</td>
              </tr>
              <tr>
                <td className="p-4 text-[#FBBF24] font-semibold">glow-md</td>
                <td className="p-4 text-[#FFF6DF]/70 font-sans">Resplandor perimetral equilibrado y sutil (`blur-md`, opacidad 30%) que destaca contenedores sin saturar la vista.</td>
                <td className="p-4 text-[#9EA2E2] font-mono">Badge, Callout, Card</td>
              </tr>
              <tr>
                <td className="p-4 text-[#FBBF24] font-semibold">glow-xl</td>
                <td className="p-4 text-[#FFF6DF]/70 font-sans">Halo amplio de alto impacto (`blur-xl`, opacidad 40%) pensado para acciones principales aisladas.</td>
                <td className="p-4 text-[#9EA2E2] font-mono">FeedbackButton, Hero CTAs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. ARCHIVO DE CONFIGURACIÓN COMPLETO */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif] tracking-tight">
          Configuración Completa de `theme.css`
        </h2>
        <p className="text-sm text-[#FFF6DF]/70">
          Incluí este bloque en la hoja de estilos raíz de tu proyecto para habilitar todos los tokens y utilidades de la librería:
        </p>

        <CodeBlock
          code={codigoThemeMaster}
          language="css"
          filename="src/theme.css"
          allowDownload={true}
          downloadFilename="theme.css"
        />
      </div>

    </div>
  );
}
