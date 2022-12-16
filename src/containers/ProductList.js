import { useGetProducts } from '../hooks/useGetProducts';

import ProductItem from '@components/ProductItem';
import { SkeletonCard } from '@components/SkeletonCard';

import { PRODUCT_LIST_API } from '../common/constants';

import '@styles/ProductList.scss';

const ProductList = () => {
  const { products, loading } = useGetProducts(PRODUCT_LIST_API);

  return (
    <section className='main-container'>
      <div className='ProductList'>
        {loading && <SkeletonCard />}
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
