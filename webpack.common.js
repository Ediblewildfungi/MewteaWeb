const path = require('path')
const { VueLoaderPlugin } = require("vue-loader")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    //入口
    entry: {

        "index": './src/vue/index.js',
        //指定"voice/"可以输出到vioce目录
        "voice/": './src/vue/voice.js',
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|pdf)$/i,

                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8048,
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2|otf)$/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [



        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                title: 'Mewtea - 喵茶',
                favicon: './favicon.png',
                inject: true,
                filename: 'index.html',
                chunks: ['index'],
            }

        ),
        new HtmlWebpackPlugin(
            {
                title: 'Moe Voice',
                favicon: './favicon.png',
                inject: true,
                filename: 'voice/index.html',
                chunks: ['voice/'],
            }

        ),
    ],

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    //输出
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]mew.[chunkhash:8].js'
    }



}

