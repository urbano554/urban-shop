import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';
import { AppContext } from '../context/AppContext';

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumProducts = () => {
    const initialValue = 0;
    const renducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const totalPrice = state.cart.reduce(renducer, initialValue);
    return totalPrice;
  };

  return (
    <aside className='MyOrder'>
      <div className='title-container'>
        <img
          src={arrow}
          alt='arrow'
        />
        <p className='title'>My order</p>
      </div>
      <div className='my-order-content'>
        {state.cart.map((props) => {
          console.log(props);
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
