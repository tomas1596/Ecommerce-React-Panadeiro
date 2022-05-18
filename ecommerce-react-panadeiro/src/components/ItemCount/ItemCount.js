
import React, { useState } from 'react';

function ItemCount({stock, initial, onAdd, handleInter}) {
    const[count, setCount] = useState(initial);

    const addProduct = (number) => {
        setCount(count + number);
    };

/*     function addCart(){
        onAdd(count);
    }  */

    return (
        <div>
            <div className="pt-2 card-count text-dark mx-auto">
                <div className="d-flex justify-content-between pb-1">
                    <button className="btn btn-primary count-btn1 ps-4 pe-4" onClick={() => addProduct(-1)} disabled={count <= 1 ? true : null}>-</button>
                    <h4>{count}</h4>
                    <button className="btn btn-primary count-btn2 ps-4 pe-4" onClick={() => addProduct(+1)} disabled={count === stock ? true : null}>+</button>
                </div>
                    <button type="button" className="btn btn-primary cart-btn btn-block w-100" onClick={handleInter}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount; 