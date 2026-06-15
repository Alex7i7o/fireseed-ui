import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import {type HTMLMotionProps } from 'framer-motion';

interface ComponentNombreProps extends HTMLMotionProps<'button'> {
  variant?: 'solid' | 'glow' | 'inset';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  children,
  className,
  variant = 'solid',
  size = 'md',
  ...props
}: ComponentNombreProps) {

    const baseStyles = 'estilos base'
    
    const variants = {
        primary: 'Estilos tailwind',
        secondary: 'Estilos tailwind',
        outline: 'Estilos tailwind'
    };

  const sizes = {
    sm: 'Tamaños tailwind',
    md: 'Tamaños tailwind',
    lg: 'Tamaños tailwind'
  };

  const defaultAnimation: HTMLMotionProps<'button'> = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 15 }
  };
  

  return (
    <motion.button
      {...defaultAnimation}
      
      // 4. Combinamos los estilos base, la variante, el tamaño y lo que venga de afuera
      className={cn(baseStyles, variants[variant], sizes[size], className,)}
      {...props}
    >
        
    {children} 

    </motion.button>
  );
}