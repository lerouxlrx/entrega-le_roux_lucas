import './Item.css'

const Item = ({id, name, img, price, stock}) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture className='ContainerImg'>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section className="ContainerInfo">
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <button className="Option">
                    Ver detalle
                </button>
            </footer>
        </article>
    )
}

export default Item