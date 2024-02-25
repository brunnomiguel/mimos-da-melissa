import { colors } from "./src/styles/colors";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      width: {
        768: "768px",
      },
      height: {
        26: "100px",
        350: "350px",
        400: "400px",
        500: "500px",
        550: "550px",
      },
      maxHeight: { 400: "400px", 600: "600px", 700: "700px" },
      maxWidth: {
        400: "400px",
        500: "500px",
        700: "700px",
        768: "768px",
        1380: "1380px",
      },
      boxShadow: {
        default: "0px 4px 4px 1px rgba(112, 68, 58, 0.60)",
        shadow_white: "0px 4px 2px 0px rgba(255, 255, 255, 0.60)",
        blur: "0px 50px 33px 0px rgba(215, 121, 148, 0.60)",
      },
    },
  },
  plugins: [],
};
export default config;
