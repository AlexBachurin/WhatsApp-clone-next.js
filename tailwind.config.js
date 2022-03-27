module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      mainBg: '#dadbd3',
      appBg: '#ebebeb',
      testColor: '#008080',
      searchBg: '#f6f6f6',
      white: '#fff'
    },
    boxShadow: {
      mainShadow: '-1px 4px 20px -6px rgba(0,0,0,0.2)'
    }
  },
  plugins: [],
}
