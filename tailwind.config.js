/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    purge: ['./**/*.{html,js,jsx}'],
    safelist: ['primary-clr', 'btn1-clr', 'btn2-clr', 'bg1-clr', 'bg2-clr'],

    extend: {
      colors: {
        'primary-clr': 'var(--bg-clr)',
        'btn1-clr': 'var(--btn1-clr)',
        'btn2-clr': 'var(--btn2-clr)',
        'bg1-clr': 'var(--bg1-clr)',
        'bg2-clr': 'var(--bg2-clr)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
};
