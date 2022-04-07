/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import {
  React,
  createContext,
  useState,
  useContext,
} from 'react';
import PropTypes from 'prop-types';

const Context = createContext([]);
export const useCartContext = () => useContext(Context);

function CartContext({ children }) {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, quantity) => {
    const itemToAdd = { item, quantity };
    let duplicated = false;
    const newCartList = cartList.map((product) => {
      if (product.item.id === item.id) {
        duplicated = true;
        if (product.quantity + quantity >= product.item.stock) {
          return { item: product.item, quantity: product.item.stock };
        }
        return { item: product.item, quantity: product.quantity + quantity };
      }
      return product;
    });
    if (duplicated) {
      setCartList(newCartList);
    } else {
      setCartList([...cartList, itemToAdd]);
    }
  };

  const changeAmmount = (item, quantity) => {
    const newCartList = cartList.map((product) => {
      if (product.item.id === item.id) {
        return { item: product.item, quantity };
      }
      return product;
    });
    setCartList(newCartList);
  };

  const removeItem = (item) => {
    const newCartList = cartList.filter((product) => {
      if (product.item.id !== item.id) {
        return true;
      }
      return false;
    });
    setCartList(newCartList);
  };

  const clearCart = () => {
    setCartList([]);
  };

  const isInCart = (item) => {
    const presence = cartList.some((product) => {
      if (product.item.id !== item.id) {
        return false;
      }
      return true;
    });
    return presence;
  };

  return (
    <Context.Provider value={{
      cartList,
      addToCart,
      removeItem,
      clearCart,
      isInCart,
      changeAmmount,
    }}
    >
      {children}
    </Context.Provider>
  );
}

CartContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
