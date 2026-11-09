/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from '../components/Table';
import { Badge } from '../components/Badge';
import { Checkbox } from '../components/Checkbox';
import { Callout } from '../components/Callout';
import { ComponentPlayground } from './ComponentPlayground';
import { Table as TableIcon } from 'lucide-react';

const codigoTable = `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Badge } from 'fireseed-ui';

export function DemoTabla() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Alumno</TableHead>
          <TableHead>Disciplina</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Horario</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-semibold text-white">Débora Silvestri</TableCell>
          <TableCell>Pilates Reformer</TableCell>
          <TableCell><Badge variant="success">Confirmado</Badge></TableCell>
          <TableCell className="font-mono">Lun 18:00hs</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`;

export function TableDocs() {
  const [selectedRows, setSelectedRows] = useState<string[]>(['1']);

  const rows = [
    { id: '1', nombre: 'Débora Silvestri', disciplina: 'Pilates Reformer', estado: 'Confirmado', variant: 'success' as const, horario: 'Lun 18:00hs' },
    { id: '2', nombre: 'Micaela Gómez', disciplina: 'Reeducación Postural', estado: 'En Espera', variant: 'warning' as const, horario: 'Lun 19:00hs' },
    { id: '3', nombre: 'Carla Benítez', disciplina: 'Entrenamiento Funcional', estado: 'Cancelado', variant: 'error' as const, horario: 'Mar 10:00hs' },
    { id: '4', nombre: 'Agustín Rivas', disciplina: 'Pilates Reformer Pro', estado: 'Confirmado', variant: 'success' as const, horario: 'Mié 17:30hs' }
  ];

  const handleSelectAll = (checked: boolean) => {
    setSelectedRows(checked ? rows.map((r) => r.id) : []);
  };

  const handleRowToggle = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  const isAllSelected = selectedRows.length === rows.length;
  const isIndeterminate = selectedRows.length > 0 && selectedRows.length < rows.length;

  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          ORGANISMO • TABLA MODULAR DE DATOS
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Table & DataTable
        </h1>
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Estructura modular de grillas de datos con diseño glassmorphic de alto contraste, cabeceras en tipografía monoespaciada oro solar, selección masiva por casillas Checkbox y resaltado de fila activa.
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <TableIcon className="w-4 h-4" /> Composición Atómica Semántica
          </p>
          <p>
            Construido mediante primitivas semánticas nativas (<code className="font-mono text-[#FBBF24]">Table</code>, <code className="font-mono text-[#FBBF24]">TableHeader</code>, <code className="font-mono text-[#FBBF24]">TableRow</code>, <code className="font-mono text-[#FBBF24]">TableCell</code>) totalmente componibles que garantizan compatibilidad completa con lectores de pantalla y scroll horizontal contenido.
          </p>
        </div>
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Demostración Interactiva
        </h2>
        <ComponentPlayground
          title="Tabla de Asistencia y Reservas"
          description="Selecciona filas individuales o usa la casilla general de la cabecera:"
          code={codigoTable}
          filename="TableDemo.tsx"
          previewClassName="p-4 sm:p-6"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={isAllSelected}
                    indeterminate={isIndeterminate}
                    onChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Alumno / Titular</TableHead>
                <TableHead>Disciplina</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Horario</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => {
                const isSelected = selectedRows.includes(row.id);
                return (
                  <TableRow
                    key={row.id}
                    data-state={isSelected ? 'selected' : undefined}
                    className="cursor-pointer"
                    onClick={() => handleRowToggle(row.id)}
                  >
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <Checkbox
                        checked={isSelected}
                        onChange={() => handleRowToggle(row.id)}
                      />
                    </TableCell>
                    <TableCell className="font-semibold text-white">
                      {row.nombre}
                    </TableCell>
                    <TableCell className="text-[#9EA2E2]">
                      {row.disciplina}
                    </TableCell>
                    <TableCell>
                      <Badge variant={row.variant}>{row.estado}</Badge>
                    </TableCell>
                    <TableCell className="font-mono text-[11px] text-[#FBBF24]">
                      {row.horario}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </ComponentPlayground>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Estructura de Componentes
        </h2>
        <div className="p-4 rounded-xl bg-[#241142]/30 border border-[#9EA2E2]/15 text-xs space-y-2 text-[#FFF6DF]/80">
          <p>• <code className="font-mono text-[#FBBF24]">Table</code>: Envoltorio principal con borde redondeado y scroll horizontal automático.</p>
          <p>• <code className="font-mono text-[#FBBF24]">TableHeader</code>: Contenedor semántico de cabecera con fondo contrastado.</p>
          <p>• <code className="font-mono text-[#FBBF24]">TableRow</code>: Fila con hover perimetral y soporte para atributo <code className="font-mono text-[#9EA2E2]">data-state="selected"</code>.</p>
          <p>• <code className="font-mono text-[#FBBF24]">TableHead</code> / <code className="font-mono text-[#FBBF24]">TableCell</code>: Celdas con espaciado vertical calibrado y alineación accesible.</p>
        </div>
      </div>
    </div>
  );
}
