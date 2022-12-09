import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import { useGetProducts } from '../hooks/useGetProducts';
import { PRODUCT_LIST_API } from '../common/constants';

const ProductList = () => {
  const products = useGetProducts(PRODUCT_LIST_API);

  return (
    <section className='main-container'>
      <div className='ProductList'>
        {products?.map((props) => {
          return (
            <ProductItem
              {...props}
              key={props.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
