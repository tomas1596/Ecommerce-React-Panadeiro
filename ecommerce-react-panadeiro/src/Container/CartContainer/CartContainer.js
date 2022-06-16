import { useCartContext} from "../Context/CartContext";
import "./CartContainer.css"
import { Link } from "react-router-dom";
import CartForm from "../../components/Form/Form";


const CartContainer = () => {
    const {cartList, removeCart, removeItem, totalPrice} = useCartContext()

    return (
        <div style={{height:'1000px'}} className="w-50 card-container-fluid column justify-content-evenly mx-auto mt-2">
                {cartList.map(products => 
                <div className="card d-flex flex-row h-25 justify-content-between mx-auto mt-1">
                    <li className="d-flex basis">
                        <img className="img-fluid cart-img" src={products.img} alt={products.name}/>
                        <div className="d-flex flex-column ms-5 col-6 align-self-center">
                            <Link className="link" to ={`/detail/${products.id}`}>
                                <p className="text-dark title-card ">{products.name}</p>
                            </Link>
                            <h5>Precio: <b>${products.price}</b></h5>
                            <h5>Cantidad: <b>{products.count}</b></h5>
                        </div>
                    </li>
                    <button onClick={() => removeItem(products.id)} className="trash-btn align-self-center mt-2 mb-2 fa-regular fa-trash-can fa-2x"></button>         
                </div>)}
                <div>
                    {cartList.length ? 
                    <div className="">
                        <div className="bg-light">
                            <h5 className="price ms-5">{`Costo total:$${totalPrice}`}</h5>
                            <button className="fw-bold btn-md btn-block me-4" onClick={removeCart}>Vaciar Carrito</button>
                        </div>
                        <div>
                            <h2 className="mt-5">Un paso más antes de comprar..</h2>
                            <CartForm />
                        </div>
                    </div>  
                    : 
                    <div> 
                        <h4 className="d-flex flex-column mx auto mt-5 text-white">No hay productos en tu carrito</h4>
                        <Link to="/"> 
                            <button className="mt-3 btn-lg btn-block fw-bold btn-hover">¿Volver a Inicio?</button>
                        </Link> 
                    </div>}
                </div>
        </div>
    )
}

export default CartContainer;