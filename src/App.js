import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from  './components/ItemListContainer/ItemListContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon icon="fas fa-cart-arrow-down" />
        <NavBar/>
        <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
