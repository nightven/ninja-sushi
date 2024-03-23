'use client';
import React, { FC } from 'react';
import Roll from './@Roll';
import Sushi from './@Sushi';
import Set from './@Set';
import Bowls from './@Bowls';
import Drinks from './@Drinks';
import ClientSideProduct from './ClientSideProduct';
import { useMediaQuery } from 'react-responsive';

const ProductList: FC = async () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <div className="container">
      <h2 className="text-center text-[24px] leading-[30px] font-bold mb-6 desktop:text-[48px] desktop:leding-[64px]">
        Суши
      </h2>
      <ClientSideProduct>
        <Sushi isDesktop={isDesktop} />
      </ClientSideProduct>
      <h2 className="text-center text-[24px] leading-[30px] font-bold mb-6 desktop:text-[48px] desktop:leding-[64px]">
        Роллы
      </h2>
      <ClientSideProduct>
        <Roll />
      </ClientSideProduct>
      <h2 className="text-center text-[24px] leading-[30px] font-bold mb-6 desktop:text-[48px] desktop:leding-[64px]">
        Сеты
      </h2>
      <ClientSideProduct>
        <Set />
      </ClientSideProduct>
      <h2 className="text-center text-[24px] leading-[30px] font-bold mb-6 desktop:text-[48px] desktop:leding-[64px]">
        Закуски
      </h2>
      <ClientSideProduct>
        <Bowls />
      </ClientSideProduct>
      <h2 className="text-center text-[24px] leading-[30px] font-bold mb-6 desktop:text-[48px] desktop:leding-[64px]">
        Напитки
      </h2>
      <ClientSideProduct>
        <Drinks />
      </ClientSideProduct>
    </div>
  );
};

export default ProductList;
