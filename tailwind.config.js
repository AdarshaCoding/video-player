/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      sans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ],
      inconsolata: ["Inconsolata", "monospace"], // Add inconsolata font
      inter: ["Inter", "sans-serif"], // Add Inter font
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "dim", "night"],
  },
  plugins: [require("daisyui")],
};
