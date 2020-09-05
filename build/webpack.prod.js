const { merge } = require('webpack-merge')
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(common, {
  mode: 'production',
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
