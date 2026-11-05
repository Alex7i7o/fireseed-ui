/* Developed by FireSeed - Fueling Innovation */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/Card';
import { Button } from '../components/Button';
import { Callout } from '../components/Callout';
import { Badge } from '../components/Badge';

const codigoEjemploCard = `import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter, 
  Button, 
  Badge 
} from 'fireseed-ui';

export default function TarjetaModular() {
  return (
    <Card variant="glow" hoverEffect className="max-w-md">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>Pilates Reformer Intermedio</CardTitle>
          <Badge variant="success">Cupos Disponibles</Badge>
        </div>
        <CardDescription>
          Clase de 50 minutos con enfoque en fortalecimiento de core y alineación postural.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-white/70">
          Instructora: Débora Silvestri • Camilla 03
        </p>
      </CardContent>

      <CardFooter className="flex justify-between">
        <span className="text-xs text-white/40">Lun y Mié • 18:00 hs</span>
        <Button size="sm" variant="solid">Reservar Camilla</Button>
      </CardFooter>
    </Card>
  );
}`;

export function CardDocs() {
  return (
    <div className="max-w-4xl space-y-12 pb-16 text-white">
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          Card{' '}
          <span className="text-sm font-mono font-normal text-accent-main bg-accent-main/10 px-2 py-0.5 rounded-md border border-accent-main/20">
            v2.0.0
          </span>
        </h1>
        <p className="text-lg text-white/60">
          Contenedor modular compuesto por subcomponentes (Header, Title, Description, Content, Footer) para
          armar grillas, fichas de clases, perfiles y paneles analíticos.
        </p>
      </div>

      <hr className="border-white/5" />

      {/* 2. FILOSOFÍA */}
      <Callout variant="glow" title="Composabilidad Pura">
        Se eliminaron los anchos y márgenes fijos. La Card ahora adopta el ancho de su grilla contenedora
        y permite estructurar encabezados, cuerpos y pies de forma totalmente desacoplada.
      </Callout>

      {/* 3. EJEMPLO */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Ejemplo de Uso</h2>
        <div className="overflow-hidden rounded-xl bg-black/40 border border-white/5 font-mono text-sm leading-relaxed text-white/80">
          <div className="flex items-center justify-between bg-black/20 px-4 py-2 border-b border-white/5 text-xs text-white/40">
            <span>TarjetaModular.tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto text-white/70">{codigoEjemploCard}</pre>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm">
          {/* Card 1 */}
          <Card variant="default" hoverEffect>
            <CardHeader>
              <CardTitle>Tarjeta Default</CardTitle>
              <CardDescription>Borde sutil con fondo traslúcido y desenfoque.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Ideal para listas de datos o elementos secundarios.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="outline">
                Ver Ficha
              </Button>
            </CardFooter>
          </Card>

          {/* Card 2 */}
          <Card variant="glow" hoverEffect>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Tarjeta Glow</CardTitle>
                <Badge variant="glow">Destacado</Badge>
              </div>
              <CardDescription>Resplandor trasero difuso calibrado.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Ideal para planes contratados o clases prioritarias.</p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button size="sm" variant="solid">
                Contratar Plan
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
