import { Link } from "react-router-dom";


const CartButtons= ()=> {

    return (
        <div className="d-flex flex-column">
        <Link to='/' >
            <button className="btn btn-primary btn-block mb-1">Continuar comprando</button>
        </Link>
        <Link to='/cart' >
            <button className="btn btn-primary btn-block">Finalizar compra</button>
        </Link>
        </div>
    )
}

export default CartButtons;