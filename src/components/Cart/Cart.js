import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import cartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const{ cart, totalPrice, clearCart} = useContext(CartContext)

    if(cart.length === 0) {
        return(
            <div className='Container'>
                <h1>El carrito esta vacio.</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    else {
    return (
        <div className='Container2 1'>
                <div className="font-card">
                {
                    cart.map(items => <cartItem key={items.id} items={items} />)
                }
                </div>
                <div className='container-total'>
                    <p className='font-checkout'>
                        Total: ${totalPrice()}
                    </p>
                    <div className='ButtonD'>
                        
                        <div className='containerCheckout'>

                        <Link to='/checkout' className='font-checkout'> Finalizar Compra </Link>

                        </div>
                        <div>
                        <button className='button button1' onClick={() => clearCart()}> Vaciar carrito </button>

                        </div>

                        

                
                    </div>
                    
                </div>
                

            </div>
        )

    }


}


export default Cart