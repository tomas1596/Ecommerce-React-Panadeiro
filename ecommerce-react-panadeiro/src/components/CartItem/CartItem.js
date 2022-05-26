import { useCartContext} from "../../Container/Context/CartContext";
import { useEffect } from 'react';

import WOW from 'wowjs';
import "./CartItem.css"
import { Link } from "react-router-dom";


const Cart = () => {
    const {cartList, removeCart, removeItem, totalPrice} = useCartContext()

    useEffect(() => {
        new WOW.WOW({
        live: false
        }).init();
    }, [])

    return (
        <div style={{height:'1000px'}} className="w-50 card-container-fluid column justify-content-evenly mx-auto mt-2">
                {cartList.map(productos => 
                <div className="card d-flex flex-row h-25 justify-content-between mx-auto mt-1">
                    <li className="d-flex basis">
                        <img className="img-fluid cart-img wow pulse" src={productos.img} alt={productos.name}/>
                        <div className="d-flex flex-column ms-5 align-self-center">
                            <Link className="link" to ={`/ecommerce-react-panadeiro/detail/${productos.id}`}>
                                <p className="text-dark title-card ">{productos.name}</p>
                            </Link>
                            <h5>Precio: {productos.price}</h5>
                            <h5>Cantidad: {productos.count}</h5>
                        </div>
                    </li>
                    <button onClick={() => removeItem(productos.id)} className="trash-btn align-self-center mt-2 mb-2 fa-regular fa-trash-can fa-2x"></button>         
                </div>)}
                <div>
                    {cartList.length ? 
                    <div className="d-flex flex-row card justify-content-between">
                        <p className="price ms-5">{`Costo total: $${totalPrice}`}</p>
                        <button className="fw-bold btn-md btn-block me-5" onClick={removeCart}>Vaciar Carrito</button>
                    </div>  
                    : 
                    <div> 
                        <h4 className="d-flex flex-column mx auto mt-5 text-white">No hay productos en tu carrito</h4>
                        <Link to="/"> 
                            <button className="mt-3 btn-lg btn-block fw-bold">Volver a Inicio</button>
                        </Link> 
                    </div>}
                </div>
        </div>
    )
}

export default Cart;