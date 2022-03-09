import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon icon="fas fa-cart-arrow-down" />
        <NavBar />
        <ItemListContainer welcome="Welcome to Mashipa Store" />
      </header>
    </div>
  );
}

export default App;
