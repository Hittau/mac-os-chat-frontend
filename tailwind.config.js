module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			lato: ['Lato', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				mountains: "url('./assets/background.jpg')",
			},
			colors: {
				ocean: '#3577ef',
				cobble: {},
			},
			listStyleType: {
				hash: '"#"',
			},
		},
	},
	plugins: [],
}
