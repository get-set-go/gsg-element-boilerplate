'use strict';

var webpack = require('webpack');
var product = require('./package.json');

var banner = product.name + " v" + product.version;
banner += "\nDeveloped & maintained by " + product.author + " and contributors."
banner += "\nMIT Licensed"

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
    }, {
      test: /\.json$/,
      loader: 'json-loader'
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

    new webpack.optimize.UglifyJsPlugin(),

    new webpack.BannerPlugin(banner)
  ]
};

module.exports = config;
