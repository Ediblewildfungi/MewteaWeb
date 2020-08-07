const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const app = new Koa()

const staticPath = './dist'

app.use(static(
  path.join(__dirname, staticPath)
))


app.use(async ctx => {
  ctx.body = 'hw'
})

app.listen(8080)