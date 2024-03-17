'use client';
import { FC, useState } from 'react';

import NavList from './NavList';

import { useScreen } from '@/hooks/useScreen';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import BurgerMenu from './BurgerMenu';
import ToolsBar from './ToolsBar';

const Header: FC = () => {
  const pathname = usePathname();
  const { isTablet, isDesktop, isMobile } = useScreen();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="pt-4 ">
      <div className="relative flex container bg-mainBgWhite rounded-xl">
        <Logo isMobile={isMobile} />
        <NavList pathname={pathname} />
        <ToolsBar toggleMenu={toggleMenu} isDesktop={isDesktop} />
        {isMenuOpen && !isDesktop && <BurgerMenu pathname={pathname} />}
      </div>
    </header>
  );
};

export default Header;
