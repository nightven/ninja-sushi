import React from 'react';

type Props = {};

const Cost = (props: Props) => {
  return (
    <div className="absolute w-[580px] h-[611px] flex flex-col justify-between pt-7 top-[58px] tablet:top-[76px] right-[16px] tablet:right-[24px] rounded-xl bg-mainBgWhite z-10">
      <h2 className="ml-7 text-[28px] font-[700] ">Ваше замовлення</h2>

      <ul className="flex flex-col items-center desktop:hidden gap-5 "></ul>

      <div className="pt-4 ">
        <p className="mb-3 ml-7 text-[14px] font-[500] text-orange-500 ">
          Мінімальна сума замовлення 400 грн
        </p>

        <div className="flex px-7 py-6 bg-[#F5F5F7] rounded-xl">
          <p className="flex flex-col gap-1 text-[14px] text-[#9E9E9E] ">
            Разом:{' '}
            <span className="text-[32px] font-[700] text-text">643 грн</span>
          </p>
          <button className="ml-auto py-4 px-6 bg-[#00CC2D] rounded-xl font-Inter font-[500] text-mainBgWhite">
            Оформити замовлення
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cost;
