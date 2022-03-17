import {
  Card,
} from 'react-bootstrap';
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ShopItem.css';
// import ItemCount from '../ItemCount/ItemCount';

function ShopItem({ product }) {
  const [display, setDisplay] = useState(false);

  const showInfo = () => {
    // setTimeout(() => {
    if (display) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };
  return (
    <Link to={`/details/${product.id}`}>
      <Card className="shop-item-container" style={{ width: '18rem' }} onMouseEnter={showInfo} onMouseLeave={showInfo}>
        <Card.Img variant="top" src={product.thumbnail} />
        {display && (
          <Card.Body className="fadeIn">
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.price}
              $
            </Card.Text>
          </Card.Body>
        )}
        {!display && (
          <Card.Body className="fadeIn">
            <Card.Text>
              {product.price}
              $
            </Card.Text>
          </Card.Body>
        )}
      </Card>
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
