import { React } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/fontawesome-free-solid';
import './CartWidget.css';

function CartWidget() {
  return (
    <Button className="cart-widget">
      Carrito
      <FontAwesomeIcon icon={faCartArrowDown} />
    </Button>
  );
}

export default CartWidget;
