import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { LuHome } from 'react-icons/lu';

export interface IPanel {
  children: React.ReactNode;
}

const Panel = ({ children }: IPanel) => {
  return (
    <div className="flex gap-4 mb-8 items-center ">
      <button className=" relative flex items-center text-xs text-green-400 bg-white rounded-xl py-2 pl-10 pr-4">
        <IoIosArrowBack className="absolute top-[7px] left-4  w-[18px] h-[18px] fill-green-400" />
        Назад
      </button>
      <div className="flex gap-1">
        <Link href="/">
          <LuHome className="w-[21px] h[21px] stroke-gray-600" />
        </Link>
        <IoIosArrowForward className="w-[21px] h-[21px]" />
        <div className="flex gap-2 items-center">{children}</div>
      </div>
    </div>
  );
};

export default Panel;
