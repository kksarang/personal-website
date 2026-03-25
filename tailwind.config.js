/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        hexenity: {
          bg: '#0B0F19',
          card: '#111827',
          glow: '#22D3EE',
        },
      },
      backgroundImage: {
        'hexenity-gradient': 'linear-gradient(135deg, #4F46E5, #9333EA)',
        'hexenity-gradient-h': 'linear-gradient(90deg, #4F46E5, #9333EA)',
      },
      boxShadow: {
        'hexenity-glow': '0 0 20px rgba(79, 70, 229, 0.6)',
        'hexenity-glow-lg': '0 0 40px rgba(79, 70, 229, 0.35)',
        'cyan-glow': '0 0 24px rgba(34, 211, 238, 0.25)',
      },
    },
  },
  plugins: [],
}

