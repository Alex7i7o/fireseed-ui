/* Developed by FireSeed - Fueling Innovation */
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { docsMenu } from '../doc-router/docsMenu';

export function DocNavigation() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Aplanar todos los items en una sola lista ordenada
  const allItems = docsMenu.flatMap((section) => section.items);
  const currentIndex = allItems.findIndex((item) => item.href === currentPath);

  if (currentIndex === -1) return null;

  const prevItem = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  const nextItem = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const main = document.querySelector('main');
    if (main) {
      main.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      main.scrollTop = 0;
    }
  };

  return (
    <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
      {prevItem ? (
        <Link
          to={prevItem.href}
          onClick={handleScrollTop}
          className="group flex items-center gap-3 w-full sm:w-auto p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all text-left min-h-[52px]"
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 group-hover:text-accent-main group-hover:-translate-x-0.5 transition-all shrink-0">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-white/40 block">
              Anterior
            </span>
            <span className="text-sm font-bold text-white group-hover:text-accent-main transition-colors">
              {prevItem.label}
            </span>
          </div>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {nextItem && (
        <Link
          to={nextItem.href}
          onClick={handleScrollTop}
          className="group flex items-center justify-end gap-3 w-full sm:w-auto p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all text-right ml-auto min-h-[52px]"
        >
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-white/40 block">
              Siguiente
            </span>
            <span className="text-sm font-bold text-white group-hover:text-accent-main transition-colors">
              {nextItem.label}
            </span>
          </div>
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 group-hover:text-accent-main group-hover:translate-x-0.5 transition-all shrink-0">
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      )}
    </div>
  );
}
