import React, { FC, useRef, useState } from 'react';

import { useOutsideClick } from '@/hooks/useOutsideClick';
import BurgerMenu from './BurgerMenu';
import ToolsBarItem from './ToolsBarItem';
import Cost from './Cost';

interface Props {
  isDesktop: boolean;
}

const ToolsBar: FC<Props> = ({ isDesktop }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCostOpen, setIsCostOpen] = useState(false);
  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => {
    if (isMenuOpen) {
      setTimeout(() => setIsMenuOpen(false), 100);
    }
    if (isCostOpen) {
      setTimeout(() => setIsCostOpen(false), 100);
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleCost = () => {
    setIsCostOpen(!isCostOpen);
  };
  return (
    <>
      <ul className="flex items-center gap-1 tablet:gap-3 ml-auto">
        <ToolsBarItem
          isDesktop={isDesktop}
          toggleMenu={toggleMenu}
          toggleCost={toggleCost}
        />
      </ul>
      <div ref={menuRef}>
        {isMenuOpen && !isDesktop && <BurgerMenu />}

        {isCostOpen && <Cost />}
      </div>
    </>
  );
};

export default ToolsBar;
