import { React } from 'react';
import {
  Container,
  Row,
  Button,
  Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './CartList.css';

function CartList({
  products,
  type,
  addToCart,
  removeProduct,
  mode,
  clearCart,
  createOrder,
}) {
  let totalPrice = 0;
  const quantities = products.reduce((total, product) => {
    // eslint-disable-next-line no-param-reassign
    total[product.item.id] = product.quantity;
    totalPrice += product.quantity * product.item.price;
    return total;
  }, {});
  return (
    <Container>
      { products.length
        ? (
          <div>
            {products.map((product) => (
              <Row key={product.item.id} className="cart-product">
                <Col xs={2}>
                  <div className="product-image">
                    <img src={product.item.thumbnail} width="100" height="100" alt="" />
                  </div>
                </Col>
                <Col xs={5}>
                  <Row className="product-cart-name">
                    <h3>
                      {product.item.name}
                    </h3>
                  </Row>
                  <Row className="product-actions">
                    <Button onClick={() => removeProduct(product.item)}>
                      Eliminar
                    </Button>
                  </Row>
                </Col>
                <Col xs={3}>
                  <ItemCount
                    stock={product.item.stock}
                    price={product.item.price}
                    initial={product.quantity}
                    changeQuantity={(quantity) => addToCart(product.item, quantity)}
                    mode={mode}
                  />
                </Col>
                <Col xs={2} className="product-price">
                  {`$ ${quantities[product.item.id] * product.item.price}`}
                </Col>
                <hr className="product-separator" />
              </Row>
            ))}
            <Row>
              <Col xs={{ span: 3, offset: 7 }} className="total-price">
                Total sin envío:
              </Col>
              <Col xs={{ span: 2 }} className="total-price">
                {`$ ${totalPrice} `}
              </Col>
            </Row>
            <Row className="cartlist-buttons">
              <hr className="product-separator" />
              <Col xs={{ span: 2 }}>
                <Button variant="danger" onClick={clearCart}>
                  Vaciar Carrito
                </Button>
              </Col>
              <Col xs={{ span: 2, offset: 8 }}>
                { CartList.length
                && (
                  <NavLink to="/carrito/comprar">
                    <Button onClick={createOrder}>
                      Finalizar Compra
                    </Button>
                  </NavLink>
                )}
              </Col>
            </Row>
          </div>
        )
        : (
          <Row className="no-products">
            <Col xs={{ span: 4, offset: 4 }}>
              <h3>
                No hay productos
                { type === 'cart' ? ' en el carrito' : ' guardados '}
              </h3>
              <p>
                ¿No sabes que comprar? Miles de prendas te estan esperando
              </p>
              <NavLink to="/">
                <Button>
                  Ir a la tienda
                </Button>
              </NavLink>
            </Col>
          </Row>
        )}
    </Container>
  );
}

CartList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        initial: PropTypes.number,
      }).isRequired,
      quantity: PropTypes.number,
    }),
  ).isRequired,
  type: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
  createOrder: PropTypes.func,
  mode: PropTypes.string,
};

CartList.defaultProps = {
  mode: 'add',
  createOrder: () => {},
};

export default CartList;
