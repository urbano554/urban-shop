import { useContext } from 'react';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png';
import { AppContext } from '../context/AppContext';

const OrderItem = ({ title, price, images, id }) => {
  const { removeProductFromCart } = useContext(AppContext);

  const handleRemove = () => {
    removeProductFromCart(id);
  };

  return (
    <div className='OrderItem'>
      <figure>
        <img src={images[0]} />
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
