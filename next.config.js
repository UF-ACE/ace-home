const sass = require('@zeit/next-sass')
const css = require('@zeit/next-css')
const purgeCss = require('next-purgecss')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const fonts = require('next-fonts');

module.exports = withPlugins(
  [
    [sass],
    [purgeCss],
    [css],
    [optimizedImages, {
      handleImages: ['jpeg', 'png'],
      optimizeImages: true
    }],
    [fonts],
  ],
  {
    compress: true,
    target: 'server',
    exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
    }
  }
)
