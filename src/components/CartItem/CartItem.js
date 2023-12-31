import { CartContext } from '../Context/CartContext'
import React from 'react';
import { useContext } from 'react';


const CartItem = ({items}) => {
    
    const { removeItem } = useContext(CartContext)


    return (
        <div className='container'>
            <div className='columns'>
                <div className='column'>
                    <h2>
                        {items.name}
                    </h2>
                </div>
                <div className='column'>
                    <p>
                        Cantidad: {items.quantity}
                    </p>
                </div>
                <div className='column'>
                    <p>
                        Subtotal: ${items.quantity * items.price}
                    </p>
                </div>
                <div className='column'>
                    <button className='button' onClick={() => removeItem(items.id)}>Eliminar</button>
                </div>
            </div>
        </div>
    )
};

export default CartItem;