const defaultTheme = require("tailwindcss/defaultConfig");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#3b82f6",
      dash: {
        green: {
          DEFAULT: "#14B8A6",
          100: "#0D9488",
        },
        pink: {
          DEFAULT: "#EC4899",
          100: "#DB2777",
        },
        purple: {
          DEFAULT: "#A855F7",
          100: "#9333EA",
        },
        yellow: "#EAB308",
      },
      dark: {
        DEFAULT: "#2D3848",
        100: "#121212",
        200: "#0C0C0D",
      },
      light: {
        DEFAULT: "#F0F0F0",
        100: "#f3f4f6",
      },
    },
    extend: {},
  },
  plugins: [],
};
