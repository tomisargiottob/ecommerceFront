import { React } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail({ product }) {
  const addToCart = (ammount) => {
    if (product.stock >= ammount) {
      const item = product.name + (ammount > 1 ? 's' : '');
      // eslint-disable-next-line no-console
      console.log(`Se agregarian ${ammount} ${item} al carro`);
    }
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
          <ItemCount
            stock={product.stock}
            name={product.name}
            price={product.price}
            addToCart={addToCart}
          />
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
