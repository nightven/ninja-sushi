'use client';
import { getProducts } from '@/lib/routes/products';
import { Products } from '@/types/productTypes';
import React, { FC, useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const ProductList: FC = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await getProducts({
        category: 1,
      });
      setProducts(allProducts);
    };
    fetchData();
  }, []);
  console.log(products);
  return (
    <div className="container">
      <h2 className="text-center text-[24px] leading-[30px] font-bold mb-6 desktop:text-[48px] desktop:leding-[64px]">
        Суши
      </h2>
      <ul className="flex flex-col gap-3 mb-12 tablet:grid tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-5 w-full">
        {products.map((product: Products) => (
          <li key={product._id}>
            <ProductItem key={product._id} products={product} />
          </li>
        ))}
      </ul>
      <h2 className="text-center text-[24px] leading-[30px] font-bold mb-6 desktop:text-[48px] desktop:leding-[64px]">
        Роллы
      </h2>
      <h2 className="text-center text-[24px] leading-[30px] font-bold mb-6 desktop:text-[48px] desktop:leding-[64px]">
        Сеты
      </h2>
      <h2 className="text-center text-[24px] leading-[30px] font-bold mb-6 desktop:text-[48px] desktop:leding-[64px]">
        Закуски
      </h2>
      <h2 className="text-center text-[24px] leading-[30px] font-bold mb-6 desktop:text-[48px] desktop:leding-[64px]">
        Напитки
      </h2>
    </div>
  );
};

export default ProductList;
