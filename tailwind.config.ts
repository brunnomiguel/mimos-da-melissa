import { nextui } from "@nextui-org/react";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "h-500": "500px",
        "screen-90": "90vh",
        "screen-85": "85vh",
      },
      boxShadow: {
        "3xl": "0px 6px 9px 1px rgba(191, 38, 38, 0.25)",
      },
      textColor: {
        "filled-color": "#3FE864",
        "focus-color": "#0d08a3",
        "error-color": "#dc1637",
        "default-color": "#451E12",
      },
      colors: {
        text_color: "#451E12",
        "price-color": "#F10C5F",
        bg_main_color: "#F8E6F3",
        bg_form_color: "#F2F2F2",
        "bb-color": "rgba(241, 12, 95, 0.25)",
      },
      backgroundColor: {
        banner: "#FBEBEC",
      },
      backgroundImage: {
        "banner-forms": "url('/images/banners/sign-in.png')",
      },
      dropShadow: {
        "input-default": "0px 4px 2px rgba(69, 30, 18, 0.40)",
        "input-filled": "0px 4px 2px rgb(11, 165, 44, 0.40)",
        "input-error": "0px 4px 2px rgb(241, 12, 95, 0.40)",
        "input-focus": "0px 4px 2px rgba(13, 8, 163, 0.40)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
