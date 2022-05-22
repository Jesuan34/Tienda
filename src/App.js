import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ListContainer from './componentes/ListContainer/ListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar className='' />
      </header>
      <body>
      <ListContainer className='' greeting="Soy un saludo! Compren en la tienda!" />
      <ItemCount />
      </body>
    </div>
  );
}

export default App;
