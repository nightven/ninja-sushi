import { getProducts } from '@/lib/routes/products';
import { Products } from '@/types/productTypes';
import React from 'react';
import ProductItem from './ProductItem';

const Roll = async () => {
  const products = await getProducts({
    category: 2,
    limit: 4,
    page: 1,
  });

  return (
    <ul className="flex flex-col gap-3 mb-12 tablet:grid tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-5 w-full">
      {products.map((product: Products) => (
        <li key={product._id}>
          <ProductItem key={product._id} products={product} />
        </li>
      ))}
    </ul>
  );
};

export default Roll;
