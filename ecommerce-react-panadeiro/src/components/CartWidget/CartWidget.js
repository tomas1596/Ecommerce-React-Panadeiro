import './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return(
        <Link to='/cart' >
        <div className="cart-widget">
            <div className="quantity">0</div>
            <i className="fa-solid fa-cart-shopping fa-flip-horizontal fa-2x"></i>
        </div></Link>
    )
}

export default CartWidget;