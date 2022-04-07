import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/fontawesome-free-solid';
import { useCartContext } from '../../context/CartContext';
import './CartWidget.css';

function CartWidget() {
  const { cartList } = useCartContext();
  let ammountProducts = 0;
  cartList.forEach((product) => {
    ammountProducts += product.quantity;
  });

  return (
    <span className="cart-widget">
      <FontAwesomeIcon icon={faCartArrowDown} />
      {cartList && cartList.length
        ? (
          <span className="cart-notification">
            {ammountProducts}
          </span>
        )
        : ''}
    </span>
  );
}

export default CartWidget;
