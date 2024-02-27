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
      backgroundColor: {
        modal: "rgba(18, 18, 20, 0.5)",
      },
      width: {
        768: "48rem",
      },
      height: {
        26: "6.25rem",
        350: "21.875rem",
        400: "25rem",
        500: "31.25rem",
        550: "34.375rem",
      },
      minHeight: {
        "80-vh": "80vh",
      },
      maxHeight: { 400: "25rem", 600: "37.5rem", 700: "43.75rem" },
      maxWidth: {
        90: "21.875rem",
        400: "25rem",
        500: "31.25rem",
        700: "43.75rem",
        768: "48rem",
        1380: "86.25rem",
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
