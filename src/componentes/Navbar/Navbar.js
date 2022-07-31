import './Navbar.css'
import CarWidget from '../CarWidget/CarWidget'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="contieneTitutlo">  
                <h1 className="tituloNavbar">Inti Yaco - Almacen Natural</h1>    
            </div>
            <div className="contieneBotones">
                <button>Almendras</button>
                <button>Salsa de soja</button>
                <button>Hamburguesas Veganas</button>
            </div>
            <CarWidget />
        </nav>
        
    )
}

export default Navbar