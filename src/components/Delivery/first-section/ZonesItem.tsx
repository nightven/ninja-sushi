import clsx from 'clsx';
import React from 'react';

export enum Zone {
  Green = 'green',
  Yellow = 'yellow',
  Red = 'red',
}

interface ZonesProps {
  color: Zone;
  title: string;
}

export default function Zones({ color, title }: ZonesProps) {
  return (
    <li className="flex items-center desktop:gap-3 gap-2">
      <div
        className={clsx(
          'relative rounded-[50%] min-w-4 h-4 desktop:w-8 desktop:h-8',
          color === Zone.Green &&
            'bg-[#7cb342] bg-opacity-[24%] border-[#7cb342] border-[1px]',
          color === Zone.Yellow &&
            'bg-[#FBC02D] bg-opacity-[24%] border-[#FBC02D] border-[1px]',
          color === Zone.Red &&
            'bg-[#FF5252] bg-opacity-[24%] border-[#FF5252] border-[1px]'
        )}
      />
      <span className="flex items-center relative before:block before:content'' before:bg-[#1D1D1F] desktop:before:w-5 before:w-4 before:h-[1px]" />
      <p className="desktop:text-xl text-base text-[#1D1D1F]">{title}</p>
    </li>
  );
}
