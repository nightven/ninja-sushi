'use client';

import React, { useEffect, useState } from 'react';
import { getOneNews } from '@/lib/routes/news';
import Panel from '../Panel/Panel';
import { INews } from './NewsList';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';

export interface IParams {
  slug: string;
}

export const generateMetadata = async ({ params }: { params: IParams }) => {
  const { slug } = params;

  const oneNew = await getOneNews(slug);

  return {
    category: oneNew.topic,
    title: oneNew.title,
  };
};

const OneNew = ({ slug }: IParams) => {
  const [oneNew, setOneNew] = useState<INews | null>(null);

  useEffect(() => {
    const fetchNew = async () => {
      try {
        const oneNew = await getOneNews(slug);
        setOneNew(oneNew);
      } catch (error) {
        throw new Error('failed to fetch a new!');
      }
    };
    fetchNew();
  }, []);

  return (
    <div className="text-black container mt-4 mb-6">
      {oneNew && (
        <>
          <Panel>
            <p className="text-sm text-gray-400">Новини</p>
            <IoIosArrowForward className="w-[21px] h-[21px]" />
            <p className="text-sm text-gray-400"> {oneNew.title}</p>
          </Panel>
          <div className=" tablet:px-28 desktop:px-56">
            <h2 className=" text-2xl tablet:text-5xl font-bold mb-3">
              {oneNew.title}
            </h2>
            <div className="flex items-center gap-4 text-xs  tablet:text-sm  text-gray-500 mb-3 tablet:mb-8 ">
              <p className=" bg-white rounded-md px-2 py-1">{oneNew.topic}</p>
              <p>{oneNew.date}</p>
            </div>
          </div>
          {oneNew.poster && (
            <div className="p-0 tablet:px-28 ">
              <Image
                src={oneNew.poster}
                alt="New image"
                width={292}
                height={200}
                className="w-full desktop:h-[634px] rounded-xl mb-7"
              />
              <p className="text-sm p-4 tablet:text-base desktop:text-lg ">
                {oneNew.description}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default OneNew;
