/* Developed by FireSeed - Fueling Innovation */
import { Callout } from '../components/Callout';
import { Inlinecode } from '../components/InlineCode/InlineCode';

const codigoThemeMaster = `@import "tailwindcss";

@theme {
  /* ============================================================
     SISTEMA CROMÁTICO MASTER FIRESEED (MANUAL OFICIAL)
     ============================================================ */
  --color-midnight-violet: #120524; /* Canvas maestro & contratos */
  --color-royal-aubergine: #241142; /* Superficies & cards elevadas */
  --color-periwinkle-tech: #9EA2E2; /* Bordes técnicos 22% & microkernel */
  --color-solar-gold: #FBBF24;      /* Acento magnético & Capa 2 F */
  --color-flame-amber: #E67E22;     /* Fuego interior & pulsos */
  --color-silk-cream: #FFF6DF;      /* Tipografía principal (no #FFF) */

  /* Mapeo de compatibilidad con componentes atómicos */
  --color-primary-main: #120524;
  --color-accent-main: #FBBF24;

  /* Tipografías oficiales */
  --font-display: "PosteramaCustom", sans-serif;
  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}

/* ============================================================
   SUPERFICIES DE GRADO INDUSTRIAL (SURFACES & ELEVATION)
   ============================================================ */
.fs-surface-gold {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 60%, #E67E22 100%);
  color: #120524;
}

.fs-surface-violet-hero {
  background: radial-gradient(circle at 50% 0%, rgba(36, 17, 66, 0.85) 0%, rgba(18, 5, 36, 0.98) 70%);
}

.fs-surface-violet-card {
  background: linear-gradient(180deg, rgba(36, 17, 66, 0.6) 0%, rgba(18, 5, 36, 0.8) 100%);
  border: 1px solid rgba(158, 162, 226, 0.22);
}

.fs-surface-tech-grid {
  background-image: radial-gradient(rgba(158, 162, 226, 0.12) 1px, transparent 1px);
  background-size: 32px 32px;
}

/* Sombras y Resplandores (Glow Utilities) */
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
  role: string;
  hex: string;
  pantone: string;
  usage: string;
  border?: string;
}

const MASTER_COLORS: ColorToken[] = [
  {
    name: 'Midnight Violet',
    role: 'Fondo Maestro / Dark Canvas',
    hex: '#120524',
    pantone: 'Pantone 5255 C',
    usage: 'Fondo de la aplicación, barra de navegación, contratos y canvas oscuro absoluto. Otorga misterio de alta gama y elimina la fatiga visual.'
  },
  {
    name: 'Royal Aubergine',
    role: 'Superficies y Cards Elevadas',
    hex: '#241142',
    pantone: 'Pantone 2695 C',
    usage: 'Contenedores modulares, drawers, cards elevadas y paneles laterales. Provee la profundidad espacial tridimensional requerida.'
  },
  {
    name: 'Periwinkle Tech',
    role: 'Bordes Técnicos y Microkernel',
    hex: '#9EA2E2',
    pantone: 'Pantone 2708 C',
    usage: 'Bordes estructurales al 22% de opacidad, rejillas blueprint, micro-etiquetas e iconografía secundaria del motor.'
  },
  {
    name: 'Solar Gold',
    role: 'Acento Magnético y Capa 2 F',
    hex: '#FBBF24',
    pantone: 'Pantone 1235 C',
    usage: 'Llamados a la acción de máxima conversión, badges de status activo, foco visual y la franja central dorada de la F tridimensional.'
  },
  {
    name: 'Flame Amber',
    role: 'Fuego Interior y Calor de Activación',
    hex: '#E67E22',
    pantone: 'Pantone 151 C',
    usage: 'Gradientes de aceleración, hover states de alta energía, indicadores de sincronización en tiempo real y alertas de calor.'
  },
  {
    name: 'Warm Silk Cream',
    role: 'Tipografía Principal de Lujo',
    hex: '#FFF6DF',
    pantone: 'Pantone 7499 C',
    usage: 'Titulares, textos de lectura, badges sutiles y métricas. Sustituto oficial del blanco puro #FFFFFF para evitar el choque óptico estéril.'
  }
];

export function ThemeDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      
      {/* 1. CABECERA CON SELLO OFICIAL */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          SISTEMA DE DISEÑO INDUSTRIAL • MANUAL DE MARCA MASTER
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Temas & Tokens Oficiales
        </h1>
        
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          La ingeniería visual de <strong>FireSeed</strong> descansa en una tríada inquebrantable: <em>«Por dentro Intel Inside, por fuera Apple»</em>.
          El sistema está gobernado por 6 colores maestros, tipografía arquitectónica <strong>Posterama 2001 Custom</strong> y utilidades de elevación lumínica nativas en <strong>Tailwind CSS v4</strong>.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      {/* 2. REGLAS INQUEBRANTABLES DE LA MARCA (CALLOUT DE AUTORIDAD) */}
      <Callout variant="glow">
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#FBBF24] flex items-center gap-2 font-mono">
            <span>🛡️</span> Las 3 Reglas de Oro de Identidad FireSeed
          </h3>
          <ul className="text-sm leading-relaxed space-y-2 text-[#FFF6DF]/85">
            <li className="flex items-start gap-2">
              <span className="text-[#FBBF24] font-bold">1.</span>
              <span><strong>Prohibido el blanco puro (#FFFFFF) sobre fondo oscuro:</strong> Siempre se utiliza <Inlinecode variant="solid">#FFF6DF</Inlinecode> (Warm Silk Cream) para transmitir calidez de sastrería de software de lujo sin fatiga visual.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FBBF24] font-bold">2.</span>
              <span><strong>Prohibido el texto negro (#000000) sobre fondo dorado:</strong> Sobre botones o badges Solar Gold, el texto siempre viaja en <Inlinecode variant="solid">#120524</Inlinecode> (Midnight Violet) con peso font-bold.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FBBF24] font-bold">3.</span>
              <span><strong>Bordes en Periwinkle Tech al 22%:</strong> Las tarjetas y paneles sobre violeta profundo jamás llevan bordes grises; utilizan <Inlinecode variant="solid">rgba(158, 162, 226, 0.22)</Inlinecode> como firma estructural.</span>
            </li>
          </ul>
        </div>
      </Callout>

      {/* 3. PALETA DE COLORES MASTER (SWATCHES) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif] tracking-tight">
              Los 6 Colores Maestros
            </h2>
            <p className="text-sm text-[#9EA2E2]/70">
              Calibrados para contraste grado AA / AAA según estándares WCAG y manual de marca oficial.
            </p>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono px-2.5 py-1 rounded bg-[#241142] border border-[#9EA2E2]/25 text-[#9EA2E2]">
            6 Master Swatches
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MASTER_COLORS.map((token) => (
            <div 
              key={token.hex} 
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
                    FS
                  </div>
                  <span className="text-[11px] font-mono text-[#9EA2E2]/80 bg-[#120524]/60 px-2 py-0.5 rounded border border-[#9EA2E2]/15">
                    {token.pantone}
                  </span>
                </div>

                <h3 className="font-bold text-base text-[#FFF6DF] group-hover:text-[#FBBF24] transition-colors">
                  {token.name}
                </h3>
                <p className="text-xs font-mono text-[#FBBF24] mb-2">{token.hex} • {token.role}</p>
                <p className="text-xs text-[#FFF6DF]/70 leading-relaxed font-sans">{token.usage}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#9EA2E2]/10 flex items-center justify-between text-[11px] font-mono text-[#9EA2E2]/60">
                <span>CSS Token:</span>
                <span className="text-[#FFF6DF]">--color-{token.name.toLowerCase().replace(/\s+/g, '-')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. TIPOGRAFÍAS DE MARCA (TYPOGRAPHY TOKENS) */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif] tracking-tight">
          Sistema Tipográfico
        </h2>
        <p className="text-sm text-[#FFF6DF]/70">
          La jerarquía tipográfica fusiona la potencia geométrica aeroespacial con legibilidad técnica insuperable:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Posterama Custom */}
          <div className="p-5 rounded-2xl bg-[#241142]/60 border border-[#9EA2E2]/20 space-y-3">
            <span className="text-xs font-mono text-[#FBBF24] uppercase tracking-wider block">01 // DISPLAY & TITULARES</span>
            <div className="text-3xl font-extrabold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
              FIRESEED
            </div>
            <p className="text-xs text-[#9EA2E2]"><strong>Posterama 2001 Bold Custom</strong></p>
            <p className="text-xs text-[#FFF6DF]/65 leading-relaxed">
              Cortes beveled a 45° en letras clave (F, S, E). Se utiliza exclusivamente en H1, H2, isotipo y logotipos oficiales.
            </p>
            <div className="text-[11px] font-mono bg-[#120524]/70 p-2 rounded text-[#9EA2E2]/80">
              font-family: var(--font-display)
            </div>
          </div>

          {/* Plus Jakarta Sans */}
          <div className="p-5 rounded-2xl bg-[#241142]/60 border border-[#9EA2E2]/20 space-y-3">
            <span className="text-xs font-mono text-[#FBBF24] uppercase tracking-wider block">02 // LECTURA & UI BODY</span>
            <div className="text-2xl font-bold text-[#FFF6DF] font-sans">
              Experiencia Fluida
            </div>
            <p className="text-xs text-[#9EA2E2]"><strong>Plus Jakarta Sans (400, 500, 600, 700)</strong></p>
            <p className="text-xs text-[#FFF6DF]/65 leading-relaxed">
              Sans-serif moderna de alta x-height diseñada para dashboards densos, microcopia y lectura sin fatiga.
            </p>
            <div className="text-[11px] font-mono bg-[#120524]/70 p-2 rounded text-[#9EA2E2]/80">
              font-family: var(--font-sans)
            </div>
          </div>

          {/* JetBrains Mono */}
          <div className="p-5 rounded-2xl bg-[#241142]/60 border border-[#9EA2E2]/20 space-y-3">
            <span className="text-xs font-mono text-[#FBBF24] uppercase tracking-wider block">03 // MÉTRICAS & CÓDIGO</span>
            <div className="text-xl font-bold text-[#FBBF24] font-mono">
              +240hs / &lt;1mes
            </div>
            <p className="text-xs text-[#9EA2E2]"><strong>JetBrains Mono</strong></p>
            <p className="text-xs text-[#FFF6DF]/65 leading-relaxed">
              Números tabulares perfectos, contratos de API, badges técnicos y terminales de depuración operativa.
            </p>
            <div className="text-[11px] font-mono bg-[#120524]/70 p-2 rounded text-[#9EA2E2]/80">
              font-family: var(--font-mono)
            </div>
          </div>
        </div>
      </div>

      {/* 5. CÓDIGO CSS MAESTRO (TAILWIND V4) */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif] tracking-tight">
          Hoja de Estilos Maestra (@theme & @utility)
        </h2>
        <p className="text-sm text-[#FFF6DF]/70">
          Pegá esta configuración en tu archivo <Inlinecode variant="solid">theme.css</Inlinecode> para activar el ecosistema oficial de FireSeed en cualquier proyecto de la suite:
        </p>

        <div className="overflow-hidden rounded-2xl bg-[#120524] border border-[#9EA2E2]/25 font-mono text-sm shadow-2xl">
          <div className="flex items-center justify-between bg-[#241142]/60 px-4 py-2.5 border-b border-[#9EA2E2]/20 text-xs text-[#9EA2E2]">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E67E22]"></span>
              src/theme.css (FireSeed Master Tokens)
            </span>
            <span className="text-[#FFF6DF]/50">Tailwind CSS v4 Native</span>
          </div>
          <pre className="p-5 overflow-x-auto text-[#FFF6DF]/85 leading-relaxed text-xs">
            {codigoThemeMaster}
          </pre>
        </div>
      </div>

      {/* 6. SUPERFICIES Y RESPLANDORES EN ACCIÓN */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif] tracking-tight">
          Superficies Especiales del Motor
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl fs-surface-gold space-y-2 shadow-xl">
            <span className="text-xs font-mono font-bold tracking-wider uppercase opacity-75">.fs-surface-gold</span>
            <h4 className="text-xl font-extrabold font-['PosteramaCustom',sans-serif]">Superficie Magnética Solar</h4>
            <p className="text-xs leading-relaxed opacity-90">
              Gradiente a 135° de Solar Gold a Flame Amber con texto forzado en Midnight Violet #120524. Utilizado en botones héroe y llamadas de conversión máxima.
            </p>
          </div>

          <div className="p-6 rounded-2xl fs-surface-violet-card space-y-2">
            <span className="text-xs font-mono text-[#FBBF24] font-bold tracking-wider uppercase">.fs-surface-violet-card</span>
            <h4 className="text-xl font-bold text-[#FFF6DF]">Tarjeta Modular Royal</h4>
            <p className="text-xs text-[#FFF6DF]/70 leading-relaxed">
              Superficie traslúcida Royal Aubergine (#241142) con ribete arquitectónico Periwinkle Tech (#9EA2E2) al 22% de opacidad.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
