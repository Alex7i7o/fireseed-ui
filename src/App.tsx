import { Button } from './components';
import {Card} from './components/Card/Card'
function App() {
  
  return (
    <>

      <Button variant="primary">Botón Principal</Button>
      <Button variant="secondary">Botón Secundario</Button>
      <Button variant="outline">Botón Outline</Button>
      <Button variant="primary" className="bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700">
        Botón Éxito Personalizado
      </Button>

      <Card variant='primary'>
        <h1 className='font-bold text-xl mb-2 tracking-tight'> Primera Card </h1> 
        <p>
          Lorem ipsum dolor quam cupiditate vero consequuntur sapiente odit explicabo dicta sint earum obcaecati sequi qui praesentium maiores est quis?
        </p>
      </Card>
      <Card variant='primary'>
        <h1 className='font-bold text-xl mb-2 tracking-tight'> Primera Card </h1> 
        <p>
          Lorem ipsum dolor quam cupiditate vero consequuntur sapiente odit explicabo dicta sint earum obcaecati sequi qui praesentium maiores est quis?
        </p>
      </Card>
      <Card variant='primary'>
        <h1 className='font-bold text-xl mb-2 tracking-tight'> Primera Card </h1> 
        <p>
          Lorem ipsum dolor quam cupiditate vero consequuntur sapiente odit explicabo dicta sint earum obcaecati sequi qui praesentium maiores est quis?
        </p>
      </Card>
      <Card variant='primary'>
        <h1 className='font-bold text-xl mb-2 tracking-tight'> Primera Card </h1> 
        <p>
          Lorem ipsum dolor quam cupiditate vero consequuntur sapiente odit explicabo dicta sint earum obcaecati sequi qui praesentium maiores est quis?
        </p>
      </Card>
      <Card variant='primary'>
        <h1 className='font-bold text-xl mb-2 tracking-tight'> Primera Card </h1> 
        <p>
          Lorem ipsum dolor quam cupiditate vero consequuntur sapiente odit explicabo dicta sint earum obcaecati sequi qui praesentium maiores est quis?
        </p>
      </Card>



    </>
  )
}

export default App
