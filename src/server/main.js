const path = require('path')
const Koa = require('koa')
const Static = require('koa-static')
const Router = require('koa-router')
const koaFavicon = require('koa-favicon');
const responseCz = require('./middleware/responsecz')
const config = require("../../config")



const Voice = require('./routes/voice')

const PORT = config.server.PORT

const app = new Koa()
const router = new Router()

const staticPath = '../../dist'


app.use(Static(
    path.join(__dirname, staticPath)

))

app.use(koaFavicon('./favicon.png'))
app.use(responseCz())

app.use(async (ctx, next) => {
    ctx.sendOk({
        message: '妹抖酱正在打扫庭院。',
    })
    return next()
})







router.use('/api/v1', Voice.routes(), router.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())




app.listen(PORT)