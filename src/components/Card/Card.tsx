import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { type HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Card({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: CardProps) {

    const baseStyles = 'transition-colors m-5 p-5 shadow-xl rounded-lg items-center justify-center'

    
    const variants = {
        primary: 'shadow-black/50 bg-cyan-900 text-white border-2 border-cyan-700',
        secondary: 'Estilos tailwind',
        outline: 'Estilos tailwind'
    };

  const sizes = {
    sm: 'w-20 h-auto',
    md: 'w-50 h-auto',
    lg: 'w-100 h-auto'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0}} 
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 1.5, type: 'spring' }}
      
      // 4. Combinamos los estilos base, la variante, el tamaño y lo que venga de afuera
      className={cn(baseStyles, variants[variant], sizes[size], className,)}
      {...props}
    >
        
    {children} 

    </motion.div>
  );
}