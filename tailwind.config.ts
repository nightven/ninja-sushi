import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '320px',
        tablet: '768px',
        desktop: '1440px',
      },
      colors: {
        mainBgWhite: '#ffffff',
        bgGray: '#F5F5F7',
        accent: '#46BB59',
        active: '#338740',
        text: '#1D1D1F',
        secondaryText: '#FFF',
        border: '#D2D2D7',
        cardBorder: '#BABABC',
      },
      fontFamily: {
        avenir: ['Avenir Next', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        aeonik: ['Aeonik Pro', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
