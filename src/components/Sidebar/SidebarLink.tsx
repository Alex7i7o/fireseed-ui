/* Developed by FireSeed - Fueling Innovation */
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export interface SidebarLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  as?: React.ElementType;
}

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
        onClick={() => {
          if (!isActive) {
            haptics.light();
          }
        }}
        className={cn(
          'relative flex items-center justify-between rounded-xl px-3 py-2 text-xs sm:text-sm font-medium transition-colors select-none z-10',
          isActive
            ? 'text-accent-main font-semibold'
            : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
        )}
      >
        <span>{label}</span>

        {isActive && (
          <motion.div
            layoutId="activeSidebarPill"
            className="absolute inset-0 -z-10 rounded-xl bg-accent-main/10 border border-accent-main/20 shadow-sm"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
        )}
      </Component>
    </li>
  );
}
