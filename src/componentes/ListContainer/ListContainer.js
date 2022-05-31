import {useState, useEffect} from 'react'
import { apiProductos } from '../../Mock'
import ItemList from '../ItemList/ItemList'



const ListContainer = (props) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        apiProductos().then(respuesta => {
            setProductos(respuesta)                                                                     
        })
    },[])

    return(
        <div>
            <h2>{props.greeting}</h2>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ListContainer