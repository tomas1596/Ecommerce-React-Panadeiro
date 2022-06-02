import './ItemListContainer.css';
import ItemList from "../../components/ItemList/ItemList";
import { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { DotSpinner } from '@uiball/loaders'
import { getDocs, collection, getFirestore, query, where } from 'firebase/firestore'



const ItemListContainer = (isLoading, {greeting = 'WE GO GYM MUSCLE SHOP'}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'items');
        const queryCollectionFilter = id ? query(queryCollection, where('category','==',id)) : queryCollection
            
        getDocs(queryCollectionFilter)
        .then(resp => setProducts(resp.docs.map(item => ({id: item.id, ...item.data()}))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        
    },[id]);


    return (
            <div>
                <h1>{greeting}</h1>
                <div className="container d-flex justify-content-center align-items-center" aria-live="polite" aria-busy={isLoading}>
                    {loading ? (<DotSpinner size={50} speed={0.9} color="white"/>) : (<ItemList products={products}/>)}
                </div>
            </div>
    )
}

export default ItemListContainer;