import { React } from 'react';
import { Container, Row } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Container className="App">
        <Row>
          <NavBar />
        </Row>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ItemListContainer welcome="Welcome to Mashipa Store" />} />
          <Route path="/categoria/:category" element={<ItemListContainer welcome="Mashipa Store" />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/details/:id" element={<ItemDetailContainer />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
