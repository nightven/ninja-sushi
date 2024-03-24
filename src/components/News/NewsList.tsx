'use client';

import React, { useEffect, useState } from 'react';
import News from '@/components/News/News';
import { getNews } from '@/lib/routes/news';
import Home from '../../assets/svgs/header/bell.svg';

export interface INews {
  _id: string;
  poster: string;
  topic: string;
  title: string;
  description: string;
  date: string;
  slug: string;
}

const NewsList = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [firstsNews, setFirstsNews] = useState<INews[]>([]);

  useEffect(() => {
    const getAllNews = async () => {
      try {
        const allNews = await getNews();
        const [first, second, ...news] = allNews;
        setNews(news);
        setFirstsNews([first, second]);
      } catch (error) {}
    };
    getAllNews();
  }, []);

  return (
    <div>
      <ul className="grid tablet:grid-cols-2 gap-5 mb-6  ">
        {firstsNews &&
          firstsNews.map((oneNew: INews) => (
            <li key={oneNew._id} className="bg-white rounded-xl shadow-md ">
              <News oneNew={oneNew} />
            </li>
          ))}
      </ul>
      <ul className="grid grid-cols-2 desktop:grid-cols-4 gap-3 tablet:gap-5 mb-10">
        {news &&
          news.map((oneNew: INews) => (
            <li key={oneNew._id} className="bg-white rounded-xl shadow-md ">
              <News oneNew={oneNew} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NewsList;
