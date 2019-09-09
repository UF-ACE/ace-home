const sass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([
  [sass, {}],
  [optimizedImages, {}]
])
