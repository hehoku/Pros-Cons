module.exports = {
  plugins: [require('prettier-standard')],
  overrides: [
    {
      files: '**/*.{js,jsx,ts,tsx}',
      options: {
        singleQuote: true,
        semi: true,
        arrowParens: 'avoid',
      },
    },
  ],
}
