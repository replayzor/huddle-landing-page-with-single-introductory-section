/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					violet: "hsl(257, 40%, 49%)",
					softMagenta: "hsl(300, 69%, 71%)",
				},
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				openSans: ["Open Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
