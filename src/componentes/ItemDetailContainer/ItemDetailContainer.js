import {useState, useEffect} from 'react'
import { idProducto } from '../../Mock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import React from 'react'


const ItemDetailContainer = () => {
    const [productoId, setIdProducto] = useState([])

    const {detalleId} = useParams()

    useEffect(() => {
        idProducto(detalleId).then(respuesta => {
            setIdProducto(respuesta)                                                                     
        })
    },[])

    return(
        <div>
            <ItemDetail {...productoId}/>
        </div>
    )
}

export default ItemDetailContainer