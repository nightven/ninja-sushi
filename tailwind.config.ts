import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        tablet: "768px",
        desktop: "1440px",
      },
      colors: {
        bg: "#FEFBF4",
        accent: "#46BB59",
        active: "#338740",
        text: "#1D1D1F",
        secondaryText: "#FFF",
        border: "#A1A1A1",
        cardBorder: "#BABABC",
      },
      fontFamily: {
        avenir: ["Avenir Next", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        aeonik: ["Aeonik Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
