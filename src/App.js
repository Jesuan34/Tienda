import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ListContainer from './componentes/ListContainer/ListContainer';
//import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar className='' />
        <Routes>
          <Route path='/' element={<ListContainer />}/>
        <Route path='/categoria/:categoriaId' element={<ListContainer greeting="Categorias" />}/>
        <Route path='/detail/:detalleId' element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
    </div >
  );
}

export default App;
