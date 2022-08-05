import { useEffect, useState } from "react"
import { obtenerProductosPorId } from "../Productos/Productos"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [productos, setProduct] = useState({})

    const {productId} = useParams()

    useEffect(() => {
        obtenerProductosPorId(productId)
            .then(productos => {
                setProduct(productos)
            })
    }, [])

    return (
        <div className="detalleProductos">
            <h1>Detalle</h1>
            <ItemDetail detalleProducto={productos}/>
        </div>
    )
}

export default ItemDetailContainer