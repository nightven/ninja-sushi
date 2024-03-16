'use client';
import { FC } from 'react';
import Roll from '../../assets/svgs/roll.svg';
import Sushi from '../../assets/svgs/sushi.svg';
import Set from '../../assets/svgs/set.svg';
import Bowl from '../../assets/svgs/bowl.svg';
import Drink from '../../assets/svgs/drink.svg';
import Sauce from '../../assets/svgs/sauce.svg';
import Unknown from '../../assets/svgs/unknown.svg';

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
        className="flex flex-col items-center py-1.5 px-6"
        onClick={changeCategory}
      >
        <Roll />
        Роллы
      </li>
      <li
        className="flex flex-col items-center py-1.5 px-6"
        onClick={changeCategory}
      >
        <Sushi />
        Суши
      </li>
      <li
        className="flex flex-col items-center py-1.5 px-6"
        onClick={changeCategory}
      >
        <Set />
        Сеты
      </li>
      <li
        className="flex flex-col items-center py-1.5 px-6"
        onClick={changeCategory}
      >
        <Bowl />
        Боулы
      </li>
      <li
        className="flex flex-col items-center py-1.5 px-6"
        onClick={changeCategory}
      >
        <Drink />
        Напитки
      </li>
      <li
        className="flex flex-col items-center py-1.5 px-6"
        onClick={changeCategory}
      >
        <Sauce />
        Соусы
      </li>
      <li className="flex flex-col items-center py-1.5 px-6 text-[#9E9E9E]">
        <Unknown />
        Неизв
      </li>
      <li className="flex flex-col items-center py-1.5 px-6 text-[#9E9E9E]">
        <Unknown />
        Неизв
      </li>
    </ul>
  );
};

export default Category;
