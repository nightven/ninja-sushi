import { FC } from 'react';
import Link from 'next/link';
import { NAV_LIST } from '@/constans/navigations';

const BurgerMenu: FC<{ pathname: string }> = ({ pathname }) => {
  return (
    <div className="absolute p-3 top-[58px] tablet:top-[76px] right-[16px] tablet:right-[24px] rounded-xl bg-mainBgWhite z-10">
      <ul className="flex flex-col items-center desktop:hidden gap-5 ">
        {NAV_LIST.map(({ href, title }) => (
          <li key={href} className="flex">
            <Link
              href={href}
              className={` ${pathname === href ? 'active-link' : ''}`}
            >
              {title}
            </Link>
          </li>
        ))}

        <li className="flex">
          <a href="tel:+380000000000">+38 097 000 00 00</a>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
