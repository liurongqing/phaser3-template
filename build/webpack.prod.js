const { merge } = require('webpack-merge')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(common, {
  mode: 'production',
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
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{
        from: 'public',
        to: './'
      }]
    }),
    // new BundleAnalyzerPlugin()
  ],

})
