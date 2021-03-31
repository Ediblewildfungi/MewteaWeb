const path = require('path')
const config = require("../../../config")
const connectMysql = require('./dbConnection/connectMysql')

module.exports = {
    read: async (ctx, next) => {
        try {

            //数据库指令 sqlQuery
            var sqlQuery = "SELECT * FROM macro"
            const res = await connectMysql.connectMysql("xxx", sqlQuery)
            ctx.sendOk({ res })
            
        } catch (e) {

            // error
            console.log(e)
            ctx.sendError('数据喵抛出了一个异常，请稍后重试！')
        }
        return next()
    },
    write: async (ctx, next) => {

        //要求传入的数据 title , macro 
        var send = {
            voiceID: 2,
            token: "tokenA",
        }
        ctx.sendOk(send)
    },
}

