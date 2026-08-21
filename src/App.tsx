import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DocsLayout } from './layouts/DocsLayout';


import { InstallationDocs } from './docs/InstallationDocs';
import { ButtonDocs } from './docs/ButtonDocs';
import { CardDocs } from './docs/CardDocs';
import { SidebarDocs } from './docs/SidebarDocs';
import { AnimateInDocs } from './docs/AnimateInDocs';
import { BadgeDocs } from './docs/BadgeDocs';
import { CalloutDocs } from './docs/CalloutDocs';
import { InlineCodeDocs } from './docs/InlineCodeDocs';
import { StepBadgeDocs } from './docs/StepBadgeDocs';
import { ThemeDocs } from './docs/ThemeDocs';


function App() {
  
  return (
    <>
      <HashRouter>
      <Routes>
        
        {/* === RUTA DE BIENVENIDA (OPCIONAL) === */}
        {/* Si entran a la raíz, los mandamos directo a la instalación */}
        <Route path="/" element={<Navigate to="/docs/installation" replace />} />

        {/* === SECCIÓN DE DOCUMENTACIÓN CON SU LAYOUT === */}
        {/* Ponemos el DocsLayout envolviendo a las sub-rutas dinámicas */}
        <Route
          path="/docs/*"
          element={
            <DocsLayout>
              <Routes>
                {/* Lo que pongas acá adentro se va a renderizar en el {children} del centro */}
                <Route path="installation" element={<InstallationDocs />} />
                <Route path="theme" element={<ThemeDocs />} />
                <Route path="animate-in" element={<AnimateInDocs />} />
                <Route path="badge" element={<BadgeDocs />} />
                <Route path="button" element={<ButtonDocs />} />
                <Route path="callout" element={<CalloutDocs />} />
                <Route path="card" element={<CardDocs />} />
                <Route path="inline-code" element={<InlineCodeDocs />} />
                <Route path="sidebar" element={<SidebarDocs />} />
                <Route path="step-badge" element={<StepBadgeDocs />} />
              </Routes>
            </DocsLayout>
          }
        />

        {/* Podrías tener otras rutas fuera de la docu acá abajo, 
            por ejemplo una Landing Page de fireseed-ui que use otro diseño */}
        {/* <Route path="/landing" element={<LandingPage />} /> */}

      </Routes>
    </HashRouter>





    {/* ------------------------------------------- */}

      

      



    </>
  )
}

export default App
