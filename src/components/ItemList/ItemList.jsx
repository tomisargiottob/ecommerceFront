import { React } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './ItemList.css';

function ItemList({ products }) {
  return (
    <Container className="item-list">
      <Row>
        {products}
      </Row>
    </Container>
  );
}
ItemList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.node,
  ).isRequired,
};
export default ItemList;
