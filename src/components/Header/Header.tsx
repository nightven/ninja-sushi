'use client';
import { FC, useRef, useState } from 'react';

import NavList from './NavList';

import { useScreen } from '@/hooks/useScreen';
import Logo from './Logo';

import ToolsBar from './ToolsBar';

const Header: FC = () => {
  const { isTablet, isDesktop, isMobile } = useScreen();

  return (
    <header className="pt-4 ">
      <div className="container relative z-50 flex  bg-mainBgWhite rounded-xl">
        <Logo isMobile={isMobile} />
        <NavList isTablet={isTablet} />
        <ToolsBar isDesktop={isDesktop} />
      </div>
    </header>
  );
};

export default Header;
