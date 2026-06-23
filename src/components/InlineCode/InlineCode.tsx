import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import {type HTMLMotionProps } from 'framer-motion';

interface ComponentNombreProps extends HTMLMotionProps<'button'> {
  variant?: 'solid' | 'terminal';
  size?: 'sm' | 'md' | 'lg';
}

export function Inlinecode({
  children,
  className,
  variant = 'solid',
  size = 'md',
  ...props
}: ComponentNombreProps) {

    const baseStyles = 'rounded px-1.5 py-0.5 font-mono font-mono'
    
    const variants = {
      solid: ' bg-white/5 text-accent-main text-xs',
      terminal: 'text-emerald-500 bg-emerald-950 border-b-emerald-700 font-bold',
    };

  const sizes = {
    sm: 'Tamaños tailwind',
    md: 'Tamaños tailwind',
    lg: 'Tamaños tailwind'
  };

  const defaultAnimation: HTMLMotionProps<'code'> = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 15 }
  };
  

  return (
    <motion.code
      {...defaultAnimation}
      
      // 4. Combinamos los estilos base, la variante, el tamaño y lo que venga de afuera
      className={cn(baseStyles, variants[variant], sizes[size], className,)}
      {...props}
    >
        
    {children} 

    </motion.code>
  );
}