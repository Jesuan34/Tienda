import {useState} from 'react'

const ContadorItem = () => {
    const [contador, setCount] = useState (0)

    const RestaItem = () => {
        setCount((contador) => contador - 1)
    }

    const SumaItem = () => {
        setCount(contador + 1)
    }

    return(
        <div>
            <button onClick={RestaItem}>-</button>
            <h4>{contador}</h4>
            <button onClick={SumaItem}>+</button>
        </div>
    )
}

export default ContadorItem