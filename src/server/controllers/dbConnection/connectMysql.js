/**
 * 连接 MySQL 数据库
 * @param tableName 表名称
 * @param sqlQuery 查询指令
 */

const mysql = require('mysql')

// 引入配置文件
const config = require("../../../../config")
const database = config.database.mysql




module.exports = {

    connectMysql(tableName, sqlQuery) {

        return new Promise(function (resolve, reject) {

            // 连接参数
            var connection = mysql.createConnection({
                host: database.host,
                user: database.user,
                password: database.password,
                port: database.port,
                database: database.database,
                // insecureAuth : database.insecureAuth,
            })

            //数据库指令 sqlQuery
            // var sql = 'SELECT * FROM ' + tableName
            var sql = sqlQuery

            // 连接数据库 connectSQL
            connection.connect()

            //查询数据库 get result
            connection.query(sql, function (err, result) {
                if (err) {
                    console.log('[SELECT ERROR] - ', err.message)
                    reject(err)
                    return
                }
                // console.log(result)
                connection.end()
                resolve(result)
            })

        })
    }
}

