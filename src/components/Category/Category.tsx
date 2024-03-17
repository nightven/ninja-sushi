'use client';
import { FC } from 'react';
import Roll from '../../assets/svgs/category/roll.svg';
import Sushi from '../../assets/svgs/category/sushi.svg';
import Set from '../../assets/svgs/category/set.svg';
import Bowl from '../../assets/svgs/category/bowl.svg';
import Drink from '../../assets/svgs/category/drink.svg';
import Sauce from '../../assets/svgs/category/sauce.svg';
import Unknown from '../../assets/svgs/category/unknown.svg';

export interface CategoryProps {
  updateCategory: (category: string) => void;
}

const Category = ({ updateCategory }: CategoryProps) => {
  const changeCategory = (e: React.MouseEvent<HTMLLIElement>) => {
    updateCategory(e.currentTarget.innerText);
  };

  return (
    <ul className="flex justify-center gap-2 font-inter text-base font-medium px-4 py-2 rounded-xl w-[51rem] bg-bg mx-auto">
      <li
        className="flex flex-col items-center py-1.5 px-6 "
        onClick={changeCategory}
      >
        <button className=" focus:stroke-orange-600 focus:text-orange-600 hover:text-orange-600 hover:stroke-orange-600">
          <Roll />
          <span>Роллы</span>
        </button>
      </li>
      <li
        className="flex flex-col items-center py-1.5 px-6 "
        onClick={changeCategory}
      >
        <button className=" focus:stroke-orange-600 focus:text-orange-600 hover:text-orange-600 hover:stroke-orange-600">
          <Sushi />
          <span>Суши</span>
        </button>
      </li>
      <li
        className="flex flex-col items-center py-1.5 px-6"
        onClick={changeCategory}
      >
        <button className=" focus:stroke-orange-600 focus:text-orange-600 hover:text-orange-600 hover:stroke-orange-600">
          <Set />
          <span>Сеты</span>
        </button>
      </li>
      <li
        className="flex flex-col items-center py-1.5 px-6"
        onClick={changeCategory}
      >
        <button className=" focus:stroke-orange-600 focus:text-orange-600 hover:text-orange-600 hover:stroke-orange-600">
          <Bowl />
          <span>Боулы</span>
        </button>
      </li>
      <li
        className="flex flex-col items-center py-1.5 px-6"
        onClick={changeCategory}
      >
        <button className=" focus:stroke-orange-600 focus:text-orange-600 hover:text-orange-600 hover:stroke-orange-600">
          <Drink />
          <span>Напитки</span>
        </button>
      </li>
      <li
        className="flex flex-col items-center py-1.5 px-6"
        onClick={changeCategory}
      >
        <button className=" focus:stroke-orange-600 focus:text-orange-600 hover:text-orange-600 hover:stroke-orange-600">
          <Sauce />
          <span>Соусы</span>
        </button>
      </li>
      <li className="flex flex-col items-center py-1.5 px-6 text-[#9E9E9E]">
        <Unknown />
        <span>Неизв</span>
      </li>
      <li className="flex flex-col items-center py-1.5 px-6 text-[#9E9E9E]">
        <Unknown />
        <span>Неизв</span>
      </li>
    </ul>
  );
};

export default Category;
