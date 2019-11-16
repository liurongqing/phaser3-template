'use strict'

const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const env = process.env.NODE_ENV || 'development'
const { resolve } = path

const config = {
  mode: env,
  devtool: false,
  entry: {
    phaser: resolve('./build/phaser.full.js')
  },
  resolve: {
    alias: {
      eventemitter3: resolve('./node_modules/eventemitter3')
    },
    modules: ['node_modules/phaser/src']
  },
  output: {
    path: resolve('./public/'),
    filename: '[name].js',
    library: 'Phaser',
    libraryTarget: 'umd',
    sourceMapFilename: '[file].map',
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]',
    devtoolFallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[hash]',
    umdNamedDefine: true
  },
  performance: { hints: false },
  plugins: [
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true),
      'typeof EXPERIMENTAL': JSON.stringify(false),
      'typeof PLUGIN_CAMERA3D': JSON.stringify(false),
      'typeof PLUGIN_FBINSTANT': JSON.stringify(false)
    })
  ]
}

if (env === 'production') {
  config.optimization = {
    minimizer: [
      new UglifyJSPlugin({
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
          compress: true,
          ie8: false,
          ecma: 5,
          output: { comments: false },
          warnings: false
        },
        warningsFilter: () => false
      })
    ]
  }
}

module.exports = config
