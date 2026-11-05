/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { SidebarLink } from './SidebarLink';
import { Search, X } from 'lucide-react';
import type { MenuSection } from '../../doc-router/docsMenu';

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

  const filteredSections = sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.label.toLowerCase().includes(filter.toLowerCase())
      )
    }))
    .filter((section) => section.items.length > 0);

  return (
    <div className="space-y-6">
      {/* Buscador Rápido del Sidebar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filtrar Legos..."
          className="w-full pl-8 pr-7 py-1.5 text-xs bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 rounded-xl text-white placeholder:text-white/30 outline-none focus:border-accent-main/50 transition-all"
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

      <nav className="space-y-6">
        {filteredSections.map((section) => (
          <div key={section.title} className="space-y-2">
            <div className="flex items-center justify-between px-2 text-xs font-bold uppercase tracking-wider text-white/40">
              <span>{section.title}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-white/40">
                {section.items.length}
              </span>
            </div>
            <ul className="space-y-0.5" onClick={onClick}>
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
          </div>
        ))}
      </nav>
    </div>
  );
}
