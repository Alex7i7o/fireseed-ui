/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Switch } from '../components/Switch';
import { StatCard } from '../components/StatCard';
import { FeedbackButton } from '../components/FeedbackButton';
import { Card, CardTitle } from '../components/Card';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Copy,
  Check,
  Terminal,
  Layers,
  Cpu,
  Smartphone,
  Sparkles,
  Code2,
  Blocks,
  Gauge
} from 'lucide-react';
import { haptics } from '../utils/haptics';

// Subrayado arquitectónico del diseño de la web
import subrayado3Capas from '../assets/brand/04_Sellos_Subrayados/subrayado_02_encastre_3capas_crema_oro_periwinkle.svg';

const codigoEjemploRapido = `import {
  Card, CardHeader, CardTitle, CardContent,
  InputField, SelectField, FeedbackButton, Badge
} from 'fireseed-ui';

export function PanelConfiguracion() {
  const guardarCambios = async () => {
    await api.sincronizarPreferencias(); // Gestión automática de carga, éxito o error
  };

  return (
    <Card hoverEffect className="max-w-md">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Módulo de Preferencias</CardTitle>
        <Badge variant="glow">Activo</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <InputField
          label="Nombre del Espacio"
          placeholder="Ej. Estudio Central"
        />
        <SelectField
          label="Modo de Renderizado"
          options={[
            { value: 'strict', label: 'Alta Precisión (60 FPS)' },
            { value: 'eco', label: 'Ahorro de Energía' }
          ]}
        />
        <FeedbackButton
          variant="glow"
          className="w-full"
          initialText="Guardar Configuración"
          successText="¡Preferencias guardadas!"
          onClick={guardarCambios}
        />
      </CardContent>
    </Card>
  );
}`;

