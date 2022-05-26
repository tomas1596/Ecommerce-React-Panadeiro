import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

export default function Cart() {
    const {cartList, removeCart, totalPrice, totalItems} = UseCartContext();
    
    if (!totalItems) {
        return (
            <div className="cart">
                <h1>No hay productos en su carrito</h1>
                <Link to='/'>
                    <button>Volver al inicio</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <h1 className="cart__title">Total del pedido:</h1>
            {cartList.map(el => <CartItem key={el.id} item={el}/>)}
            <p>{`Costo total: $${totalPrice}`}</p>
            <button onClick={removeCart}>Vaciar pedido</button>
        </div>
    );
}