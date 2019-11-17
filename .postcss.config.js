module.exports = {
  plugins: {
    'postcss-uncss': {
      html: ['out/**/*.html'],
      htmlroot: 'out/'
    },
    'postcss-clean': {}
  }
}
