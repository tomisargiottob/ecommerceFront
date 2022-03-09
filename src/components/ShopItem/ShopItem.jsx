import { Container, Row } from 'react-bootstrap';
import { React } from 'react';
import PropTypes from 'prop-types';
import './ShopItem.css';
import ItemCount from '../ItemCount/ItemCount';

function ShopItem({ product }) {
  return (
    <Container className="shop-item-container">
      <Row>
        <h3>
          { product.name }
        </h3>
      </Row>
      <Row>
        <img src={product.image} alt="" srcSet="" />
      </Row>
      <Row>
        <ItemCount initial={product.initial} stock={product.stock} name={product.name} />
      </Row>
    </Container>
  );
}
ShopItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    initial: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default ShopItem;
