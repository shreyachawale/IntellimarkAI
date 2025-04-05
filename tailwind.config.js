/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  safelist: [
    'text-violet-600',
    'text-blue-600',
    'text-purple-600',
    'text-indigo-600',
  ],
};