import { Button } from './components';
import {Card} from './components/Card/Card'
function App() {
  
  return (
    <>
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
          <h1 className='font-bold text-xl mb-2 tracking-tight'> Primera Card </h1> 
          <p>
            Lorem ipsum dolor quam cupiditate vero consequuntur sapiente odit explicabo dicta sint earum obcaecati sequi qui praesentium maiores est quis?
          </p>
        </Card>
        <Card variant='inset'>
          <h1 className='font-bold text-xl mb-2 tracking-tight'> Primera Card </h1> 
          <p>
            Lorem ipsum dolor quam cupiditate vero consequuntur sapiente odit explicabo dicta sint earum obcaecati sequi qui praesentium maiores est quis?
          </p>
        </Card>

      </div>



    </>
  )
}

export default App
