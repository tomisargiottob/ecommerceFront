import { React, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useCartContext } from '../../context/CartContext';

function ItemDetail({ product }) {
  const [state, setState] = useState('button');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();
  const addToCartContext = (ammount) => {
    setState('end');
    addToCart(product, ammount);
  };

  return (
    <Container>
      <Row className="product-name">
        <h2>{product.name}</h2>
      </Row>
      <Row className="product-description">
        <Col>
          <img
            alt=""
            src={product.thumbnail}
            width="500"
            height="500"
            className="d-inline-block align-top"
          />
        </Col>
        <Col>
          <p>
            {product.description}
          </p>
          <p>
            <strong>
              {`Precio Total: ${product.price * quantity} $`}
            </strong>
          </p>
          { state === 'button'
            ? (
              <ItemCount
                stock={product.stock}
                name={product.name}
                addToCart={addToCartContext}
                changeQuantity={setQuantity}
              />
            ) : (
              <Container>
                <Row>
                  <NavLink to="/">
                    <button type="button" className="add-to-cart">
                      Seguir Comprando
                    </button>
                  </NavLink>
                  <NavLink to="/carrito">
                    <button type="button" className="add-to-cart">
                      Terminar mi compra
                    </button>
                  </NavLink>
                </Row>
              </Container>
            )}
        </Col>
      </Row>
    </Container>
  );
}
ItemDetail.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    initial: PropTypes.number,
  }).isRequired,
};

export default ItemDetail;
