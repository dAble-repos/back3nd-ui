import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#06082D",
        "primary-light": "#7266F5",
        "primary-dark": "#4C1EF5",
        secondary: "#1A1C53",
        tertiary: "#F8EFBA",
        blackTheme: "#101828",
        "tertiary-dark": "#6f6f63",
        "tertiary-light": "#FEFAE9",
        "midnight-blue": "#28282B",
        "button-primary": "#4C1EF5",
        "button-secondary": "#7266F5",
      },
    },
  },
  plugins: [],
};
export default config;
