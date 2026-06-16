import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import {type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'solid' | 'glow' | 'inset';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  children,
  className,
  variant = 'solid',
  size = 'md',
  ...props
}: ButtonProps) {
  
  const baseStyles = 'm-5 inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none cursor-pointer';
  
  const variants = {
    solid: 'bg-accent-main text-primary-main',
    glow: ' bg-accent-main border-2 border-black/30 text-primary-main glow-bottom',
    inset: 'inset-shadow-sm inset-shadow-black/70 bg-primary-main bg-linear-to-t from-white/5 to-white/0 text-white'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg'
  };

  const defaultAnimation: HTMLMotionProps<'button'> = {
      initial: {  opacity: 0, scale: 0 },
      animate: {  opacity: 1, scale: 1 },
      whileHover: { scale: 1.02, filter: 'brightness(120%)'},
      whileTap: { scale: 0.98, filter: 'brightness(150%)' },
      transition: { type: 'spring', stiffness: 100, damping: 15 },
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
