
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        primary: '#00dfff',
        accent: '#bf00ff',
        'black-200': '#1a1a1a',
        'black-300': '#0d0d0d',
        'black-500': '#000000',
        'black-600': '#000000',
        'white-500': '#f5f5f5',
        'white-600': '#e5e5e5',
        'white-800': '#cccccc',
      },
      boxShadow: {
        'black-200': '0 4px 6px rgba(26,26,26,0.4)',
        'black-500': '0 4px 6px rgba(0,0,0,0.5)',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.4)', opacity: '0' },
        },
        'gradientShift': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 1.8s infinite',
        'gradientShift': 'gradientShift 15s ease infinite',
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [],
};


