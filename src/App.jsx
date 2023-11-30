import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  NavBar,
  ItemListContainer,
  ItemDetailContainer,
} from "./components";

function App() {

  return (
      <div className = "App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer slogan={'Mantenete Encendido'}/>} /> 
            <Route path='/category/:categoryId' element={<ItemListContainer slogan={'Mantenete Encendido'}/>} /> 
            <Route path='/item/:itemId' element={<ItemDetailContainer />} /> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
