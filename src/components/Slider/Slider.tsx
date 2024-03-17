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
    <div className="relative w-full h-[686px] flex place-self-center justify-center items-center transition-transform ease-in-out duration-500">
      <Description
        activeImgIndex={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />
      {images.map((pic, idx) => (
        <>
          <div
            className={`${
              idx === activeImage
                ? 'block w-full object-cover transition-all duration-500 ease-in-out'
                : 'hidden'
            }`}
            key={idx}
          >
            <Image
              src={pic.src}
              alt=""
              width={870}
              height={686}
              className="w-full h-[686px] object-cover rounded-r-3xl "
            />
          </div>
        </>
      ))}
      <div className="absolute bottom-[30px] left-[800px]">
        <div className="flex items-baseline justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-bg rounded-full ${activeImage === i ? 'bg-orange-600' : 'bg-bg'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
