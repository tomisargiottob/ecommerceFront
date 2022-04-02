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

function ItemCount({
  stock, initial = 1, addToCart, mode = 'add', changeQuantity,
}) {
  const [ammount, setAmmount] = useState(initial);

  const changeAmmount = (value) => {
    if (value >= 1) {
      if (value > stock) {
        setAmmount(stock);
        if (changeQuantity) {
          changeQuantity(stock);
        }
      } else {
        setAmmount(Number(value));
        if (changeQuantity) {
          changeQuantity(value);
        }
      }
    }
  };
  const onAdd = () => {
    if (ammount + 1 <= stock) {
      setAmmount(ammount + 1);
      if (changeQuantity) {
        changeQuantity(ammount + 1);
      }
    }
  };
  const remove = () => {
    if (ammount - 1 >= 1) {
      setAmmount(ammount - 1);
      if (changeQuantity) {
        changeQuantity(ammount - 1);
      }
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
    <div>
      { stock ? (
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
          {
            mode === 'add'
            && (
            <Row>
              <Col>
                <button type="button" className="add-to-cart" onClick={() => addToCart(ammount)}>
                  Agregar al carrito
                </button>
              </Col>
            </Row>
            )
          }
        </Container>
      )
        : (
          <Container>
            <Row>
              <h1>No hay stock</h1>
            </Row>
          </Container>
        )}
    </div>
  );
}
ItemCount.propTypes = {
  initial: PropTypes.number,
  addToCart: PropTypes.func,
  stock: PropTypes.number.isRequired,
  mode: PropTypes.string,
  changeQuantity: PropTypes.func,
};
ItemCount.defaultProps = {
  initial: 1,
  mode: 'add',
  changeQuantity: () => {},
  addToCart: () => {},
};

export default ItemCount;
