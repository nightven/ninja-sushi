'use client';
import { Products } from '@/types/productTypes';
import React, { FC } from 'react';
import ProductGroup from './ProductGroup';

interface ProductItemProps {
  products: Products[];
}
const ProductList: FC<ProductItemProps> = ({ products }) => {
  const categories = ['Суши', 'Роллы', 'Сеты', 'Закуски', 'Напитки'];

  return (
    <div className="container">
      {categories.map((category, idx) => (
        <ProductGroup
          key={idx}
          products={products}
          category={idx + 1}
          title={category}
        />
      ))}
    </div>
  );
};

export default ProductList;
