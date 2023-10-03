const defaultTheme = require('tailwindcss/defaultTheme') // eslint-disable-line
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		spacing: {
			px: '1px',
			0: '0',
			0.5: '0.125rem',
			1: '0.25rem',
			1.5: '0.375rem',
			2: '0.5rem',
			2.5: '0.625rem',
			3: '0.75rem',
			3.5: '0.875rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem',
			11: '2.75rem',
			12: '3rem',
			14: '3.5rem',
			16: '4rem',
			20: '5rem',
			24: '6rem',
			28: '7rem',
			32: '8rem',
			36: '9rem',
			40: '10rem',
			44: '11rem',
			48: '12rem',
			52: '13rem',
			56: '14rem',
			60: '15rem',
			64: '16rem',
			72: '18rem',
			80: '20rem',
			96: '24rem'
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
				xl: '1200px',
				'2xl': '1440px'
			},
			opacity: {
				0: '0',
				20: '0.2',
				40: '0.4',
				60: '0.6',
				80: '0.8',
				100: '1'
			}
		}
	},
	plugins: []
}
