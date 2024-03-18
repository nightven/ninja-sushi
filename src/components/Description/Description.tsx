import React from 'react';
import { images } from '../../../utils/constants';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import { motion } from 'framer-motion';

type Props = {
  clickNext: any;
  clickPrev: any;
  activeImgIndex: number;
};
const Description = ({ clickNext, clickPrev, activeImgIndex }: Props) => {
  return (
    <div className="bg-white rounded-b-3xl py-2 px-2 w-[288px] h-[288px] tablet:w-[360px] tablet:h-[360px] tablet:order-first">
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
            <h1 className="font-inter leading-tight text-[32px] font-bold mb-4 h-[160px]">
              {elem.title}
            </h1>
            <p className="text-base font-normal text-[#686870]">{elem.desc}</p>
          </motion.div>
          <button className="bg-[#00CC2D] text-white text-base font-meduim px-18 py-4 rounded-xl mt-4 w-full">
            Перейти к новости
          </button>
          {/* <div className="absolute bottom-1 w-full flex justify-center items-center">
            <div
              onClick={clickPrev}
              className="absolute cursor-pointer top-[-350px] left-[670px]"
            >
              <GrPrevious className="stroke-orange-600" />
            </div>
            <div
              onClick={clickNext}
              className="absolute cursor-pointer top-[-350px] left-[1250px]"
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
