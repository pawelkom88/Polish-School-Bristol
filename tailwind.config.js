/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    purge: ['./**/*.{html,js,jsx}'],
    safelist: ['primary-clr', 'btn1-clr', 'btn2-clr', 'bg1-clr', 'bg2-clr'],
    backgroundPosition: {
      'bottom-4': 'left 7rem bottom',
    },

    extend: {
      colors: {
        'primary-clr': 'var(--bg-clr)',
        'btn1-clr': 'var(--btn1-clr)',
        'btn2-clr': 'var(--btn2-clr)',
        'bg1-clr': 'var(--bg1-clr)',
        'bg2-clr': 'var(--bg2-clr)',
        'red-clr': 'var(--red-clr)',
        'text-clr': 'var(--text-clr)',
        'orange-clr': 'var(--orange-clr)',
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
