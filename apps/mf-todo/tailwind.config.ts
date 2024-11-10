import { vars } from "@xionwcfm/token";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: vars.colors,
    borderRadius: vars.borderRadius,
    spacing: vars.spacing,
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    lineHeight: vars.lineHeight,
    boxShadow: vars.boxShadow,
    extend: {
      keyframes: {
        ...vars.keyframes,
      },
      animation: {
        ...vars.animation,
      },
      screens: vars.screens,
    },
  },
  plugins: [],
};
