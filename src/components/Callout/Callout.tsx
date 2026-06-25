import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { type HTMLMotionProps } from 'framer-motion';

interface CalloutProps extends HTMLMotionProps<'div'> {
  variant?: 'solid' | 'glow' | 'inset';
  size?: 'sm' | 'md' | 'lg';
}

export function Callout({
  children,
  className,
  variant = 'solid',
  size = 'md',
  ...props
}: CalloutProps) {

    const baseStyles = 'transition-colors m-5 p-4 rounded-xl space-y-4'

    
    const variants = {
        solid: 'bg-accent-main text-primary-main',
        glow: 'bg-accent-main/5 border border-accent-main/10 ',
        inset: 'inset-shadow-sm inset-shadow-black/70 bg-primary-main bg-linear-to-t from-white/5 to-white/0 text-white'
    };

  const sizes = {
    sm: 'w-auto h-auto',
    md: 'w-auto h-auto',
    lg: 'w-auto h-auto'
  };

    const defaultAnimation: HTMLMotionProps<'div'> = {
      initial: { opacity: 0, scale: 0},
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true, margin: "-50px" },
      whileHover: { y: -4 },
      transition: { duration: 1.5, type: 'spring' },
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