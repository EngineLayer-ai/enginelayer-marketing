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
          50: "#f0f2f5",
          100: "#d9dde6",
          200: "#b3bbcc",
          300: "#8d99b3",
          400: "#677799",
          500: "#415580",
          600: "#344466",
          700: "#27334d",
          800: "#1a2233",
          900: "#0d111a",
          950: "#070a0f",
        },
        cream: {
          50: "#fafaf8",
          100: "#f5f5f0",
          200: "#eceae2",
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
