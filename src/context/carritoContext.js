import { createContext } from "react";
import { useState } from "react";

const CarritoContext = createContext()

export const CarritoContextProvider = ({ hijos }) => {

    const [carrito, setCarrito] = useState([])

    const agregarItem = (productoAgregado) => {
        setCarrito([...carrito, productoAgregado])
    }

    const getCantidades = () => {
        let accu = 0
        carrito.forEach(producto => { accu += producto.cantidad })
        return accu
    }

    return (
        <CarritoContext.Provider value={{ agregarItem, carrito, getCantidades }}>
            { hijos }
        </CarritoContext.Provider>
    )

}

export default CarritoContext
