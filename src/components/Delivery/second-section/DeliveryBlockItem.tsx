import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React, { FC, SVGProps } from 'react';

interface DeliveryBlockItemProps {
  array: { text: string; icon: string }[];
}

export default function DeliveryBlockItem({ array }: DeliveryBlockItemProps) {
  return (
    <ul className="flex desktop:flex-row flex-col items-center desktop:gap-5 gap-2">
      {array.map(item => (
        <li
          key={item.text}
          className="flex desktop:flex-col desktop:gap-3 gap-6 items-center desktop:justify-center desktop:py-24 py-4 desktop:px-6 px-5 bg-white rounded-xl w-80"
        >
          <Image src={item.icon} alt="delivery icon" width={54} height={54} />
          <p className="text-xl text-[#1D1D1F]">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
