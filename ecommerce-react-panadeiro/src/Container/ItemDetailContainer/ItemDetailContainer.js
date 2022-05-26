import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from "../../data/data";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { DotSpinner } from '@uiball/loaders';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = (isLoading) => {

    const [productos, setProductos] = useState({});
    const [loading, setLoading] = useState(true);

    const {IdDetail} = useParams()


    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, 'items', IdDetail)
        getDoc(dbQuery)
        .then(resp => setProductos( { id: resp.id, ...resp.data()}))
        .catch((err)=> console.log(err))
        .finally(() => setLoading(false)) 
    },[])

/*     useEffect(() => {
            getFetch(IdDetail)
            .then(resp=> setProductos(resp))
            .catch((err)=> console.log(err))
            .finally(() => setLoading(false)) 
    },[IdDetail]) */

    console.log(productos)

    return (
        <div className="d-flex justify-content-center mt-2" aria-live="polite" aria-busy={isLoading}>
            {loading ? (<DotSpinner size={50} speed={0.9} color="white"/>) : (<ItemDetail productos={productos}/>)}
        </div>
    )
}

export default ItemDetailContainer;