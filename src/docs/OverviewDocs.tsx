/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Callout } from '../components/Callout';
import { Card, CardTitle } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Switch } from '../components/Switch';
import { FeedbackButton } from '../components/FeedbackButton';
import { StatCard } from '../components/StatCard';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Copy,
  Check,
  Terminal,
  Clock,
  DollarSign,
  Rocket,
  ShieldCheck,
  Download,
  Flame
} from 'lucide-react';
import { haptics } from '../utils/haptics';

// 🌟 Activos Oficiales del Manual de Marca Master FireSeed
import isotypeF3Capas from '../assets/brand/01_Isotipo/Isotipo_F_3Capas_Oficial_Dark.svg';
import logoV1Dark from '../assets/brand/02_Logos/Logo_V1_FIRESEED_FSE_Modificadas_Dark.svg';
import logoV2Dark from '../assets/brand/02_Logos/Logo_V2_FIRESEED_con_Isotipo_F_3Capas_Dark.svg';
import selloEngineered from '../assets/brand/04_Sellos_Subrayados/sello_oficial_engineered_by_fireseed.svg';
import subrayado3Capas from '../assets/brand/04_Sellos_Subrayados/subrayado_02_encastre_3capas_crema_oro_periwinkle.svg';

// 🎨 Iconos Oficiales de UI (128x128 Vectoriales)
import iconCroquis from '../assets/brand/06_Iconos/01_icon_croquis_arquitectura.svg';
import iconAuditoria from '../assets/brand/06_Iconos/02_icon_auditoria_escaner.svg';
import iconPlugPlay from '../assets/brand/06_Iconos/03_icon_plug_and_play_switch.svg';
import iconEscudo from '../assets/brand/06_Iconos/04_icon_escudo_garantia.svg';
import iconTiempo from '../assets/brand/06_Iconos/05_icon_tiempo_240hs_reloj.svg';
import iconMotorLego from '../assets/brand/06_Iconos/06_icon_motor_3capas_lego.svg';
import iconAhorroUsd from '../assets/brand/06_Iconos/09_icon_pagos_ahorro_usd.svg';
import iconCohete from '../assets/brand/06_Iconos/20_icon_implementacion_1mes_cohete.svg';

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
    <div className="space-y-20 pb-20 text-[#FFF6DF]">
      {/* =========================================================================
          1. HERO PRINCIPAL — VOZ DE MARCA & ARQUITECTURA DE 3 CAPAS
         ========================================================================= */}
      <div className="space-y-6 pt-2">
        {/* Pastillas Superiores (UI Pills) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#241142]/80 border border-[#9EA2E2]/25 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-wider text-[#FBBF24] uppercase">
              PLUG & PLAY • &lt; 1 MES
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#120524] border border-[#9EA2E2]/20">
            <span className="text-[11px] font-mono text-[#9EA2E2]">
              ● 01 // TIEMPO • +240 HS LIBRES AL AÑO
            </span>
          </div>

          <span className="text-[11px] font-mono text-[#9EA2E2]/60 hidden md:inline">
            React 19 • Tailwind v4 • Framer Motion
          </span>
        </div>

        {/* Titular Principal de Alto Nivel */}
        <div className="space-y-2 max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-['PosteramaCustom',sans-serif] font-black tracking-wide text-[#FFF6DF] leading-[1.12]">
            MOTORES DE SOFTWARE PREFABRICADOS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] via-amber-300 to-[#E67E22]">
              DE 3 CAPAS
            </span>
            , ADAPTADOS A MEDIDA.
          </h1>

          {/* Subrayado Modular Oficial a 45° */}
          <div className="pt-1 pb-2">
            <img
              src={subrayado3Capas}
              alt="Subrayado Modular Encastre 3 Capas FireSeed"
              className="h-5 sm:h-6 w-auto max-w-md opacity-90"
            />
          </div>
        </div>

        {/* Subtítulo: Explicación de Negocio Clara + Rigor de Ingeniería */}
        <p className="text-base sm:text-xl text-[#FFF6DF]/80 leading-relaxed max-w-3xl font-normal">
          <strong className="text-[#FFF6DF] font-semibold">FireSeed UI</strong> es el sistema
          maestro de componentes atómicos del ecosistema <strong>FireSeed</strong>. Diseñado bajo la
          doble metáfora rectora:{' '}
          <span className="text-[#FBBF24] font-semibold">Por dentro somos Intel Inside</span> (garantía
          de ingeniería modular de 3 capas, arquitectura Microkernel y bloques Lego) y{' '}
          <span className="text-[#FFF6DF] font-semibold">por fuera somos Apple</span> (fricción cero,
          microvibraciones hápticas, física de resortes y terminaciones de ultra lujo).
        </p>

        {/* Action Buttons & Terminal Snippet */}
        <div className="flex flex-wrap items-center gap-4 pt-3">
          <Link to="/docs/button">
            <Button
              variant="solid"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="bg-gradient-to-r from-[#FBBF24] to-[#E67E22] text-[#120524] font-bold shadow-[0_0_25px_rgba(251,191,36,0.35)] hover:shadow-[0_0_35px_rgba(251,191,36,0.5)] border-none"
            >
              Explorar Catálogo de Legos
            </Button>
          </Link>

          <button
            onClick={copyInstall}
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#241142]/40 hover:bg-[#241142]/70 border border-[#9EA2E2]/25 text-[#FFF6DF] font-mono text-xs sm:text-sm transition-all active:scale-95 cursor-pointer shadow-sm group"
          >
            <Terminal className="w-4 h-4 text-[#FBBF24]" />
            <span>npm i fireseed-ui</span>
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
            ) : (
              <Copy className="w-4 h-4 text-[#9EA2E2]/60 group-hover:text-[#FFF6DF] transition-colors" />
            )}
          </button>
        </div>
      </div>

      {/* =========================================================================
          2. MÉTRICAS CUANTIFICABLES DE NEGOCIO (ROI & IMPACTO REAL)
         ========================================================================= */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FBBF24] font-mono">
            ● 01 // TIEMPO & PLATA • PROPUESTA DE VALOR CUANTIFICABLE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFF6DF]">
            Números Concretos. Sin Verso.
          </h2>
          <p className="text-sm text-[#9EA2E2]/80 max-w-2xl">
            Un dueño de negocio no compra "páginas web"; invierte en recuperar su vida y eliminar
            costos operativos innecesarios.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Tiempo Recuperado"
            value="+240 hs"
            changePeriod="20 días enteros de vida al año"
            icon={<Clock className="w-5 h-5 text-[#FBBF24]" />}
            change="+20 Días"
            trend="up"
          />

          <StatCard
            title="Ahorro Operativo Anual"
            value="$4,600 - $10k"
            changePeriod="Reemplaza contratación manual"
            icon={<DollarSign className="w-5 h-5 text-emerald-400" />}
            change="USD / Año"
            trend="up"
          />

          <StatCard
            title="Entrega Llave en Mano"
            value="< 1 Mes"
            changePeriod="Motor probado y adaptado"
            icon={<Rocket className="w-5 h-5 text-[#FBBF24]" />}
            change="Plug & Play"
            trend="up"
          />

          <StatCard
            title="Disponibilidad Continua"
            value="24/7"
            changePeriod="Señas, reservas y WhatsApp"
            icon={<ShieldCheck className="w-5 h-5 text-[#9EA2E2]" />}
            change="Zero Downtime"
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
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FBBF24] font-mono">
              Live Showcase • Ergonomía Native-First
            </span>
            <h3 className="text-xl font-bold text-[#FFF6DF] tracking-tight">
              Los Legos en Acción Simultánea
            </h3>
          </div>
          <Badge variant="outline" className="border-[#9EA2E2]/30 text-[#9EA2E2]">
            Interactúa con los controles
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-[#120524] border border-[#9EA2E2]/20 space-y-3 shadow-lg">
            <span className="text-xs text-[#9EA2E2] block font-mono">
              01. Botón Háptico Asíncrono
            </span>
            <FeedbackButton
              initialText="Simular Reserva 24/7"
              successText="¡Turno Apartado!"
              variant="solid"
              className="w-full"
              onClick={async () => {
                await new Promise((r) => setTimeout(r, 1200));
              }}
            />
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-[#120524] border border-[#9EA2E2]/20 space-y-3 shadow-lg">
            <span className="text-xs text-[#9EA2E2] block font-mono">
              02. Switch iOS con Resortes
            </span>
            <Switch
              checked={demoSwitch}
              onChange={setDemoSwitch}
              label="Notificar por WhatsApp"
              description="Aviso automático 24hs antes"
            />
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-[#120524] border border-[#9EA2E2]/20 space-y-3 shadow-lg">
            <span className="text-xs text-[#9EA2E2] block font-mono">
              03. Estado Semántico Luminoso
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge variant="success" dot>
                Online 24/7
              </Badge>
              <Badge variant="warning" dot>
                Últimos 2 Cupos
              </Badge>
              <Badge variant="glow">Sello VIP</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. LA ARQUITECTURA DE LAS 3 CAPAS DEL MOTOR (ORIGEN DE LA "F")
         ========================================================================= */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FBBF24] font-mono">
            ● 03 // MOTOR MODULAR • ANATOMÍA DE LA F DE 3 CAPAS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFF6DF]">
            La Arquitectura de las 3 Capas Encastrables
          </h2>
          <p className="text-sm text-[#9EA2E2]/80 max-w-3xl">
            Todo el sistema de FireSeed se fundamenta en 3 capas encastrables. Esta arquitectura es
            exactamente la que da origen a la geometría sagrada de nuestro isotipo oficial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Capa 1 */}
          <Card hoverEffect className="p-6 space-y-4 bg-[#120524] border-[#9EA2E2]/20">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#FFF6DF] flex items-center justify-center font-black">
                C1
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-[#FFF6DF]">
                #FFF6DF • Superior
              </span>
            </div>
            <div>
              <CardTitle>Capa 1 — Estética de Lujo</CardTitle>
              <p className="text-xs text-[#9EA2E2] font-mono mt-0.5">La cara visible ante el cliente</p>
            </div>
            <p className="text-sm text-[#FFF6DF]/75 leading-relaxed">
              Interfaz visual impecable, terminaciones de ultra lujo inspiradas en Apple, microvibraciones
              táctiles, tipografía Posterama Custom y física de resortes elásticos sin parpadeos.
            </p>
          </Card>

          {/* Capa 2 */}
          <Card hoverEffect className="p-6 space-y-4 bg-[#120524] border-[#FBBF24]/30 shadow-[0_0_25px_rgba(251,191,36,0.12)]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#FBBF24]/15 text-[#FBBF24] flex items-center justify-center font-black">
                C2
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#FBBF24]/20 text-[#FBBF24]">
                #FBBF24 • Chispa Solar
              </span>
            </div>
            <div>
              <CardTitle className="text-[#FBBF24]">Capa 2 — Módulos Adaptables ("Legos")</CardTitle>
              <p className="text-xs text-[#9EA2E2] font-mono mt-0.5">Plugins funcionales a medida</p>
            </div>
            <p className="text-sm text-[#FFF6DF]/75 leading-relaxed">
              Bloques modulares que se encastran según el negocio: Agenda 24/7, cobro de señas por
              transferencia o tarjeta, recordatorios automáticos por WhatsApp y panel de métricas operativas.
            </p>
          </Card>

          {/* Capa 3 */}
          <Card hoverEffect className="p-6 space-y-4 bg-[#120524] border-[#9EA2E2]/20">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#9EA2E2]/15 text-[#9EA2E2] flex items-center justify-center font-black">
                C3
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#9EA2E2]/20 text-[#9EA2E2]">
                #FFF6DF • Cimiento
              </span>
            </div>
            <div>
              <CardTitle>Capa 3 — Motor Base Prefabricado</CardTitle>
              <p className="text-xs text-[#9EA2E2] font-mono mt-0.5">Grado militar & Microkernel</p>
            </div>
            <p className="text-sm text-[#FFF6DF]/75 leading-relaxed">
              El núcleo técnico sólido y seguro ya construido y probado en batalla. Permite entregar
              sistemas de alta complejidad en menos de 1 mes con cero errores de cimiento.
            </p>
          </Card>
        </div>
      </div>

      {/* =========================================================================
          5. EL MÉTODO COMERCIAL EN 3 PASOS (ESTRUCTURA OFICIAL)
         ========================================================================= */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FBBF24] font-mono">
            ● 02 // MÉTODO • CÓMO TRABAJA FIRESEED
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFF6DF]">
            El Método en 3 Pasos
          </h2>
          <p className="text-sm text-[#9EA2E2]/80 max-w-2xl">
            "Nosotros nos encargamos de todo, vos solo disfrutás."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative p-6 rounded-2xl bg-[#120524] border border-[#9EA2E2]/20 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#241142] p-2.5 border border-[#9EA2E2]/25">
              <img src={iconAuditoria} alt="Auditoría Operativa" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#FBBF24]">01 // FASE</span>
              <h3 className="font-bold text-lg text-[#FFF6DF]">Auditoría Operativa</h3>
            </div>
            <p className="text-sm text-[#9EA2E2]/80 leading-relaxed">
              Analizamos tu negocio para detectar exactamente por dónde se te están escapando horas,
              clientes y plata agendando manualmente.
            </p>
          </div>

          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#241142] to-[#120524] border border-[#FBBF24]/30 space-y-4 shadow-[0_0_30px_rgba(251,191,36,0.12)]">
            <div className="w-12 h-12 rounded-2xl bg-[#FBBF24]/15 p-2.5 border border-[#FBBF24]/30">
              <img src={iconCroquis} alt="Croquis a Medida" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#FBBF24]">02 // FASE (SIN CARGO)</span>
              <h3 className="font-bold text-lg text-[#FFF6DF]">Croquis a Medida</h3>
            </div>
            <p className="text-sm text-[#FFF6DF]/80 leading-relaxed">
              Armamos el plano visual y funcional de tu sistema antes de que inviertas un peso, para que
              veas con tus propios ojos cómo se adapta a tus reglas.
            </p>
          </div>

          <div className="relative p-6 rounded-2xl bg-[#120524] border border-[#9EA2E2]/20 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#241142] p-2.5 border border-[#9EA2E2]/25">
              <img src={iconCohete} alt="Motor Plug and Play" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#FBBF24]">03 // FASE (&lt; 1 MES)</span>
              <h3 className="font-bold text-lg text-[#FFF6DF]">Motor Plug & Play</h3>
            </div>
            <p className="text-sm text-[#9EA2E2]/80 leading-relaxed">
              Encastramos los módulos, aplicamos terminaciones de lujo y te entregamos el sistema andando
              24/7. Llave en mano y sin dolores de cabeza.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          6. GALERÍA DE ACTIVOS DE MARCA OFICIALES (DESCARGABLES EN SVG)
         ========================================================================= */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FBBF24] font-mono flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-[#FBBF24]" /> Universo Gráfico Master
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFF6DF]">
            Logotipos, Isotipo y Sellos Oficiales
          </h2>
          <p className="text-sm text-[#9EA2E2]/80 max-w-2xl">
            Activos vectoriales oficiales construidos con precisión geométrica a 45°. Listos para
            producción web, aplicaciones y documentos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1. Isotipo F 3 Capas */}
          <div className="p-5 rounded-2xl bg-[#120524] border border-[#9EA2E2]/20 space-y-4 flex flex-col items-center text-center group">
            <div className="w-20 h-20 p-2.5 rounded-2xl bg-[#241142]/60 border border-[#9EA2E2]/20 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <img src={isotypeF3Capas} alt="Isotipo Oficial F de 3 Capas" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm text-[#FFF6DF]">Isotipo F 3 Capas</h3>
              <p className="text-[11px] text-[#9EA2E2]/60 font-mono">01_Isotipo_Oficial</p>
            </div>
            <p className="text-xs text-[#9EA2E2]/80 leading-relaxed">
              3 barras horizontales del motor. Franja central en Oro Solar (#FBBF24).
            </p>
            <a
              href={isotypeF3Capas}
              download="Isotipo_F_3Capas_Oficial_Dark.svg"
              className="mt-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#241142] hover:bg-[#241142]/80 border border-[#9EA2E2]/30 text-[#FFF6DF] transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#FBBF24]" /> Descargar
            </a>
          </div>

          {/* 2. Logo V1 FSE Modificadas */}
          <div className="p-5 rounded-2xl bg-[#120524] border border-[#9EA2E2]/20 space-y-4 flex flex-col items-center text-center group">
            <div className="w-full h-20 p-3 rounded-2xl bg-[#241142]/60 border border-[#9EA2E2]/20 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <img src={logoV1Dark} alt="Logo V1 FIRESEED FSE Modificadas" className="w-full h-auto object-contain" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm text-[#FFF6DF]">Logo V1 (Bevel 45°)</h3>
              <p className="text-[11px] text-[#9EA2E2]/60 font-mono">02_Logotipos_V1</p>
            </div>
            <p className="text-xs text-[#9EA2E2]/80 leading-relaxed">
              FIRE Crema, SEED Oro Solar. Usar cuando el isotipo esté cerca.
            </p>
            <a
              href={logoV1Dark}
              download="Logo_V1_FIRESEED_FSE_Modificadas_Dark.svg"
              className="mt-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#241142] hover:bg-[#241142]/80 border border-[#9EA2E2]/30 text-[#FFF6DF] transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#FBBF24]" /> Descargar
            </a>
          </div>

          {/* 3. Logo V2 con Isotipo F */}
          <div className="p-5 rounded-2xl bg-[#120524] border border-[#9EA2E2]/20 space-y-4 flex flex-col items-center text-center group">
            <div className="w-full h-20 p-3 rounded-2xl bg-[#241142]/60 border border-[#9EA2E2]/20 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <img src={logoV2Dark} alt="Logo V2 FIRESEED con Isotipo F de 3 Capas" className="w-full h-auto object-contain" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm text-[#FFF6DF]">Logo V2 Integrado</h3>
              <p className="text-[11px] text-[#9EA2E2]/60 font-mono">02_Logotipos_V2</p>
            </div>
            <p className="text-xs text-[#9EA2E2]/80 leading-relaxed">
              Incorpora la F de 3 capas como letra inicial de FIRESEED.
            </p>
            <a
              href={logoV2Dark}
              download="Logo_V2_FIRESEED_con_Isotipo_F_3Capas_Dark.svg"
              className="mt-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#241142] hover:bg-[#241142]/80 border border-[#9EA2E2]/30 text-[#FFF6DF] transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#FBBF24]" /> Descargar
            </a>
          </div>

          {/* 4. Sello Oficial Engineered by FireSeed */}
          <div className="p-5 rounded-2xl bg-[#120524] border border-[#9EA2E2]/20 space-y-4 flex flex-col items-center text-center group">
            <div className="w-full h-20 p-2 rounded-2xl bg-[#241142]/60 border border-[#9EA2E2]/20 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <img src={selloEngineered} alt="Sello Oficial Engineered by FireSeed" className="w-full h-auto object-contain" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm text-[#FFF6DF]">Sello "Intel Inside"</h3>
              <p className="text-[11px] text-[#9EA2E2]/60 font-mono">04_Sellos_Oficiales</p>
            </div>
            <p className="text-xs text-[#9EA2E2]/80 leading-relaxed">
              Firma oficial para footers, propuestas y software a medida.
            </p>
            <a
              href={selloEngineered}
              download="sello_oficial_engineered_by_fireseed.svg"
              className="mt-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#241142] hover:bg-[#241142]/80 border border-[#9EA2E2]/30 text-[#FFF6DF] transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#FBBF24]" /> Descargar
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          7. PACK DE 20 ICONOS PROPIOS DE UI (MUESTRARIO VISUAL)
         ========================================================================= */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FBBF24] font-mono">
            ● 06 // ICONOS OFICIALES • SISTEMA DE 128x128px
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFF6DF]">
            Iconografía Oficial del Ecosistema
          </h2>
          <p className="text-sm text-[#9EA2E2]/80 max-w-2xl">
            Construidos sobre grilla de 128px con Crema (#FFF6DF), Periwinkle (#9EA2E2) y chispa central en Oro Solar (#FBBF24).
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {[
            { img: iconCroquis, name: 'Croquis Arquitectura' },
            { img: iconAuditoria, name: 'Auditoría Escáner' },
            { img: iconPlugPlay, name: 'Plug & Play Switch' },
            { img: iconEscudo, name: 'Escudo Garantía' },
            { img: iconTiempo, name: '240hs Tiempo' },
            { img: iconMotorLego, name: 'Motor 3 Capas' },
            { img: iconAhorroUsd, name: 'Ahorro USD' },
            { img: iconCohete, name: 'Entrega 1 Mes' },
          ].map((ico, idx) => (
            <div
              key={idx}
              className="p-3 rounded-2xl bg-[#120524] border border-[#9EA2E2]/15 hover:border-[#FBBF24]/40 flex flex-col items-center text-center gap-2 transition-all hover:scale-105"
            >
              <img src={ico.img} alt={ico.name} className="w-10 h-10 object-contain" />
              <span className="text-[10px] text-[#9EA2E2]/70 font-mono leading-tight">
                {ico.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          8. INSTALACIÓN RÁPIDA & FIRMA EN CONSOLA
         ========================================================================= */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-[#FFF6DF]">Integración en tu Proyecto</h2>
        <Callout variant="glow" title="Configuración Plug & Play en 60 Segundos">
          Importa los bloques Lego directamente en cualquier aplicación React con Tailwind CSS v4. Todos los
          estilos compilan de forma atómica y los tipos TypeScript vienen listos para autocompletar en tu IDE.
        </Callout>

        <div className="overflow-hidden rounded-2xl bg-[#120524] border border-[#9EA2E2]/20 font-mono text-xs sm:text-sm text-zinc-300 p-5 space-y-3">
          <p className="text-[#9EA2E2]/60">// 1. Importación nombrada de Legos:</p>
          <p className="text-[#FBBF24]">
            import &#123; Button, Modal, FeedbackButton, MultiSelect &#125; from 'fireseed-ui';
          </p>
          <p className="text-[#9EA2E2]/60 pt-2">// 2. Uso en JSX con Tokens Semánticos:</p>
          <pre className="text-[#FFF6DF] overflow-x-auto">
{`<Button variant="glow" onClick={() => setIsOpen(true)}>
  Apartar Turno 24/7
</Button>`}
          </pre>
          <p className="text-[#9EA2E2]/60 pt-2">// 3. Firma Oficial Automática en Consola (F12):</p>
          <div className="p-2.5 rounded-lg bg-[#0D041A] border border-[#9EA2E2]/15 text-[11px] flex items-center gap-2">
            <span className="bg-[#FBBF24] text-[#120524] font-black px-1.5 py-0.5 rounded">FS</span>
            <span className="text-[#9EA2E2]">Engineered by FireSeed™ — Motor Modular Plug & Play</span>
          </div>
        </div>
      </div>
    </div>
  );
}
