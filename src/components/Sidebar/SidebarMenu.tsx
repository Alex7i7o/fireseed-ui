// src/components/Sidebar/SidebarMenu.tsx
import { SidebarLink } from './SidebarLink';

interface MenuItem {
  label: string;
  href: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface SidebarMenuProps {
  sections: MenuSection[];
  currentPath: string;
  linkComponent?: React.ElementType; 
  onClick?: () => void;
}

// 🌟 Conectamos la interfaz con ': SidebarMenuProps' al final de los parámetros
export function SidebarMenu({ 
  sections, 
  currentPath, 
  linkComponent,
  onClick

}: SidebarMenuProps) {
  return (
    <nav className="space-y-6">
      {sections.map((section) => (
        <div key={section.title} className="space-y-2">
          <h4 className="-ml-4 px-3 text-1xl font-bold uppercase tracking-widest text-white">
            {section.title}
          </h4>
          <ul className="space-y-1" onClick={onClick}>
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
  );
}