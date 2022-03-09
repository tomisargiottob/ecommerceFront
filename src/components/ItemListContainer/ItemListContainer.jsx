import { React } from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer({ welcome }) {
  return (
    <Container className="item-list-container">
      <Row>
        <div className="welcome-message">
          <h1>
            { welcome }
          </h1>
        </div>
      </Row>
      <Row>
        <ItemList />
      </Row>
    </Container>
  );
}
ItemListContainer.propTypes = {
  welcome: PropTypes.string.isRequired,
};

export default ItemListContainer;
