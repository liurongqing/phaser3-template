const path = require('path')
const { resolve } = path

const config = {
  entry: './src/main.ts',
  output: {
    path: resolve('./docs'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          name: 'libs'
        },
        phaser: {
          test: /phaser\.js/,
          name: 'phaser',
          priority: 1
        }
      }
    }
  },

  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '~': resolve('./src')
    }
  }
}

module.exports = config
