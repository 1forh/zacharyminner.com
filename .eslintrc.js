module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'es5',
        arrowParens: 'always',
        printWidth: 200,
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
