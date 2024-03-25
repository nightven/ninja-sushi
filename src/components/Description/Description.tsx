import React from 'react';
import { images } from '../../../utils/constants';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import { motion } from 'framer-motion';

type Props = {
  clickNext: () => void;
  clickPrev: () => void;
  activeImgIndex: number;
};
const Description = ({ clickNext, clickPrev, activeImgIndex }: Props) => {
  return (
    <div className="bg-white rounded-b-3xl py-2 px-2 min-w-[288px] h-[288px] tablet:flex tablet:min-w-[360px] tablet:h-[360px] tablet:order-first tablet:py-8 tablet:px-8 tablet:rounded-none tablet:rounded-l-3xl desktop:w-[696px] desktop:h-[686px] desktop:py-12 desktop:px-12">
      {images.map((elem, idx) => (
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
            <h1 className="font-inter leading-tight text-[32px] font-bold mb-4 h-[160px] tablet:h-[180px] tablet:text-[36px] desktop:h-[480px] desktop:text-[64px]">
              {elem.title}
            </h1>
            <p className="text-base font-normal text-[#686870]">{elem.desc}</p>
          </motion.div>
          <button className="bg-[#00CC2D] text-white text-base font-meduim px-18 py-4 rounded-xl mt-4 w-full tablet:w-full desktop:w-[300px]">
            Перейти к новости
          </button>
          <div className="relative">
            <div
              onClick={clickPrev}
              className="absolute cursor-pointer top-[-550px] left-[200px] tablet:top-[-200px] tablet:left-[330px] desktop:top-[-350px] desktop:left-[680px]"
            >
              <GrPrevious className="stroke-orange-600" />
            </div>
            <div
              onClick={clickNext}
              className="absolute cursor-pointer top-[-550px] left-[250px] tablet:top-[-200px] tablet:left-[660px] desktop:top-[-350px] desktop:left-[1300px]"
            >
              <GrNext className="stroke-orange-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
