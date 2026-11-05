/* Developed by FireSeed - Fueling Innovation */
import { useState, useEffect } from 'react';
import { SidebarLink } from './SidebarLink';
import { Search, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MenuSection } from '../../doc-router/docsMenu';
import { haptics } from '../../utils/haptics';

export interface SidebarMenuProps {
  sections: MenuSection[];
  currentPath: string;
  linkComponent?: React.ElementType;
  onClick?: () => void;
}

export function SidebarMenu({
  sections,
  currentPath,
  linkComponent,
  onClick
}: SidebarMenuProps) {
  const [filter, setFilter] = useState('');

  // Estado para controlar qué secciones están abiertas/cerradas (acordeón/toggle)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    sections.forEach((sec) => {
      initial[sec.title] = true; // Por defecto abiertas
    });
    return initial;
  });

  // Asegurar que la sección que contiene la ruta actual siempre se expanda automáticamente
  useEffect(() => {
    sections.forEach((sec) => {
      const hasActive = sec.items.some((item) => item.href === currentPath);
      if (hasActive) {
        setOpenSections((prev) => ({ ...prev, [sec.title]: true }));
      }
    });
  }, [currentPath, sections]);

  const toggleSection = (title: string) => {
    haptics.light();
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const filteredSections = sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.label.toLowerCase().includes(filter.toLowerCase())
      )
    }))
    .filter((section) => section.items.length > 0);

  return (
    <div className="space-y-5">
      {/* Buscador Rápido del Sidebar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filtrar Legos..."
          className="w-full pl-8 pr-7 py-2 text-xs bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 rounded-xl text-white placeholder:text-white/30 outline-none focus:border-accent-main/50 transition-all"
        />
        {filter && (
          <button
            onClick={() => setFilter('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      <nav className="space-y-4">
        {filteredSections.map((section) => {
          const isOpen = filter ? true : openSections[section.title] ?? true;

          return (
            <div key={section.title} className="space-y-1">
              {/* Botón Toggle de la Sección */}
              <button
                type="button"
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between px-2.5 py-2 text-xs font-bold uppercase tracking-wider text-white/50 hover:text-white rounded-xl hover:bg-white/[0.04] transition-all cursor-pointer select-none group min-h-[38px]"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: isOpen ? 0 : -90 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="text-white/30 group-hover:text-accent-main transition-colors"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </motion.div>
                  <span className="group-hover:text-white transition-colors">{section.title}</span>
                </div>

                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-white/5 text-white/40 group-hover:text-accent-main group-hover:bg-accent-main/10 transition-colors">
                  {section.items.length}
                </span>
              </button>

              {/* Lista de Enlaces Colapsable */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-0.5 pt-0.5 pl-3 border-l border-white/5 ml-3" onClick={onClick}>
                      {section.items.map((item) => (
                        <SidebarLink
                          key={item.href}
                          href={item.href}
                          label={item.label}
                          isActive={currentPath === item.href}
                          as={linkComponent}
                        />
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
