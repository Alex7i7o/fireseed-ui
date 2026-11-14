/* Developed by FireSeed - Fueling Innovation */
import { useState, useEffect, useRef } from 'react';
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
  defaultCollapsed?: boolean;
  autoScrollActive?: boolean;
}

export function SidebarMenu({
  sections,
  currentPath,
  linkComponent,
  onClick,
  defaultCollapsed = true,
  autoScrollActive = false
}: SidebarMenuProps) {
  const [filter, setFilter] = useState('');
  const activeItemRef = useRef<HTMLLIElement>(null);

  // Estado para controlar qué secciones están abiertas/cerradas (acordeón/toggle)
  // Por defecto, solo se abre la sección donde estamos parados (tanto en desktop como en mobile)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    sections.forEach((sec) => {
      const hasActive = sec.items.some((item) => item.href === currentPath);
      initial[sec.title] = defaultCollapsed ? hasActive : true;
    });
    return initial;
  });

  // Asegurar que al cambiar de ruta, se actualice el estado acorde a defaultCollapsed
  useEffect(() => {
    setOpenSections(() => {
      const nextState: Record<string, boolean> = {};
      sections.forEach((sec) => {
        const hasActive = sec.items.some((item) => item.href === currentPath);
        nextState[sec.title] = defaultCollapsed ? hasActive : true;
      });
      return nextState;
    });
  }, [currentPath, sections, defaultCollapsed]);

  // Scroll enfocado hacia el elemento activo (especialmente en dispositivos móviles)
  useEffect(() => {
    if (autoScrollActive) {
      const timer = setTimeout(() => {
        if (activeItemRef.current) {
          activeItemRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [currentPath, autoScrollActive]);

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
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted/50" />
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filtrar Legos..."
          className="w-full pl-8 pr-7 py-2 text-xs bg-card/30 hover:bg-card/50 border border-white/15 rounded-xl text-foreground placeholder:text-muted/40 outline-none focus:border-accent/60 transition-all"
        />
        {filter && (
          <button
            onClick={() => setFilter('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted/60 hover:text-foreground"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      <nav className="space-y-4">
        {filteredSections.map((section) => {
          const isOpen = filter ? true : openSections[section.title] ?? false;

          return (
            <div key={section.title} className="space-y-1">
              {/* Botón Toggle de la Sección con Tipografía Posterama */}
              <button
                type="button"
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between px-2.5 py-2 text-[11px] font-['PosteramaCustom',sans-serif] font-bold uppercase tracking-wider text-muted/80 hover:text-foreground rounded-xl hover:bg-card/40 transition-all cursor-pointer select-none group min-h-[38px]"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: isOpen ? 0 : -90 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="text-muted/50 group-hover:text-accent transition-colors"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </motion.div>
                  <span className="group-hover:text-foreground transition-colors">{section.title}</span>
                </div>

                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-card/80 text-muted/70 border border-white/15 group-hover:text-accent group-hover:border-accent/40 transition-colors">
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
                    <ul className="space-y-0.5 pt-0.5 pl-3 border-l border-white/10 ml-3" onClick={onClick}>
                      {section.items.map((item) => {
                        const isActive = currentPath === item.href;
                        return (
                          <SidebarLink
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            isActive={isActive}
                            as={linkComponent}
                            innerRef={isActive ? activeItemRef : undefined}
                          />
                        );
                      })}
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

