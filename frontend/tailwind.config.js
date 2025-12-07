// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#FFF9F0',
          100: '#FFF2E0',
          200: '#FFE0B3',
          300: '#FFCE86',
          400: '#FFBB59',
          500: '#FF9933', // Primary saffron
          600: '#E68A2E',
          700: '#CC7A29',
          800: '#B36B24',
          900: '#995C1F',
        },
        pheran: {
          500: '#B4161B', // Kashmiri red
        },
        shikara: {
          500: '#1E3A8A', // Dal Lake blue
        },
        chinar: {
          500: '#15803D', // Autumn green
        },
        snow: {
          500: '#FFFFFF',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'Inter', 'sans-serif'],
        'urdu': ['Noto Nastaliq Urdu', 'serif']
      },
      backgroundImage: {
        'kashmir-pattern': "url('/src/assets/pattern.svg')",
        'gradient-saffron': 'linear-gradient(135deg, #FF9933 0%, #B4161B 100%)',
        'gradient-mountain': 'linear-gradient(135deg, #1E3A8A 0%, #15803D 100%)',
      }
    },
  },
  plugins: [],
}
