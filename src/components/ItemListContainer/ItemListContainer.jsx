import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import client from '../../helpers/Client';
import ItemFilter from '../ItemFilter/ItemFilter';
import './ItemListContainer.css';

function ItemListContainer({ welcome }) {
  const { category } = useParams();
  const [filter, setFilter] = useState({ minPrice: 0 });
  const [prevCategory, setPrevCategory] = useState(category);
  const [products, setProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const aux = { category };
    if (category === prevCategory) {
      aux.maxPrice = filter.maxPrice;
      aux.minPrice = filter.minPrice || 0;
    }
    client.getProductsFirebase(aux)
      .then(({ listItems, highestPrice, lowestPrice }) => {
        if (maxPrice < highestPrice || prevCategory !== category) {
          setMaxPrice(highestPrice);
          setPrevCategory(category);
        }
        if (!minPrice || minPrice > lowestPrice || prevCategory !== category) {
          setMinPrice(lowestPrice);
          setPrevCategory(category);
        }
        setProducts(listItems);
        setLoading(false);
      });
  }, [category, filter]);

  const applyFilter = (filterData) => {
    setFilter(filterData);
  };

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
        <Col xs={2} className="d-none d-lg-block">
          <ItemFilter
            maxPrice={Number(maxPrice)}
            minPrice={Number(minPrice)}
            applyFilter={applyFilter}
          />
        </Col>
        <Col className="item-list">
          {products.length ? (
            <ItemList products={products} />
          ) : 'Por el momento no hay productos disponibles en esta categoría con los filtros aplicados, prueba modificandolos para ver mas productos.' }
        </Col>
      </Row>
    </Container>
  );
}
ItemListContainer.propTypes = {
  welcome: PropTypes.string.isRequired,
};

export default ItemListContainer;
