import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import client from '../../helpers/Client';
import './ItemListContainer.css';

function ItemListContainer({ welcome }) {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category) {
      client.getCategoryProductsFirebase(category)
        .then((items) => {
          setProducts(items);
          setLoading(false);
        });
    } else {
      client.getProductsFirebase()
        .then((items) => {
          setProducts(items);
          setLoading(false);
        });
    }
  }, [category]);

  if (loading) {
    return (
      <Container className="loading">
        Loading
        <FontAwesomeIcon icon="fa fa-spinner" pulse />
      </Container>
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
