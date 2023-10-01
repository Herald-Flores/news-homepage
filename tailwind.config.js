const defaultTheme = require('tailwindcss/defaultTheme') // eslint-disable-line
/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xs: '375px',
				sm: '480px',
				md: '768px',
				lg: '976px',
				xl: '1440px'
			}
		}
	},
	plugins: []
}
