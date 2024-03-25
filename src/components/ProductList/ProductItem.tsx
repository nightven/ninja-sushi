import { Products } from '@/types/productTypes';
import Image from 'next/image';
import React, { FC } from 'react';
import Heart from '../../assets/svgs/products/Heart.svg';
import Plus from '../../assets/svgs/products/Plus.svg';
import Spicy from '../../assets/svgs/products/Spicy.svg';
import Vegan from '../../assets/svgs/products/Vegan.svg';
import Lactose from '../../assets/svgs/products/Lactose.svg';

interface ProductItemProps {
  products: Products;
}

const ProductItem: FC<ProductItemProps> = ({ products }) => {
  const {
    title,
    image,
    price,
    weight,
    ingredients,
    hit,
    vegan,
    spicy,
    lactose,
  } = products;

  return (
    <div className="relative card card-side items-start bg-base-100 shadow-xl p-3 min-w-[288px] w-full mx-auto tablet:h-[200px] desktop:flex-col desktop:h-[500px]">
      <Image
        src={image}
        alt={title}
        width={96}
        height={96}
        className="desktop:w-[264px] desktop:h-[230px]"
      />
      <div className="card-body justify-between p-2 h-full desktop:min-w-[309px]">
        <div>
          <h2 className="card-title text-base font-bold mb-1.5">{title}</h2>
          <p className="text-orange-600 text-xs desktop:text-lg">
            Вес: {weight} г
          </p>
          <ul className="flex justify-start content-start gap-1 flex-wrap text-xs no-underline text-[#686870] desktop:text-base">
            {ingredients?.map((ingredient, idx) => (
              <li key={idx}>{ingredient.title.toLowerCase().slice(0, 6)},</li>
            ))}
          </ul>
        </div>
        <div className="card-actions flex-nowrap justify-between items-center">
          <div className="text-base font-bold desktop:text-[26px]">
            {price} <span className="text-[#686870]">грн</span>
          </div>
          <div className="flex gap-1.5">
            <Heart className="w-[40px] h-[40px] desktop:w-[48px] desktop:h-[48px]" />
            <Plus className="w-[56px] h-[40px] desktop:w-[76px] desktop:h-[48px]" />
          </div>
        </div>
      </div>

      <div className="absolute top-[-15px] left-[-10px] flex gap-1">
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
      <div className="hidden desktop:flex desktop:gap-2 desktop:absolute desktop:top-[220px]">
        {spicy && <Spicy className="w-[27px] H-[26PX]" />}
        {vegan && <Vegan className="w-[27px] H-[26PX]" />}
        {lactose && <Lactose className="w-[27px] H-[26PX]" />}
      </div>
    </div>
  );
};

export default ProductItem;
