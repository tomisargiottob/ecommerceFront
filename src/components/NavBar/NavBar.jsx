import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import Logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar className="nav-bar" bg="light" expand="lg">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
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
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Inicio</NavLink>
            {/* <NavLink to="/aboutUs">Quienes Somos</NavLink> */}
            <NavLink to="/categoria/buso">Busos</NavLink>
            <NavLink to="/categoria/campera">Camperas</NavLink>
            <NavLink to="/categoria/pantalon">Pantalones</NavLink>
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
            <NavLink to="/carrito">
              <CartWidget />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
