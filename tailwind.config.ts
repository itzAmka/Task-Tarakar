import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
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
}
