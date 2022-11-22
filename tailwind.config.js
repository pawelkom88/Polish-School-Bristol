/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-clr': 'var(--bg-clr)',
        'btn1-clr': 'var(--btn1-clr)',
        'btn2-clr': 'var(--btn2-clr)',
      },
    },
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
}
