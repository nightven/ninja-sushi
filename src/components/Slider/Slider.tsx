'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Description from '../Description/Description';
import { INews } from '../News/NewsList';
import { getNews } from '@/lib/routes/news';

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const [news, setNews] = useState<INews[]>([]);

  const clickNext = () => {
    activeImage === news.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  // const clickPrev = () => {
  //   activeImage === 0
  //     ? setActiveImage(news.length - 1)
  //     : setActiveImage(activeImage - 1);
  // };

  useEffect(() => {
    const getAllNews = async () => {
      try {
        const allNews = await getNews();
        setNews(allNews);
      } catch (error) {}
    };
    getAllNews();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className=" container  min-w-[288px] mx-auto transition-transform ease-in-out duration-500  tablet:min-w-[720px] desktop:flex desktop:w-[1260px] desktop:h-[360px] desktop:px-0">
      <div className="flex flex-row">
        {news.map((pic, idx) => (
          <div
            className={`${
              idx === activeImage
                ? 'flex object-cover transition-all duration-500 ease-in-out tablet:order-last'
                : 'hidden'
            }`}
            key={idx}
          >
            <Image
              src={pic.poster}
              width={288}
              height={288}
              layout="responsive"
              alt={pic.title}
              className=" relative min-w-[288px] h-[288px] object-cover rounded-t-3xl tablet:min-w-[720px] tablet:h-[360px] desktop:w-[730px] desktop:max-h-[360px] desktop:rounded-none desktop:rounded-r-3xl"
            />
          </div>
        ))}
      </div>

      <Description
        activeImgIndex={activeImage}
        // clickNext={clickNext}
        // clickPrev={clickPrev}
        news={news}
      />

      {/* <div className="absolute top-[290px] left-[-30%] translate-x-2/4 tablet:top-[330px] tablet:left-[400px] desktop:top-[470px] desktop:left-[650px]">
        <div className="flex items-baseline justify-center gap-2">
          {news.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 rounded-full ${activeImage === i ? 'bg-orange-600' : 'bg-bgGray'}`}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Slider;
