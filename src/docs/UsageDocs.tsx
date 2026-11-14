/* Developed by FireSeed - Fueling Innovation */
import { useState, useMemo } from 'react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Switch } from '../components/Switch';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';
import { Inlinecode } from '../components/InlineCode/InlineCode';
import {
  Sparkles,
  Palette,
  Sliders,
  Paintbrush,
  ArrowRight,
  Send,
  Zap
} from 'lucide-react';
import { haptics } from '../utils/haptics';

interface ColorPreset {
  id: string;
  name: string;
  colorSwatch: string;
  classes: string;
  badge: string;
}

const COLOR_PRESETS: ColorPreset[] = [
  {
    id: 'solar',
    name: 'Solar Gold',
    colorSwatch: '#FBBF24',
    classes: 'bg-[#FBBF24] hover:bg-[#f59e0b] text-[#120524] font-bold',
    badge: 'Firma FireSeed'
  },
  {
    id: 'emerald',
    name: 'Esmeralda Neón',
    colorSwatch: '#10B981',
    classes: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25',
    badge: 'Éxito / Confirmación'
  },
  {
    id: 'sky',
    name: 'Celeste Sky',
    colorSwatch: '#0EA5E9',
    classes: 'bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold',
    badge: 'Acción Rápida'
  },
  {
    id: 'purple',
    name: 'Púrpura Imperial',
    colorSwatch: '#A855F7',
    classes: 'bg-purple-600 hover:bg-purple-700 text-purple-100 shadow-lg shadow-purple-500/25',
    badge: 'Gama Alta'
  },
  {
    id: 'rose',
    name: 'Rubí Carmesí',
    colorSwatch: '#F43F5E',
    classes: 'bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/25',
    badge: 'Alerta / Destructivo'
  },
  {
    id: 'gradient',
    name: 'Degradado Fuego',
    colorSwatch: 'linear-gradient(135deg, #FBBF24, #E67E22)',
    classes: 'bg-gradient-to-r from-[#FBBF24] via-[#f59e0b] to-[#E67E22] text-[#120524] font-extrabold',
    badge: 'Conversión Máxima'
  },
  {
    id: 'border-tech',
    name: 'Borde Neón Translúcido',
    colorSwatch: '#9EA2E2',
    classes: 'border-2 border-[#9EA2E2]/40 bg-[#9EA2E2]/10 hover:bg-[#9EA2E2]/20 text-[#FFF6DF]',
    badge: 'Secundario'
  }
];

const codigoTailwindOverride = `import { Button, Card, Badge } from 'fireseed-ui';

export function ComponentesPersonalizados() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      {/* 1. Botón color Esmeralda personalizado vía Tailwind */}
      <Button className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/25 shadow-lg">
        Acción Exitosa (Esmeralda)
      </Button>

      {/* 2. Botón color Azul Cielo con esquinas píldora */}
      <Button className="bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold rounded-full px-6">
        Botón Píldora Celeste
      </Button>

      {/* 3. Botón con Borde Fino Violeta y Fondo Traslúcido */}
      <Button className="border-2 border-purple-500/50 bg-purple-500/10 hover:bg-purple-500/20 text-purple-200">
        Borde Neón Púrpura
      </Button>

      {/* 4. Badge con color personalizado */}
      <Badge className="bg-cyan-500/15 border-cyan-500/30 text-cyan-300">
        Tag Personalizado
      </Badge>
    </div>
  );
}`;

const codigoPropsSemanticas = `import { Button } from 'fireseed-ui';
import { Trash2, ArrowRight } from 'lucide-react';

export function BotonesSemanticos() {
  return (
    <div className="flex flex-wrap gap-3">
      {/* Variantes semánticas nativas */}
      <Button variant="solid">Sólido Primario</Button>
      <Button variant="glow">Con Resplandor</Button>
      <Button variant="inset">Hundido (Inset)</Button>
      <Button variant="outline">Contorno</Button>
      <Button variant="ghost">Fantasma</Button>
      <Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />}>
        Eliminar
      </Button>

      {/* Tamaños con áreas táctiles accesibles */}
      <Button size="sm">Small (36px)</Button>
      <Button size="md">Medium (44px)</Button>
      <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
        Large (48px)
      </Button>
    </div>
  );
}`;

