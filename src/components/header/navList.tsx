import Link from 'next/link';
import React, { FC } from 'react';
import { NAV_LIST } from '@/constans/navigations';
import Ua from '../../assets/svgs/header/ua.svg';
import Phone from '../../assets/svgs/header/phone.svg';

const NavList: FC<{ pathname: string }> = ({ pathname }) => {
  return (
    <nav className="flex items-center ml-auto font-[500] text-[16px] leading-6">
      <div className="flex items-center gap-1 tablet:gap-2 py-6 tablet:py-6 desktop:py-7 text-[14px] tablet:text-[16px] leading-4 tablet:leading-6">
        <Ua />
        Киев
        <button type="button" className="ml-1">
          UA
        </button>
      </div>
      <ul className="hidden desktop:flex gap-8 ml-8 ">
        {NAV_LIST.map(({ href, title }) => (
          <li
            key={href}
            className={`flex relative ${pathname === href ? 'after:absolute after:bottom-0  after:w-full after:h-[4px] after:rounded-xl after:bg-orange-500' : ''}`}
          >
            <Link
              href={href}
              className={`py-7 ${pathname === href ? 'active-link' : ''}`}
            >
              {title}
            </Link>
          </li>
        ))}

        <li className="flex gap-3 py-7">
          <Phone />
          <a href="tel:+380000000000">+38 097 000 00 00</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
