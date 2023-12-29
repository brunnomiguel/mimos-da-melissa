import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "h-500": "500px",
      },
      boxShadow: {
        "3xl": "0px 6px 9px 1px rgba(191, 38, 38, 0.25)",
      },
      colors: {
        text_color: "#451E12",
        "price-color": "#F10C5F",
        bg_main_color: "#F8E6F3",
        "bb-color": "rgba(241, 12, 95, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
