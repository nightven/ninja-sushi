import React, { FC } from 'react';
import Favorite from '../../assets/svgs/header/favorite.svg';
import Bell from '../../assets/svgs/header/bell.svg';
import Profile from '../../assets/svgs/header/profile.svg';
import Cost from '../../assets/svgs/header/cost.svg';
import Burger from '../../assets/svgs/header/burger.svg';

interface Props {
  isDesktop: boolean;
  toggleMenu: () => void;
}

const ToolsBar: FC<Props> = ({ toggleMenu, isDesktop }) => {
  return (
    <ul className="flex items-center gap-1 tablet:gap-3 ml-auto">
      <li className="relative">
        <button
          type="button"
          className=" flex items-center justify-center p-[8px] tablet:p-4  border border-border rounded-xl"
        >
          <Bell />
        </button>
        <div className="absolute top-[-8px] right-[-4px] flex items-center justify-center w-[20px] h-[20px] tablet:w-[24px] tablet:h-[24px]  text-[10px] tablet:text-[14px] font-[500] text-white   rounded-full bg-orange-500">
          10
        </div>
      </li>
      <li>
        <button
          type="button"
          className="flex items-center justify-center p-[8px] tablet:p-4  border border-border rounded-xl"
        >
          <Favorite />
        </button>
      </li>
      <li>
        <button
          type="button"
          className="flex items-center justify-center p-[8px] tablet:p-4 border border-border rounded-xl"
        >
          <Profile />
        </button>
      </li>

      <li>
        {isDesktop ? (
          <button
            type="button"
            className="flex items-center justify-center gap-2 p-[8px] tablet:p-4  border border-border rounded-xl"
          >
            Корзина
            <Cost />
          </button>
        ) : (
          <button
            type="button"
            onClick={toggleMenu}
            className="flex items-center justify-center p-[12px] tablet:p-[18px] bg-bgGray hover:bg-gray-300 rounded-xl"
          >
            <Burger />
          </button>
        )}
      </li>
    </ul>
  );
};

export default ToolsBar;
