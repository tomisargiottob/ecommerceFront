import { React, memo } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './ItemList.css';

const ItemList = memo(({ products }) => (
  <Container className="item-list">
    <Row>
      {products}
    </Row>
  </Container>
));
ItemList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.node,
  ).isRequired,
};
export default ItemList;
