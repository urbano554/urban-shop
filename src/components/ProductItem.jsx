import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import { IMAGE_NOT_FOUND } from '../common/constants';
import { AppContext } from '../context/AppContext';

const ProductItem = ({ images, price, title, id }) => {
  const { addProductToCart } = useContext(AppContext);

  const handleClick = (product) => {
    addProductToCart(product);
  };

  return (
    <div className='ProductItem'>
      <img
        src={images[0] === '' ? IMAGE_NOT_FOUND : images[0]}
        alt={title}
      />
      <div className='product-info'>
        <div>
          <p>{`$${price}`}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handleClick({ images, price, title, id })}>
          <img
            src={addToCartImage}
            alt=''
          />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
