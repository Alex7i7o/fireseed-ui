import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Button } from './components';
import { DocsLayout } from './layouts/DocsLayout';
import {Card} from './components'
import { Badge } from './components/Badge/Badge';

import { InstallationDocs } from './docs/InstallationDocs';
import { ButtonDocs } from './docs/ButtonDocs';
import { CardDocs } from './docs/CardDocs';
import { SidebarDocs } from './docs/SidebarDocs';


function App() {
  
  return (
    <>
      <BrowserRouter>
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
                <Route path="button" element={<ButtonDocs />} />
                <Route path="card" element={<CardDocs />} />
                <Route path="sidebar" element={<SidebarDocs />} />
              </Routes>
            </DocsLayout>
          }
        />

        {/* Podrías tener otras rutas fuera de la docu acá abajo, 
            por ejemplo una Landing Page de fireseed-ui que use otro diseño */}
        {/* <Route path="/landing" element={<LandingPage />} /> */}

      </Routes>
    </BrowserRouter>





    {/* ------------------------------------------- */}
      <div className='flex flex-row flex-wrap gap-5 justify-center'>
        <Button variant="solid">Botón Principal</Button>
        <Button variant="glow">Botón Secundario</Button>
        <Button variant="inset">Botón Outline</Button>
        <Button variant="solid" whileHover={{ y: -4 }} initial= {{ opacity: 1, scale: 1}} className="shadow-xl shadow-emerald-600/50 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700">
          Botón Éxito Personalizado
        </Button>

      </div>
      <div className='flex flex-row flex-wrap gap-6 justify-center '>
        <Card variant='solid'>
          <h1 className='font-bold text-xl mb-2 tracking-tight'> Primera Card </h1> 
          <p>
            Lorem ipsum dolor quam cupiditate vero consequuntur sapiente odit explicabo dicta sint earum obcaecati sequi qui praesentium maiores est quis?
          </p>
        </Card>
        <Card variant='glow'>
          <h1 className='font-bold text-xl mb-2 tracking-tight'> Segunda Card </h1> 
          <p>
            Lorem ipsum dolor quam cupiditate vero consequuntur sapiente odit explicabo dicta sint earum obcaecati sequi qui praesentium maiores est quis?
          </p>
        </Card>
        <Card variant='inset'>
          <h1 className='font-bold text-xl mb-2 tracking-tight'> Tercera Card </h1> 
          <p>
            Lorem ipsum dolor quam cupiditate vero consequuntur sapiente odit explicabo dicta sint earum obcaecati sequi qui praesentium maiores est quis?
          </p>
        </Card>

        <Card variant='glow' className='bg-amber-900 text-white'>
          <h1 className='font-bold text-xl mb-2 tracking-tight'> Cuarta Card </h1> 
          <p>
            Lorem ipsum dolor quam cupiditate vero consequuntur sapiente odit explicabo dicta sint earum obcaecati sequi qui praesentium maiores est quis?
          </p>
        </Card>

      </div>

      <Badge variant='solid'>
        Probadno etiqueta
      </Badge>



    </>
  )
}

export default App
