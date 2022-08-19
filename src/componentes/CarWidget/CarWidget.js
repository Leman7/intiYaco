import './CarWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CarWidget = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return(
        <Link to='/cart' className='contieneCarWidget'>
            <img src='imagenes/carro.png' alt='carrito de compras' className='carWidget'/>
            { quantity }
        </Link>
    )
    
}

export default CarWidget