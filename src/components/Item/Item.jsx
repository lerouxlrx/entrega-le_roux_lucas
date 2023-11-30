import { Link } from 'react-router-dom'
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
                <Link to={`/item/${id}`} className='OptionText'>
                    Ver detalle
                </Link>
                </button>

            </footer>
        </article>
    )
}

export default Item