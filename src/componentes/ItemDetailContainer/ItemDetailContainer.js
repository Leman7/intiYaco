import { useEffect, useState } from "react"
import { getProductsById } from "../Products/Products"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const {productId} = useParams()

    useEffect(() => {
        getProductsById(productId)
            .then(products => {
                setProduct(products)
            })
    }, [])

    return (
        <div className="detalleProductos">
            <h1>Detalle</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer