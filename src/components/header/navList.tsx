import Link from 'next/link';
import React, { FC } from 'react';
import { NAV_LIST } from '@/constans/navigations';
import Ua from '../../assets/svgs/header/ua.svg';

import NavListItem from './NavListItem';
import { usePathname } from 'next/navigation';

interface INavListProps {
  isTablet: boolean;
}

const NavList: FC<INavListProps> = ({ isTablet }) => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center ml-auto font-[500] text-[16px] leading-6">
      {isTablet && (
        <div className="flex items-center gap-1 tablet:gap-2 py-6 tablet:py-6 desktop:py-7 text-[14px] tablet:text-[16px] leading-4 tablet:leading-6">
          <Ua />
          Київ
        </div>
      )}
      <ul className="hidden desktop:flex gap-9 ml-8 ">
        <NavListItem NAV_LIST={NAV_LIST} pathname={pathname} />
      </ul>
    </nav>
  );
};

export default NavList;
