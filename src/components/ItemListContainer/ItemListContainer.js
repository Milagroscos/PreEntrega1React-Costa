import { useState, useEffect } from "react"

import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

import { getDoc, collection, query, where } from "firebase/firestore"
import { db } from "../../components/services/firebase/firebaseConfig"

const ItemListContainer =({greeting}) =>{
    const[products , setProducts] =useState([])
    const [loading,setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() =>{
        setLoading(true)

        const collectionRef=categoryId
        ?query(collection(db,'products'), where('category', '==' , categoryId))
        :collection(db,'products')

        getDoc(collectionRef)
            .then(Response =>{
                const productAdapted =Response.docs.map (doc => {
                    const data = doc.data()
                    return { id: doc.id,...data}
                })
                setProducts(productAdapted)
            })
            .catch(error =>{
                console.error(error)
            })
            .finally(() =>{
                setLoading(false)
            })
        })

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer