import './ItemCount.css'
import { useState } from "react"

const ItemCount = ({stock=0, initial=1, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div className="contenedorContador">
            <div className="contenedorBotonesContador">
                <button onClick={increment} className="botonesContador">+</button>
                <h4 className='numeroStock'>{quantity}</h4>
                <button onClick={decrement} className="botonesContador">-</button>
            </div>
            <div className="contenedorBotonAgregarCarrito">
                <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount