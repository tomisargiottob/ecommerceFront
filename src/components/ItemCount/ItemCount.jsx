import {
  Container,
  Row,
  Col,
  Dropdown,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ItemCount.css';
import { useState, React } from 'react';
import PropTypes from 'prop-types';

function ItemCount({
  stock, initial = 1, price, addToCart,
}) {
  const [ammount, setAmmount] = useState(initial);
  const [state, setState] = useState('button');

  const changeAmmount = (value) => {
    if (value >= 1) {
      if (value > stock) {
        setAmmount(stock);
      } else {
        setAmmount(Number(value));
      }
    }
  };
  const confirmAdd = () => {
    addToCart();
    setState('finish');
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
          <Row>
            <p>
              <strong>
                {`Precio Total: ${price * ammount} $`}
              </strong>
            </p>
          </Row>
          { state === 'button'
            ? (
              <Container>
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
                    <button type="button" className="add-to-cart" onClick={confirmAdd}>
                      Agregar al carrito
                    </button>
                  </Col>
                </Row>
              </Container>
            )
            : (
              <Container>
                <Row>
                  <NavLink to="/carrito">
                    <button type="button" className="add-to-cart">
                      Terminar mi compra
                    </button>
                  </NavLink>
                </Row>
              </Container>
            )}
        </Container>
      )
        : (
          <Container>
            <Row>
              <p>
                {`Precio Unitario: ${price} $`}
              </p>
            </Row>
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
  addToCart: PropTypes.func.isRequired,
  stock: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
ItemCount.defaultProps = {
  initial: 1,
};

export default ItemCount;
