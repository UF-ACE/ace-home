const sass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withFonts = require('next-fonts');

module.exports = withPlugins(
  [
    [sass, {}],
    [optimizedImages, {}],
    [withFonts, {}],
  ],
  {
    compress: true,
    target: 'server',
    generateBuildId: async () => {
      return 'deploy'
    }
  }
)
