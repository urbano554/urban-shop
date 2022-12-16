import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import '@styles/SkeletonCard.scss';

export const SkeletonCard = () => {
  return Array(10)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className='skeleton-card-container'
      >
        <figure>
          <Skeleton className='skeleton-card-image' />
        </figure>
        <div className='skeleton-product-info-container'>
          <div>
            <Skeleton
              count={2}
              className='skeleton-product-info-items'
            />
          </div>

          <div>
            <Skeleton className='skeleton-shopping-button' />
          </div>
        </div>
      </div>
    ));
};
