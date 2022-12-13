import { useContext } from 'react';

import { AppContext } from '../context/AppContext';

import OrderItem from '@components/OrderItem';

import '@styles/MyOrder.scss';

const MyOrder = ({ scroll }) => {
  const { state } = useContext(AppContext);

  const sumProducts = () => {
    const initialValue = 0;

    const renducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;

    const totalPrice = state.cart.reduce(renducer, initialValue);

    return totalPrice;
  };

  return (
    <aside className={`${scroll ? 'fixed' : ''} MyOrder scroll-container`}>
      <div className='title-container'>
        <p className='title'>Mis artículos</p>
      </div>
      <div className='my-order-content'>
        {state.cart.map((props) => {
          return (
            <OrderItem
              {...props}
              key={`order-item${props.id}`}
            />
          );
        })}

        <div className='order'>
          <p>
            <span>Total</span>
          </p>
          <p>${sumProducts()}</p>
        </div>
        <button className='primary-button'>Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
