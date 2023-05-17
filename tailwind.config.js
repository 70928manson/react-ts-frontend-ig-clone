module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        widthChange: {
          '0%': {width: '0%'},
          '100%': {width: '100%'},
        }
      },
      animation: {
        widthChange: 'widthChange 5s linear 1'
      }
    },
  },
  plugins: [],
}