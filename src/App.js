import './App.css';
import NavBar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css"
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {Route }from 'react-router-dom'
import {Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart/Cart'
import { CartProvider } from './components/CartContext/CartContext';
import Checkout from './components/Checkout/Checkout';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
