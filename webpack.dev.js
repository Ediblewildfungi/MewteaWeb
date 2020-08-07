const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {

    // 开发环境
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist/voice',
        // host:'0.0.0.0',
        overlay:{
            errors:true,
            
        }
    }
})