import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f0ed",
          100: "#e8ded8",
          200: "#d9c7bb",
          300: "#c7ab9a",
          400: "#a88372",
          500: "#64473e",
          600: "#5a4037",
          700: "#4a3429",
          800: "#3a251f",
          900: "#2a1a14",
        },
        accent: {
          50: "#fdf7f1",
          100: "#faecd8",
          200: "#f5d5a8",
          300: "#f0be7a",
          400: "#eca853",
          500: "#a56921",
          600: "#945c1b",
          700: "#794f15",
          800: "#6d4710",
          900: "#5a3a0a",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
