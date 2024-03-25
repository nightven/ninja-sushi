'use client';
import { Products } from '@/types/productTypes';
import React, { FC } from 'react';
import ProductItem from './ProductItem';
import { useMediaQuery } from 'react-responsive';

interface ProductItemProps {
  products: Products[];
  category: number;
  title: string;
}

const ProductGroup: FC<ProductItemProps> = ({ products, category, title }) => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const filteredArr = isDesktop
    ? products
        .filter((product: Products) => product.category === category)
        .slice(0, 8)
    : products
        .filter((product: Products) => product.category === category)
        .slice(0, 4);
  return (
    <>
      <div className="desktop:flex desktop:justify-between">
        <h2 className="text-center text-[24px] leading-[38px] font-bold mb-6 desktop:text-[48px] desktop:leding-[64px] ">
          {title}
        </h2>
        <button className="hidden w-[160px] justify-center mb-12 py-4 rounded-xl text-base font-medium text-[#00CC2D] bg-white desktop:flex ">
          Смотреть все
        </button>
      </div>
      <ul className="flex flex-col gap-3 mb-4 tablet:grid tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-5 w-full">
        {filteredArr.map((product: Products) => (
          <li key={product._id}>
            <ProductItem key={product._id} products={product} />
          </li>
        ))}
      </ul>
      <button className="flex w-full mx-auto justify-center mb-12 py-4 rounded-xl text-base font-medium text-[#00CC2D] bg-white desktop:hidden">
        Смотреть все позиции
      </button>
    </>
  );
};

export default ProductGroup;
