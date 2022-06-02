import { useCartContext} from "../Context/CartContext";
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore";

import "./CartContainer.css"
import { Link } from "react-router-dom";


const CartContainer = () => {
    const {cartList, removeCart, removeItem, totalPrice} = useCartContext()

    function generateOrder() {
        
        let orden = {}

        orden.buyer = { name: 'Tomás', email: 't@hotmail.com', phone: '123456789' }
        orden.total = totalPrice

        orden.products = cartList.map(products => {
            const id = products.id
            const name = products.name
            const price = products.price * products.count

            return {id, name, price}
        })

        //crear orden en firebase
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, orden)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => removeCart())

        //update orden en firebase
/*         const queryItem = doc(db, 'items', '11DVncyLFuxw4LWXLtM9')

        updateDoc(queryItem, {
            stock: 10
        })
        .then(() => console.log('terminada')) */

        // actualizar el stock
/*         const queryCollectionStock = collection(db, 'items')

        const queryActualizarStock = query(
            queryCollectionStock,
            where( documentId(), 'in', cartList.map(it = it.id))
        )

        const batch = writeBatch(db)

        await getDocs(queryActualizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).count
        })))
        .finally(() => console.log('actualizado'))

        batch.commit() */
    }

    return (
        <div style={{height:'1000px'}} className="w-50 card-container-fluid column justify-content-evenly mx-auto mt-2">
                {cartList.map(products => 
                <div className="card d-flex flex-row h-25 justify-content-between mx-auto mt-1">
                    <li className="d-flex basis">
                        <img className="img-fluid cart-img" src={products.img} alt={products.name}/>
                        <div className="d-flex flex-column ms-5 align-self-center">
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
                    <div className="d-flex flex-row card justify-content-between">
                        <h5 className="price ms-5">{`Costo total:$${totalPrice}`}</h5>
                        <button className="fw-bold btn-md btn-block me-5" onClick={removeCart}>Vaciar Carrito</button>
                        <button className="fw-bold btn-md btn-block me-5" onClick={generateOrder}>Terminar Compra</button>
                    </div>  
                    : 
                    <div> 
                        <h4 className="d-flex flex-column mx auto mt-5 text-white">No hay products en tu carrito</h4>
                        <Link to="/"> 
                            <button className="mt-3 btn-lg btn-block fw-bold">Volver a Inicio</button>
                        </Link> 
                    </div>}
                </div>
        </div>
    )
}

export default CartContainer;