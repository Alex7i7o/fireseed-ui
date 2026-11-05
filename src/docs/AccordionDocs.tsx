/* Developed by FireSeed - Fueling Innovation */
import { Accordion } from '../components/Accordion';
import { Callout } from '../components/Callout';
import { HelpCircle, Clock, ShieldAlert } from 'lucide-react';

const codigoAccordion = `import { Accordion } from 'fireseed-ui';
import { HelpCircle, Clock, ShieldAlert } from 'lucide-react';

export default function FAQ() {
  return (
    <Accordion
      allowMultiple={false}
      items={[
        {
          id: '1',
          title: '¿Cuál es la política de cancelación de clases?',
          icon: <Clock className="w-4 h-4" />,
          content: 'Las cancelaciones deben realizarse con al menos 25 horas de anticipación para no perder el crédito del abono.'
        },
        {
          id: '2',
          title: '¿Qué indumentaria es obligatoria para Pilates Reformer?',
          icon: <HelpCircle className="w-4 h-4" />,
          content: 'Por cuestiones de higiene y tracción en las camillas, es obligatorio el uso de medias antideslizantes.'
        }
      ]}
    />
  );
}`;

export function AccordionDocs() {
  const faqItems = [
    {
      id: '1',
      title: '¿Cuál es la política de cancelación de clases?',
      icon: <Clock className="w-4 h-4" />,
      content:
        'Las cancelaciones deben realizarse con al menos 25 horas de anticipación para que el cupo retorne automáticamente al saldo de tu plan.'
    },
    {
      id: '2',
      title: '¿Cómo funciona la lista de espera con el bot de WhatsApp?',
      icon: <HelpCircle className="w-4 h-4" />,
      content:
        'Si una clase está completa y alguien cancela, el asistente virtual de FireSeed envía un aviso simultáneo a las personas en espera para confirmar su vacante.'
    },
    {
      id: '3',
      title: '¿Qué medidas de seguridad y privacidad tienen mis datos?',
      icon: <ShieldAlert className="w-4 h-4" />,
      content:
        'Cada estudio cuenta con aislamiento de base de datos multi-tenancy y encriptación de extremo a extremo en credenciales y transferencias.'
    }
  ];

  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          Accordion (Colapsable){' '}
          <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Secciones plegables animadas con transición elástica de altura (height auto) y rotación de chevron para
          preguntas frecuentes, filtros o paneles de configuración.
        </p>
      </div>

      <hr className="border-white/5" />

      <Callout variant="glow" title="Cero Animaciones Tosco-Bruscas">
        Gracias a Framer Motion <code>AnimatePresence</code>, el contenido no parpadea ni desaparece abruptamente:
        se expande y colapsa de forma fluida calculando dinámicamente la altura del DOM interno.
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>AccordionDemo.tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">{codigoAccordion}</pre>
        </div>

        <div className="mt-6 space-y-4 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm max-w-2xl">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Acordeón en Vivo</h3>
          <Accordion items={faqItems} defaultExpandedIds={['1']} />
        </div>
      </div>
    </div>
  );
}
