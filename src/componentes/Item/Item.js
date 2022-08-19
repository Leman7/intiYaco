import './Item.css'
// import Contador from '../Contador/Contador'
import {Link} from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {

    return (

        <article>

            <header>   
                <h1 className='tituloProductos'>
                    {name}
                </h1>
            </header>

            <picture>
                <img src={img} alt={name} className="imagenesCatalogo"/>
            </picture>

            <section className='parrafoPrecio'>
                <p>Precio: ${price}</p>
            </section>

            <section className='stockProductos'>
                <p>Stock disponible: {stock}</p>
            </section>

            <footer className='botonDetalle'>
                <Link to={`/detail/${id}`}>Detalle</Link>
            </footer>

        </article>

    )

}

export default Item