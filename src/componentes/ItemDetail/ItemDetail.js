import './itemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({name, img, price, description, stock, category, id}) => {
     
    const { quantityToAdd, setQuantityToAdd } = useState(0) 

    const { addItem, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd=(quantity)
        
        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
    }

    const productQuantity = getProductQuantity(id)

    return (
        <>
            <article className="contenedorDetalle">

                <header>
                    <h1>{name}</h1>
                </header>

                <picture>
                    <img src={img} alt={name}></img>
                </picture>

                <section className='seccionDetalle' >
                    <p>Categoria: <br></br> {category}</p>
                    <p>Descripcion: <br></br> {description}</p>
                    <p>Precio: <br></br> ${price}</p>
                </section>

                <footer>
                {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
                </footer>

            </article>
        </>
    )
}

export default ItemDetail