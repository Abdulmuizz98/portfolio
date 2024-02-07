/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "380px",
      sm: "530px",
      md: "768px",
      lg: "976px",
      xl: "1400px",
    },
    colors: {
      white: "#E5E9F0",
      black: "#011221",
      blue: "#011627",
      cyan: "#4D5BCE",
      pink: "#ff49db",
      orange: "#FEA55F",
      green: "#43D9AD",
      red: "#E99287",
      "gray-dark": "#273444",
      gray: "#1E2D3D",
      "gray-light": "#607B96",
      dark: "#010C15",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Fira Code", "monospace"],
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
