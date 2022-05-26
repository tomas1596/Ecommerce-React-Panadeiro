import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { useState, useCallback, useEffect } from "react";
import CartButtons from "../CartButtons/CartButtons";
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import { useCartContext } from '../../Container/Context/CartContext'
import WOW from 'wowjs';
import 'react-medium-image-zoom/dist/styles.css'




const ItemDetail = ({productos}) => {    

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
        alert(`Has agregado ${count} producto/s a tu carrito`)
        addToCart({...productos, count})
      }

    useEffect(() => {
        new WOW.WOW({
        live: false
        }).init();
    }, [])

    return (
        <div className="wow fadeIn card-container col-12 w-50 d-flex justify-content-center align-items-center mx-auto mt-5" >
            <div className="card-body d-flex">
                    <div className="w-50 col-6">
                        <h1 className="text-dark">{productos.name}</h1>
                        <ControlledZoom overlayBgColorEnd='rgba(0, 0, 0, 0.6)' isZoomed={isZoomed} onZoomChange={handleZoomChange} zoomMargin={100}>
                            <img style={{ width: '13em'}} className="detail-img wow pulse" src={productos.img} alt={productos.name}/>
                        </ControlledZoom>
                        <h2 className="text-dark">{productos.productdescription}</h2>
                        <h5 className="">Precio: {productos.price}</h5>
                        <h5 className="">Stock: {productos.stock}</h5>
                            <div className="d-flex justify-content-center">
                                {inputType === 'button' ?  <ItemCount handleInter={handleInter} stock={productos.stock} initial={1} onAdd={onAdd}/>
                                : 
                                <CartButtons />}
                            </div>
                    </div>
                <div className="d-flex flex-column justify-content-center">
                        <h2 className="text-dark mb-5">Descripción</h2>
                        <h5 >{productos.detaildescription}</h5>
                </div>
            </div>
    </div>
    )
}
export default ItemDetail;