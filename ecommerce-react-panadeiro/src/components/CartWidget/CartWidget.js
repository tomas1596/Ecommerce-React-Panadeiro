import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Container/Context/CartContext';

const CartWidget = () => {
    const {totalItems} = useCartContext();

    return(
        <Link to='/cart' >
        <div>
                <span className="cart-widget"><i className="fa-solid fa-cart-shopping fa-flip-horizontal fa-2x"></i></span>
                <span className="quantity">{totalItems}</span>
        </div>
        </Link>
    )
}

export default CartWidget;