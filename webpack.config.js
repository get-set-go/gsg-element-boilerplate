'use strict';

var config = {
  entry: './src/index.js',

  output: {
    path: './dist/',
    filename: 'index.min.js'
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0', 'stage-1']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }]
  },

  postcss: function() {
    return [require('autoprefixer'), require('precss')];
  }
};

module.exports = config;
