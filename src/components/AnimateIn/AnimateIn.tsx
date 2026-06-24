import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import {type HTMLMotionProps } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface AnimateInProps extends HTMLMotionProps<'div'> {
  variant?: 'solid' | 'glow' | 'inset';
  size?: 'sm' | 'md' | 'lg';
}

export function AnimateIn({
  children,
  className,
  variant = 'solid',
  size = 'md',
  ...props
}: AnimateInProps) {

    const baseStyles = 'rounded-lg'
    
    const variants = {
      solid: 'bg-primary-main text-white',
      glow: ' bg-primary-main brightness-200 border-accent-main/30 text-black glow-md',
      inset: 'inset-shadow-sm inset-shadow-black/70 bg-primary-main bg-linear-to-t from-white/5 to-white/0 text-white'
  
    };

    const sizes = {
      sm: 'p-4 text-sm',
      md: 'p-6 text-base',
      lg: 'p-8 text-lg'
    };

    const location = useLocation();

  const defaultAnimation: HTMLMotionProps<'div'> = {
      initial: { opacity: 0, y: 12, scale: 0.99 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.4, ease: [0.215, 0.610, 0.355, 1.000] } 
  };
  

  return (
    <motion.div
      key={location.pathname}
      {...defaultAnimation}
      
      // 4. Combinamos los estilos base, la variante, el tamaño y lo que venga de afuera
      className= {cn(baseStyles, variants[variant], sizes[size], className, )}
      {...props}
    >
        
    {children} 

    </motion.div>
  );
}