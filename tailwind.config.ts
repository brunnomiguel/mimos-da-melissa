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
      },
      boxShadow: {
        "3xl": "0px 6px 9px 1px rgba(191, 38, 38, 0.25)",
      },
      borderColor: {
        focus: "#1a13e681",
        error: "#dc1637",
        default: "#451E12",
        filled: "#3FE864",
      },
      textColor: {
        "filled-color": "#3FE864",
        "error-color": "#dc1637",
        "default-color": "#451E12",
      },
      colors: {
        text_color: "#451E12",
        "price-color": "#F10C5F",
        bg_main_color: "#F8E6F3",
        bg_form_color: "#F1EEEE",
        "bb-color": "rgba(241, 12, 95, 0.25)",
      },
      backgroundImage: {
        "banner-forms": "url('/images/banners/sign-in.png')",
      },
      dropShadow: {
        "input-style": "0px 4px 2px rgba(0, 0, 0, 0.40)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
