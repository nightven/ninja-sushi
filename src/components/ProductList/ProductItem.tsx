import { Products } from '@/types/productTypes';
import Image from 'next/image';
import React, { FC } from 'react';
import Heart from '../../assets/svgs/products/Heart.svg';
import Plus from '../../assets/svgs/products/Plus.svg';

interface ProductItemProps {
  products: Products;
}

const ProductItem: FC<ProductItemProps> = ({ products }) => {
  const { title, image, price, weight, ingredients, hit } = products;

  return (
    <div className="relative card card-side items-center bg-base-100 shadow-xl p-3 min-w-[288px] h-[250px] w-full mx-auto desktop:flex-col desktop:h-[590px]">
      <Image
        src={image}
        alt={title}
        width={96}
        height={96}
        className="desktop:w-[330px]"
      />
      <div className="flex flex-col">
        <div className="flex flex-col justify-between  p-2">
          <h2 className="card-title text-base font-bold mb-1.5">{title}</h2>
          <p className="text-orange-600 text-xs desktop:text-lg">
            Вес: {weight} г
          </p>
          <ul className="flex justify-start content-start gap-1 flex-wrap text-xs no-underline text-[#686870] desktop:text-base">
            {ingredients
              ?.slice(0, 5)
              .map((ingredient, idx) => (
                <li key={idx}>{ingredient.title.toLowerCase()},</li>
              ))}
          </ul>
        </div>
        <div className="card-actions justify-between items-center">
          <div className="text-base font-bold desktop:text-[26px]">
            {price} <span className="text-[#686870]">грн</span>
          </div>
          <div className="flex gap-1.5">
            <Heart className="w-[40px] h-[40px] desktop:w-[48px] desktop:h-[48px]" />
            <Plus className="w-[56px] h-[40px] desktop:w-[76px] desktop:h-[48px]" />
          </div>
        </div>
      </div>

      <div className="absolute top-[0] left-[0] flex gap-1">
        {hit && (
          <span className="bg-[#FBDCD5] rounded-md text-orange-600 px-2 py-0.5">
            Hit
          </span>
        )}
        {products.new && (
          <span className="bg-[#CCF5D5] rounded-md text-orange-600 px-2 py-0.5">
            New
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
