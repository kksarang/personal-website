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
        enitexa: {
          bg: '#07080c',
          card: '#11141c',
          ink: '#f2f1ed',
          accent: '#9eb0ff',
          glow: '#7d96ff',
        },
      },
      backgroundImage: {
        'enitexa-gradient': 'linear-gradient(135deg, #7d96ff, #a8b8ff)',
        'enitexa-gradient-h': 'linear-gradient(90deg, #7d96ff, #c5cee8)',
      },
      boxShadow: {
        'enitexa-glow': '0 0 24px rgba(125, 150, 255, 0.28)',
        'enitexa-glow-lg': '0 0 48px rgba(125, 150, 255, 0.18)',
        'cyan-glow': '0 0 24px rgba(125, 150, 255, 0.16)',
      },
    },
  },
  plugins: [],
}

