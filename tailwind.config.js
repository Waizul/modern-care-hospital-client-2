module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        'screen-1/2' : '50vw',
        '-screen-1/2' : '-50vw',
        'screen-2/3' : '75vw',
      },
      height: {
        'screen-1/2' : '50vh',
        'screen-2/3' : '75vh',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT : '.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem'
      },
    },
  },
  plugins: [],
}
