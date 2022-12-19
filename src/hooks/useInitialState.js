import { useState } from 'react';
import { toast } from 'react-toastify';

const initialState = {
  cart: JSON.parse(localStorage.getItem('myShopingCar')) || [],
};

export const useInitialState = () => {
  const [state, setState] = useState(initialState);
  
  localStorage.setItem('myShopingCar', JSON.stringify(state.cart));

  const addProductToCart = (payload) => {
    toast.success('!Artículo agregado!');

    setState({
      cart: [...state.cart, payload],
    });

    state.cart.map((items) => {
      if (items.id === payload.id) {
        setState({
          cart: [...state.cart],
        });
      }
    });
  };

  const removeProductFromCart = (id) => {
    toast.error('!Artículo eliminado!');

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
