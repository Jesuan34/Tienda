import './App.css';
import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import ListContainer from './componentes/ListContainer/ListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Carrito from './componentes/Carrito/Carrito';
import { CarritoContextProvider } from './context/carritoContext';


function App() {

  return (
    <div className="App">
      <CarritoContextProvider>
        <BrowserRouter>
          <NavBar className='' />
          <Routes>
            <Route path='/' element={<ListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ListContainer greeting="Categorias" />} />
            <Route path='/detail/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </CarritoContextProvider>
    </div >
  );
}

export default App;
