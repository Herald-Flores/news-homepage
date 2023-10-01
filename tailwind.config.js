const defaultTheme = require('tailwindcss/defaultTheme') // eslint-disable-line
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		spacing: {
			1: '8px',
			2: '12px',
			3: '16px',
			4: '24px',
			5: '32px',
			6: '48px'
		},
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: colors.white,
				black: colors.black,
				gray: colors.slate,
				primary: 'hsl(35, 77%, 62%)',
				secondary: 'hsl(5, 85%, 63%)',
				'neutral-white': 'hsl(36, 100%, 99%)',
				'neutral-grayish': 'hsl(233, 8%, 79%)',
				'neutral-dark-grayish': 'hsl(236, 13%, 42%)',
				'neutral-dark': 'hsl(240, 100%, 5%)'
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			},
			screens: {
				xs: '375px',
				sm: '480px',
				md: '768px',
				lg: '976px',
				xl: '1300px',
				'2xl': '1440px'
			}
		}
	},
	plugins: []
}
