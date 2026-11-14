/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { StarRating } from '../components/StarRating';
import { Callout } from '../components/Callout';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';

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
          <span className="text-sm font-mono font-normal text-accent bg-accent/10 px-2 py-0.5 rounded-md border border-accent/20">
            v1.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Calificador interactivo de estrellas con preview al pasar el cursor (hover), animación de rebote y
          modo de sólo lectura para mostrar puntuaciones.
        </p>
      </div>

      <hr className="border-white/5" />

      <Callout variant="glow" title="Módulo de Calificación Desacoplado">
        Construido como una molécula completamente independiente de la lógica de negocio, lista para integrarse en cualquier
        sistema de valoraciones, encuestas de satisfacción, reseñas de productos o paneles de feedback.
      </Callout>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <CodeBlock code={codigoStars} language="tsx" filename="StarRatingDemo.tsx" />

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

