import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SidebarLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  as?: React.ElementType; // Para permitir <Link> de cualquier framework o <a>
}

// 🌟 Le asignamos la interfaz ': SidebarLinkProps' a la desestructuración
export function SidebarLink({ 
  href, 
  label, 
  isActive, 
  as: Component = 'a' 
}: SidebarLinkProps) {
  return (
    <li className="relative">
      <Component
        {...(Component !== 'a' ? { to: href } : { href })}
        className={cn(
          'relative block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 z-10',
          isActive ? 'text-accent-main font-semibold' : 'text-white/70 hover:text-white'
        )}
      >
        {label}

        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute inset-0 -z-10 rounded-lg bg-accent-main/10 border-l-2 border-accent-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </Component>
    </li>
  );
}