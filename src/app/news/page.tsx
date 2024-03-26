import React from 'react';

import NewsList from '../../components/News/NewsList';
import Panel from '@/components/Panel/Panel';
import { IoSearch } from 'react-icons/io5';

export interface INewsProps {
  _id: string;
  poster: string;
  topic: string;
  title: string;
  description: string;
  date: string;
  slug: string;
}

const NewsPage = () => {
  return (
    <div className="text-black container mt-4">
      <Panel>
        <p className="text-sm text-gray-400">Новини</p>
      </Panel>
      <h1 className="text-5xl font-bold mb-6">Новини</h1>
      <div className="flex flex-col tablet:flex-row gap-4 justify-between text-sm tablet:text-base mb-6">
        <div className="flex  gap-2">
          <button className="text-white bg-orange-500 rounded-xl py-3 px-4">
            Все
          </button>
          <button className="bg-white rounded-xl py-3 px-4">
            Оновлення в меню
          </button>
          <button className="bg-white rounded-xl py-3 px-4">SushiKino</button>
        </div>
        <label className="relative">
          <IoSearch className="absolute top-3 left-4  w-[24px] h-[24px] fill-gray-500" />
          <input
            type="text"
            name="search"
            placeholder="Введіть ключові слова"
            className="bg-white rounded-xl py-3 px-[52px] w-full md:w-auto"
          />
        </label>
      </div>
      <NewsList />
    </div>
  );
};

export default NewsPage;
