/* Developed by FireSeed - Fueling Innovation */
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export interface SidebarLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  as?: React.ElementType;
  innerRef?: React.Ref<HTMLLIElement>;
}

export function SidebarLink({
  href,
  label,
  isActive,
  as: Component = 'a',
  innerRef
}: SidebarLinkProps) {
  return (
    <li ref={innerRef} className="relative">
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
            ? 'text-[#FBBF24] font-semibold'
            : 'text-[#FFF6DF]/70 hover:text-[#FFF6DF] hover:bg-[#241142]/40'
        )}
      >
        <span>{label}</span>

        {isActive && (
          <motion.div
            layoutId="activeSidebarPill"
            className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-[#FBBF24]/15 to-[#E67E22]/10 border border-[#FBBF24]/30 shadow-[0_0_15px_rgba(251,191,36,0.15)]"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
        )}
      </Component>
    </li>
  );
}
