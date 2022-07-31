import './ItemListContainer.css'
import { useState, useEffect  } from 'react'
import { obtenerProductos } from '../Productos/Productos'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({saludo}) => {
    const [productos, listarProductos] = useState([])

    useEffect(() => {
        obtenerProductos().then(productos => {
            listarProductos(productos)
        })
    }, [])

    return (
        <>
            <h1 className='nuestrosProductos'>{saludo}</h1>
            {/* <ul>    
                {productos.map(prod => <li key={prod.id}>{prod.nombre}</li>)}
            </ul> */}
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer