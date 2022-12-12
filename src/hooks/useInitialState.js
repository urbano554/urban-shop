import { useState } from 'react';

const initialState = {
  cart: JSON.parse(localStorage.getItem('myShopingCar')) || [],
};

export const useInitialState = () => {
  const [state, setState] = useState(initialState);
  localStorage.setItem('myShopingCar', JSON.stringify(state.cart))
 
  const addProductToCart = (payload) => {
    setState({
      cart: [...state.cart, payload],
    });
  };

  const removeProductFromCart = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((products) => products.id !== id),
    });
  };

  return {
    state,
    addProductToCart,
    removeProductFromCart,
  };
};
