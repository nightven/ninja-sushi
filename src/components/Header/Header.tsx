import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.png";
import ua from "@/assets/ua.svg";
import phone from "@/assets/phone.svg";
import arow from "@/assets/arow-down.svg";
import favorite from "@/assets/favorite.svg";
import bell from "@/assets/bell.svg";
import profile from "@/assets/profile.svg";
import cost from "@/assets/cost.svg";

const Header = () => {
  return (
    <header className="pt-4">
      <div className="container">
        <nav className="flex items-center">
          <div className="flex items-center gap-3 mr-[70px]">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
            <button className="bg-gray-100 rounded-[10px] w-6 h-6">
              <Image src={arow} alt="arow" />
            </button>
          </div>
          <ul className="flex gap-6">
            <li className="flex gap-1 py-5">
              <Image src={ua} alt="ua" />
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
              <Image src={phone} alt="phone" />
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
                  <Image src={bell} alt="bell" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center justify-center p-4 h-[56px] border rounded-lg"
                >
                  <Image src={favorite} alt="favorite" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center justify-center p-4 h-[56px] border rounded-lg"
                >
                  <Image src={profile} alt="profile" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center justify-center p-4 h-[56px] border rounded-lg"
                >
                  Корзина
                  <Image src={cost} alt="cost" />
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
