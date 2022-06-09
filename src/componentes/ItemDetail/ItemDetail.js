import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'

const ItemDetail = ({ nombre, descripcion, stock }) => {
const [cantidad, setCantidad] = useState(0)

const agregarCarrito = (contador) => {
    console.log("producto agregado")
    setCantidad(contador)
}


    return (
        <><div>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
        </div>
        <div>
            {cantidad > 0 ? <Link to='/carrito'>Finalizar Compra</Link> : <ItemCount stock={stock} onConfirm={agregarCarrito}/>}
        </div></>
    )
};


export default ItemDetail