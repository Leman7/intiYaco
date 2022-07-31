import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({productos}) => {
    return (
        <ul className="contenedorCatalogo">    
            {productos.map(prod => <Item key={prod.id} productos = {prod}/>)}
        </ul>
    )
}

export default ItemList