import './App.css'
import {
  NavBar,
  ItemListContainer,
  ItemCount,
} from "./components";

function App() {

  return (
      <div className = "App">
        <NavBar />
        <ItemListContainer slogan={'Mantenete Encendido'}/>
        <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log('Productos agregados: ',quantity)}/>
      </div>
  )
}

export default App
