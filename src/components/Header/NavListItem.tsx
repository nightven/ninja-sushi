import React, { FC } from 'react';
import Link from 'next/link';
import Phone from '../../assets/svgs/header/phone.svg';
interface INavListItemProps {
  NAV_LIST: {
    href: string;
    title: string;
  }[];

  pathname: string;
}

const NavListItem: FC<INavListItemProps> = ({ NAV_LIST, pathname }) => {
  return (
    <>
      {NAV_LIST?.map(({ href, title }) => (
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
    </>
  );
};

export default NavListItem;
