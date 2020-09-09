const path = require('path')
const { resolve } = path
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/main.ts',
  output: {
    path: resolve('./docs'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '~': resolve('./src')
    }
  }
}

module.exports = config
