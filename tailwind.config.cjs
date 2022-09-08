/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			'light',
			'dark',
			'synthwave',
			'retro',
			'cyberpunk',
			'valentine',
			'halloween',
			'forest',
			'aqua',
			'wireframe',
			'black',
			'luxury',
			'dracula',
			'night',
			'coffee',
		],
	},
};
