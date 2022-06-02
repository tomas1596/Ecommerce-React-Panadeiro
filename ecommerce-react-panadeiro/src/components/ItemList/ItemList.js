import Item from "../Item/Item"

function ItemList({products}) {

    return (
        <div>
            <h2 className="mt-5 fst-italic">DESTACADOS</h2>
            <h5 className="text-white mt-3 fw-light">Nuestras recomendaciones</h5>
            <div className="d-flex flex-wrap mx-auto justify-content-center">
                {products.map(item => 
                <Item key={item.id} {...item}/>)}
            </div>
        </div>
    )
}

export default ItemList;