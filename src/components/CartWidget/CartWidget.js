
import cart from './assets/cart-fill.svg'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'


const Carrito = () =>{
    const { totalQuantity} = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget' style ={{ display: totalQuantity > 0? 'block' : 'none'}}>
            <img className='CartImg'  src={cart} alt='Cart-widget'/>
            <span>{totalQuantity}</span>
        </Link>
    )
}

export default Carrito