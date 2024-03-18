'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { images } from '../../../utils/constants';
import Description from '../Description/Description';

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className=" container relative h-[288px] w-[288px] mx-auto transition-transform ease-in-out duration-500 tablet:flex tablet:w-[760px]">
      <div className="flex flex-row">
        {images.map((pic, idx) => (
          <div
            className={`${
              idx === activeImage
                ? 'flex object-cover transition-all duration-500 ease-in-out tablet:order-last'
                : 'hidden'
            }`}
            key={idx}
          >
            <Image
              src={pic.src}
              alt=""
              className="w-[288px] h-[288px] object-cover rounded-3xl tablet:w-[360px] tablet:h-[360px] "
            />
          </div>
        ))}
      </div>
      <Description
        activeImgIndex={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />

      {/* <div className="absolute bottom-[30px] left-[800px]">
        <div className="flex items-baseline justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-bg rounded-full ${activeImage === i ? 'bg-orange-600' : 'bg-bg'}`}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Slider;
