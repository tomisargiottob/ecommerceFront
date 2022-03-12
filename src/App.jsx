import { React } from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import Login from './components/Login/Login';

function App() {
  return (
    <Container className="App">
      <Row>
        <NavBar />
      </Row>
      {/* <Row>
        <Login />
      </Row> */}
      <Row>
        <ItemListContainer welcome="Welcome to Mashipa Store" />
      </Row>
    </Container>
  );
}

export default App;
