import { React } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useCartContext } from '../../helpers/CartContext';

function Cart() {
  const { cartList } = useCartContext();
  console.log(cartList);
  return (
    <Container>
      <h1>
        Carrito
      </h1>
      <ul>
        <Container>
          <Row>
            <Col> Product: </Col>
            <Col>Quantity</Col>
            <Col>Price</Col>
          </Row>
          { cartList.map((product) => (
            <li key={product.item.id}>
              <Row>
                <Col>{product.item.name}</Col>
                <Col>{product.quantity}</Col>
                <Col>{product.quantity * product.item.price}</Col>
              </Row>
            </li>
          ))}
        </Container>
      </ul>
    </Container>
  );
}

export default Cart;
