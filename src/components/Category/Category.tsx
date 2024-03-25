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
    <div className="container ">
      <ul className="font-inter text-base font-medium px-4 py-2 bg-bg mx-auto carousel carousel-start w-full rounded-box space-x-2 desktop:flex desktop:w-[800px] desktop:mx-auto desktop:space-x-0">
        <li
          className="py-1.5 px-6 carousel-item bg-white rounded-box desktop:rounded-none desktop:rounded-l-2xl"
          onClick={changeCategory}
        >
          <button className="flex flex-col items-center focus:stroke-orange-600 focus:text-orange-600 hover:text-orange-600 hover:stroke-orange-600 ">
            <Roll />
            <span>Роллы</span>
          </button>
        </li>
        <li
          className="py-1.5 px-6 carousel-item  bg-white rounded-box desktop:rounded-none"
          onClick={changeCategory}
        >
          <button className="flex flex-col items-center focus:stroke-orange-600 focus:text-orange-600 hover:text-orange-600 hover:stroke-orange-600">
            <Sushi />
            <span>Суши</span>
          </button>
        </li>
        <li
          className="py-1.5 px-6 carousel-item  bg-white rounded-box desktop:rounded-none"
          onClick={changeCategory}
        >
          <button className="flex flex-col items-center focus:stroke-orange-600 focus:text-orange-600 hover:text-orange-600 hover:stroke-orange-600">
            <Set />
            <span>Сеты</span>
          </button>
        </li>
        <li
          className="py-1.5 px-6 carousel-item bg-white rounded-box desktop:rounded-none"
          onClick={changeCategory}
        >
          <button className="flex flex-col items-center focus:stroke-orange-600 focus:text-orange-600 hover:text-orange-600 hover:stroke-orange-600">
            <Bowl />
            <span>Боулы</span>
          </button>
        </li>
        <li
          className=" py-1.5 px-6 carousel-item  bg-white rounded-box desktop:rounded-none"
          onClick={changeCategory}
        >
          <button className="flex flex-col items-center focus:stroke-orange-600 focus:text-orange-600 hover:text-orange-600 hover:stroke-orange-600">
            <Drink />
            <span>Напитки</span>
          </button>
        </li>
        <li
          className="py-1.5 px-6 carousel-item bg-white rounded-box desktop:rounded-none"
          onClick={changeCategory}
        >
          <button className="flex flex-col items-center focus:stroke-orange-600 focus:text-orange-600 hover:text-orange-600 hover:stroke-orange-600">
            <Sauce />
            <span>Соусы</span>
          </button>
        </li>
        <li className="flex flex-col items-center py-1.5 px-6 text-[#9E9E9E] carousel-item bg-white rounded-box desktop:rounded-none">
          <Unknown />
          <span>Неизв</span>
        </li>
        <li className="flex flex-col items-center py-1.5 px-6 text-[#9E9E9E] carousel-item  bg-white desktop:rounded-none desktop:rounded-r-2xl">
          <Unknown />
          <span>Неизв</span>
        </li>
      </ul>
    </div>
  );
};

export default Category;
