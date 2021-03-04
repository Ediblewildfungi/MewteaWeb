const Router = require('@koa/router')

const macroController = require('../controllers/macro')

const router = new Router({
    prefix: '/macro',
  })

// 获取宏
router.get('/read', macroController.read)

// 写入宏
router.get('/write', macroController.write)

module.exports = router