import { useContext } from "react"
import CarritoContext from "../../context/carritoContext"


const Carrito = () => {

    const { carrito } = useContext(CarritoContext)

    return (
        <div>
            <h2>Carrito</h2>
            <div>
                {carrito.map(producto => {
                    return (
                        <div>
                            <div key={producto.id}> {producto.nombre} </div>
                            <div> Cantidad: {producto.cantidad} </div>
                            <div> Precio: {producto.precio} </div>
                            <div> Subtotal: ${producto.precio * producto.cantidad} </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Carrito