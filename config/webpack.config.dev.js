const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')

const webpackConfig = merge(baseWebpackConfig, {
    devtool: 'eval-cheap-source-map',
    mode: 'development',

    // 是否添加关于子模块的信息。
    stats: { children: false }
})

module.exports = webpackConfig
