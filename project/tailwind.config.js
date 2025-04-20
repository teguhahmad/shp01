/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF2EE',
          100: '#FFE5DD',
          200: '#FFCBBC',
          300: '#FFA28A',
          400: '#FF7858',
          500: '#FF4D2D', // Shopee main orange
          600: '#EE4D2D', // Slightly darker
          700: '#D93C1F',
          800: '#BA2E12',
          900: '#96260E',
        },
        secondary: {
          50: '#EBF8FF',
          100: '#D1EFFF',
          200: '#A3DFFF',
          300: '#75CFFF',
          400: '#47BFFF',
          500: '#1A94FF', // Shopee blue
          600: '#0080FF',
          700: '#006FDF',
          800: '#0052A8',
          900: '#003C78',
        },
        success: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          700: '#047857',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          700: '#B45309',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',
          700: '#B91C1C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};