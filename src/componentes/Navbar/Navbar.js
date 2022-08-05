import './Navbar.css'
import CarWidget from '../CarWidget/CarWidget'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="contieneTitutlo">  
                <Link to="/" className="tituloNavbar">Inti Yaco - Almacen Natural</Link>    
            </div>
            <div className="contieneBotones">
                <Link to='/categoria/frutos secos'>Almendras</Link>
                <Link to='/categoria/salsas'>Salsa de soja</Link>
                <Link to='/categoria/carnes'>Hamburguesas Veganas</Link>
            </div>
            <CarWidget />
        </nav>
        
    )
}

export default Navbar