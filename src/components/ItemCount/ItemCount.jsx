import {
  Container,
  Row,
  Col,
  Dropdown,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ItemCount.css';
import { useState, React } from 'react';
import PropTypes from 'prop-types';

function ItemCount({ stock, initial = 1, name }) {
  const [ammount, setAmmount] = useState(initial);

  const changeAmmount = (value) => {
    if (value >= 1) {
      if (value > stock) {
        setAmmount(stock);
      } else {
        setAmmount(Number(value));
      }
    }
  };
  const onAdd = () => {
    if (ammount + 1 <= stock) {
      setAmmount(ammount + 1);
    }
  };
  const remove = () => {
    if (ammount - 1 >= 1) {
      setAmmount(ammount - 1);
    }
  };
  const addToCart = () => {
    if (stock >= ammount) {
      const item = `${name} + ${ammount > 1 ? 's' : ''}`;
      // eslint-disable-next-line no-console
      console.log(`Se agregarian ${ammount} ${item} al carro`);
    }
  };
  const dropDownOptions = [];
  for (let i = 1; i <= stock; i += 1) {
    dropDownOptions.push(
      <Dropdown.Item key={i} eventKey={i}>
        {i}
      </Dropdown.Item>,
    );
  }
  return (
    <Container className="item-count-container">
      <Row className="item-count">
        <Col xs={3}>
          <button type="button" className="change-ammount" onClick={remove}>
            <FontAwesomeIcon icon="fa-solid fa-minus" />
          </button>
        </Col>
        <Col xs={6}>
          <Dropdown className="d-inline mx-2 options" onSelect={changeAmmount}>
            <Dropdown.Toggle id="dropdown-autoclose-true">
              { ammount }
            </Dropdown.Toggle>
            <Dropdown.Menu>
              { dropDownOptions }
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={3}>
          <button type="button" className="change-ammount" onClick={onAdd}>
            <FontAwesomeIcon icon="fa-solid fa-plus" />
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <button type="button" className="add-to-cart" onClick={addToCart}>
            Agregar al carrito
          </button>
        </Col>
      </Row>
    </Container>
  );
}
ItemCount.propTypes = {
  name: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number.isRequired,
};

export default ItemCount;
