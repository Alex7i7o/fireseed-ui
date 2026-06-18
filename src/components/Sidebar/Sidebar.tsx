import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import {type HTMLMotionProps } from 'framer-motion';

interface SidebarProps extends HTMLMotionProps<'aside'> {
  variant?: 'solid' | 'glow' | 'inset';
  size?: 'sm' | 'md' | 'lg';
}

export function Sidebar({
  children,
  className,
  variant = 'solid',
  size = 'md',
  ...props
}: SidebarProps) {

    const baseStyles = 'sticky top-0 left-0 h-screen shrink-0 overflow-y-auto p-6 border-r border-white/5 transition-all duration-300'
    
    const variants = {
      solid: 'bg-primary-main text-primary-main',
      glow: ' bg-accent-main border-2 border-black/30 text-primary-main glow-bottom',
      inset: 'inset-shadow-sm inset-shadow-black/70 bg-primary-main bg-linear-to-t from-white/5 to-white/0 text-white'
  
    };

  const sizes = {
    sm: 'w-56',
    md: 'w-64',
    lg: 'w-72'
  };

  const defaultAnimation: HTMLMotionProps<'aside'> = {
    initial: { x: -20, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  };
  

  return (
    <motion.aside
      {...defaultAnimation}
      
      // 4. Combinamos los estilos base, la variante, el tamaño y lo que venga de afuera
      className={cn(baseStyles, variants[variant], sizes[size], className,)}
      {...props}
    >
        
    {children} 

    </motion.aside>
  );
}