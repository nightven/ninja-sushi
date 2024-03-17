import { SCREENS } from '@/constans/mediaQuery';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

export const useScreen = () => {
  const [query, setQuery] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });
  const isMobile = useMediaQuery({ query: `(max-width: ${SCREENS.tablet})` });
  const isTablet = useMediaQuery({ query: `(min-width: ${SCREENS.tablet})` });
  const isDesktop = useMediaQuery({
    query: `(min-width: ${SCREENS.desktop})`,
  });

  useEffect(() => {
    setQuery({ isMobile, isTablet, isDesktop });
  }, [isMobile, isTablet, isDesktop]);

  return query;
};
