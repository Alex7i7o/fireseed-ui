/* Developed by FireSeed - Fueling Innovation */
import { Callout } from '../components/Callout';
import { Inlinecode } from '../components/InlineCode/InlineCode';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';

const codigoThemeMaster = `@import "tailwindcss";

:root {
  /* ==========================================================================
     TOKENS SEMÁNTICOS (ESTÁNDAR PROFESIONAL DE DISEÑO)
     Tokens funcionales que definen la semántica y jerarquía de la interfaz.
     Permiten personalización whitelabel (ej: Violett Pilates) con 5 líneas de CSS.
     ========================================================================== */
  --color-background: #0D041A;
  --color-foreground: #FFF6DF;

  /* Superficies y Tarjetas */
  --color-card: #241142;
  --color-card-foreground: #FFF6DF;
  --color-surface-sunken: #120524;
  --color-surface-elevated: #241142;

  /* Colores de Marca y Acción */
  --color-primary: #120524;
  --color-primary-foreground: #FFF6DF;
  --color-primary-hover: #31165a;

  --color-secondary: #241142;
  --color-secondary-foreground: #FFF6DF;
  --color-secondary-hover: #31165a;

  /* Acento de Alto Impacto (En FireSeed: Oro Solar #FBBF24) */
  --color-accent: #FBBF24;
  --color-accent-foreground: #120524;
  --color-accent-hover: #F59E0B;
  --color-accent-active: #E67E22;
  --color-accent-glow: rgba(251, 191, 36, 0.35);

  /* Neutros, Bordes y Foco */
  --color-muted: #9EA2E2;
  --color-muted-foreground: rgba(255, 246, 223, 0.7);
  --color-border: rgba(158, 162, 226, 0.22);
  --color-border-hover: rgba(251, 191, 36, 0.4);
  --color-ring: #FBBF24;

  /* Feedback de Sistema */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-destructive: #EF4444;

  /* Retrocompatibilidad con nombres literales de marca */
  --color-solar-gold: var(--color-accent);
  --color-midnight-violet: var(--color-primary);
  --color-royal-aubergine: var(--color-card);
  --color-periwinkle-tech: var(--color-muted);
  --color-flame-amber: var(--color-accent-active);
  --color-silk-cream: var(--color-foreground);
}

@theme {
  /* Variables Tailwind v4 vinculadas a los tokens semánticos */
  --color-background: var(--color-background);
  --color-foreground: var(--color-foreground);
  --color-card: var(--color-card);
  --color-card-foreground: var(--color-card-foreground);
  --color-primary: var(--color-primary);
  --color-secondary: var(--color-secondary);
  --color-accent: var(--color-accent);
  --color-accent-foreground: var(--color-accent-foreground);
  --color-accent-hover: var(--color-accent-hover);
  --color-accent-active: var(--color-accent-active);
  --color-muted: var(--color-muted);
  --color-border: var(--color-border);
  --color-ring: var(--color-ring);

  /* Familias tipográficas */
  --font-display: "PosteramaCustom", sans-serif;
  --font-sans: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}

/* ============================================================
   UTILIDADES DE RESPLANDOR (@utility)
   ============================================================ */
@utility glow-bottom {
  @apply relative z-0 before:absolute before:top-2 before:bottom-[-8px] before:left-2 before:right-2 before:bg-inherit before:blur-lg before:opacity-45 before:-z-10 before:rounded-[inherit] transition-all duration-300;
}

@utility glow-md {
  @apply relative z-0 before:absolute before:inset-0 before:bg-inherit before:blur-md before:opacity-30 before:-z-10 before:rounded-[inherit] transition-all duration-300;
}

@utility glow-xl {
  @apply relative z-0 before:absolute before:-inset-1 before:bg-inherit before:blur-xl before:opacity-40 before:-z-10 before:rounded-[inherit] transition-all duration-300;
}`;

const codigoWhitelabelEjemplo = `/* Ejemplo en el proyecto de un cliente (ej: Violett Pilates) */
:root {
  /* Basta con redefinir los tokens semánticos para vestir toda la librería */
  --color-accent: #C084FC;              /* Orquídea / Púrpura Pilates */
  --color-accent-foreground: #1E082E;
  --color-accent-hover: #A855F7;
  --color-ring: #C084FC;

  --color-primary: #1E082E;             /* Fondo morado profundo Violett */
  --color-card: #2D0F45;                /* Tarjetas Violett */
  --color-border: rgba(192, 132, 252, 0.2);
}`;

interface ColorToken {
  name: string;
  cssVar: string;
  role: string;
  hex: string;
  usage: string;
  primitive: string;
}

