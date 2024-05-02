/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./src/**/*.html",
		"./src/**/*.js",
		"./src/**/*.jsx",
		"./src/**/*.ts",
		"./src/**/*.tsx",
	],
	theme: {
		colors: {
			BLACK: "#000000",
			WHITE: "#ffffff",

			DARKo: "#000080",
			HIGHLIGHTo: "#B3001B",
			LIGHTo: "#D6E3F8",

			DARKb: "#FC766AF0",
			HIGHLIGHTb: "#BOB8B4FF",
			LIGHTb: "#184A45FF",

			DARKa: "#DB222A",
			HIGHLIGHTa: "#00FFFF",
			LIGHTa: "#DBCDC6",

			DARK: "#1d3c45",
			HIGHLIGHT: "#d2601a",
			LIGHT: "#fff1e1",
		},
		extend: {},
	},
	plugins: [],
};
