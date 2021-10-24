module.exports = {
  purge: ['./src/**/*.{vue,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xl': {
            maxWidth: '1080px',
          },
          '@screen 2xl': {
            maxWidth: '1240px',
          },
        }
      })
    }
  ],
}
