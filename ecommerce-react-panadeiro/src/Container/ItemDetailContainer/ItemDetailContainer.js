import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from "../../data/data";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { DotSpinner } from '@uiball/loaders';

const ItemDetailContainer = (isLoading) => {

    const [productos, setProductos] = useState({});
    const [loading, setLoading] = useState(true);
    const {IdDetail} = useParams()

    useEffect(() => {
        setTimeout(() => {
            getFetch(IdDetail)
            .then(resp=> setProductos(resp))
            .catch((err)=> console.log(err))
            .finally(() => setLoading(false)) 
        }, 1000)    
    },[IdDetail])

    console.log(productos)

    return (
        <div className="d-flex justify-content-center mt-2" aria-live="polite" aria-busy={isLoading}>
            {loading ? (<DotSpinner size={50} speed={0.9} color="white"/>) : (<ItemDetail productos={productos}/>)}
        </div>
    )
}

export default ItemDetailContainer;