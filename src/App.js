import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer saludo={'Nuestros Productos'}/>}/>
            <Route path='categoria/:categoryId' element={<ItemListContainer saludo={'Producto Filtrado'}/>}/>
            <Route path='detail/:productId' element={<ItemDetailContainer />}/>
          </Routes>  
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;