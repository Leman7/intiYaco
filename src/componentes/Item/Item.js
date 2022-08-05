import './Item.css'
import Contador from '../Contador/Contador'
import {Link} from 'react-router-dom'

const handleOnAdd = (quantity) => {
    console.log(`Usted ha agregado: ${quantity} productos`)
}

const Item = ({productos}) => {
    return (
        <li>
            <h3 className='tituloProductos'>{productos.nombre}</h3>
            <img src={productos.imagen} alt={productos.nombre} className="imagenesCatalogo"/>
            <p className='parrafoPrecio'>${productos.precio}</p>
            <p className='stockProductos'>Stock disponible: {productos.stock}</p>
            <Contador stock={10} onAdd={handleOnAdd}/>
            <div className='botonDetalle'>
              <Link to={`/detail/${productos.id}`}>Detalle</Link>
            </div>
        </li>
    )
}

export default Item