/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#12211f',
        ink: '#1e2c29',
        teal: '#2f6f63',
        moss: '#789086',
        mist: '#eef3f1',
        stone: '#f6f7f6',
        line: '#dbe3df',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(18, 33, 31, 0.12)',
      },
    },
  },
  plugins: [],
};
