/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        analytikaBlack: "#181818",
        analytikaYellow: "#F5EC4D",
        analytikaGreen: "#319E47",
        analytikaCream: "#F7F1E5",
      },
    },
  },
  plugins: [],
};
