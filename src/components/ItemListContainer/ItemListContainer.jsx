import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import ItemList from '../ItemList/ItemList';
import getProducts from '../../helpers/client';
import './ItemListContainer.css';

function ItemListContainer({ welcome }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((items) => {
        setProducts(items);
      });
  }, []);
  return (
    <Container className="item-list-container">
      <Row className="welcome-message">
        <h1>
          { welcome }
        </h1>
      </Row>
      <Row>
        <ItemList products={products} />
      </Row>
    </Container>
  );
}
ItemListContainer.propTypes = {
  welcome: PropTypes.string.isRequired,
};

export default ItemListContainer;
