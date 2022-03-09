import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import Logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' '}
          Mashipa Uniformes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#aboutUs">Quienes Somos</Nav.Link>
            <NavDropdown title="Tienda" id="basic-nav-dropdown">
              <NavDropdown.Item href="#category/busos">Busos</NavDropdown.Item>
              <NavDropdown.Item href="#category/remeras">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#category/chombas">Chombas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#category/combos">Combos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          <Nav>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
