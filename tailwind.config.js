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

			DARK: "#222222",
			HIGHLIGHT: "#d2601a",
			LIGHT: "#fff1e1",
		},
		extend: {
			animation: {
				fade: 'fadeOut 10s ease-in-out forwards',
				moveDown: 'moveDown 5s infinite linear',
				moveRight: 'moveRight 5s infinite linear',
			},

			keyframes: {
				fadeOut: {
					'0%': { opacity: 1 },
					'100%': { opacity: 0, visibilty: 'hidden' },
				},
				moveDown: {
					'0%': {transform: 'translateY(0vh)', opacity: 0},
					'8%': {transform: 'translateY(8vh)', opacity: 0},
					'50%': {transform: 'translateY(50vh)', opacity: 1},
					'100%': { transform: 'translateY(100vh)', opacity: 0 },
				},
				moveRight: {
					'0%': {transform: 'translateX(0vw)', opacity: 0},
					'50%': {transform: 'translateX(30vw)', opacity: 1},
					'100%': { transform: 'translateX(60vw)', opacity: 0 },
				}
			}
			
		},
	},
	plugins: [],
};
