import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  NavBar,
  ItemListContainer,
  ItemDetailContainer,
  Cart,
} from "./components";
import { CartProvider } from './context/CartContext';



function App() {

  return (
      <div className = "App">
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer slogan={'Mantenete Encendido'}/>} /> 
              <Route path='/category/:categoryId' element={<ItemListContainer slogan={'Mantenete Encendido'}/>} /> 
              <Route path='/item/:itemId' element={<ItemDetailContainer />} /> 
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </div>
  )
}

export default App
