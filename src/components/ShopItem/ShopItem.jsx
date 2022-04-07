import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { faCartArrowDown } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useCartContext } from '../../context/CartContext';
import './ShopItem.css';
// import ItemCount from '../ItemCount/ItemCount';

function ShopItem({ product }) {
  const { addToCart } = useCartContext();
  const [addFlag, setAddFlag] = useState(false);

  const finalizarCompra = (item) => {
    addToCart(item, 1);
    setAddFlag(true);
  };
  return (
    <Container className="shop-item-container">
      <Link to={`/details/${product.id}`}>
        <Row className="item-thumbnail">
          <img src={product.thumbnail} alt="" />
        </Row>
      </Link>
      <Row>
        <Container>
          <Row className="item-price">
            <h1>
              {product.price}
              $
            </h1>
          </Row>
          <Row className="item-name">
            <p>{product.name}</p>
          </Row>
          <Row className="item-details">
            { addFlag
              ? (
                <Col sm={6}>
                  <Link to="/carrito">
                    <Button> Ir al carrito </Button>
                  </Link>
                </Col>
              ) : (
                <Col sm={6}>
                  <Button className="cart-widget" onClick={() => finalizarCompra(product)}>
                    <FontAwesomeIcon icon={faCartArrowDown} />
                  </Button>
                </Col>
              )}
            <Col sm={6}>
              <Link to={`/details/${product.id}`}>
                <Button> Detalle </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
ShopItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    initial: PropTypes.number,
    stock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ShopItem;
