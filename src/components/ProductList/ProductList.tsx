import { getProducts } from '@/lib/routes/products';
import Image from 'next/image';
import React, { FC } from 'react';
import ProductItem from './ProductItem';
import { Products } from '@/types/productTypes';

const ProductList: FC = async () => {
  const products = await getProducts({
    category: 2,
    limit: 20,
    page: 1,
  });
  return (
    <div className="container">
      <ul className="flex flex-col gap-3 tablet:grid tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-5 w-full">
        {products.map((product: Products) => (
          <ProductItem key={product._id} products={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
