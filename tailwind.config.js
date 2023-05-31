/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"congo-brown": {
					50: "#fbf5f5",
					100: "#f6eaea",
					200: "#efd9d9",
					300: "#e4bdbd",
					400: "#d29797",
					500: "#bf7474",
					600: "#a95959",
					700: "#8d4848",
					800: "#763e3e",
					900: "#6a3c3c",
					950: "#351a1a",
				},
			},
		},
	},
	plugins: [],
};
