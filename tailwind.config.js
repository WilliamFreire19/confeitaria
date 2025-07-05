/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        'serif': ['Dancing Script', 'cursive'],
      },
      colors: {
        primary: {
          50: '#F9F5F3',
          100: '#F5EFE6',
          200: '#E8D5CC',
          300: '#DBBAB2',
          400: '#CE9F98',
          500: '#8D6E63',
          600: '#5D4037',
          700: '#4E342E',
          800: '#3E2723',
          900: '#2E1A16',
        },
        accent: {
          50: '#FDF2F2',
          100: '#F9E5E5',
          200: '#F0CCCC',
          300: '#E8C5C5',
          400: '#E0B2B2',
          500: '#D89999',
          600: '#D08080',
          700: '#C86666',
          800: '#C04D4D',
          900: '#B83333',
        },
        warm: {
          50: '#FEFCFB',
          100: '#FDF9F7',
          200: '#FBF2EF',
          300: '#F9ECE7',
          400: '#F7E5DF',
          500: '#F5EFE6',
          600: '#F3D9CE',
          700: '#F1C3B6',
          800: '#EFAD9E',
          900: '#ED9786',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
};