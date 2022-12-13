import ProductItem from '@components/ProductItem';

import { useGetProducts } from '../hooks/useGetProducts';

import { PRODUCT_LIST_API } from '../common/constants';

import '@styles/ProductList.scss';

const ProductList = () => {
  const products = useGetProducts(PRODUCT_LIST_API);

  const filterProducts = products.filter(({ images }) =>
    images[0].includes('https://')
  );

  return (
    <section className='main-container'>
      <div className='ProductList'>
        {filterProducts?.map((props) => {
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
