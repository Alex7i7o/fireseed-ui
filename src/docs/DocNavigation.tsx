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
    <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#9EA2E2]/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
      {prevItem ? (
        <Link
          to={prevItem.href}
          onClick={handleScrollTop}
          className="group flex items-center gap-3 w-full sm:w-auto p-4 rounded-xl border border-[#9EA2E2]/20 bg-[#241142]/30 hover:bg-[#241142]/60 hover:border-[#FBBF24]/40 transition-all text-left min-h-[52px]"
        >
          <div className="w-8 h-8 rounded-lg bg-[#120524] flex items-center justify-center text-[#9EA2E2] group-hover:text-[#FBBF24] group-hover:-translate-x-0.5 transition-all shrink-0 border border-[#9EA2E2]/15">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#9EA2E2]/60 block font-mono">
              Anterior
            </span>
            <span className="text-sm font-bold text-[#FFF6DF] group-hover:text-[#FBBF24] transition-colors">
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
          className="group flex items-center justify-end gap-3 w-full sm:w-auto p-4 rounded-xl border border-[#9EA2E2]/20 bg-[#241142]/30 hover:bg-[#241142]/60 hover:border-[#FBBF24]/40 transition-all text-right ml-auto min-h-[52px]"
        >
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#9EA2E2]/60 block font-mono">
              Siguiente
            </span>
            <span className="text-sm font-bold text-[#FFF6DF] group-hover:text-[#FBBF24] transition-colors">
              {nextItem.label}
            </span>
          </div>
          <div className="w-8 h-8 rounded-lg bg-[#120524] flex items-center justify-center text-[#9EA2E2] group-hover:text-[#FBBF24] group-hover:translate-x-0.5 transition-all shrink-0 border border-[#9EA2E2]/15">
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      )}
    </div>
  );
}
