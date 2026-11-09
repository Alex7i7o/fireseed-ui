/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { Pagination } from '../components/Pagination';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { ArrowLeftRight } from 'lucide-react';

const codigoPagination = `import { useState } from 'react';
import { Pagination } from 'fireseed-ui';

export function DemoPaginacion() {
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col items-center gap-4">
      <p>Página activa: {page} de 10</p>
      <Pagination
        currentPage={page}
        totalPages={10}
        onPageChange={setPage}
      />
    </div>
  );
}`;

export function PaginationDocs() {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(5);

  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          MOLÉCULA • NAVEGACIÓN NUMÉRICA DE PÁGINAS
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Pagination
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Barra de paginación numérica interactiva para colecciones extensas de registros con cálculo inteligente de elipsis (...), botones de avance/retroceso y respuesta háptica en cada pulsación.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <ArrowLeftRight className="w-4 h-4" /> Algoritmo de Truncamiento Inteligente
          </p>
          <p>
            Cuando el total de páginas supera el espacio visible, el algoritmo calcula de forma reactiva los números adyacentes a la página activa e inserta puntos suspensivos para garantizar legibilidad en pantallas reducidas.
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Controles de Navegación de Datos"
          description="Haz clic en los números o flechas para cambiar de página:"
          code={codigoPagination}
          filename="PaginationDemo.tsx"
          previewClassName="flex-col gap-8 py-10"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-mono text-[#9EA2E2]/70">
              Colección Corta (5 Páginas): Página activa <strong className="text-[#FBBF24]">{page1}</strong>
            </span>
            <Pagination
              currentPage={page1}
              totalPages={5}
              onPageChange={setPage1}
            />
          </div>

          <div className="flex flex-col items-center gap-3 pt-4 border-t border-[#9EA2E2]/15 w-full">
            <span className="text-xs font-mono text-[#9EA2E2]/70">
              Colección Extensa (15 Páginas con Elipsis): Página activa <strong className="text-[#FBBF24]">{page2}</strong>
            </span>
            <Pagination
              currentPage={page2}
              totalPages={15}
              onPageChange={setPage2}
            />
          </div>
        </ComponentPlayground>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Referencia de Propiedades (API)
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-[#9EA2E2]/20 bg-[#0d041a]/95">
          <table className="w-full text-left text-xs text-[#FFF6DF]">
            <thead className="border-b border-[#9EA2E2]/20 bg-[#120524] text-[#FBBF24] font-mono uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Prop</th>
                <th className="py-3 px-4">Tipo</th>
                <th className="py-3 px-4">Por Defecto</th>
                <th className="py-3 px-4">Descripción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#9EA2E2]/10 font-sans">
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">currentPage</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">number</td>
                <td className="py-3 px-4 font-mono text-white/50">1</td>
                <td className="py-3 px-4 text-white/80">Número de página activa actualmente seleccionada.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">totalPages</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">number</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Total de páginas disponibles para navegar.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-[#FBBF24]">onPageChange</td>
                <td className="py-3 px-4 font-mono text-[#9EA2E2]">(page: number) =&gt; void</td>
                <td className="py-3 px-4 font-mono text-white/50">—</td>
                <td className="py-3 px-4 text-white/80">Función ejecutada al pulsar cualquier botón de página.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
