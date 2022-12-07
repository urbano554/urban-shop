import { useState } from 'react';

const initialState = {
  cart: [],
};

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

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
