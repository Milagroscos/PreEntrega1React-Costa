import './navbar.css'
import Carrito from "../CartWidget/CartWidget"
import { NavLink , Link } from 'react-router-dom'


const NavBar =() =>{
    return(
        <nav className='NavBar'>
            <Link to ='/'>
                <h3>Deco House</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`category/living`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Living</NavLink>
                <NavLink to={`category/muebles`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Muebles</NavLink>
                <NavLink to={`category/mueblesExterior`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Muebles exterior</NavLink>
            </div>
            <Carrito/>    
        </nav>
        
    )
}

export default NavBar