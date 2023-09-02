import { useContext, useState } from 'react'
import {db} from '../../components/services/firebase/firebaseConfig'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { CartContext } from '../Context/CartContext'
import { Timestamp, addDoc, collection, documentId, getDocs, writeBatch, where, query } from 'firebase/firestore'
import CartItem from '../CartItem/CartItem'

const Checkout = ( ) =>{
    const{loading, setLoading} = useState(false)
    const{orderId,setOrderId} = useState('')

    const {cart, totalPrice, clearCart} = useContext(CartContext)

    const createOrder =  async({name, phone, email}) =>{
        setLoading(true)

        try{
            const objOrder = {
                buyer: {name, phone, email
                },
                items: cart,
                total: totalPrice(),
                date: Timestamp.fromDate (new Date())
            }
            const batch = writeBatch(db)
            const outOfStock= []

            const ids =cart.map(items=> items.id)
            const productsRef =collection (db,'products')
            const productsAddedFromfirestore = await getDocs(query(productsRef,where(documentId(), 'in', ids)))
            const {docs}= productsAddedFromfirestore

            docs.forEach( doc =>{
                const dataDoc = doc.data()
                const stockdb = dataDoc.stock

                const productAddedToCart = cart.find(items => items.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockdb >= prodQuantity) {
                    batch.update(doc.ref, { stock:stockdb -prodQuantity})
                } else{
                    outOfStock.push({ id:doc.id,...dataDoc})
                }
            })
            if(outOfStock.length === 0){
                await batch.commit()
                
                const orderRef = collection(db, 'orders')
                
                const orderAdded = await addDoc(orderRef,objOrder)
                
                setOrderId(orderAdded.id)
                
                clearCart()
            } else{
                console.error('Hay productos que estan fuera de stock')
            }

        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    if (loading){
        return <h1>Se esta generando su orden...</h1>
    }
    if(orderId){
        return <h1>El numero de su orden es : {orderId}</h1>
    }
    return (
        <div>
        <div className='Container'>
            <div className="font-card">
                {
                    cart.map(items => <CartItem key={items.id} items={items} />)
                }
            </div>
            <div className='container-total'>
                <p className='font-checkout'>
                    Total: ${totalPrice()}
                </p>
            </div>
        </div>
        <h1 className="h1-size">Checkout</h1>
        <CheckoutForm onConfirm={createOrder}/>
    </div>
)
}

export default Checkout