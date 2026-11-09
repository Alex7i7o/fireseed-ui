/* Developed by FireSeed - Fueling Innovation */

export interface MenuItem {
  label: string;
  href: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const docsMenu: MenuSection[] = [
  {
    title: 'Primeros Pasos',
    items: [
      { label: '¿Qué es FireSeed UI?', href: '/docs/overview' },
      { label: 'Instalación', href: '/docs/installation' },
      { label: 'Modo de Uso', href: '/docs/usage' },
      { label: 'Temas & Tokens', href: '/docs/theme' }
    ]
  },
  {
    title: 'Átomos',
    items: [
      { label: 'Button', href: '/docs/button' },
      { label: 'Badge', href: '/docs/badge' },
      { label: 'InputField', href: '/docs/input-field' },
      { label: 'SelectField', href: '/docs/select-field' },
      { label: 'Skeleton', href: '/docs/skeleton' },
      { label: 'Switch (Toggle)', href: '/docs/switch' },
      { label: 'InlineCode', href: '/docs/inline-code' },
      { label: 'StepBadge', href: '/docs/step-badge' }
    ]
  },
  {
    title: 'Moléculas',
    items: [
      { label: 'FeedbackButton', href: '/docs/feedback-button' },
      { label: 'Modal / Bottom Sheet', href: '/docs/modal' },
      { label: 'ConfirmModal', href: '/docs/confirm-modal' },
      { label: 'MultiSelect (Combobox)', href: '/docs/multiselect' },
      { label: 'Tabs (Pestañas)', href: '/docs/tabs' },
      { label: 'PasswordRequirements', href: '/docs/password-requirements' },
      { label: 'StarRating', href: '/docs/star-rating' },
      { label: 'Accordion', href: '/docs/accordion' },
      { label: 'StatCard (Métricas)', href: '/docs/stat-card' },
      { label: 'EmptyState', href: '/docs/empty-state' },
      { label: 'Calendar (Calendario)', href: '/docs/calendar' }
    ]
  },
  {
    title: 'Organismos & Utilidades',
    items: [
      { label: 'Card Modular', href: '/docs/card' },
      { label: 'Callout', href: '/docs/callout' },
      { label: 'Sidebar', href: '/docs/sidebar' },
      { label: 'AnimateIn', href: '/docs/animate-in' },
      { label: 'CodeBlock', href: '/docs/code-block' }
    ]
  }
];
