import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import {type HTMLMotionProps } from 'framer-motion';

interface ComponentNombreProps extends HTMLMotionProps<'button'> {
  variant?: 'solid' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

export function Badge({
  children,
  className,
  variant = 'solid',
  size = 'md',
  ...props
}: ComponentNombreProps) {

    const baseStyles = 'rounded px-1.5 py-0.5 font-mono font-mono'
    
    const variants = {
      solid: ' bg-white/5 text-accent-main text-xs',
      success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      error: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
  
    };

  const sizes = {
    sm: 'Tamaños tailwind',
    md: 'Tamaños tailwind',
    lg: 'Tamaños tailwind'
  };

  const defaultAnimation: HTMLMotionProps<'span'> = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 15 }
  };
  

  return (
    <motion.span
      {...defaultAnimation}
      
      // 4. Combinamos los estilos base, la variante, el tamaño y lo que venga de afuera
      className={cn(baseStyles, variants[variant], sizes[size], className,)}
      {...props}
    >
        
    {children} 

    </motion.span>
  );
}