export function OverviewDocs() {
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [demoSwitch, setDemoSwitch] = useState(true);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('npm install fireseed-ui framer-motion');
    haptics.light();
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  const simulateAsyncAction = () =>
    new Promise((resolve) => setTimeout(resolve, 1400));

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 text-[#FFF6DF]">
      {/* =========================================================================
          1. HERO SECTION — NARRATIVA DE IDENTIDAD Y ARQUITECTURA ATÓMICA
         ========================================================================= */}
      <div className="relative pt-2 sm:pt-6 space-y-6 sm:space-y-8">
        {/* Etiqueta Superior */}
        <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#241142]/90 border border-[#9EA2E2]/30 shadow-[0_0_25px_rgba(251,191,36,0.12)]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase text-[#FBBF24]">
            ● FIRESEED UI v0.1.0 // SISTEMA DE DISEÑO ATÓMICO
          </span>
          <span className="hidden sm:inline text-[#9EA2E2]/40">•</span>
          <span className="hidden sm:inline text-[11px] font-mono font-semibold text-[#FFF6DF]">
            REACT 19 • TYPESCRIPT • TAILWIND V4
          </span>
        </div>

        {/* Titular Principal en Posterama 2001 Bold Custom */}
        <div className="space-y-4">
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-wider text-[#FFF6DF] leading-[1.08] uppercase"
            style={{ fontFamily: "'PosteramaCustom', 'Plus Jakarta Sans', sans-serif" }}
          >
            DONDE LA INGENIERÍA DE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF6DF] via-[#FBBF24] to-[#E67E22]">
              PRECISIÓN SE VISTE DE GALA.
            </span>
          </h1>

          {/* Subrayado Modular a 45° */}
          <img
            src={subrayado3Capas}
            alt="Subrayado Modular"
            className="h-2.5 sm:h-3.5 w-auto object-contain opacity-95"
          />
        </div>

        {/* Manifiesto de la Librería: Claro para cualquier persona y riguroso en lo técnico */}
        <p className="text-base sm:text-lg text-[#9EA2E2] max-w-3xl leading-relaxed font-normal">
          Durante demasiado tiempo, construir una aplicación web obligó a elegir entre dos extremos:
          interfaces genéricas sin carácter propio, o semanas enteras desperdiciadas programando desde
          cero cada botón, selector y ventana emergente.{' '}
          <span className="text-[#FFF6DF] font-semibold">FireSeed UI</span> nace para erradicar esa
          falsa elección. Es una librería de{' '}
          <span className="text-[#FBBF24] font-semibold">componentes atómicos en React</span> donde
          cada pieza funciona como un bloque de encastre perfecto: accesible a primera vista para
          cualquier usuario, pero gobernada por dentro con físicas de resorte reales, tipado estricto
          en TypeScript y ergonomía táctil nativa.
        </p>

        {/* Barra de Comando NPM & Acciones Principales */}
        <div className="space-y-4 pt-2">
          {/* Comando NPM en terminal limpia */}
          <div>
            <button
              onClick={handleCopyInstall}
              className="group inline-flex items-center justify-between gap-6 px-4 py-3 rounded-2xl bg-[#120524] hover:bg-[#241142]/90 border border-[#9EA2E2]/25 hover:border-[#FBBF24]/50 transition-all font-mono text-xs sm:text-sm text-[#FFF6DF]/90 cursor-pointer shadow-lg w-full sm:w-auto min-w-[300px] max-w-md"
            >
              <span className="flex items-center gap-2.5 truncate">
                <Terminal className="w-4 h-4 text-[#FBBF24] shrink-0" />
                <span className="text-[#9EA2E2]/50 select-none">$</span>
                <span className="truncate">npm i fireseed-ui framer-motion</span>
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#9EA2E2]/60 group-hover:text-[#FBBF24] transition-colors shrink-0">
                {copiedInstall ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-sans font-medium">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="hidden sm:inline font-sans">Copiar</span>
                  </>
                )}
              </span>
            </button>
          </div>

          {/* Botones de Navegación con tipografía limpia en 1 sola línea */}
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/docs/button" className="w-full sm:w-auto">
              <Button variant="glow" size="lg" className="w-full sm:w-auto gap-2 font-bold whitespace-nowrap px-6">
                Explorar Componentes
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link to="/docs/usage" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 font-semibold whitespace-nowrap px-5">
                Modo de Uso & Playground
              </Button>
            </Link>

            <Link to="/docs/installation" className="w-full sm:w-auto">
              <Button variant="inset" size="lg" className="w-full sm:w-auto font-semibold whitespace-nowrap px-5">
                Guía de Instalación
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. ESPECIFICACIONES TÉCNICAS DE LA LIBRERÍA (MÉTRICAS DE INGENIERÍA UI)
         ========================================================================= */}
      <div className="space-y-5">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FBBF24] font-mono">
            ● 01 // TELEMETRÍA DEL SISTEMA • ESTÁNDARES DE CONSTRUCCIÓN
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFF6DF]">
            Rigor Técnico en Cada Pieza
          </h2>
          <p className="text-sm text-[#9EA2E2]/80 max-w-2xl">
            Cada componente del catálogo fue sometido a pruebas de latencia visual, accesibilidad por
            teclado y adaptación táctil antes de formar parte del paquete distribuido.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Catálogo Modular"
            value="24+ Legos"
            changePeriod="Átomos, Moléculas y Organismos"
            icon={<Blocks className="w-5 h-5 text-[#FBBF24]" />}
            change="Atomic Design"
            trend="up"
          />

          <StatCard
            title="Física de Animación"
            value="60/120 FPS"
            changePeriod="Resortes elásticos en GPU"
            icon={<Gauge className="w-5 h-5 text-emerald-400" />}
            change="Spring Motion"
            trend="up"
          />

          <StatCard
            title="Ergonomía Táctil"
            value="≥ 44 px"
            changePeriod="Área activa mínima y Haptics"
            icon={<Smartphone className="w-5 h-5 text-[#FBBF24]" />}
            change="Mobile-First"
            trend="up"
          />

          <StatCard
            title="Empaquetado Limpio"
            value="100% TS"
            changePeriod="ESM & CJS con Tree-Shaking"
            icon={<Code2 className="w-5 h-5 text-[#9EA2E2]" />}
            change="Strict Types"
            trend="neutral"
          />
        </div>
      </div>

      {/* =========================================================================
          3. DEMOSTRACIÓN VIVA INTERACTIVA (LOS LEGOS EN ACCIÓN)
         ========================================================================= */}
      <div className="rounded-3xl border border-[#9EA2E2]/20 bg-gradient-to-b from-[#241142]/40 to-[#120524]/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#9EA2E2]/15 pb-5">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FBBF24] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Laboratorio en Tiempo Real
            </span>
            <h3 className="text-xl font-bold text-[#FFF6DF]">
              Probá la Física y Respuesta de los Componentes
            </h3>
          </div>
          <Badge variant="glow">Interactivo • 60fps</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Demo 1: FeedbackButton */}
          <div className="p-5 rounded-2xl bg-[#120524]/90 border border-[#9EA2E2]/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#9EA2E2]">01. FeedbackButton</span>
              <span className="text-[10px] font-mono text-[#FBBF24] bg-[#FBBF24]/10 px-2 py-0.5 rounded border border-[#FBBF24]/20">
                Async State
              </span>
            </div>
            <p className="text-xs text-[#9EA2E2]/80">
              Resuelve promesas asíncronas bloqueando dobles clics y animando su propio estado:
            </p>
            <FeedbackButton
              variant="glow"
              className="w-full"
              initialText="Ejecutar Prueba Asíncrona"
              successText="¡Módulos sincronizados!"
              onClick={simulateAsyncAction}
            />
          </div>

          {/* Demo 2: Switch Háptico */}
          <div className="p-5 rounded-2xl bg-[#120524]/90 border border-[#9EA2E2]/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#9EA2E2]">02. Switch (Toggle)</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Haptic Ready
              </span>
            </div>
            <p className="text-xs text-[#9EA2E2]/80">
              Transición gobernada por tensión y fricción elástica con pulso háptico en móviles:
            </p>
            <div className="pt-1">
              <Switch
                checked={demoSwitch}
                onChange={setDemoSwitch}
                label="Aceleración por Hardware"
                description={demoSwitch ? 'Física de resorte activa' : 'Modo estático'}
              />
            </div>
          </div>

          {/* Demo 3: Badges Semánticos */}
          <div className="p-5 rounded-2xl bg-[#120524]/90 border border-[#9EA2E2]/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#9EA2E2]">03. Badges & Estados</span>
              <span className="text-[10px] font-mono text-[#FFF6DF]/70 bg-white/5 px-2 py-0.5 rounded">
                Semánticos
              </span>
            </div>
            <p className="text-xs text-[#9EA2E2]/80">
              Indicadores de telemetría de alto contraste sobre superficies oscuras:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge variant="glow">v0.1.0 Stable</Badge>
              <Badge variant="success">Tree-Shaking</Badge>
              <Badge variant="warning">Strict TS</Badge>
              <Badge variant="solid">SSR Safe</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. LA TRÍADA DEL DISEÑO ATÓMICO (EXPLICADO SIMPLE Y TÉCNICO)
         ========================================================================= */}
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FBBF24] font-mono">
            ● 02 // METODOLOGÍA DE ENSAMBLAJE • ATOMIC DESIGN
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFF6DF]">
            Cómo Funciona la Arquitectura de Legos
          </h2>
          <p className="text-sm sm:text-base text-[#9EA2E2]/85 max-w-3xl leading-relaxed">
            Para que cualquier persona pueda comprenderlo y cualquier ingeniero pueda escalarlo sin
            caos, dividimos la librería siguiendo los principios del{' '}
            <strong className="text-[#FFF6DF]">Diseño Atómico</strong>. Así como en la naturaleza los
            átomos se unen para formar moléculas y organismos, nuestras piezas se organizan en tres
            niveles claros de responsabilidad:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Nivel 1: Átomos */}
          <Card hoverEffect className="p-6 space-y-4 bg-[#120524] border-[#9EA2E2]/20">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#FFF6DF]/10 text-[#FFF6DF] flex items-center justify-center font-black font-mono">
                01
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#FFF6DF]/10 text-[#FFF6DF]">
                8 Componentes Base
              </span>
            </div>
            <div>
              <CardTitle>Átomos — La Materia Prima</CardTitle>
              <p className="text-xs text-[#FBBF24] font-mono mt-0.5">
                Button • InputField • SelectField • Switch • Badge
              </p>
            </div>
            <p className="text-sm text-[#FFF6DF]/75 leading-relaxed">
              Son los ladrillos fundamentales que no se pueden dividir más sin perder su función. Un
              botón, un campo de texto o una etiqueta. Ya traen resueltos los bordes, el foco por
              teclado, los mensajes de error y el tamaño táctil ideal.
            </p>
          </Card>

          {/* Nivel 2: Moléculas */}
          <Card hoverEffect className="p-6 space-y-4 bg-[#241142]/60 border-[#FBBF24]/40">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#FBBF24] text-[#120524] flex items-center justify-center font-black font-mono shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                02
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#FBBF24] text-[#120524]">
                10 Módulos Interactivos
              </span>
            </div>
            <div>
              <CardTitle>Moléculas — Piezas Inteligentes</CardTitle>
              <p className="text-xs text-[#FBBF24] font-mono mt-0.5">
                Modal • MultiSelect • Tabs • Accordion • StatCard
              </p>
            </div>
            <p className="text-sm text-[#FFF6DF]/85 leading-relaxed">
              Combinan varios átomos para resolver una tarea completa. Por ejemplo, un selector
              múltiple con buscador integrado o una ventana modal que en celulares se convierte sola en
              una hoja deslizable desde abajo (*Bottom Sheet*).
            </p>
          </Card>

          {/* Nivel 3: Organismos */}
          <Card hoverEffect className="p-6 space-y-4 bg-[#120524] border-[#9EA2E2]/20">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#9EA2E2]/15 text-[#9EA2E2] flex items-center justify-center font-black font-mono">
                03
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#9EA2E2]/20 text-[#9EA2E2]">
                4 Estructuras Maestras
              </span>
            </div>
            <div>
              <CardTitle>Organismos — Estructuras Completas</CardTitle>
              <p className="text-xs text-[#9EA2E2] font-mono mt-0.5">
                Card Modular • Sidebar • Callout • AnimateIn
              </p>
            </div>
            <p className="text-sm text-[#FFF6DF]/75 leading-relaxed">
              Secciones enteras de una interfaz listas para albergar contenido complejo. Barras de
              navegación lateral con filtro en vivo, tarjetas compuestas y orquestadores de entrada en
              cascada.
            </p>
          </Card>
        </div>
      </div>

      {/* =========================================================================
          5. LOS 3 PILARES DE INGENIERÍA INTERNA (POR QUÉ SE SIENTE DIFERENTE)
         ========================================================================= */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FBBF24] font-mono">
            ● 03 // ARQUITECTURA INTERNA • BAJO EL CAPÓ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFF6DF]">
            Tres Decisiones de Ingeniería que Marcan la Diferencia
          </h2>
          <p className="text-sm text-[#9EA2E2]/80 max-w-2xl">
            La excelencia de una interfaz no está solo en cómo luce en una captura estática, sino en
            cómo responde en los primeros 100 milisegundos de contacto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative p-6 rounded-2xl bg-[#120524] border border-[#9EA2E2]/20 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#241142] p-3 border border-[#9EA2E2]/25 flex items-center justify-center text-[#FBBF24]">
              <Layers className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#FBBF24]">I // MOVIMIENTO</span>
              <h3 className="font-bold text-lg text-[#FFF6DF]">Física de Resortes Reales</h3>
            </div>
            <p className="text-sm text-[#9EA2E2]/80 leading-relaxed">
              En el mundo físico nada se mueve a velocidad constante. Reemplazamos las curvas de tiempo
              artificiales por ecuaciones de tensión y fricción (<code className="text-[#FFF6DF] font-mono text-xs">stiffness: 400, damping: 30</code>),
              logrando que cada menú y modal conserve su inercia natural incluso si el usuario cambia
              de opinión a mitad del gesto.
            </p>
          </div>

          <div className="relative p-6 rounded-2xl bg-[#120524] border border-[#FBBF24]/30 space-y-4 shadow-[0_0_30px_rgba(251,191,36,0.06)]">
            <div className="w-12 h-12 rounded-2xl bg-[#241142] p-3 border border-[#FBBF24]/40 flex items-center justify-center text-[#FBBF24]">
              <Smartphone className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#FBBF24]">II // TACTO & HAPTICS</span>
              <h3 className="font-bold text-lg text-[#FFF6DF]">Ergonomía Mobile-First</h3>
            </div>
            <p className="text-sm text-[#9EA2E2]/80 leading-relaxed">
              Cada control fue diseñado desde el pulgar hacia el cursor. Las zonas interactivas
              respetan un mínimo estricto de <code className="text-[#FFF6DF] font-mono text-xs">44×44px</code>,
              los desplegables previenen desbordes en pantallas pequeñas y las acciones clave emiten
              pulsos hápticos sutiles en dispositivos compatibles.
            </p>
          </div>

          <div className="relative p-6 rounded-2xl bg-[#120524] border border-[#9EA2E2]/20 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#241142] p-3 border border-[#9EA2E2]/25 flex items-center justify-center text-[#FBBF24]">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#FBBF24]">III // RENDIMIENTO</span>
              <h3 className="font-bold text-lg text-[#FFF6DF]">Tokens CSS sin Sobrecarga</h3>
            </div>
            <p className="text-sm text-[#9EA2E2]/80 leading-relaxed">
              Aprovechamos la directiva nativa <code className="text-[#FFF6DF] font-mono text-xs">@theme</code> de
              Tailwind CSS v4 para inyectar colores y resplandores directamente en la hoja de estilos.
              Sin proveedores de contexto pesados en JavaScript ni recálculos innecesarios en el árbol
              de React.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          6. CÓDIGO DE INTEGRACIÓN (COMPOSICIÓN EN UN ARCHIVO)
         ========================================================================= */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FBBF24] font-mono">
              ● 04 // COMPOSICIÓN DECLARATIVA • DEVELOPER EXPERIENCE
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#FFF6DF]">
              De Cero a Interfaz Completa en Segundos
            </h2>
          </div>
          <Link
            to="/docs/installation"
            className="text-xs font-semibold text-[#FBBF24] hover:underline inline-flex items-center gap-1"
          >
            Ver configuración paso a paso <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <CodeBlock
          code={codigoEjemploRapido}
          language="tsx"
          filename="PanelConfiguracion.tsx"
        />
      </div>
    </div>
  );
}
