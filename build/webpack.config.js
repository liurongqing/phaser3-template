const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

module.exports = (env, argv) => {
  const config = argv.mode === 'development' ? devConfig : prodConfig
  return merge(baseConfig, config)
}
