/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Callout } from '../components/Callout';
import { Card, CardTitle } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Switch } from '../components/Switch';
import { FeedbackButton } from '../components/FeedbackButton';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Sparkles,
  Sliders,
  Box,
  ArrowRight,
  Copy,
  Check,
  Terminal,
  Flame
} from 'lucide-react';
import { haptics } from '../utils/haptics';
import isotypeImg from '../assets/fireseed-isotype.png';
import logoImg from '../assets/fireseed-logo.jpg';

export function OverviewDocs() {
  const [copied, setCopied] = useState(false);
  const [demoSwitch, setDemoSwitch] = useState(true);

  const copyInstall = async () => {
    try {
      await navigator.clipboard.writeText('npm install fireseed-ui');
      haptics.success();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="space-y-16 pb-20 text-white">
      {/* 1. HERO SECTION */}
      <div className="space-y-6 pt-2">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-main/10 border border-accent-main/30 backdrop-blur-md shadow-[0_0_15px_rgba(253,204,4,0.15)] shrink-0">
            <img
              src={isotypeImg}
              alt="FireSeed Isotipo"
              className="h-4 w-auto object-contain shrink-0"
              style={{ height: '16px', width: 'auto', aspectRatio: '633 / 845' }}
            />
            <span className="text-xs font-bold text-accent-main tracking-wider uppercase font-mono">
              FIRESEED
            </span>
          </div>
          <Badge variant="glow" size="lg" dot>
            v0.1.0 • Producción
          </Badge>
          <span className="text-xs font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
            React 19 • Tailwind v4 • Framer Motion
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-[-0.035em] text-white leading-[1.08] max-w-4xl">
          Arquitectura de Componentes{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-main via-amber-300 to-yellow-500">
            "Legos"
          </span>{' '}
          para Aplicaciones de Élite.
        </h1>

        <p className="text-base sm:text-xl text-zinc-400 leading-relaxed max-w-3xl font-normal">
          <strong className="text-zinc-200">Fireseed UI</strong> es la librería oficial de bloques
          atómicos del ecosistema <strong>FireSeed</strong>. Diseñada bajo el estándar de{' '}
          <em className="text-white">App Nativa</em> (iOS & Android): ergonomía táctil en pantalla,
          microvibraciones hápticas, resortes Apple y desacoplamiento de marca por tokens CSS.
        </p>

        {/* Action Buttons & Terminal Snippet */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link to="/docs/button">
            <Button variant="solid" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Explorar Catálogo
            </Button>
          </Link>

          <button
            onClick={copyInstall}
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white font-mono text-xs sm:text-sm transition-all active:scale-95 cursor-pointer shadow-sm group"
          >
            <Terminal className="w-4 h-4 text-accent-main" />
            <span>npm i fireseed-ui</span>
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            )}
          </button>
        </div>
      </div>

      {/* 2. DEMOSTRACIÓN VIVA INTERACTIVA */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-main font-mono">
              Live Showcase
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Los Legos en Acción Simultánea
            </h3>
          </div>
          <Badge variant="outline">Interactúa con los controles</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            <span className="text-xs text-zinc-400 block font-mono">01. Botón Háptico Asíncrono</span>
            <FeedbackButton
              initialText="Simular Reserva"
              successText="¡Camilla Apartada!"
              variant="solid"
              className="w-full"
              onClick={async () => {
                await new Promise((r) => setTimeout(r, 1200));
              }}
            />
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            <span className="text-xs text-zinc-400 block font-mono">02. Switch iOS con Resortes</span>
            <Switch
              checked={demoSwitch}
              onChange={setDemoSwitch}
              label="Notificar por WhatsApp"
              description="Aviso 25hs antes de la clase"
            />
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            <span className="text-xs text-zinc-400 block font-mono">03. Estado Semántico Luminoso</span>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge variant="success" dot>
                Activo
              </Badge>
              <Badge variant="warning" dot>
                Últimos Cupos
              </Badge>
              <Badge variant="glow">VIP</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* 3. LOS 4 PILARES METODOLÓGICOS */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-main font-mono">
            Filosofía de Ingeniería
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Diseñada para Escalar sin Caos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card hoverEffect className="p-6 space-y-3 bg-white/[0.02] border-white/10">
            <div className="w-10 h-10 rounded-xl bg-accent-main/15 text-accent-main flex items-center justify-center">
              <Box className="w-5 h-5" />
            </div>
            <CardTitle>1. Atomic Design Extremo ("Legos")</CardTitle>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Cada componente tiene una única responsabilidad. Átomos (Button, Input), Moléculas (Modal,
              MultiSelect, Tabs) y Organismos (Card, Sidebar). Se combinan libremente sin dependencias ocultas.
            </p>
          </Card>

          <Card hoverEffect className="p-6 space-y-3 bg-white/[0.02] border-white/10">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
              <Sliders className="w-5 h-5" />
            </div>
            <CardTitle>2. Config-Driven Theming</CardTitle>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Cero colores de cliente hardcodeados. El mismo Lego se viste con la identidad de cualquier marca
              (Violett Pilates, Violett Estética o nuevos SaaS) mediante tokens CSS semánticos y dinámicos.
            </p>
          </Card>

          <Card hoverEffect className="p-6 space-y-3 bg-white/[0.02] border-white/10">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
              <Smartphone className="w-5 h-5" />
            </div>
            <CardTitle>3. Estándar "Native-First"</CardTitle>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Áreas táctiles ergonómicas (mínimo 44px de altura), respuesta háptica integrada
              (navigator.vibrate), modales que se transforman en Bottom Sheets táctiles en celulares y Skeletons para evitar saltos de pantalla (CLS).
            </p>
          </Card>

          <Card hoverEffect className="p-6 space-y-3 bg-white/[0.02] border-white/10">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <CardTitle>4. Física de Resortes Apple</CardTitle>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Microinteracciones calibradas entre 200ms y 400ms con resortes de Framer Motion. La interfaz
              nunca se siente rígida ni parpadea: responde como un objeto físico bajo los dedos del usuario.
            </p>
          </Card>
        </div>
      </div>

      {/* 4. IDENTIDAD DE MARCA OFICIAL */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-main font-mono flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-accent-main" /> Identidad Visual
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Logotipo e Isotipo Oficial FireSeed
          </h2>
          <p className="text-sm text-zinc-400">
            Los activos gráficos oficiales listos para usar en aplicaciones web, móviles y documentación.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Tarjeta Isotipo */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d041a] p-6 flex flex-col items-center justify-center text-center space-y-4 group">
            <div className="ambient-glow" />
            <div className="relative z-10 w-28 h-28 flex items-center justify-center p-3 rounded-2xl bg-black/40 border border-white/10 shadow-[0_0_30px_rgba(253,204,4,0.15)] group-hover:scale-105 transition-transform duration-300">
              <img
                src={isotypeImg}
                alt="Isotipo Oficial FireSeed"
                className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(253,204,4,0.5)]"
                style={{ aspectRatio: '633 / 845' }}
              />
            </div>
            <div className="relative z-10 space-y-1">
              <h3 className="font-bold text-white text-base">Isotipo ("La Llama y Semilla")</h3>
              <p className="text-xs text-zinc-400 max-w-xs font-mono">
                public/fireseed-isotype.png (Transparente)
              </p>
            </div>
            <a
              href={isotypeImg}
              download="fireseed-isotype.png"
              className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all cursor-pointer"
            >
              Descargar Isotipo PNG
            </a>
          </div>

          {/* Tarjeta Logo Completo */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d041a] p-6 flex flex-col items-center justify-center text-center space-y-4 group">
            <div className="relative z-10 w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(120,40,200,0.2)] group-hover:scale-105 transition-transform duration-300">
              <img
                src={logoImg}
                alt="Logotipo Oficial FireSeed"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 space-y-1">
              <h3 className="font-bold text-white text-base">Logotipo Completo</h3>
              <p className="text-xs text-zinc-400 max-w-xs font-mono">
                public/fireseed-logo.jpg (Dark Purple & Gold)
              </p>
            </div>
            <a
              href={logoImg}
              download="fireseed-logo.jpg"
              className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all cursor-pointer"
            >
              Descargar Logotipo JPG
            </a>
          </div>
        </div>
      </div>

      {/* 5. INSTALACIÓN RÁPIDA */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">Integración en tu Proyecto</h2>
        <Callout variant="glow" title="Configuración en 60 segundos">
          Importa los componentes directamente en cualquier aplicación React con Tailwind CSS v4. Todos los
          estilos compilan de forma atómica y los tipos TypeScript vienen listos para autocompletar en tu IDE.
        </Callout>

        <div className="overflow-hidden rounded-2xl bg-[#0a0314] border border-white/10 font-mono text-xs sm:text-sm text-zinc-300 p-5 space-y-2">
          <p className="text-zinc-500">// 1. Importación nombrada:</p>
          <p className="text-accent-main">
            import &#123; Button, Modal, FeedbackButton, MultiSelect &#125; from 'fireseed-ui';
          </p>
          <p className="text-zinc-500 pt-2">// 2. Uso en JSX:</p>
          <pre className="text-zinc-300 overflow-x-auto">
{`<Button variant="glow" onClick={() => setIsOpen(true)}>
  Abrir Turnos
</Button>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
