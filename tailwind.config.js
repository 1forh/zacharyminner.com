const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'media',
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    cursor: {
      default: 'default',
      pointer: 'pointer',
      'not-allowed': 'not-allowed',
      move: 'move',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: colors.orange[500],
              '&:hover': {
                color: colors.orange[800],
              },
            },
          },
        },
      },
      colors: {
        gray: colors.gray,
        primary: colors.orange,
        secondary: colors.blue,
        skycatchfire: {
          primary: '#6A55A3',
        },
      },
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  purge: {
    layers: ['utilities'],
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'mixins/**/*.js', 'nuxt.config.js'],
  },
};
