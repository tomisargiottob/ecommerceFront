import {
  Container,
  Row,
  Button,
} from 'react-bootstrap';
import { React } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ShopItem.css';
// import ItemCount from '../ItemCount/ItemCount';

function ShopItem({ product }) {
  return (
    <Link to={`/details/${product.id}`}>
      <Container className="shop-item-container">
        <Row className="item-thumbnail">
          <img src={product.thumbnail} alt="" />
        </Row>
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
              <Button> Ver detalle </Button>
            </Row>
          </Container>
        </Row>
      </Container>
    </Link>
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
