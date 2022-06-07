import React from 'react';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ nombre, descripcion }) => {

    return (
        <><div>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
        </div>
        <div>
            <ItemCount />
        </div></>
    )
};


export default ItemDetail