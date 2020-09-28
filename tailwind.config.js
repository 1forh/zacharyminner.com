const mdx = require('@mdx-js/mdx');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    layers: ['utilities'],
    content: ['./src/**/*.{js,mdx}'],
    options: {
      extractors: [
        {
          extensions: ['mdx'],
          extractor: (content) => {
            content = mdx.sync(content);

            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches = content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) || [];

            return broadMatches.concat(innerMatches);
          },
        },
      ],
    },
  },
  theme: {
    typography: {
      default: {
        css: {
          color: '#2F2F2F',
          a: {
            color: '#3182ce',
            '&:hover': {
              color: '#2c5282',
            },
          },
          'ol > li::before': {
            color: '#5F5F5F',
          },
          'ul > li::before': {
            backgroundColor: '#5F5F5F',
          },
        },
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
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
          50: '#F9FCF6',
          100: '#F3F9ED',
          200: '#E2F0D2',
          300: '#D1E7B7',
          400: '#AED580',
          500: '#8BC34A',
          600: '#7DB043',
          700: '#53752C',
          800: '#3F5821',
          900: '#2A3B16',
        },

        secondary: '#E9DCC9',

        vue: '#42b983',
        unity: '#000000',
        javscript: '#F6DE3B',
        nuxt: '#00c58e',
        drupal: '#32AADE',
        firebase: '#F38227',
      },
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
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/ui')],
};
