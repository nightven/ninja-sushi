import { getProducts } from '@/lib/routes/products';
import { Products } from '@/types/productTypes';
import React from 'react';
import ProductItem from './ProductItem';

interface ProductProps {
  isDesktop: boolean;
}
const Sushi = async ({ isDesktop }: ProductProps) => {
  let l = isDesktop ? 8 : 4;
  console.log(isDesktop);
  const products = await getProducts({
    category: 1,
    limit: l,
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

export default Sushi;
