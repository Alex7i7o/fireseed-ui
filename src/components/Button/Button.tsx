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
    solid: 'bg-indigo-800 text-white hover:bg-indigo-600 active:bg-indigo-950',
    glow: 'shadow-md shadow-amber-700/50 bg-amber-700 border-2 border-amber-600 text-white hover:bg-amber-500 active:bg-amber-600',
    inset: 'inset-shadow-sm inset-shadow-black/50 text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg'
  };

  const defaultAnimation: HTMLMotionProps<'button'> = {
      initial: {  opacity: 0, scale: 0 },
      animate: {  opacity: 1, scale: 1 },
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
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
