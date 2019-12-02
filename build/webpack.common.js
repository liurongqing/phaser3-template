const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = path
const config = {
  entry: './src/index.ts',
  output: {
    path: resolve('./docs'),
    filename: 'game.js'
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'babel-loader' }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': resolve('./src')
    }
  }
}

module.exports = config
