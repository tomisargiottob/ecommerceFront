import { React } from 'react';
import {
  Container,
  Col,
  Row,
  Form,
  Button,
} from 'react-bootstrap';
import './Login.css';
import Logo from '../../assets/nombreLogo.png';

function Login() {
  return (
    <Container className="login-page">
      <Row>
        <Col>
          <img
            alt=""
            src={Logo}
            width="350"
            height="200"
            className="d-inline-block align-top"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 4, offset: 4 }}>
          <Form className="login-form">
            <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email" placeholder="Ingrese correo electrónico" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingrese contraseña" />
              </Form.Group>
            </Row>
            <Row className="justify-content-md-center">
              <Col className="justify-content-md-center" xs={{ span: 4 }}>
                <Button className="submit-form" variant="primary" type="submit">
                  Iniciar Sesion
                </Button>
                <p>
                  <a href="/signup">
                    ¿Crear una cuenta?
                  </a>
                </p>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
