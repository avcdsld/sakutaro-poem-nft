/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}',"./src/components/**/*.tsx","./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      "2xs": "0.5em",
    },
  },
  plugins: [],
};
