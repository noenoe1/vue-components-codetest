/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: "1600px",
    },

    colors: {
      white: '#fff',
      primary : {
        '05': '#FDF3E1',
        30: '#F7BA50',
        40: '#F5AB2B',
        80: '#DC5A00',
        90: '#C75100'
      },

      blue: {
        '00': '#F4FAFF',
        60: '#2C75DD'
      },

      red: {
        '00': '#FEF5F5',
        80: '#CC3123'
      },

      green: {
        '00': '#F8FFF2',
        80: '#008700'
      }
    },

    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
