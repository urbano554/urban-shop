import { useContext } from 'react';

import { AppContext } from '../context/AppContext';

import { ShoppingCar } from '../assets/icons/ShoppingCar';

import 'react-toastify/dist/ReactToastify.css';
import '@styles/ProductItem.scss';

const ProductItem = ({ image, price, title, id } = []) => {
  const { addProductToCart, state } = useContext(AppContext);

  const handleClick = (product) => {
    addProductToCart(product);
  };

  return (
    <div className='ProductItem'>
      <img
        src={image}
        alt={title}
      />
      <div className='product-info'>
        <div>
          <p>{`$${price}`}</p>
          <p>{title}</p>
        </div>

        <figure
          className='shopping-button'
          onClick={() => handleClick({ image, price, title, id })}
        >
          <ShoppingCar />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
