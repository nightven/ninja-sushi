'use client';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/images/logo.png';
import Ua from '../../assets/svgs/ua.svg';
import Phone from '../../assets/svgs/phone.svg';
import Arow from '../../assets/svgs/arow-down.svg';
import Favorite from '../../assets/svgs/favorite.svg';
import Bell from '../../assets/svgs/bell.svg';
import Profile from '../../assets/svgs/profile.svg';
import Cost from '../../assets/svgs/cost.svg';

const Header: FC = () => {
  return (
    <header className="pt-4">
      <div className="container">
        <nav className="flex items-center">
          <div className="flex items-center gap-3 mr-[70px]">
            <Link href="/">
              <Image src={logo} alt="logo" priority width={220} height={48} />
            </Link>
            <button className="bg-gray-100 rounded-[10px] w-6 h-6">
              <Arow />
            </button>
          </div>
          <ul className="flex gap-6">
            <li className="flex gap-1 py-5">
              <Ua />
              Киев
              <button type="button">UA</button>
            </li>
            <li className="py-5">
              <Link href="/home">Главная</Link>
            </li>
            <li className="py-5">
              <Link href="/delivery">Доставка</Link>
            </li>
            <li className="py-5">
              <Link href="/about">О нас</Link>
            </li>
            <li className="py-5">
              <Link href="/news">Новости</Link>
            </li>

            <li className="flex gap-3 py-5">
              <Phone />
              <a href="tel:+380000000000">+38 097 000 00 00</a>
            </li>
          </ul>

          <div className="ml-auto">
            <ul className="flex items-center gap-3">
              <li>
                <button
                  type="button"
                  className="flex items-center justify-center p-4 h-[56px] border rounded-lg"
                >
                  <Bell />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center justify-center p-4 h-[56px] border rounded-lg"
                >
                  <Favorite />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center justify-center p-4 h-[56px] border rounded-lg"
                >
                  <Profile />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 p-4 h-[56px] border rounded-lg"
                >
                  Корзина
                  <Cost />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
