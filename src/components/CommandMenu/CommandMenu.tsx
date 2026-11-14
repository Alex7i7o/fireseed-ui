/* Developed by FireSeed - Fueling Innovation */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Layers, Sparkles, Box } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { docsMenu } from '../../doc-router/docsMenu';
import { haptics } from '../../utils/haptics';

export interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(); // toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const allItems = docsMenu.flatMap((section) =>
    section.items.map((item) => ({ ...item, category: section.title }))
  );

  const filtered = allItems.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href: string) => {
    haptics.light();
    navigate(href);
    onClose();
    setQuery('');
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('Átomos')) return <Box className="w-3.5 h-3.5 text-accent" />;
    if (category.includes('Moléculas')) return <Sparkles className="w-3.5 h-3.5 text-purple-400" />;
    return <Layers className="w-3.5 h-3.5 text-emerald-400" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 pointer-events-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-md pointer-events-auto"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
            className="relative z-50 w-full max-w-xl rounded-2xl border border-white/15 bg-[#100524] shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[75vh]"
          >
            {/* Input Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
              <Search className="w-5 h-5 text-accent shrink-0" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar componente, átomo, molécula..."
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
              />
              {query ? (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-md text-white/40 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-white/40 bg-white/5 border border-white/10 rounded">
                  ESC
                </kbd>
              )}
            </div>

            {/* List Results */}
            <div className="overflow-y-auto p-2 space-y-1 custom-scrollbar">
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <div
                    key={item.href}
                    onClick={() => handleSelect(item.href)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 cursor-pointer text-white/90 transition-colors group select-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                        {getCategoryIcon(item.category)}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                          {item.label}
                        </span>
                        <span className="text-xs text-white/40 block">{item.category}</span>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-sm text-white/40">
                  No se encontraron componentes para "{query}"
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-white/5 bg-black/30 flex items-center justify-between text-[11px] text-white/40">
              <span>Navega con flechas o clic</span>
              <span className="text-accent font-mono">FireSeed UI Engine</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

