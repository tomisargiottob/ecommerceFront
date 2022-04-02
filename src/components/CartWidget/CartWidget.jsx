import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/fontawesome-free-solid';
import { useCartContext } from '../../helpers/CartContext';
import './CartWidget.css';

function CartWidget() {
  const { cartList } = useCartContext();
  return (
    <span className="cart-widget">
      <FontAwesomeIcon icon={faCartArrowDown} />
      {cartList && cartList.length
        ? (
          <span className="cart-notification">
            {`${cartList.length}`}
          </span>
        )
        : ''}
    </span>
  );
}

export default CartWidget;
