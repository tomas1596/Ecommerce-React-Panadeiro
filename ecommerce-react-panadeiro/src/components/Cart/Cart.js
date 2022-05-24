import { useCartContext} from "../../Container/Context/CartContext";
import { useEffect } from 'react';

import WOW from 'wowjs';
import "./Cart.css"
import { Link } from "react-router-dom";


const Cart = () => {
    const {cartList, removeCart, removeItem} = useCartContext()

    useEffect(() => {
        new WOW.WOW({
        live: false
        }).init();
    }, [])

    return (
        <div style={{height:'1000px'}} className="card-container-fluid column justify-content-evenly mx-auto col-12 mt-2">
                {cartList.map(productos => 
                <div className="card d-flex flex-row w-50 h-25 justify-content-between mx-auto mt-1">
                    <li className="d-flex basis">
                        <img className="col-3 img-fluid w-50 cart-img wow pulse" src={productos.img} alt={productos.name}/>
                        <div className="col-6 d-flex flex-column ms-5 align-self-center">
                            <Link className="link" to ={`/ecommerce-react-panadeiro/detail/${productos.id}`}>
                                <p className="text-dark title-card">{productos.name}</p>
                            </Link>
                            <h5>{productos.price}</h5>
                            <h5>{productos.count}</h5>
                        </div>
                    </li>
                    <button onClick={() => removeItem(productos.id)} className="col-3 trash-btn align-self-center mt-2 mb-2 fa-regular fa-trash-can fa-2x"></button>         
                </div>)}
                <div className="mt-3">
                    {cartList.length ? <button className="w-25 align-self-center fw-bold btn-md btn-block" onClick={removeCart}>Vaciar Carrito</button>  : <h4 className="mt-5 text-white">No hay productos en tu carrito</h4>}
                </div>
        </div>
    )
}

export default Cart;