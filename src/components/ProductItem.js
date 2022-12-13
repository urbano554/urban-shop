import { useContext } from 'react';

import { AppContext } from '../context/AppContext';

import { Tooltip } from '@components/Tooltip';

import addToCartImage from '@icons/shopping-car-solid.svg';

import '@styles/ProductItem.scss';

const ProductItem = ({ images, price, title, id } = []) => {
  const { addProductToCart, state } = useContext(AppContext);

  const handleClick = (product) => {
    addProductToCart(product);
  };

  return (
    <div className='ProductItem'>
      <img
        src={images[0]}
        alt={title}
      />
      <div className='product-info'>
        <div>
          <p>{`$${price}`}</p>
          <p>{title}</p>
        </div>
        <Tooltip text='añadir al carrito'>
          <figure
            className='shopping-button'
            onClick={() => handleClick({ images, price, title, id })}
          >
            <img
              src={addToCartImage}
              alt='add-to-cart-image'
            />
          </figure>
        </Tooltip>
      </div>
    </div>
  );
};

export default ProductItem;
