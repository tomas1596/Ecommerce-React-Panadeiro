import { useState } from "react";
import { useCartContext } from "../../Container/Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";


const CartForm = () => {
    

    const {cartList, removeCart, totalPrice} = useCartContext()
    const [dataForm, setDataForm] = useState({ email: '', phone: '', name:'' })

    async function submitOrder(e) {
        e.preventDefault()
        let order = {}

        order.buyer = dataForm
        order.total = totalPrice

        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.name
            const price = cartItem.price * cartItem.count

            return {id, name, price}
        })

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
        .then(resp => console.log(resp))
        .then(() =>         Swal.fire({
            text:  'Compra realizada!',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }))
        .catch(err => console.log(err))
        .finally(() => removeCart() )
    } 

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })

        
    }

    return (
        <div>
            <Formik>
                <center>
                    <Form className='form-control w-75 mt-4'>
                        <h5 className="mt-1 mb-3"><b>Ingresa los siguientes datos:</b> </h5>
                        <Field className='form-control' 
                        type='text' 
                        name='name' 
                        placeholder='Nombre'
                        value={dataForm.name}
                        onChange={handleChange}
                        /> <br />
                        <Field className='form-control' 
                        type='number' 
                        name='phone' 
                        placeholder='Telefono'
                        value={dataForm.phone}
                        onChange={handleChange}
                        /> <br />
                        <Field className='form-control' 
                        type='email' 
                        name='email' 
                        placeholder='Email'
                        value={dataForm.email}
                        onChange={handleChange}
                        />
                        <button className="fw-bold btn-md btn-block btn-primary mt-3" type="submit" onClick={submitOrder}>Terminar Compra</button>
                    </Form>
                </center>
            </Formik>
        </div>
    )
}

export default CartForm;