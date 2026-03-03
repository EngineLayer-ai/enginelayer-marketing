import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef1f6",
          100: "#d5dbe8",
          200: "#abb7d1",
          300: "#8193ba",
          400: "#5770a3",
          500: "#3a5690",
          600: "#2d4473",
          700: "#213357",
          800: "#16233c",
          900: "#0b1221",
          950: "#060a12",
        },
        cream: {
          50: "#f8f7f3",
          100: "#f2f0ea",
          200: "#e8e5db",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["DM Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
