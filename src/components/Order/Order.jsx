import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from 'react-bootstrap';
import { React, useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import client from '../../helpers/Client';
import './Order.css';

function Order() {
  const [formData, setFormData] = useState({});
  const [validated, setValidated] = useState(false);
  const [id, setId] = useState(false);
  const { cartList, clearCart } = useCartContext();
  const orderData = (value) => {
    const aux = {};
    aux[value.target.name] = value.target.value;
    setFormData({ ...formData, ...aux });
  };
  const orderCreated = id && JSON.parse(sessionStorage.getItem(`${id}`));
  const total = cartList.reduce((acc, product) => acc + product.item.price * product.quantity, 0);
  const createOrder = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      const order = {
        buyer: formData,
        products: cartList.map((product) => (
          {
            id: product.item.id,
            name: product.item.name,
            price: product.item.price,
            quantity: product.quantity,
          })),
        date: new Date(),
        total,
      };
      const orderId = await client.createOrderFirebase(order);
      setId(orderId);
      sessionStorage.setItem(`${orderId}`, JSON.stringify(order));
      clearCart();
      cartList.forEach((product) => {
        const productAux = product.item;
        productAux.stock = product.item.stock - product.quantity;
        client.updateProductFirebase(productAux.id, productAux);
      });
    }
    setValidated(true);
  };
  return (
    <Container>
      <Row className="mt-4">
        <h2>Información de entrega</h2>
        <Row>
          {id
          && (
            <Alert variant="success" className="mt-4">
              <Alert.Heading>Orden Creada</Alert.Heading>
              <p>
                {`Tu orden se ha creado correctamente. Aquí tienes el id de seguimiento ${id}. Hemos vaciado tu carrito para que puedas seguir comprando nuevas prendas. No te olvides de dejar un comentario que nos encantaría saber tu opinión`}
              </p>
              <hr />
              <p className="mb-0">
                Si necesitas ayuda, contactate con atención al cliente
              </p>
            </Alert>
          )}
        </Row>
        <Col>
          { cartList.length > 0
          && (
          <Form noValidate className="mt-4" validated={validated} onChange={orderData} onSubmit={createOrder}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control required type="input" name="name" placeholder="Nombre y Apellido" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Dirección de envío</Form.Label>
              <Form.Control required type="input" name="address" placeholder="Dirección" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control required type="input" name="telefono" placeholder="+549351..." />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control required type="email" name="email" placeholder="Correo electronico" />
              <Form.Text className="text-muted">
                No enviaremos spam.
              </Form.Text>
            </Form.Group>
            <Form.Group required className="mb-3" controlId="formPayment">
              <Row>
                <Form.Label>Método de pago</Form.Label>
              </Row>
              <Form.Check
                inline
                label="Transferencia"
                name="formPayment"
                value="transferencia"
                type="radio"
                id="transferencia"
              />
              <Form.Check
                inline
                label="Tarjeta de crédito"
                name="formPayment"
                type="radio"
                value="credito"
                id="credito"
              />
              <Form.Check
                inline
                label="Efectivo"
                name="formPayment"
                type="radio"
                value="efectivo"
                id="efectivo"
              />
            </Form.Group>
            { formData.formPayment === 'transferencia' && (
              <Container>
                <Row>
                  <Col sm={{ span: 8, offset: 2 }}>
                    <h4>
                      Información de Transferencia
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col sm={{ span: 4, offset: 4 }}>
                    <Row>
                      CVU: EJEMPLO.DE.CVU
                    </Row>
                    <Row>
                      Nombre: cuenta ejemplo srl
                    </Row>
                    <Row>
                      Banco: Ejemplo SA.
                    </Row>
                  </Col>
                </Row>
              </Container>
            )}
            { formData.formPayment === 'credito' && (
              <Container>
                <Row>
                  <Col sm={{ span: 8, offset: 2 }}>
                    <h4>
                      Información de Tarjeta de Credito
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col sm={{ span: 4, offset: 4 }}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre del titular</Form.Label>
                      <Form.Control required type="input" name="cardName" placeholder="Nombre y Apellido" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Número de tarjeta</Form.Label>
                      <Form.Control required type="input" name="cardNumber" placeholder="1111 1111 ..." />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Fecha de vencimiento</Form.Label>
                      <Form.Control required type="input" name="cardExpireDate" placeholder="**/**" />
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
            )}
            <Row>
              <Col sm={{ span: 6, offset: 3 }}>
                <Form.Group className="mb-3 p-1" controlId="formBasicCheckbox">
                  <Form.Check required type="checkbox" name="policies" label="Acepto las politicas de privacidad" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Finalizar Compra
            </Button>
          </Form>
          )}
        </Col>
        <Col>
          <Container className="p-4 border">
            <Row>
              <Col>
                <h5 className="mb-4">
                  Resumen de compra:
                </h5>
                { ((orderCreated && orderCreated.products) || cartList).map((product) => (
                  <Row key={product.id || product.item.id}>
                    <Col className="order-product-name">
                      {product.name || product.item.name}
                      {`(${product.quantity})`}
                    </Col>
                    <Col>
                      {product.quantity * (product.price || product.item.price)}
                      $
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
            <hr />
            <Row className="mt-4">
              <Col className="order-product-name">
                Precio Total:
              </Col>
              <Col>
                { (orderCreated && orderCreated.total) || total}
                $
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Order;
