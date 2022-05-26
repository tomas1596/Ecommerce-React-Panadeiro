import './ItemListContainer.css';
import ItemList from "../../components/ItemList/ItemList";
import { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { getFetch, } from "../../data/data";
import { DotSpinner } from '@uiball/loaders'
import { doc, getDoc, getDocs, collection, getFirestore, query, where } from 'firebase/firestore'



const ItemListContainer = (isLoading, {greeting = 'WE GO GYM MUSCLE SHOP'}) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams()


    //ItemListContainer
    useEffect(() => {
        const db = getFirestore()

        const queryCollection = collection(db, 'items')
        const queryCollectionFilter = query(queryCollection, where('catalogo', '==', 'suplementos'))

        getDocs(queryCollectionFilter)
        .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data()}))))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))
    },[])
    console.log(productos)


/*     useEffect(() => {
        if (id) {
            getFetch()
            .then(resp=> setProductos(resp.filter((item) => item.category === id)))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                             
        } else {
            getFetch()
            .then(resp=> setProductos(resp))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                 
        }
    }, [id]) */

    return (
            <div>
                <h1>{greeting}</h1>
                <div className="container d-flex justify-content-center align-items-center" aria-live="polite" aria-busy={isLoading}>
                    {loading ? (<DotSpinner size={50} speed={0.9} color="white"/>) : (<ItemList productos={productos}/>)}
                </div>
            </div>
    )
}

export default ItemListContainer;