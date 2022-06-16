import { useCartContext } from "../../Container/Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Formik, Form, Field, ErrorMessage} from "formik";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import { useState } from "react";


const CartForm = () => {
    
    const {cartList, removeCart, totalPrice} = useCartContext();
    const [dataForm, setDataForm] = useState({ email: '', phone: '', name:'' })

    async function submitOrder() {
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
            text:  'Muchas gracias por su compra!',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }))
        .catch(err => console.log(err))
        .finally(() => removeCart() )
    }      
    


    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const schemaValidation = Yup.object().shape({
        name: Yup.string()
        .min(2, 'Minimo 2 caracteres')
        .max(50, 'Maximo 50 caracteres')
        .required('Por favor ingresa un nombre'),
        phone: Yup.string().matches
        (phoneRegExp, 'El número no es válido')
        .min(4)
        .max(30)
        .required('Por favor ingresa un número'),
        email: Yup.string()
        .email('Correo inválido')
        .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Email inválido")
        .required('Por favor ingresa un email'),
        emailConfirmation: Yup.string()
        .oneOf([Yup.ref('email'), null], 'El email no coincide')
        .required('Por favor confirma el email')
    });



    const handlerChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <Formik
                initialValues={{
                    name: dataForm.name,
                    phone: dataForm.phone,
                    email: dataForm.email,
                    emailConfirmation: ''
                }}
                validationSchema={schemaValidation}
                onSubmit={submitOrder}
            >
                {({values, errors}) => (
                    
                <center>
                    <Form className='form-control w-75 mt-4'>
                        <h5 className="mt-1 mb-3"><b>Ingresa los siguientes datos:</b> </h5>
                        <Field className='form-control' 
                        type='text' 
                        name='name' 
                        placeholder='Nombre'
                        value={values.name}
                        onKeyUp={handlerChange}
                        />
                        <ErrorMessage name="name" component={() => (
                            <div className="text-danger">{errors.name}</div>
                        )} /> <br />
                        <Field className='form-control' 
                        type='number' 
                        name='phone' 
                        placeholder='Teléfono'
                        value={values.phone}
                        onKeyUp={handlerChange}
                        />
                        <ErrorMessage name="phone" component={() => (
                            <div className="text-danger">{errors.phone}</div>
                        )} /> <br />
                        <Field className='form-control' 
                        type='email' 
                        name='email' 
                        placeholder='Email'
                        value={values.email}
                        onKeyUp={handlerChange}
                        />
                        <ErrorMessage name="email" component={() => (
                            <div className="text-danger">{errors.email}</div>
                        )} /> <br />
                        <Field className='form-control' 
                        type='email' 
                        name='emailConfirmation' 
                        placeholder='Confirmar Email'
                        value={values.emailConfirmation}
                        onKeyUp={handlerChange}
                        />
                        <ErrorMessage name="emailConfirmation" component={() => (
                            <div className="text-danger">{errors.emailConfirmation}</div>
                        )} /> <br />
                        <button className="fw-bold btn-md btn-block btn-primary mt-3" type="submit">Terminar Compra</button>
                    </Form>
                </center>
                )}
            </Formik>
        </div>
    )
}

export default CartForm;