const SEMANTIC_TOKENS: ColorToken[] = [
  {
    name: 'Accent (Acento Principal)',
    cssVar: '--color-accent',
    role: 'Acción, Foco & Conversión',
    hex: '#FBBF24',
    usage: 'Botones primarios, enlaces de alta jerarquía, anillos de enfoque (focus-visible), interruptores y badges activos.',
    primitive: 'Solar Gold (#FBBF24)'
  },
  {
    name: 'Primary (Superficie Base)',
    cssVar: '--color-primary',
    role: 'Lienzo Base & Modales',
    hex: '#120524',
    usage: 'Fondo de ventanas modales, paneles colapsables, inputs de variante "inset" y áreas hundidas.',
    primitive: 'Midnight Violet (#120524)'
  },
  {
    name: 'Card / Secondary',
    cssVar: '--color-card',
    role: 'Elevación & Superficie',
    hex: '#241142',
    usage: 'Cuerpo de tarjetas modulares (Card), menús desplegables (SelectField) y cajones laterales (Drawer).',
    primitive: 'Royal Aubergine (#241142)'
  },
  {
    name: 'Border / Muted',
    cssVar: '--color-border',
    role: 'Contornos & Separadores',
    hex: '#9EA2E2',
    usage: 'Líneas guía estructurales (al 20%-25% opacidad), íconos pasivos y texto de apoyo.',
    primitive: 'Periwinkle Tech (#9EA2E2)'
  },
  {
    name: 'Foreground',
    cssVar: '--color-foreground',
    role: 'Tipografía de Lectura',
    hex: '#FFF6DF',
    usage: 'Color de texto principal descansado, optimizado para alto contraste en modo oscuro sin fatiga visual.',
    primitive: 'Silk Cream (#FFF6DF)'
  },
  {
    name: 'Accent Active',
    cssVar: '--color-accent-active',
    role: 'Gradientes & Presión',
    hex: '#E67E22',
    usage: 'Transición al presionar botones (active state) y punto final de gradientes solares.',
    primitive: 'Flame Amber (#E67E22)'
  }
];

export function ThemeDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      
      {/* 1. CABECERA */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          SEMANTIC TOKENS ARCHITECTURE • TAILWIND V4
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Tokens Semánticos & Tematización
        </h1>
        
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          <strong>fireseed-ui</strong> adopta el estándar de diseño de las librerías modernas más prestigiosas (como <em>Tailwind v4, Shadcn y Radix</em>): organizar el color por <strong>función semántica</strong> (<Inlinecode variant="solid">--color-accent</Inlinecode>, <Inlinecode variant="solid">--color-primary</Inlinecode>, <Inlinecode variant="solid">--color-border</Inlinecode>) y no por nombres de colores literales.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      {/* 2. POR QUÉ TOKENS SEMÁNTICOS */}
      <Callout variant="glow">
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#FBBF24] flex items-center gap-2 font-mono">
            <span>🎯</span> ¿Por qué usamos --color-accent en vez de nombres de colores literales?
          </h3>
          <p className="text-sm leading-relaxed text-[#FFF6DF]/85">
            Si definiéramos el botón como <Inlinecode variant="solid">bg-solar-gold</Inlinecode>, cuando un cliente como <strong>Violett Pilates</strong> quiera usar la librería con su propia paleta morada/rosa, se vería obligado a redefinir <Inlinecode variant="solid">--color-solar-gold: #C084FC</Inlinecode>, lo cual resulta confuso y anti-patrón en código profesional.
          </p>
          <p className="text-sm leading-relaxed text-[#FFF6DF]/85">
            Al utilizar <strong>tokens semánticos</strong>, cualquier aplicación externa cambia todo el tema de la librería modificando únicamente <Inlinecode variant="solid">--color-accent</Inlinecode> y <Inlinecode variant="solid">--color-primary</Inlinecode>. Además, dentro de Tailwind v4 se generan automáticamente clases directas como <Inlinecode variant="solid">bg-accent</Inlinecode>, <Inlinecode variant="solid">text-accent</Inlinecode>, <Inlinecode variant="solid">border-border</Inlinecode> y <Inlinecode variant="solid">ring-accent</Inlinecode>.
          </p>
        </div>
      </Callout>

      {/* 3. TABLA COMPARATIVA: PRIMITIVOS VS SEMÁNTICOS */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif] tracking-tight">
            Tokens Semánticos del Sistema
          </h2>
          <p className="text-sm text-[#9EA2E2]/75">
            Mapeo funcional entre la intención de diseño y el valor cromático por defecto de FireSeed:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SEMANTIC_TOKENS.map((token) => (
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
                <p className="text-xs font-mono text-[#FBBF24] mb-1">{token.role}</p>
                <p className="text-[11px] font-mono text-[#9EA2E2]/70 mb-2">Color base: {token.primitive}</p>
                <p className="text-xs text-[#FFF6DF]/70 leading-relaxed font-sans">{token.usage}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#9EA2E2]/10 flex items-center justify-between text-[11px] font-mono text-[#9EA2E2]/60">
                <span>Variable:</span>
                <span className="text-[#FFF6DF] font-bold">{token.cssVar}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. WHITELABELING & PERSONALIZACIÓN */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif] tracking-tight">
          Personalización Whitelabel (Multi-Cliente)
        </h2>
        <p className="text-sm text-[#FFF6DF]/75 leading-relaxed font-sans">
          Si usas <strong>fireseed-ui</strong> en proyectos con otra identidad corporativa (como <em>Violett Pilates</em> u otro cliente), no necesitas tocar los componentes. Simplemente sobreescribí los tokens semánticos en tu CSS raíz:
        </p>

        <CodeBlock
          code={codigoWhitelabelEjemplo}
          language="css"
          filename="src/app.css (en proyecto de cliente)"
        />
      </div>

      {/* 5. ESCALA TIPOGRÁFICA DE LOS COMPONENTES */}
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
              60 FPS / v0.1.1
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

      {/* 6. UTILIDADES DE RESPLANDOR (@utility) */}
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

      {/* 7. ARCHIVO DE CONFIGURACIÓN COMPLETO */}
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
