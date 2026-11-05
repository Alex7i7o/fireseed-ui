/* Developed by FireSeed - Fueling Innovation */
import { Skeleton } from '../components/Skeleton';
import { Card } from '../components/Card';
import { Callout } from '../components/Callout';

const codigoSkeleton = `import { Skeleton, Card } from 'fireseed-ui';

export default function CardSkeleton() {
  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center gap-4">
        <Skeleton variant="circular" width={48} height={48} />
        <div className="space-y-2 flex-1">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="rounded" height={100} />
    </Card>
  );
}`;

export function SkeletonDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          Skeleton{' '}
          <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Marcador de posición con animación fluida tipo <em>shimmer</em> para evitar saltos violentos de diseño
          (CLS) mientras se cargan datos desde la API.
        </p>
      </div>

      <hr className="border-white/5" />

      <Callout variant="glow" title="Skeletons > Spinners">
        En la Metodología FireSeed evitamos pantallas vacías con un círculo girando. Los Skeletons preparan
        psicológicamente al usuario dibujando la silueta geométrica del contenido que está a punto de aparecer.
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>SkeletonDemo.tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">{codigoSkeleton}</pre>
        </div>

        <div className="mt-6 space-y-4 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm max-w-md">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Esqueleto en Vivo</h3>
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <Skeleton variant="circular" width={48} height={48} />
              <div className="space-y-2 flex-1">
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" width="35%" />
              </div>
            </div>
            <Skeleton variant="rounded" height={80} />
            <div className="flex justify-end gap-2 pt-2">
              <Skeleton variant="rounded" width={80} height={36} />
              <Skeleton variant="rounded" width={100} height={36} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
