const Router = require('@koa/router')
const router = new Router()

const voiceController = require('../controllers/voice')



router.get('/voice', voiceController.fetch)

module.exports = router