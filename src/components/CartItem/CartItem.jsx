import './CartItem.css'

const CartItem = ({id, name, price, quantity}) => {
    return (
        <article className="CartItem">
            <header className="CartHeader">
                <h3 className="CartHeaderText">
                    {name}
                </h3>
            </header>
            <body>
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
                    <button className="BtnEliminarItem">
                        Eliminar
                    </button>
                </section>
            </body>
        </article>
    )
}

export default CartItem