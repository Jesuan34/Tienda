import {useState, useEffect} from 'react'
import { idProducto } from '../../Mock'
import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = (id) => {
    const [id, setIdProducto] = useState([])

    useEffect(() => {
        idProducto().then(respuesta => {
            setIdProducto(respuesta)                                                                     
        })
    },[])

    return(
        <div>
            <ItemDetail id={id}/>
        </div>
    )
}

export default ItemDetailContainer