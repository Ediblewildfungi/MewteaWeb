const path = require('path')
const Koa = require('koa')
const Static = require('koa-static')
const Router = require('koa-router')
const koaFavicon = require('koa-favicon');
const koaJson = require('koa-json')
const responseCz = require('./middleware/responsecz')
const config = require("../../config")

// 跨域
const cors = require('@koa/cors');

const Voice = require('./routes/voice')
const Macro = require('./routes/macro')
const PORT = config.server.PORT

const app = new Koa()

// 跨域
app.use(cors());

const router = new Router()

const staticPath = '../../dist'


//koa-static
const opt = {
    hidden: true,
}
app.use(Static(
    path.join(__dirname, staticPath),opt


))

app.use(koaFavicon('./favicon.png'))
app.use(responseCz())
app.use(koaJson())

app.use(async (ctx, next) => {
    ctx.sendOk({
        message: '妹抖酱正在打扫庭院。',
    })
    return next()
})







router.use('/api/v1', Voice.routes(), Macro.routes(), router.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())




app.listen(PORT)