import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ListContainer from './componentes/ListContainer/ListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar className='' />
        <ListContainer className='' greeting="Soy un saludo! Compren en la tienda!" />
      </header>
    </div>
  );
}

export default App;
