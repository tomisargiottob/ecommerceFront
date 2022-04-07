import { React, useState } from 'react';
import {
  Container,
  Tabs,
  Tab,
} from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import CartList from '../CartList/CartList';
import './Cart.css';

function Cart() {
  const [key, setKey] = useState('cart');
  const {
    cartList,
    addToCart,
    removeItem,
    changeAmmount,
    clearCart,
  } = useCartContext();
  return (
    <Container className="cart-container">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="cart" title={`Carrito (${cartList.length})`}>
          <CartList
            products={cartList}
            type="cart"
            addToCart={changeAmmount}
            removeProduct={removeItem}
            clearCart={clearCart}
            mode="change"
          />
        </Tab>
        <Tab eventKey="saved" title="Guardados (0)">
          <CartList
            products={[]}
            type={key}
            addToCart={addToCart}
            removeProduct={removeItem}
            clearCart={clearCart}
          />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Cart;
