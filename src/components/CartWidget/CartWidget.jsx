import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/fontawesome-free-solid';
import './CartWidget.css';

function CartWidget() {
  return (
    <span className="cart-widget">
      <FontAwesomeIcon icon={faCartArrowDown} />
    </span>
  );
}

export default CartWidget;
