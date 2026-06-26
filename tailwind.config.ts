import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D9E012",
        danger: "#FF7366",
        "primary-dark": "#1D1D1D",
        "primary-green": "#5DE505",
        "primary-text": "#F6F2F2",
        "primary-yellow": "#FCFC77",
        "faded-white": "#DADADA",
        "primary-grey": "#888888",
        "primary-card": "#1D1D1D",
        "card-border": "#303030",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;