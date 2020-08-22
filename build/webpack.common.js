const path = require('path')
const { resolve } = path
const config = {
  entry: './src/main.ts',
  output: {
    path: resolve('./docs'),
    filename: 'game.js'
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'babel-loader' }]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '~': resolve('./src')
    }
  }
}

module.exports = config
