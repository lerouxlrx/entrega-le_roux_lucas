import './ItemCount.css'
import React, { useState } from 'react';

function ItemCount ({stock,initial,onAdd}) {
    
    const [quantity, setQuantity] = useState(initial)
    
    const increment = () => {
        (quantity < stock) && setQuantity (quantity + 1)
    }
    const decrement = () => {
        quantity > 0 && setQuantity (quantity - 1)
    }

    return (
        <div className="containerCount">
            <h3 className="tituloCount">Elegí los productos y encendete ahora</h3>
            <div className="containerEjec">
                <button className="variacionCount btnCount" onClick={decrement}>-</button>
                <h4 className="numeroCount">{quantity}</h4>
                <button className="variacionCount btnCount" onClick={increment}>+</button>
            </div>
            <div className="containerAgregar">
                <button className="botonAgregar btnCount" onClick={()=>onAdd(quantity)} disabled={!stock}>Agregar a Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
