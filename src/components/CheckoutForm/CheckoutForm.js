import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm =({onConfirm}) => {
    const[name, setName] = useState('')
    const[phone, setPhone] = useState('')
    const[email,setEmail] = useState('')

    const handleConfirm =(event) =>{
        event.preventdefault()

        const userData ={
            name,phone,email
        }
        onConfirm(userData)
    }
    return(
        <form className="box card1" onSubmit={handleConfirm}>
        <div className="field">
        <label className="font-checkout">Nombre Completo</label>
        <div className="control">
                <input className="input" type="text" value={name} required onChange={({target})=> setName(target.value)}/>
            </div>
            </div>
            <div className="field">
            <label className="font-checkout">Telefono</label>
            <div className="control">
                <input className="input" type="text" value={phone} required onChange={({target})=> setPhone(target.value)}/>
            </div>
            </div>
            <div className="field">
            <label className="font-checkout">Email</label>
            <div className="control">
                <input className="input" type="email"  value={email} required onChange={({target})=> setEmail(target.value)}/>
            </div>
            </div>
            <div className="field is-grouped">
            <div className="control">
                <button className="button button1">Enviar</button>
            </div>
            <div className="control">
                <button className="button button1">Cancelar</button>
            </div>
            </div>
    </form>
)

}
export default CheckoutForm