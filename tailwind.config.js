/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainGreen: "#5CDB95",
        secGreen: "#7cebae",
        cardRed: "#CB534F",
        cardBlue: "#4FAED9",
        cardGreen: "#53A586",
      },
    },
  },
  plugins: [],
};
