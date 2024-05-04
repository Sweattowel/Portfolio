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
		extend: {
			animation: {
				fade: 'fadeOut 10s ease-in-out forwards',
				slider: 'slider 1s linear infinite forwards',
				moveDown: 'moveDown 5s infinite linear',
			},

			keyframes: {
				fadeOut: {
					'0%': { opacity: 1 },
					'10%': { opacity: 0.9 },
					'20%': { opacity: 0.8 },
					'30%': { opacity: 0.7 },
					'40%': { opacity: 0.6 },
					'50%': { opacity: 0.5 },
					'60%': { opacity: 0.4 },
					'70%': { opacity: 0.2 },
					'80%': { opacity: 0.1 },
					'90%': { opacity: 0 },
					'100%': { opacity: 0, zIndex: -20 },
				},
				'slider': {
					'0%': { background: 'linear-gradient(to right, #000 0%, #fff 2%, #000 2%)' },
					'1%': { background: 'linear-gradient(to right, #000 1%, #fff 4%, #000 4%)' },
					'2%': { background: 'linear-gradient(to right, #000 2%, #fff 6%, #000 6%)' },
					'4%': { background: 'linear-gradient(to right, #000 3%, #fff 8%, #000 8%)' },
					'5%': { background: 'linear-gradient(to right, #000 5%, #fff 10%, #000 15%)' },
					'10%': { background: 'linear-gradient(to right, #000 10%, #fff 15%, #000 20%)' },
					'15%': { background: 'linear-gradient(to right, #000 15%, #fff 20%, #000 25%)' },
					'20%': { background: 'linear-gradient(to right, #000 20%, #fff 25%, #000 30%)' },
					'25%': { background: 'linear-gradient(to right, #000 25%, #fff 30%, #000 35%)' },
					'30%': { background: 'linear-gradient(to right, #000 30%, #fff 35%, #000 40%)' },
					'35%': { background: 'linear-gradient(to right, #000 35%, #fff 40%, #000 45%)' },
					'40%': { background: 'linear-gradient(to right, #000 40%, #fff 45%, #000 50%)' },
					'45%': { background: 'linear-gradient(to right, #000 45%, #fff 50%, #000 55%)' },
					'50%': { background: 'linear-gradient(to right, #000 50%, #fff 55%, #000 60%)' },
					'55%': { background: 'linear-gradient(to right, #000 55%, #fff 60%, #000 65%)' },
					'60%': { background: 'linear-gradient(to right, #000 60%, #fff 65%, #000 70%)' },
					'65%': { background: 'linear-gradient(to right, #000 65%, #fff 70%, #000 75%)' },
					'70%': { background: 'linear-gradient(to right, #000 70%, #fff 75%, #000 80%)' },
					'75%': { background: 'linear-gradient(to right, #000 75%, #fff 80%, #000 85%)' },
					'80%': { background: 'linear-gradient(to right, #000 80%, #fff 85%, #000 90%)' },
					'85%': { background: 'linear-gradient(to right, #000 85%, #fff 80%, #000 95%)' },
					'90%': { background: 'linear-gradient(to right, #000 90%, #fff 85%, #000 100%)' },
					'95%': { background: 'linear-gradient(to right, #000 95%, #fff 90%, #000 100%)' },
					'100%': { background: 'linear-gradient(to right, #000 100%, #fff 100%, #000 100%)' },
				},
				moveDown: {
					'0%': {transform: 'translateY(0)', opacity: 0},
					'100%': { transform: 'translateY(100vh)', opacity: 1 },
				}
			}
			
		},
	},
	plugins: [],
};
