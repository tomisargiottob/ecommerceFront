import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import client from '../../helpers/client';
import './ItemListContainer.css';

function ItemListContainer({ welcome }) {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.getProductsHeroku(category)
      .then((items) => {
        setProducts(items);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return (
      <Container> Loading ...</Container>
    );
  }

  return (
    <Container className="item-list-container">
      <Row className="welcome-message">
        <h1>
          { welcome }
        </h1>
      </Row>
      <Row>
        <Col xs={2}>
          futuro filtros
        </Col>
        {products.length ? (
          <Col>
            <ItemList products={products} />
          </Col>
        ) : (
          <Col>
            Por el momento no hay productos disponibles en esta categoría por favor vuelva mas tarde
          </Col>
        )}
      </Row>
    </Container>
  );
}
ItemListContainer.propTypes = {
  welcome: PropTypes.string.isRequired,
};

export default ItemListContainer;
