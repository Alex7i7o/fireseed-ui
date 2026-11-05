/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { StarRating } from '../components/StarRating';
import { Callout } from '../components/Callout';

const codigoStars = `import { useState } from 'react';
import { StarRating } from 'fireseed-ui';

export default function ResenaDemo() {
  const [rating, setRating] = useState(4);

  return (
    <div className="space-y-4">
      {/* Modo interactivo */}
      <StarRating value={rating} onChange={setRating} size="lg" />

      {/* Modo sólo lectura */}
      <StarRating value={4.8} readOnly size="sm" />
    </div>
  );
}`;

export function StarRatingDocs() {
  const [rating, setRating] = useState(4);

  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          StarRating{' '}
          <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Calificador interactivo de estrellas con preview al pasar el cursor (hover), animación de rebote y
          modo de sólo lectura para mostrar puntuaciones.
        </p>
      </div>

      <hr className="border-white/5" />

      <Callout variant="glow" title="Extraído de Violett Pilates">
        Desacoplado del formulario de reseñas de Violett, convirtiéndose en un Lego reutilizable para cualquier
        módulo de calificaciones, feedback de clases, reseñas de Google o auditorías de servicio.
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>StarRatingDemo.tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">{codigoStars}</pre>
        </div>

        <div className="mt-6 space-y-6 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm max-w-md">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Modo Interactivo (Puntaje: {rating} estrellas)
            </h3>
            <StarRating value={rating} onChange={setRating} size="lg" />
          </div>

          <div className="space-y-2 pt-2 border-t border-white/5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Modo Sólo Lectura (Promedio 5.0)
            </h3>
            <StarRating value={5} readOnly size="md" />
          </div>
        </div>
      </div>
    </div>
  );
}
