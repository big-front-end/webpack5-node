const { DefinePlugin } = require('webpack')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 打包编译为某一端侧的可使用代码  默认值：web  https://webpack.docschina.org/configuration/target/
    target: 'node',

    // 打包模式，可选择值：development、production
    // mode: "development",

    // 控制是否生成，以及如何生成 source map。 https://webpack.docschina.org/configuration/devtool/#root
    // devtool: "eval-cheap-source-map",

    // 打包模块入口文件
    entry: {
        server: `${process.cwd()}/src/app.js`
    },

    // 打包后的输入文件
    output: {
        filename: '[name].bundle.js',
        path: `${process.cwd()}/dist`
    },

    // 匹配解析规则
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: [`${process.cwd()}/node_modules`]
            }
        ]
    },

    // 构建过程中使用的插件
    plugins: [
        new CleanWebpackPlugin(),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(
                    process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod'
                        ? 'production'
                        : 'development'
                )
            }
        })
    ],

    // 防止第三方依赖被打包
    externals: [nodeExternals()]
}
