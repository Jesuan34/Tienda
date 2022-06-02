import {useState, useEffect} from 'react'
import { idProducto } from '../../Mock'
import ItemDetail from '../ItemDetail/ItemDetail'
import React from 'react'


const ItemDetailContainer = ({id}) => {
    const [productoId, setIdProducto] = useState([])

    useEffect(() => {
        idProducto(id).then(respuesta => {
            setIdProducto(respuesta)                                                                     
        })
    },[])

    return(
        <div>
            <ItemDetail Titulo={productoId?.nombre}/>
        </div>
    )
}

export default ItemDetailContainer