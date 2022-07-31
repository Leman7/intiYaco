import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer saludo={'Nuestros productos'}/>
      {/* <Counter /> */}
    </div>
  );
}

export default App;