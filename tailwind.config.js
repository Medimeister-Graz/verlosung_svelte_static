/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('src/lib/img/bg.jpg')"
			}
		}
	},
	plugins: []
};
