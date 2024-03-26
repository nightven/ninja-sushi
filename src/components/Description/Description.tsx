import React from 'react';
import { images } from '../../../utils/constants';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import { motion } from 'framer-motion';
import { INews } from '../News/NewsList';
import Link from 'next/link';

type Props = {
  clickNext: () => void;
  clickPrev: () => void;
  activeImgIndex: number;
  news: INews[];
};
const Description = ({ clickNext, clickPrev, activeImgIndex, news }: Props) => {
  return (
    <div className="bg-white rounded-b-3xl py-2 px-2 min-w-[288px] h-[200px] tablet:min-w-[360px] tablet:h-[250px]  tablet:py-4 tablet:px-4 desktop:flex desktop:order-first desktop:w-[530px] desktop:h-[360px] desktop:rounded-none desktop:rounded-l-3xl">
      {news.map((elem, idx) => (
        <div
          className={`${
            idx === activeImgIndex
              ? 'block w-full object-cover transition-all duration-500 ease-in-out'
              : 'hidden'
          }`}
          key={idx}
        >
          <motion.div
            initial={{
              opacity: idx === activeImgIndex ? 0 : 0.5,
              scale: idx === activeImgIndex ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImgIndex ? 1 : 0.5,
              scale: idx === activeImgIndex ? 1 : 0.3,
            }}
            transition={{
              ease: 'linear',
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <h1 className="font-inter leading-tight text-center flex items-center text-[26px] font-bold mb-4 h-[90px] tablet:justify-center tablet:h-[120px] tablet:text-[40px] desktop:h-[240px] desktop:text-[44px]">
              {elem.title}
            </h1>
          </motion.div>
          <Link href={`/news/${elem.slug}`}>
            <button className="bg-[#00CC2D] text-white text-base font-meduim px-18 py-4 rounded-xl mt-4 w-full tablet:w-full desktop:w-[300px]">
              Перейти к новости
            </button>
          </Link>

          {/* <div className="relative">
            <div
              onClick={clickPrev}
              className="absolute cursor-pointer top-[-550px] left-[200px] tablet:top-[-200px] tablet:left-[330px] desktop:top-[-260px] desktop:left-[600px]"
            >
              <GrPrevious className="stroke-orange-600" />
            </div>
            <div
              onClick={clickNext}
              className="absolute cursor-pointer top-[-550px] left-[250px] tablet:top-[-200px] tablet:left-[670px] desktop:top-[-260px] desktop:left-[1100px]"
            >
              <GrNext className="stroke-orange-600" />
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Description;
