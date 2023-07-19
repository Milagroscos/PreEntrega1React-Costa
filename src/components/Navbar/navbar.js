import Carrito from "../CartWidget/CartWidget"
const NavBar =() =>{
    return(
        <nav>
            <h3>Deco House</h3>
            <div>    
                <button>Living</button>
                <button>Dormitorio</button>
                <button>Cocina</button>
                <button>Baño</button>
                <button>Exterior</button>
                <button>Adornos</button>
            </div>    
            <Carrito/>    
        </nav>
        
    )
}

export default NavBar