const codigoGlobalTheme = `/* src/theme.css — Tailwind CSS v4 */
@import "tailwindcss";

@theme {
  /* Si tu marca usa Azul en lugar de Dorado, cambiá esta variable: */
  --color-primary: #0B1120;  /* Fondo oscuro azulado */
  --color-accent: #3B82F6;   /* Azul Eléctrico para botones y acentos */
  --color-card: #1E293B;
  --color-muted: #60A5FA;
  --color-silk-cream: #F8FAFC;
}`;

export function UsageDocs() {
  const [demoSwitch, setDemoSwitch] = useState(true);

  // Estados del Playground Interactivo de Botones
  const [btnText, setBtnText] = useState('Mi Botón Personalizado');
  const [selectedColor, setSelectedColor] = useState<ColorPreset>(COLOR_PRESETS[0]);
  const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [selectedRadius, setSelectedRadius] = useState<'rounded-xl' | 'rounded-full' | 'rounded-2xl' | 'rounded-md'>('rounded-xl');
  const [hasIcon, setHasIcon] = useState<'none' | 'arrow' | 'sparkles' | 'send'>('arrow');
  const [applyGlow, setApplyGlow] = useState(false);

  // Generador de código JSX dinámico en tiempo real
  const generatedCode = useMemo(() => {
    const classes = [selectedColor.classes, selectedRadius, applyGlow ? 'glow-bottom' : '']
      .filter(Boolean)
      .join(' ');

    const iconImport =
      hasIcon === 'arrow'
        ? `\nimport { ArrowRight } from 'lucide-react';`
        : hasIcon === 'sparkles'
        ? `\nimport { Sparkles } from 'lucide-react';`
        : hasIcon === 'send'
        ? `\nimport { Send } from 'lucide-react';`
        : '';

    const iconProp =
      hasIcon === 'arrow'
        ? `\n  rightIcon={<ArrowRight className="w-4 h-4" />}`
        : hasIcon === 'sparkles'
        ? `\n  leftIcon={<Sparkles className="w-4 h-4" />}`
        : hasIcon === 'send'
        ? `\n  rightIcon={<Send className="w-4 h-4" />}`
        : '';

    return `import { Button } from 'fireseed-ui';${iconImport}

export function MiBoton() {
  return (
    <Button
      size="${selectedSize}"${iconProp}
      className="${classes}"
    >
      ${btnText}
    </Button>
  );
}`;
  }, [btnText, selectedColor, selectedSize, selectedRadius, hasIcon, applyGlow]);

  return (
    <div className="max-w-4xl space-y-16 pb-20 text-[#FFF6DF]">
      
      {/* 1. CABECERA */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          GUÍA PRÁCTICA • MODO DE USO & PERSONALIZACIÓN
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Cómo Usar y Cambiar Colores
        </h1>
        
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          En <strong>fireseed-ui</strong> no estás atado a un esquema de colores rígido. Tenés <strong>3 formas distintas</strong> de personalizar cualquier componente según tus necesidades: por clases de Tailwind CSS, por props del componente o de manera global en tu hoja de estilos.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      {/* 2. RESUMEN DE LAS 3 FORMAS (TRÍADA DE PERSONALIZACIÓN) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-[#241142]/60 border border-[#9EA2E2]/20 space-y-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#FBBF24]/15 text-[#FBBF24] flex items-center justify-center">
            <Palette className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#FFF6DF]">1. Por Tailwind CSS</h3>
          <p className="text-xs text-[#FFF6DF]/70 leading-relaxed">
            Usá <Inlinecode variant="solid">className</Inlinecode> para cambiar fondos, bordes, tamaños o sombras en un componente específico.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#241142]/60 border border-[#9EA2E2]/20 space-y-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#9EA2E2]/15 text-[#9EA2E2] flex items-center justify-center">
            <Sliders className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#FFF6DF]">2. Por Props Nativas</h3>
          <p className="text-xs text-[#FFF6DF]/70 leading-relaxed">
            Alterná entre variantes ya diseñadas: <Inlinecode variant="solid">variant="glow"</Inlinecode>, <Inlinecode variant="solid">variant="destructive"</Inlinecode>, etc.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#241142]/60 border border-[#9EA2E2]/20 space-y-2.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-400/15 text-emerald-400 flex items-center justify-center">
            <Paintbrush className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#FFF6DF]">3. Por Variables Globales</h3>
          <p className="text-xs text-[#FFF6DF]/70 leading-relaxed">
            Cambiá los colores en tu archivo <Inlinecode variant="solid">theme.css</Inlinecode> para transformar toda tu aplicación de una sola vez.
          </p>
        </div>
      </div>

      {/* =========================================================================
          🔥 NUEVO PLAYGROUND INTERACTIVO: DISEÑÁ TU BOTÓN EN VIVO
         ========================================================================= */}
      <div className="space-y-6 pt-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FBBF24] uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> Laboratorio Interactivo
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
            Playground: Diseña tu Botón en Tiempo Real
          </h2>
          <p className="text-sm text-[#9EA2E2]/80 max-w-2xl">
            Elegí colores, tamaños, esquinas redondeadas y efectos para ver cómo reacciona el componente y copiá el código JSX generado al instante:
          </p>
        </div>

        {/* Contenedor del Playground */}
        <div className="rounded-3xl border border-[#9EA2E2]/25 bg-[#090213] overflow-hidden shadow-2xl">
          {/* Canvas de Previsualización */}
          <div className="preview-checkers min-h-[180px] sm:min-h-[220px] p-8 flex flex-col items-center justify-center gap-3 border-b border-[#9EA2E2]/15 relative">
            <span className="text-[11px] font-mono text-[#9EA2E2]/60 absolute top-3 left-4 select-none">
              Vista Previa en Vivo (Haz click para sentir la física de resorte)
            </span>

            <Button
              size={selectedSize}
              className={`${selectedColor.classes} ${selectedRadius} ${applyGlow ? 'glow-bottom' : ''}`}
              leftIcon={hasIcon === 'sparkles' ? <Sparkles className="w-4 h-4" /> : undefined}
              rightIcon={
                hasIcon === 'arrow' ? (
                  <ArrowRight className="w-4 h-4" />
                ) : hasIcon === 'send' ? (
                  <Send className="w-4 h-4" />
                ) : undefined
              }
              onClick={() => haptics.success()}
            >
              {btnText}
            </Button>

            <span className="text-[10px] font-mono text-[#9EA2E2]/50 pt-2">
              Color: {selectedColor.name} • Tamaño: {selectedSize.toUpperCase()} • Esquinas: {selectedRadius}
            </span>
          </div>

          {/* Panel de Controles */}
          <div className="p-6 sm:p-8 bg-[#120524]/90 space-y-6">
            
            {/* Control 1: Texto del botón */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold uppercase text-[#FFF6DF] block">
                Texto del Botón
              </label>
              <input
                type="text"
                value={btnText}
                onChange={(e) => setBtnText(e.target.value)}
                placeholder="Escribe el texto..."
                className="w-full sm:max-w-md px-4 py-2.5 rounded-xl bg-[#241142]/60 border border-[#9EA2E2]/20 text-[#FFF6DF] text-sm focus:outline-none focus:border-[#FBBF24] transition-colors"
              />
            </div>

            {/* Control 2: Paletas de Color Preconfiguradas */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono font-bold uppercase text-[#FFF6DF] block">
                1. Paleta de Color (Tailwind Preset)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {COLOR_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => {
                      haptics.light();
                      setSelectedColor(preset);
                    }}
                    className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedColor.id === preset.id
                        ? 'border-[#FBBF24] bg-[#241142] shadow-md ring-1 ring-[#FBBF24]/50'
                        : 'border-[#9EA2E2]/15 bg-[#120524] hover:border-[#9EA2E2]/40'
                    }`}
                  >
                    <span
                      className="w-6 h-6 rounded-full border border-white/20 shrink-0 shadow-sm"
                      style={{ background: preset.colorSwatch }}
                    />
                    <span className="text-[11px] font-semibold text-[#FFF6DF] leading-tight truncate w-full">
                      {preset.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Fila de controles: Tamaño, Esquinas e Ícono */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-1">
              {/* Tamaño */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase text-[#FFF6DF] block">
                  2. Tamaño (`size`)
                </label>
                <div className="flex gap-1.5 bg-[#241142]/60 p-1 rounded-xl border border-[#9EA2E2]/20">
                  {(['sm', 'md', 'lg'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        haptics.light();
                        setSelectedSize(s);
                      }}
                      className={`flex-1 py-1.5 text-xs font-mono font-bold rounded-lg transition-colors cursor-pointer ${
                        selectedSize === s
                          ? 'bg-[#FBBF24] text-[#120524]'
                          : 'text-[#9EA2E2] hover:text-[#FFF6DF]'
                      }`}
                    >
                      {s.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Esquinas Redondeadas */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase text-[#FFF6DF] block">
                  3. Borde Redondeado
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { id: 'rounded-xl', label: '12px (xl)' },
                    { id: 'rounded-2xl', label: '16px (2xl)' },
                    { id: 'rounded-full', label: 'Píldora' },
                    { id: 'rounded-md', label: '8px (md)' }
                  ].map((r) => (
                    <button
                      key={r.id}
                      onClick={() => {
                        haptics.light();
                        setSelectedRadius(r.id as any);
                      }}
                      className={`py-1.5 px-2 text-[11px] font-mono font-semibold rounded-lg border transition-colors cursor-pointer ${
                        selectedRadius === r.id
                          ? 'border-[#FBBF24] bg-[#FBBF24]/15 text-[#FBBF24]'
                          : 'border-[#9EA2E2]/15 bg-[#241142]/40 text-[#9EA2E2] hover:text-[#FFF6DF]'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ícono & Glow */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase text-[#FFF6DF] block">
                  4. Ícono y Efecto Glow
                </label>
                <div className="flex gap-2">
                  <select
                    value={hasIcon}
                    onChange={(e) => setHasIcon(e.target.value as any)}
                    className="flex-1 px-3 py-1.5 rounded-xl bg-[#241142]/60 border border-[#9EA2E2]/20 text-[#FFF6DF] text-xs font-mono focus:outline-none focus:border-[#FBBF24]"
                  >
                    <option value="none">Sin Ícono</option>
                    <option value="arrow">Flecha Derecha</option>
                    <option value="sparkles">Destellos (Sparkles)</option>
                    <option value="send">Enviar (Send)</option>
                  </select>

                  <button
                    onClick={() => {
                      haptics.light();
                      setApplyGlow((prev) => !prev);
                    }}
                    className={`px-3 py-1.5 rounded-xl border font-mono text-xs font-bold transition-all cursor-pointer ${
                      applyGlow
                        ? 'border-[#FBBF24] bg-[#FBBF24] text-[#120524]'
                        : 'border-[#9EA2E2]/20 bg-[#241142]/40 text-[#9EA2E2] hover:text-[#FFF6DF]'
                    }`}
                  >
                    GLOW
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Snippet Generado Automáticamente */}
          <div className="p-0 border-t border-[#9EA2E2]/20">
            <CodeBlock
              code={generatedCode}
              language="tsx"
              filename="MiBotonGenerado.tsx"
              className="border-0 rounded-none shadow-none"
            />
          </div>
        </div>
      </div>

      {/* 3. MÉTODO 1: CAMBIAR COLORES POR TAILWIND (CLASSNAME) */}
      <div className="space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-[#FBBF24] uppercase tracking-wider">
            MÉTODO 1 // FLEXIBILIDAD INSTANTÁNEA
          </span>
          <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
            Sobrescribir Colores con Tailwind (`className`)
          </h2>
          <p className="text-sm text-[#FFF6DF]/70 leading-relaxed">
            Todos los componentes de la librería están construidos internamente con la utilidad <Inlinecode variant="solid">cn()</Inlinecode>, que combina <Inlinecode variant="solid">clsx</Inlinecode> y <Inlinecode variant="solid">tailwind-merge</Inlinecode>. Esto significa que cualquier clase que pases en <Inlinecode variant="solid">className</Inlinecode> <strong>reemplaza automáticamente</strong> la clase por defecto sin generar conflictos CSS.
          </p>
        </div>

        {/* Demo interactiva en vivo */}
        <div className="p-6 rounded-2xl bg-[#120524] border border-[#9EA2E2]/20 space-y-4">
          <span className="text-xs font-mono text-[#9EA2E2] uppercase font-semibold block">
            Demostración en Vivo: Componentes con colores personalizados
          </span>
          
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/25 shadow-lg">
              Botón Esmeralda
            </Button>

            <Button className="bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold rounded-full px-6">
              Píldora Celeste
            </Button>

            <Button className="border-2 border-purple-500/50 bg-purple-500/10 hover:bg-purple-500/20 text-purple-200">
              Borde Neón Púrpura
            </Button>

            <Badge className="bg-cyan-500/15 border-cyan-500/30 text-cyan-300">
              Badge Cyan
            </Badge>

            <Badge className="bg-rose-500/15 border-rose-500/30 text-rose-300">
              Badge Rubí
            </Badge>
          </div>
        </div>

        {/* Snippet de Código */}
        <CodeBlock
          code={codigoTailwindOverride}
          language="tsx"
          filename="ComponentesPersonalizados.tsx"
        />
      </div>

      {/* 4. MÉTODO 2: PERSONALIZACIÓN POR PROPS SEMÁNTICAS */}
      <div className="space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-[#FBBF24] uppercase tracking-wider">
            MÉTODO 2 // SISTEMA LISTO PARA USAR
          </span>
          <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
            Uso de Props Semánticas (`variant`, `size`)
          </h2>
          <p className="text-sm text-[#FFF6DF]/70 leading-relaxed">
            Si no querés escribir clases CSS manuales, cada componente ya viene con variantes diseñadas con proporciones áureas, áreas táctiles para móviles (≥44px) y contraste accesible:
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#120524] border border-[#9EA2E2]/20 space-y-4">
          <span className="text-xs font-mono text-[#9EA2E2] uppercase font-semibold block">
            Variantes Nativas de Button
          </span>
          <div className="flex flex-wrap gap-3 items-center pt-1">
            <Button variant="solid">variant="solid"</Button>
            <Button variant="glow">variant="glow"</Button>
            <Button variant="inset">variant="inset"</Button>
            <Button variant="outline">variant="outline"</Button>
            <Button variant="ghost">variant="ghost"</Button>
            <Button variant="destructive">variant="destructive"</Button>
          </div>
        </div>

        <CodeBlock
          code={codigoPropsSemanticas}
          language="tsx"
          filename="BotonesSemanticos.tsx"
        />
      </div>

      {/* 5. MÉTODO 3: PERSONALIZACIÓN GLOBAL (@theme) */}
      <div className="space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-[#FBBF24] uppercase tracking-wider">
            MÉTODO 3 // MARCA COMPLETA
          </span>
          <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
            Personalización Global desde `theme.css`
          </h2>
          <p className="text-sm text-[#FFF6DF]/70 leading-relaxed">
            Si estás construyendo una aplicación completa con tu propia paleta de marca (por ejemplo, colores corporativos de tu empresa), podés cambiar las variables semánticas en <Inlinecode variant="solid">src/theme.css</Inlinecode>. Esto adaptará <strong>todos los botones, selecciones, focos y tarjetas</strong> de forma automática:
          </p>
        </div>

        <Callout variant="glow">
          <p className="text-xs leading-relaxed text-[#FFF6DF]/85">
            💡 <strong>Regla clave de Tailwind CSS v4:</strong> La directiva <Inlinecode variant="solid">@theme</Inlinecode> compila directamente en variables CSS estándar en tiempo de compilación. No requiere proveedores de contexto pesados ni genera impacto en el rendimiento de React.
          </p>
        </Callout>

        <CodeBlock
          code={codigoGlobalTheme}
          language="css"
          filename="src/theme.css"
          allowDownload={true}
          downloadFilename="theme.css"
        />
      </div>

      {/* 6. EJEMPLO COMPLETO: TARJETA MODULAR COMPUESTA */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Ejemplo Completo: Ensamblado en una Vista Real
        </h2>
        
        <Card hoverEffect className="max-w-md p-6 space-y-5 bg-[#120524] border-[#9EA2E2]/25">
          <CardHeader className="flex items-center justify-between pb-2 border-b border-[#9EA2E2]/15">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FBBF24]" />
              <CardTitle>Módulo de Notificaciones</CardTitle>
            </div>
            <Badge variant="glow">Activo</Badge>
          </CardHeader>

          <CardContent className="space-y-4 pt-1">
            <Switch
              checked={demoSwitch}
              onChange={setDemoSwitch}
              label="Alertas en Tiempo Real"
              description="Envía notificaciones sonoras y vibración háptica"
            />

            <div className="pt-2 flex gap-3">
              <Button variant="glow" className="flex-1">
                Guardar
              </Button>
              <Button variant="ghost" className="px-4">
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}

