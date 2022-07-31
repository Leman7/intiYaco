import { useState } from "react";
import './Contador.css'

const Contador = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0)

    const incrementar = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const decrementar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className="contieneContador">
            <div>
                <h1 className="contieneNumero">{count}</h1>
            </div>
            
            <div className="contieneBotonesContador">
                <button onClick={incrementar}>+</button>
                <button onClick={decrementar}>-</button>
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Contador