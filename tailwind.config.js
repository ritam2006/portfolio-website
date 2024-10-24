/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#9614d0',
        secondary: '#11001c',
        instagram: '#e1306c',
        linkedin: '#0077b5',
        github: '#24292e',
        berkeley_blue: '#002676',
        cali_gold: '#fdb515'
      },
      spacing: {
        '128': '32rem',
        '256': '64rem',
        '512': '128rem'
      },
      keyframes: {
        'animate-rain': {
          '0%': {transform: 'translateY(-200px)'},
          '100%': {transform: 'translateY(100vh)'}
        }
      },
      animation: {
        'animate-rain': 'animate-rain 5s linear'
      }
    },
  },
  plugins: [],
}

