const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {

    // 生产环境
    mode: 'production',
})