/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				'primary-black': '#202223',
        'primary': '#024D94',
        'accent': '#F8D171'
			},
		},
  },
  plugins: [],
}

