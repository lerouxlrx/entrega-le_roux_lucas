import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description , price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)

        const item = {
            id, name, price
        }

        addItem (item, quantity)
    }

    return (
        <article className="CardItem CardItemFilter">
            <header className="Header HeaderFilter">
                <h2 className="ItemHeader ItemHeaderFilter">
                    {name} -> ${price} c/u
                </h2>
            </header>
            <picture className='ContainerImg ContainerImgFilter'>
                <img src={img} alt={name} className="ItemImg ItemImgFilter" />
            </picture>
            <section className='ContainerInfo ContainerInfoFilter'>
                <p className="Info InfoCategoryFilter nfoFilter">
                    {category}
                </p>
                <p className="Info InfoDescriptionFilter InfoFilter">
                    {description}
                </p>
            </section>
            <footer className="ItemFooter ItemFooterFilter">
                {
                    quantityAdded > 0 ? (
                        <section>
                            <h4>
                            Cantidad: {quantityAdded} 
                            </h4>
                            <h4>
                            Precio final: ${price * quantityAdded}
                            </h4>
                            <Link to='/cart'>
                            <button className="btnCount">Ir a confirmar compra</button>
                            </Link>
                        </section>
                        
                    ) : (
                    <ItemCount initial={0} stock={10} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail