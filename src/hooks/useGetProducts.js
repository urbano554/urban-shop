import { useEffect, useState } from 'react';

import axios from 'axios';

export const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios(API);
    setProducts(response?.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products;
};
