module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      black: '#000',
      white: '#fff',

      gray: {
        100: '#F5F5F5',
        200: '#E7E7E7',
        300: '#D8D8D8',
        400: '#BBBBBB',
        500: '#9E9E9E',
        600: '#8E8E8E',
        700: '#5F5F5F',
        800: '#474747',
        900: '#2F2F2F',
      },

      green: {
        500: '#8bc34a',
        700: '#558b2f',
      },

      secondary: '#E9DCC9',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontSize: {
      12: ['0.75rem', '1rem'],
      14: ['0.875rem', '1rem'],
      16: ['1rem', '1.25rem'],
      18: ['1.125rem', '1.5rem'],
      20: ['1.25rem', '1.5rem'],
      24: ['1.5rem', '1.75rem'],
      26: ['1.625rem', '1.75rem'],
      28: ['1.75rem', '2.125rem'],
      34: ['2.125rem', '2.5rem'],
    },
    extend: {
      borderWidth: {
        '3': '3px',
      },
      inset: {
        '1/2': '50%',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'visited'],
  },
  plugins: [],
};
