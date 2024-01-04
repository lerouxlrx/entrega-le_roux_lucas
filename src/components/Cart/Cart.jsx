import { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, clearCart, calcularTotal} = useContext(CartContext)
    console.log (cart)
    if (cart.length === 0) {
        return (
            <div>
                <h3>
                    No hay productos en el carrito
                </h3>
                <Link to='/' className='btnCount'>
                    <button>
                        Ir a productos
                    </button>
                </Link>
            </div>
        )
    } else {
        return (
            <section className='ContainerCart'>
                <article className='Container'>
                    { cart.map (p => <CartItem key={p.id} {...p}/>) }
                    <h3>
                        Total: ${calcularTotal()}
                    </h3>
                </article>
                <button onClick={() => clearCart()} className='btnCount'>
                        Limpiar Carrito
                    </button>
                    <Link to='/' className='btnCount'>
                        <button>
                            Seguir comprando
                        </button>
                    </Link>
                    <Link to='/checkout' className='btnCount'>
                        <button>
                            Finalizar compra
                        </button>
                    </Link>
            </section>
        )
    }

}

export default Cart

