/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#9614d0',
        secondary: '#11001c',
        highlight: '#ff10f0',
        berkeley_blue: '#002676',
        cali_gold: '#fdb515',
      },
      spacing: {
        '128': '32rem',
        '256': '64rem',
        '512': '128rem'
      },
      keyframes: {
        rain: {
          '0%': {transform: 'translateY(-50px)'},
          '100%': {
            transform: 'translateY(calc(100vh + 50px))',
            opacity: '0',
          }
        },
        flicker: {
          '20%': {opacity: 1},
          '24%': {opacity: 0.5},
          '28%': {opacity: 1},
          '30%': {opacity: 0},
          '40%': {opacity: 0},
          '50%': {opacity: 1},
          '55%': {opacity: 1},
        }
      },
      animation: {
        'rain': 'rain 0.75s linear infinite',
        'flicker': 'flicker 3s infinite' 
      },
      boxShadow: {
        'primary': '0 0 4rem #9614d0',
        'highlight': '0 0 4rem #ff10f0',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

