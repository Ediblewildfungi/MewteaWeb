const fetch = require('node-fetch')
const path = require('path')
const config = require("../../../config")
const TokenBuilder = require('./rtc/RtcTokenBuilder').RtcTokenBuilder
const RtcRole = require('./rtc/RtcTokenBuilder').Role

module.exports = {
  fetch: async (ctx, next) => {
    try {


      //要求传入的数据 用户token、id

      const appID = config.key.voiceAppID
      const appCertificate = config.key.voiceAppCertificate
      const channelName = 'mewtea'
      // let account = "1034614154"
      let account = 1034614154
      const role = RtcRole.PUBLISHER
      const tokenExpirationTime = config.key.tokenExpirationTime
      const currentTimestamp = Math.floor(Date.now() / 1000)
      const privilegeExpiredTs = currentTimestamp + tokenExpirationTime

      let request = ctx.request
      account = request.query.account
      channel = request.query.channel

      //token 运算
      // const tokenB = TokenBuilder.buildTokenWithAccount(appID, appCertificate, channelName, account, role, privilegeExpiredTs)
      const tokenA = TokenBuilder.buildTokenWithUid(appID, appCertificate, channel, account, role, privilegeExpiredTs)
      

      
      
      
      // account = parseInt(account)


      var send = {

        channel,
        account,
        voiceID:appID,
        token:tokenA,
        
      }

      

      ctx.sendOk(send)

    } catch (e) {

      // error
      // ctx.logger.error(`语音喵抛出了一个异常`)
      ctx.sendError('语音喵抛出了一个异常，请稍后重试！')

    }
    return next()
  },
}

