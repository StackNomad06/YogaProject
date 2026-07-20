/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1B4332',
          50: '#E8F2ED',
          100: '#D1E5DB',
          200: '#A3CBB7',
          300: '#75B193',
          400: '#47976F',
          500: '#2C6B4C',
          600: '#1B4332',
          700: '#143627',
          800: '#0D291C',
          900: '#071C11',
        },
        sage: {
          DEFAULT: '#95D5B2',
          light: '#C4E9D6',
          dark: '#6BBE93',
        },
        beige: {
          DEFAULT: '#F8F5F0',
          dark: '#EFE9DF',
        },
        gold: {
          DEFAULT: '#D4A373',
          light: '#E5C29B',
          dark: '#B9834F',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.5rem',
        xl3: '2rem',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(27, 67, 50, 0.15)',
        softer: '0 4px 20px -4px rgba(27, 67, 50, 0.1)',
        gold: '0 10px 30px -8px rgba(212, 163, 115, 0.35)',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.35)', opacity: '1' },
        },
        breatheRing: {
          '0%, 100%': { transform: 'scale(0.9)', opacity: '0.4' },
          '50%': { transform: 'scale(1.5)', opacity: '0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        breathe: 'breathe 7s ease-in-out infinite',
        breatheRing: 'breatheRing 7s ease-in-out infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
