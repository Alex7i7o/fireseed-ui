import { Button } from './components';
function App() {
  
  return (
    <>
      <Button variant="primary">Botón Principal</Button>
      <Button variant="secondary">Botón Secundario</Button>
      <Button variant="outline">Botón Outline</Button>
      <Button variant="primary" className="bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700">
        Botón Éxito Personalizado
      </Button>
    </>
  )
}

export default App
