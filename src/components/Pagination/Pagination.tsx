/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '../../utils/cn';
import { haptics } from '../../utils/haptics';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
  enableHaptics?: boolean;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
  enableHaptics = true
}: PaginationProps) {
  const handlePage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    if (enableHaptics) haptics.light();
    onPageChange(page);
  };

  // Algoritmo de cálculo de rango con elipsis
  const paginationRange = React.useMemo(() => {
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, 'dots-right', totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      );
      return [firstPageIndex, 'dots-left', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      );
      return [firstPageIndex, 'dots-left', ...middleRange, 'dots-right', lastPageIndex];
    }

    return [];
  }, [totalPages, siblingCount, currentPage]);

  if (totalPages <= 1) return null;

  return (
    <nav
      role="navigation"
      aria-label="Paginación"
      className={cn('flex items-center justify-center gap-1.5 select-none', className)}
    >
      {/* Botón Anterior */}
      <button
        type="button"
        onClick={() => handlePage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
        className={cn(
          'w-9 h-9 rounded-xl flex items-center justify-center text-xs font-semibold transition-all cursor-pointer border',
          'bg-[#120524] border-[#9EA2E2]/20 text-[#FFF6DF] hover:border-[#FBBF24]/50 hover:bg-[#241142]',
          currentPage === 1 && 'opacity-30 cursor-not-allowed hover:border-[#9EA2E2]/20 hover:bg-[#120524]'
        )}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Páginas y Puntos */}
      {paginationRange.map((pageNumber, idx) => {
        if (typeof pageNumber === 'string') {
          return (
            <div
              key={`dots-${idx}`}
              className="w-8 h-9 flex items-center justify-center text-[#9EA2E2]/50"
            >
              <MoreHorizontal className="w-4 h-4" />
            </div>
          );
        }

        const isCurrent = pageNumber === currentPage;

        return (
          <button
            key={pageNumber}
            type="button"
            onClick={() => handlePage(pageNumber)}
            aria-current={isCurrent ? 'page' : undefined}
            className={cn(
              'min-w-[36px] h-9 px-2 rounded-xl flex items-center justify-center text-xs font-mono font-bold transition-all cursor-pointer border',
              isCurrent
                ? 'bg-[#FBBF24] border-[#FBBF24] text-[#120524] shadow-md shadow-[#FBBF24]/30'
                : 'bg-[#120524] border-[#9EA2E2]/20 text-[#FFF6DF] hover:border-[#FBBF24]/50 hover:bg-[#241142]'
            )}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Botón Siguiente */}
      <button
        type="button"
        onClick={() => handlePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
        className={cn(
          'w-9 h-9 rounded-xl flex items-center justify-center text-xs font-semibold transition-all cursor-pointer border',
          'bg-[#120524] border-[#9EA2E2]/20 text-[#FFF6DF] hover:border-[#FBBF24]/50 hover:bg-[#241142]',
          currentPage === totalPages && 'opacity-30 cursor-not-allowed hover:border-[#9EA2E2]/20 hover:bg-[#120524]'
        )}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
