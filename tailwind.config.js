const theme = require('tailwindcss/defaultTheme');

module.exports = {
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
    fontFamily: {
      body: ['Arial', 'sans-serif'],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fontSize: {
      12: ['0.75rem', '1.16'],
      14: ['0.875rem', '1.2'],
      16: ['1rem', '1.5'],
      18: ['1.125rem', '1.5'],
      20: ['1.25rem', '1.3'],
      24: ['1.5rem', '1.3'],
      32: ['2rem', '1.3'],
      36: ['2.25rem', '1.3'],
    },
    extend: {},
  },
  variants: {
    colors: {
      primary: { ...theme.colors.blue },
      secondary: { ...theme.colors.indigo },
    },
  },
  plugins: [require('@tailwindcss/ui')],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'mixins/**/*.js', 'nuxt.config.js'],
  },
};
