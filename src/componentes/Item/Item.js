import './Item.css'
import Contador from '../Contador/Contador'

const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
}


const Item = ({productos}) => {
    return (
        <li>
            <h3 className='tituloProductos'>{productos.nombre}</h3>
            <img src={productos.imagen} alt={productos.nombre} className="imagenesCatalogo"/>
            <p className='parrafoPrecio'>${productos.precio}</p>
            <p className='stockProductos'>Stock disponible: {productos.stock}</p>
            <Contador stock={10}/>
        </li>
    )
}

export default Item