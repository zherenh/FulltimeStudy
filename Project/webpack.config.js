//默认名字
//配置信息
const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    entry: "./src/index/ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        environment: {
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        option: {
                            presets: [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        "chrome": "87"
                                    },
                                    "corejs": "3",
                                    "useBuiltIns": "usage"
                                }
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /node-modules/
            },
            // for less
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    "postcss-preset-env",
                                    {
                                       browsers:'last 2 versions' 
                                    }
                                ]
                            }
                        }
                    },
                    "less-loader" //放后面的会先执行
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: "这是一个自定义title"
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}