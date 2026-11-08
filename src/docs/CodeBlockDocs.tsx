/* Developed by FireSeed - Fueling Innovation */
import { useState } from 'react';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';
import { Callout } from '../components/Callout';
import { Inlinecode } from '../components/InlineCode/InlineCode';
import { Download, FileCode } from 'lucide-react';

const codigoEjemploTSX = `import { Button, Card, Badge } from 'fireseed-ui';

export function Dashboard() {
  return (
    <Card hoverEffect className="max-w-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Panel Principal</h3>
        <Badge variant="glow">Online</Badge>
      </div>
      <Button variant="glow" className="w-full">
        Confirmar Acción
      </Button>
    </Card>
  );
}`;

const codigoEjemploCSS = `@import "tailwindcss";

@theme {
  --color-primary-main: #120524;
  --color-accent-main: #FBBF24;
  --color-silk-cream: #FFF6DF;
}

@utility glow-bottom {
  position: relative;
  z-index: 0;
}`;

const codigoEjemploBash = `npm install fireseed-ui framer-motion lucide-react`;

const codigoEjemploJSON = `{
  "name": "mi-proyecto",
  "dependencies": {
    "fireseed-ui": "^0.0.1",
    "framer-motion": "^12.0.0",
    "react": "^19.0.0"
  }
}`;

