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
    <div className="w-full  bg-bg rounded-l-3xl pt-[118px] pl-[94px] pr-[60px] order-last h-[686px]">
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
            <h1 className="font-inter leading-tight text-[64px] font-bold mb-4 h-[350px]">
              {elem.title}
            </h1>
            <p className="font-normal leading-7 text-xl text-[#686870]">
              {elem.desc}
            </p>
          </motion.div>
          <button className="bg-[#00CC2D] text-white px-20 py-4 rounded-xl mt-6">
            Перейти к новости
          </button>
          <div className="absolute bottom-1 w-full flex justify-center items-center">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
