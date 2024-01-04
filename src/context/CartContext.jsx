import { createContext, useState } from "react";

export const CartContext = createContext ({
    cart: []
})

export const CartProvider = ({ children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart (prev => [...prev, {...item, quantity}])
        } else {
            console.error ('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter (prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart ([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const cantidadTotal = () => {
        return cart.reduce((total, product) => total + product.quantity,
          0
        );
      };
    
    const calcularTotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity,
          0
        );
      };

    return (
        <CartContext.Provider value = {{ cart, addItem, removeItem, clearCart, calcularTotal, cantidadTotal,}} >
            { children }
        </CartContext.Provider>
    )
}