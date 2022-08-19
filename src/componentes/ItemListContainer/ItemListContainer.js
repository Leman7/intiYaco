import './ItemListContainer.css'
import { useState, useEffect  } from 'react'
import { getProducts, getProductsByCategory } from '../Products/Products'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'


const ItemListContainer = ({saludo}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {

        if(!categoryId) {
            getProducts().then(products => {
                setProducts(products)
            })

        } else  {
            getProductsByCategory(categoryId).then(products => {
                setProducts(products)
            })
        }

    }, [categoryId])

    return (
        <>
            <h1 className='nuestrosProductos'>{saludo}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer