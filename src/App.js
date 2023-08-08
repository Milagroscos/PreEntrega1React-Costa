import './App.css';
import NavBar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css"
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  return (
    <div className="App">
      <section className="hero is-warning">
        <div className="hero-body">
        <ItemListContainer greeting={"Bienvenidos"} className="title"/>
        <ItemDetailContainer/>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
        </div>
      </section>
      <NavBar/>
    </div>
  );
}

export default App;
