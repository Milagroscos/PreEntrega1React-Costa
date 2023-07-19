import './App.css';
import NavBar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css"

function App() {
  return (
    <div className="App">
      <section className="hero is-warning">
        <div className="hero-body">
        <ItemListContainer greeting={"Bienvenidos"} className="title"/>
        </div>
      </section>
      <NavBar/>
    </div>
  );
}

export default App;
