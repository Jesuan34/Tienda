import { useContext } from 'react';
import CarritoContext from '../../context/carritoContext';
import './CardWidget.css';



const CardWidget = () => {

    const {getCantidades} = useContext(CarritoContext)

    const cantidades = getCantidades()

    return (
        <div className="card-widget">
            
                <img className="card-img" src='/imagenes/IconoCarrito.svg' alt="icono-carrito" />
                <h3 className="card-numero">{cantidades}</h3>
           
        </div>
    )
}

export default CardWidget