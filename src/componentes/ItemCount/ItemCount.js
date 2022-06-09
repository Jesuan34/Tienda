import {useState} from 'react'


const ContadorItem = ({ onConfirm, stock, inicio = 0}) => {
    const [contador, setCount] = useState (inicio)

    const SumaItem = () => {
        if(contador < stock){
            setCount(contador + 1)
        }
    }

    const RestaItem = () => {
        setCount((contador) => contador - 1)
    }    

    return(
        <div>
            <h4>{contador}</h4>
            <button onClick={RestaItem}>-</button>
            <button onClick={SumaItem}>+</button>
            <button onClick={() => onConfirm(contador)}>Agregar</button>
        </div>
    )
}


export default ContadorItem