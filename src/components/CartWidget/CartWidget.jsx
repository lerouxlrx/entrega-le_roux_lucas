import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const { cart } = useContext (CartContext)

    return (
        <div className='colorTexto carritoNav'>
            <Link to='cart' style = {{display: cart.length > 0 ? 'block' : 'none'}}>
                <AddShoppingCartIcon />
                { cart.length }
            </Link>
        </div>
    )
}

export default CartWidget