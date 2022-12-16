import { useEffect, useState } from 'react';

import axios from 'axios';

export const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const response = await axios(API);
    const { data = [] } = await response;
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, loading };
};
