import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import {type HTMLMotionProps } from 'framer-motion';

interface StepBadgeProps extends HTMLMotionProps<'div'> {
  variant?: 'solid' | 'glow' | 'inset';
  size?: 'sm' | 'md' | 'lg';
}

export function StepBadge({
  children,
  className,
  variant = 'solid',
  size = 'md',
  ...props
}: StepBadgeProps) {

    const baseStyles = 'flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-bold text-xs font-mono'
    
    const variants = {
      solid: 'bg-accent-main text-primary-main',
      glow: ' bg-accent-main/10 text-accent-main border border-accent-main/20 glow-bottom',
      inset: 'inset-shadow-sm inset-shadow-black/70 bg-primary-main bg-linear-to-t from-white/5 to-white/0 text-white'
  
    };

  const sizes = {
    sm: 'Tamaños tailwind',
    md: 'Tamaños tailwind',
    lg: 'Tamaños tailwind'
  };

  const defaultAnimation: HTMLMotionProps<'div'> = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 15 }
  };
  

  return (
    <motion.div
      {...defaultAnimation}
      
      // 4. Combinamos los estilos base, la variante, el tamaño y lo que venga de afuera
      className={cn(baseStyles, variants[variant], sizes[size], className,)}
      {...props}
    >
        
    {children} 

    </motion.div>
  );
}