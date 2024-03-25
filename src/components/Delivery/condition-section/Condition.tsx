import Image from 'next/image';
import React from 'react';

interface ConditionProps {}

export default function Condition({}: ConditionProps) {
  return (
    <div className="desktop:hidden mb-6">
      <div className="mb-4">
        <h3 className="text-xl font-medium mb-2">Умови доставки</h3>
        <p className="text-sm">
          Наразі доставка здійснюється в зоні, виділеній кольором, але ми готові
          піти на поступки в разі великих замовлень. Уточнюйте деталі у
          менеджера.
        </p>
      </div>
      <div>
        <h3 className="text-[#9E9E9E] text-sm font-semibold mb-2">
          Час роботи:
        </h3>
        <div className="flex">
          <Image
            src="/icons/clock.svg"
            alt="clock icon"
            width={24}
            height={24}
          />
          <p className="text-base ml-2 font-semibold">з 11:00 до 22:45</p>
        </div>
      </div>
    </div>
  );
}
