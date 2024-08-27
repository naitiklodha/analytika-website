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
				analytikaYellow: "#3586FF",
				analytikaGreen: "#870EE6",
				analytikaWhite: "#F7F1E5",
				/**green refers to purple and yellow refers to blue */
			},
		},
	},
	plugins: [],
});
