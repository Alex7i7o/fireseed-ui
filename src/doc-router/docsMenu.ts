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
      { label: 'Checkbox', href: '/docs/checkbox' },
      { label: 'Radio & Group', href: '/docs/radio' },
      { label: 'Avatar & Group', href: '/docs/avatar' },
      { label: 'Tooltip', href: '/docs/tooltip' },
      { label: 'Textarea', href: '/docs/textarea' },
      { label: 'Slider', href: '/docs/slider' },
      { label: 'Separator', href: '/docs/separator' },
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
      { label: 'Calendar (Calendario)', href: '/docs/calendar' },
      { label: 'DatePicker', href: '/docs/date-picker' },
      { label: 'DropdownMenu', href: '/docs/dropdown-menu' },
      { label: 'MultiSelect (Combobox)', href: '/docs/multiselect' },
      { label: 'Tabs (Pestañas)', href: '/docs/tabs' },
      { label: 'Breadcrumb', href: '/docs/breadcrumb' },
      { label: 'Pagination', href: '/docs/pagination' },
      { label: 'Stepper & Timeline', href: '/docs/stepper' },
      { label: 'PasswordRequirements', href: '/docs/password-requirements' },
      { label: 'StarRating', href: '/docs/star-rating' },
      { label: 'Accordion', href: '/docs/accordion' },
      { label: 'StatCard (Métricas)', href: '/docs/stat-card' },
      { label: 'EmptyState', href: '/docs/empty-state' }
    ]
  },
  {
    title: 'Organismos & Utilidades',
    items: [
      { label: 'Chat & Mensajería IA', href: '/docs/chat' },
      { label: 'Table & DataTable', href: '/docs/table' },
      { label: 'Drawer (Panel)', href: '/docs/drawer' },
      { label: 'Card Modular', href: '/docs/card' },
      { label: 'Callout', href: '/docs/callout' },
      { label: 'Sidebar', href: '/docs/sidebar' },
      { label: 'AnimateIn', href: '/docs/animate-in' },
      { label: 'CodeBlock', href: '/docs/code-block' }
    ]
  }
];
