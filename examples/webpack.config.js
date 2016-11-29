'use strict';

var webpack = require('webpack');

var config = {
  entry: './index.js',

  output: {
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
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = config;
