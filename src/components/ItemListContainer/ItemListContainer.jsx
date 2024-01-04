import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { db } from "../../firebase/client";
import {getDocs, collection, query, where} from 'firebase/firestore'
import { useParams } from "react-router-dom"

const ItemListContainer = ({slogan}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams()

    useEffect (() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query( collection(db, 'productos'), where('category', "==", categoryId))
        : collection (db, 'productos')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })  
    },[categoryId]);

    return (
        <div>
            <h1 style={{ color: '#0a497b' }}> {slogan} </h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer