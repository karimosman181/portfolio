const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Press_Start_2P: [`var(--font-Press-Start-2P)`, ...fontFamily.sans],
        Gugi: [`var(--font-Gugi)`, ...fontFamily.sans],
      },
      backgroundImage: {
        cicularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);",
        cicularDark:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #1b1b1b 5px, #1b1b1b 100px);",
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#12ed7a", // 80,230,217
        textCode: "#756d6d",
      },
    },
  },
  plugins: [],
};
