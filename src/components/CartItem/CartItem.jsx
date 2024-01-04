import './CartItem.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({id, name, price, quantity}) => {
    const { removeItem } = useContext(CartContext);
    const handleRemoveClick = () => {
        removeItem(id);
      };

    return (
        <article className="CartItem">
            <div className="CartHeader">
                <h3 className="CartHeaderText">
                    {name}
                </h3>
            </div>
            <div className='CartDatos'>
                <section className="CartUni">
                    <p className="PrecioUni">
                        Precio ${price}
                    </p>
                    <p className="CantidadUni">
                        Cantidad {quantity}
                    </p>
                </section>
                <section className="PrecioSubTotal">
                    <p className="CartSubTotal">
                        SubTotal ${price*quantity}
                    </p>
                </section>
                <section className="EliminarItem">
                    <button className="BtnEliminarItem" onClick={handleRemoveClick}>
                        Eliminar
                    </button>
                </section>
            </div>
        </article>
    )
}

export default CartItem