import './ItemListContainer.css'
import { useState, useEffect  } from 'react'
import { obtenerProductos, obtenerProductosPorCategoria } from '../Productos/Productos'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'


const ItemListContainer = ({saludo}) => {
    const [productos, listarProductos] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {

        if(!categoryId) {
            obtenerProductos().then(productos => {
                listarProductos(productos)
            })

        } else  {
            obtenerProductosPorCategoria(categoryId).then(productos => {
                listarProductos(productos)
            })
        }

    }, [categoryId])

    return (
        <>
            <h1 className='nuestrosProductos'>{saludo}</h1>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer