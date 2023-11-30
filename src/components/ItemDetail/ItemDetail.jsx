import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description , price, stock}) => {
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
                <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log('Productos agregados: ',quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail