/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Switch } from '../components/Switch';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';
import { Inlinecode } from '../components/InlineCode/InlineCode';
import { Sparkles, Palette, Sliders, Paintbrush } from 'lucide-react';

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
  /* ¿Tu marca usa Azul y Púrpura en lugar de Violeta y Dorado?
     Simplemente cambia estas variables y TODA la librería adoptará tus colores: */
  --color-primary-main: #0B1120;  /* Fondo oscuro azulado */
  --color-accent-main: #3B82F6;   /* Azul Eléctrico para botones y acentos */
  --color-royal-aubergine: #1E293B;
  --color-periwinkle-tech: #60A5FA;
  --color-silk-cream: #F8FAFC;
}`;

export function UsageDocs() {
  const [demoSwitch, setDemoSwitch] = useState(true);

  return (
    <div className="max-w-4xl space-y-14 pb-20 text-[#FFF6DF]">
      
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
