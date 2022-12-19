import { useContext, useState } from 'react';

import { AppContext } from '../context/AppContext';

import { MinusIcon } from '@icons/MinusIcon';
import { PlusIcon } from '@icons/PlusIcon';

import close from '@icons/icon_close.png';

import '@styles/OrderItem.scss';

const OrderItem = ({ title, price, image, id }) => {
  const { removeProductFromCart } = useContext(AppContext);
  const [count, setCount] = useState(1);

  const handleRemove = () => {
    removeProductFromCart(id);
  };

  const handleIncrease = () => {
    //TODO
    // let tempCart = [...state.cart];
    // const selectedProduct = tempCart.find((item) => item.id === id);
    // const index = tempCart.indexOf(selectedProduct);
    // const product = tempCart[index];

    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count < 2) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className='OrderItem'>
        <figure>
          <img src={image} />
        </figure>
        <p>{title}</p>
        <p>${price}</p>
        <img
          src={close}
          alt='close'
          onClick={() => handleRemove(id)}
        />
      </div>
      <div className='counter-container'>
        <button onClick={handleDecrease}>
          <MinusIcon />
        </button>
        <p>{count}</p>
        <button onClick={handleIncrease}>
          <PlusIcon />
        </button>
      </div>
    </>
  );
};

export default OrderItem;
