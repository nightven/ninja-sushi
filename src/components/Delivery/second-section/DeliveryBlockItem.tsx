import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface DeliveryBlockItemProps {
  array: {
    text: string;
    icon: string;
    subtitle?: string;
    numbers?: string[];
  }[];
}

export default function DeliveryBlockItem({ array }: DeliveryBlockItemProps) {
  return (
    <ul className="flex desktop:flex-row flex-col items-center desktop:gap-5 gap-2">
      {array.map(item => (
        <li
          key={item.text}
          className="flex desktop:flex-col desktop:gap-3 gap-6 items-center desktop:justify-center py-4 desktop:py-0 desktop:min-h-80 desktop:px-6 px-5 bg-white rounded-xl w-full"
        >
          <Image src={item.icon} alt="delivery icon" width={54} height={54} />
          <div className="flex flex-col justify-center">
            <h3 className="text-xl text-[#1D1D1F] desktop:text-center">
              {item.text}
            </h3>
            <p className="text-sm text-[#686870] desktop:text-center">
              {item.subtitle}
            </p>
            {item.numbers && item.numbers.length > 0 && (
              <ul className="flex flex-col gap-1 mt-3">
                {item.numbers.map(item => (
                  <li
                    key={item}
                    className="bg-[#1A1A1A] bg-opacity-[4%] rounded-3xl px-4 py-2"
                  >
                    <Link href={item}>{item}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
