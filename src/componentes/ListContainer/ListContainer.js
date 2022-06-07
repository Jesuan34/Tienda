import { useState, useEffect } from 'react'
import { apiProductos, categoriaProducto } from '../../Mock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'



const ListContainer = (props) => {
    const [productos, setProductos] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {
        if (!categoriaId) {
            apiProductos().then(respuesta => {
                setProductos(respuesta)
            })
        } else {
            categoriaProducto(categoriaId).then(respuesta => {
                setProductos(respuesta)
            })
        }
    }, [categoriaId])

    return (
        <div>
            <h2>{props.greeting}</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ListContainer