/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        coolvetica: ["Coolvetica", "sans"],
      },
      colors: {
        analytikaBlack: "#181818",
        analytikaBlue: "#36b6ff",
        analytikaPurple: "#870ee5",
        analytikaWhite: "#F7F1E5",
      },
    },
  },
  plugins: [],
});
