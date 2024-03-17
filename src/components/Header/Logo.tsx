import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../assets/images/logo.png';
import LogoMob from '@/assets/svgs/header/logo.svg';
import LogoNinja from '@/assets/svgs/header/ninja.svg';
const Logo: FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <div className="flex items-center ">
      {isMobile ? (
        <Link href="/" className="flex gap-[2px]">
          <LogoMob />
          <LogoNinja />
        </Link>
      ) : (
        <Link href="/">
          <Image src={logo} alt="logo" priority width={220} height={48} />
        </Link>
      )}
    </div>
  );
};

export default Logo;