export function CodeBlockDocs() {
  const [selectedLang, setSelectedLang] = useState<'tsx' | 'css' | 'bash' | 'json'>('tsx');
  const [allowDownload, setAllowDownload] = useState(true);

  const currentCode = {
    tsx: codigoEjemploTSX,
    css: codigoEjemploCSS,
    bash: codigoEjemploBash,
    json: codigoEjemploJSON
  }[selectedLang];

  const currentFilename = {
    tsx: 'Dashboard.tsx',
    css: 'src/theme.css',
    bash: 'Terminal',
    json: 'package.json'
  }[selectedLang];

  return (
    <div className="max-w-4xl space-y-12 pb-20 text-[#FFF6DF]">
      
      {/* 1. CABECERA */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-xs font-mono font-medium text-[#FBBF24]">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse"></span>
          ORGANISMO & UTILIDAD • VISOR DE CÓDIGO IDE
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          CodeBlock
        </h1>
        
        <p className="text-lg text-[#FFF6DF]/75 leading-relaxed font-sans">
          Visor de código fuente estilizado con resaltado de sintaxis (PrismJS), cabecera tipo IDE con semáforo y nombre de archivo, botón de copiado con confirmación visual y descarga directa de archivos (.tsx, .css, .bash, .json).
        </p>
      </div>

      <hr className="border-[#9EA2E2]/15" />

      {/* 2. FILOSOFÍA DE ARQUITECTURA */}
      <Callout variant="glow">
        <div className="space-y-2 text-xs leading-relaxed text-[#FFF6DF]/85">
          <p className="font-semibold text-sm text-[#FBBF24] flex items-center gap-1.5">
            <FileCode className="w-4 h-4" /> Resaltado de Sintaxis sin Configuración Externa
          </p>
          <p>
            <Inlinecode variant="solid">CodeBlock</Inlinecode> procesa los fragmentos de código mediante Prism con una paleta calibrada especialmente para la identidad visual de FireSeed (palabras clave en púrpura neón, cadenas en oro solar, tags en coral y comentarios en gris itálico).
          </p>
          <p className="text-[#9EA2E2]">
            Además, incluye soporte para descargar archivos con un solo clic mediante la propiedad <Inlinecode variant="solid">allowDownload</Inlinecode>, ideal para que tus usuarios se bajen hojas de estilo o plantillas sin tener que copiar manualmente.
          </p>
        </div>
      </Callout>

      {/* 3. PLAYGROUND INTERACTIVO */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
              Demostración Interactiva
            </h2>
            <p className="text-xs text-[#9EA2E2]/70">
              Cambiá el lenguaje y alterná la opción de descarga para ver la respuesta del componente:
            </p>
          </div>

          {/* Selector de Lenguaje */}
          <div className="flex items-center gap-1.5 bg-[#120524] p-1.5 rounded-xl border border-[#9EA2E2]/20">
            {(['tsx', 'css', 'bash', 'json'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLang(lang)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                  selectedLang === lang
                    ? 'bg-[#FBBF24] text-[#120524] shadow-sm'
                    : 'text-[#9EA2E2] hover:text-[#FFF6DF] hover:bg-white/5'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Control de Descarga */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#241142]/40 border border-[#9EA2E2]/15 text-xs">
          <span className="flex items-center gap-2 text-[#FFF6DF]/80">
            <Download className="w-4 h-4 text-[#FBBF24]" />
            Permitir Descarga Directa (<code className="font-mono text-[#FBBF24]">allowDownload</code>)
          </span>
          <button
            onClick={() => setAllowDownload((prev) => !prev)}
            className={`px-3 py-1 rounded-lg font-mono font-bold text-xs transition-colors cursor-pointer ${
              allowDownload ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 text-white/40'
            }`}
          >
            {allowDownload ? 'ACTIVADO' : 'DESACTIVADO'}
          </button>
        </div>

        {/* Visor en Vivo */}
        <CodeBlock
          code={currentCode}
          language={selectedLang}
          filename={currentFilename}
          allowDownload={allowDownload}
          downloadFilename={currentFilename}
        />
      </div>

      {/* 4. CÓMO USAR EN TU PROYECTO */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Ejemplo de Integración
        </h2>
        <p className="text-sm text-[#FFF6DF]/70">
          Podés importar y utilizar <Inlinecode variant="solid">CodeBlock</Inlinecode> en cualquier parte de tu aplicación para mostrar snippets, tutoriales o terminales:
        </p>

        <CodeBlock
          code={`import { CodeBlock } from 'fireseed-ui';

export function MiDocumentacion() {
  const miSnippet = \`console.log("¡Hola desde FireSeed UI!");\`;

  return (
    <CodeBlock
      code={miSnippet}
      language="tsx"
      filename="Ejemplo.tsx"
      allowDownload={true}
      downloadFilename="Ejemplo.tsx"
    />
  );
}`}
          language="tsx"
          filename="UsoCodeBlock.tsx"
        />
      </div>

      {/* 5. TABLA DE PROPIEDADES (API REFERENCE) */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#FFF6DF] font-['PosteramaCustom',sans-serif]">
          Propiedades (API Reference)
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-[#9EA2E2]/20 bg-[#120524]/80">
          <table className="w-full text-left border-collapse text-sm text-[#FFF6DF]/80">
            <thead className="bg-[#241142]/60 font-semibold text-[#FFF6DF] border-b border-[#9EA2E2]/20">
              <tr>
                <th className="p-4">Propiedad</th>
                <th className="p-4">Tipo</th>
                <th className="p-4">Por Defecto</th>
                <th className="p-4">Descripción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#9EA2E2]/10 font-mono text-xs">
              <tr>
                <td className="p-4 text-[#FBBF24] font-semibold">code</td>
                <td className="p-4 text-[#9EA2E2]">string</td>
                <td className="p-4 text-white/40 font-mono">-</td>
                <td className="p-4 text-[#FFF6DF]/70 font-sans">El texto o código fuente que se va a formatear y resaltar.</td>
              </tr>
              <tr>
                <td className="p-4 text-[#FBBF24] font-semibold">language</td>
                <td className="p-4 text-[#9EA2E2]">'tsx' | 'typescript' | 'javascript' | 'css' | 'bash' | 'json'</td>
                <td className="p-4 text-[#FFF6DF]/50 font-mono">'tsx'</td>
                <td className="p-4 text-[#FFF6DF]/70 font-sans">Gramática y diccionario de sintaxis aplicado para el coloreado de tokens.</td>
              </tr>
              <tr>
                <td className="p-4 text-[#FBBF24] font-semibold">filename</td>
                <td className="p-4 text-[#9EA2E2]">string</td>
                <td className="p-4 text-white/40 font-mono">undefined</td>
                <td className="p-4 text-[#FFF6DF]/70 font-sans">Título o ruta del archivo que aparece en la pestaña superior tipo ventana IDE.</td>
              </tr>
              <tr>
                <td className="p-4 text-[#FBBF24] font-semibold">allowDownload</td>
                <td className="p-4 text-[#9EA2E2]">boolean</td>
                <td className="p-4 text-[#FFF6DF]/50 font-mono">false</td>
                <td className="p-4 text-[#FFF6DF]/70 font-sans">Muestra un botón en la barra superior para descargar el archivo directamente.</td>
              </tr>
              <tr>
                <td className="p-4 text-[#FBBF24] font-semibold">downloadFilename</td>
                <td className="p-4 text-[#9EA2E2]">string</td>
                <td className="p-4 text-white/40 font-mono">filename</td>
                <td className="p-4 text-[#FFF6DF]/70 font-sans">Nombre que tendrá el archivo descargado en el dispositivo del usuario.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
