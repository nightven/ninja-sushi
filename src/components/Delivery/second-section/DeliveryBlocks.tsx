import React from 'react';
import DeliveryBlockItem from './DeliveryBlockItem';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface DeliveryBlocksProps {
  title: string;
  text: string;
  iconArray: { text: string; icon: string }[];
}

export default function DeliveryBlocks({
  title,
  text,
  iconArray,
}: DeliveryBlocksProps) {
  return (
    <li>
      <h2 className="text-[#1D1D1F] desktop:text-4xl text-2xl desktop:mb-4 mb-3 font-bold">
        {title}
      </h2>
      <p className="text-[#686870] desktop:text-base text-sm desktop:mb-10 mb-5 ">
        {text}
      </p>
      <DeliveryBlockItem array={iconArray} />
    </li>
  );
}
