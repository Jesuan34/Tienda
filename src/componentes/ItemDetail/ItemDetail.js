import React from 'react';
import Item from '../Item/Item';

const ItemDetail = ({ Item }) => {
    
    return (
        <div>
            {productos.map(producto => <Item key={producto.id} {...producto} />)}
        </div>
    )
};


export default ItemDetail