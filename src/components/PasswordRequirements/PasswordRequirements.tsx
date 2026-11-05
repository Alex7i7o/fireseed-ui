/* Developed by FireSeed - Fueling Innovation */
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface PasswordRule {
  id: string;
  label: string;
  test: (password: string) => boolean;
}

export interface PasswordRequirementsProps {
  password: string;
  passwordConfirm?: string;
  isFocused?: boolean;
  showConfirm?: boolean;
  rules?: PasswordRule[];
  className?: string;
}

const defaultRules: PasswordRule[] = [
  { id: 'length', label: 'Mínimo 8 caracteres', test: (pwd) => pwd.length >= 8 },
  { id: 'uppercase', label: 'Al menos una mayúscula', test: (pwd) => /[A-Z]/.test(pwd) },
  { id: 'number', label: 'Al menos un número', test: (pwd) => /[0-9]/.test(pwd) },
  { id: 'special', label: 'Carácter especial (!@#$...)', test: (pwd) => /[^A-Za-z0-9]/.test(pwd) }
];

export function PasswordRequirements({
  password,
  passwordConfirm,
  isFocused = false,
  showConfirm = false,
  rules = defaultRules,
  className
}: PasswordRequirementsProps) {
  const matches = showConfirm && password.length > 0 && password === passwordConfirm;
  const shouldShow = isFocused || password.length > 0;

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'mt-2 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs space-y-2 overflow-hidden',
          className
        )}
      >
        <p className="font-semibold text-white/70 text-[11px] uppercase tracking-wider">
          Requisitos de seguridad:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {rules.map((rule) => {
            const passed = rule.test(password);
            return (
              <div
                key={rule.id}
                className={cn(
                  'flex items-center gap-1.5 transition-colors',
                  passed ? 'text-emerald-400 font-medium' : 'text-white/40'
                )}
              >
                <span
                  className={cn(
                    'w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[10px]',
                    passed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10 text-white/30'
                  )}
                >
                  {passed ? <Check className="w-2.5 h-2.5 stroke-[3]" /> : '•'}
                </span>
                <span>{rule.label}</span>
              </div>
            );
          })}
        </div>

        {showConfirm && passwordConfirm !== undefined && passwordConfirm.length > 0 && (
          <div
            className={cn(
              'pt-2 mt-1 border-t border-white/10 flex items-center gap-1.5 transition-colors',
              matches ? 'text-emerald-400 font-medium' : 'text-amber-400'
            )}
          >
            <span
              className={cn(
                'w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[10px]',
                matches ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
              )}
            >
              {matches ? <Check className="w-2.5 h-2.5 stroke-[3]" /> : <X className="w-2.5 h-2.5 stroke-[3]" />}
            </span>
            <span>{matches ? 'Las contraseñas coinciden' : 'Las contraseñas no coinciden aún'}</span>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
