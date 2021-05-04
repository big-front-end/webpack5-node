const { merge } = require('webpack-merge')
const TersetWebpackPlugin = require('terser-webpack-plugin')
const baseWebpackConfig = require('./webpack.config.base')

const webpackConfig = merge(baseWebpackConfig, {
    devtool: 'eval-cheap-source-map',
    mode: 'production',
    stats: { children: false },

    // 优化配置
    optimization: {
        // 压缩配置
        minimize: true,
        minimizer: [new TersetWebpackPlugin()],

        // 分块策略
        splitChunks: {
            // 缓存组 https://webpack.docschina.org/plugins/split-chunks-plugin/#splitchunkscachegroups
            cacheGroups: {
                commens: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 3,
                    enforce: true
                }
            }
        }
    }
})

module.exports = webpackConfig
