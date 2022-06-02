import './Item.css';
import { Link } from "react-router-dom";
import WOW from 'wowjs';
import { useEffect } from "react";

function Item({id, img, name, price}) {

    useEffect(() => {
        new WOW.WOW({
        live: false
        }).init();
    }, [])

    return (
        <div className="card-container wow fadeIn">
            
            <div className="card-body text-dark"><Link to={`/detail/${id}`} className="link ">
                <img className="card-img" src={img} alt={name}></img>  
                <div className="pt-2 noHover">
                    <div>{name} </div>
                    <div>Precio: ${price} </div>
                </div></Link>
                <div>
                    <Link to={`/detail/${id}`}><button className="btn btn-primary btn-block w-75 mt-1">Detalle del producto</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Item;