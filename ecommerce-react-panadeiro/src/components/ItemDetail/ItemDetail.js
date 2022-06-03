import ItemCount from "../ItemCount/ItemCount";
import { useState, useCallback, useEffect } from "react";
import CartButtons from "../CartButtons/CartButtons";
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import { useCartContext } from '../../Container/Context/CartContext'
import WOW from 'wowjs';
import 'react-medium-image-zoom/dist/styles.css'
import Swal from 'sweetalert2'




const ItemDetail = ({products}) => {    

    const [inputType, setInputType ] = useState('button')
    const handleInter=()=>{
        setInputType('input')
    }

    const [isZoomed, setIsZoomed] = useState(false)
    const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
    }, [])

    const {addToCart} = useCartContext()

    const onAdd = (count) =>{
        Swal.fire({
            text:  `Has agregado ${count} producto/s a tu carrito`,
            icon: 'success',
            confirmButtonText: 'Continuar'
          })
        addToCart({...products, count})
    }

    useEffect(() => {
        new WOW.WOW({
        live: false
        }).init();
    }, [])

    return (
        <div className="card-container w-50 wow fadeIn d-flex justify-content-center align-items-center mx-auto mt-2" >
            <div className="card-body d-flex flex-column">
                    <div className="justify-content-center align-self-center">
                        <h2 className="text-dark">{products.name}</h2>
                        <ControlledZoom overlayBgColorEnd='rgba(0, 0, 0, 0.6)' isZoomed={isZoomed} onZoomChange={handleZoomChange} zoomMargin={50}>
                            <img style={{ width: '13em'}} className="wow pulse" src={products.img} alt={products.name}/>
                        </ControlledZoom>
                        <h2 className="text-dark">{products.productdescription}</h2>
                        <h5 className="">Precio: <b>${products.price}</b></h5>
                        <h5 className="">Stock: <b>{products.stock}</b></h5>
                            <div className="d-flex justify-content-center mb-3">
                                {inputType === 'button' ?  <ItemCount handleInter={handleInter} stock={products.stock} initial={1} onAdd={onAdd}/>
                                : 
                                <CartButtons />}
                            </div>
                    </div>
                <div className="d-flex flex-column justify-content-center">
                        <h2 className="text-dark mb-2">Descripción</h2>
                        <h5 >{products.detaildescription}</h5>
                </div>
            </div>
    </div>
    )
}
export default ItemDetail;