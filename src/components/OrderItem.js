import { useContext } from 'react';

import { AppContext } from '../context/AppContext';

import close from '@icons/icon_close.png';

import '@styles/OrderItem.scss';

const OrderItem = ({ title, price, image, id }) => {
  const { removeProductFromCart } = useContext(AppContext);

  const handleRemove = () => {
    removeProductFromCart(id);
  };

  return (
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
  );
};

export default OrderItem;
